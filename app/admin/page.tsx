```tsx
"use client";

import { useEffect, useState } from "react";

type Order = {
  id: string;
  order_number: string;
  projects?: { title?: string } | null;
  customer_name?: string | null;
  customer_email?: string | null;
  customer_phone?: string | null;
  expected_amount?: number | null;
  paid_amount?: number | null;
  transaction_id?: string | null;
  status: string;
  created_at: string;
  proofUrl?: string | null;
};

export default function Admin() {
  const [ok, setOk] = useState(false);
  const [checked, setChecked] = useState(false);
  const [l, setL] = useState({ email: "", password: "" });
  const [orders, setOrders] = useState<Order[]>([]);
  const [msg, setMsg] = useState("");

  async function load() {
    try {
      const m = await fetch("/api/admin/me").then((r) => r.json());

      setOk(Boolean(m.admin));
      setChecked(true);

      if (m.admin) {
        const response = await fetch("/api/admin/orders");
        const data = await response.json();

        setOrders(data.orders || []);
      }
    } catch {
      setChecked(true);
      setMsg("Could not load admin orders.");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();

    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(l),
    });

    const d = await r.json();
    setMsg(d.error || "");

    if (r.ok) {
      await load();
    }
  }

  async function act(id: string, action: string) {
    const r = await fetch(`/api/admin/orders/${id}/${action}`, {
      method: "POST",
    });

    const d = await r.json();
    setMsg(d.error || (r.ok ? "Updated successfully." : "Action failed."));

    await load();
  }

  if (!checked) {
    return (
      <main className="wrap">
        <div className="card">Loading admin...</div>
      </main>
    );
  }

  if (!ok) {
    return (
      <main className="wrap">
        <div className="card">
          <h1>SabkaCode Admin</h1>

          <form onSubmit={login}>
            <label>Email</label>
            <input
              type="email"
              required
              value={l.email}
              onChange={(e) =>
                setL({ ...l, email: e.target.value })
              }
            />

            <label>Password</label>
            <input
              type="password"
              required
              value={l.password}
              onChange={(e) =>
                setL({ ...l, password: e.target.value })
              }
            />

            <br />
            <br />

            <button type="submit">Login</button>
          </form>

          <p className="error">{msg}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="wrap">
      <div className="card">
        <div className="row">
          <h1 style={{ flex: 1 }}>Orders</h1>

          <button
            onClick={async () => {
              await fetch("/api/admin/logout", {
                method: "POST",
              });
              setOk(false);
              setL({ email: "", password: "" });
            }}
          >
            Logout
          </button>
        </div>

        <p>{msg}</p>

        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Project</th>
                <th>Customer</th>
                <th>Expected</th>
                <th>Paid</th>
                <th>UTR</th>
                <th>Status</th>
                <th>Created</th>
                <th>Proof</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.order_number}</td>

                  <td>{o.projects?.title || "-"}</td>

                  <td>
                    {o.customer_name || "-"}
                    <br />
                    {o.customer_email || "-"}
                    <br />
                    {o.customer_phone || ""}
                  </td>

                  <td>₹{o.expected_amount ?? "-"}</td>

                  <td>₹{o.paid_amount ?? "-"}</td>

                  <td>{o.transaction_id || "-"}</td>

                  <td>{o.status}</td>

                  <td>
                    {new Date(o.created_at).toLocaleString()}
                  </td>

                  <td>
                    {o.proofUrl ? (
                      <a
                        href={o.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Image
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td>
                    {o.status === "PENDING_REVIEW" && (
                      <>
                        <button
                          onClick={() => act(o.id, "verify")}
                        >
                          Verify Payment
                        </button>

                        {" "}

                        <button
                          onClick={() => act(o.id, "cancel")}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
```
