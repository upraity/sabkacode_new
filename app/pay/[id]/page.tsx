
"use client";

import { useEffect, useState, type FormEvent } from "react";
import QRCode from "qrcode";

type Order = {
  id?: string;
  projectTitle: string;
  orderNumber: string;
  expectedAmount: number | string;
  upiId?: string;
};

type OrderResponse = {
  order?: Order | null;
  upiId?: string;
  upiName?: string;
  error?: string;
};

type PaymentForm = {
  name: string;
  email: string;
  phone: string;
  paidAmount: string;
  transactionId: string;
};

export default function Pay({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [order, setOrder] = useState<Order | null>(null);
  const [qr, setQr] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState<PaymentForm>({
    name: "",
    email: "",
    phone: "",
    paidAmount: "",
    transactionId: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function loadOrder() {
      setLoading(true);
      setError("");
      setOrder(null);
      setQr("");

      try {
        if (!id) {
          throw new Error("Order ID is missing from the URL.");
        }

        const response = await fetch(
          `/api/orders/${encodeURIComponent(id)}`,
          { cache: "no-store" }
        );

        const data: OrderResponse = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            data.error || `Unable to load order (HTTP ${response.status}).`
          );
        }

        if (!data.order) {
          throw new Error(data.error || "Order not found.");
        }

        const amount = Number(data.order.expectedAmount);

        if (!Number.isFinite(amount) || amount <= 0) {
          throw new Error("The order has an invalid payment amount.");
        }

        const upiId = data.upiId || data.order.upiId;
        const upiName = data.upiName;

        if (!upiId || !upiName) {
          throw new Error(
            "UPI details are missing. Please contact the website administrator."
          );
        }

        const upiUrl =
          `upi://pay?pa=${encodeURIComponent(upiId)}` +
          `&pn=${encodeURIComponent(upiName)}` +
          `&am=${amount.toFixed(2)}&cu=INR`;

        const qrData = await QRCode.toDataURL(upiUrl, {
          width: 300,
          margin: 2,
        });

        if (!cancelled) {
          setOrder(data.order);
          setQr(qrData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Something went wrong while loading the payment page."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadOrder();

    return () => {
      cancelled = true;
    };
  }, [id]);

  function updateField(field: keyof PaymentForm, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!file) {
      setError("Please select your payment screenshot.");
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Upload a JPG, PNG, WEBP or PDF file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("The payment proof must be 5 MB or smaller.");
      return;
    }

    const amount = Number(form.paidAmount);

    if (!Number.isFinite(amount) || amount <= 0) {
      setError("Please enter a valid amount paid.");
      return;
    }

    const transactionId = form.transactionId.trim();

    if (!transactionId) {
      setError("Please enter the transaction / UTR ID.");
      return;
    }

    const body = new FormData();

    Object.entries({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      paidAmount: form.paidAmount,
      transactionId,
    }).forEach(([key, value]) => {
      body.append(key, value);
    });

    body.append("proof", file);

    setSubmitting(true);
    setMessage("Submitting payment proof...");

    try {
      const response = await fetch(
        `/api/orders/${encodeURIComponent(id)}/submit-proof`,
        {
          method: "POST",
          body,
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || `Submission failed (HTTP ${response.status}).`
        );
      }

      setMessage(
        data.message ||
          "Payment proof submitted. Your payment will be verified before the download link is sent."
      );
      setFile(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit payment proof. Please try again."
      );
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="wrap">
        <div className="card">Loading payment details...</div>
      </main>
    );
  }

  if (error && !order) {
    return (
      <main className="wrap">
        <div className="card">
          <h1>Unable to load payment page</h1>
          <p role="alert">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="wrap">
        <div className="card">
          <p role="alert">Order details are unavailable.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="wrap">
      <div className="card">
        <h1>{order.projectTitle}</h1>

        <p>
          Order: <b>{order.orderNumber}</b>
        </p>

        <h2>Pay ₹{Number(order.expectedAmount).toFixed(2)}</h2>

        <div className="row">
          <div>
            {qr ? (
              <img src={qr} className="qr" alt="UPI payment QR code" />
            ) : (
              <p>QR code unavailable.</p>
            )}

            <p className="muted">
              UPI: {order.upiId || "Use the UPI ID configured for this order"}
            </p>
          </div>

          <div>
            <p>1. Scan the QR code using your UPI app.</p>
            <p>2. Pay the exact amount shown above.</p>
            <p>3. Save your UTR / transaction ID.</p>
            <p>4. Submit your payment details and proof below.</p>
          </div>
        </div>

        <form onSubmit={submit}>
          <label htmlFor="customer-name">Name</label>
          <input
            id="customer-name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
          />

          <label htmlFor="customer-email">Email</label>
          <input
            id="customer-email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />

          <label htmlFor="customer-phone">Phone (optional)</label>
          <input
            id="customer-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />

          <label htmlFor="paid-amount">Amount paid (₹)</label>
          <input
            id="paid-amount"
            type="number"
            min="0.01"
            step="0.01"
            required
            value={form.paidAmount}
            onChange={(event) =>
              updateField("paidAmount", event.target.value)
            }
          />

          <label htmlFor="transaction-id">Transaction / UTR ID</label>
          <input
            id="transaction-id"
            required
            value={form.transactionId}
            onChange={(event) =>
              updateField("transactionId", event.target.value)
            }
          />

          <label htmlFor="payment-proof">Payment screenshot or PDF</label>
          <input
            id="payment-proof"
            type="file"
            required
            accept="image/jpeg,image/png,image/webp,application/pdf"
            onChange={(event) =>
              setFile(event.target.files?.[0] || null)
            }
          />

          <p className="muted">Maximum file size: 5 MB.</p>

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Payment Proof"}
          </button>
        </form>

        {error && <p role="alert">{error}</p>}
        {message && <p role="status">{message}</p>}
      </div>
    </main>
  );
}
