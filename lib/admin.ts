
import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const C = "sc_admin";

const S = () => process.env.ADMIN_SESSION_SECRET;

const sign = (value: string) => {
  const secret = S();

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured");
  }

  return createHmac("sha256", secret)
    .update(value)
    .digest("hex");
};

export const token = (email: string) => {
  const value = `${email}|${Date.now()}`;
  return `${value}.${sign(value)}`;
};

const MAX_AGE_MS = 12 * 60 * 60 * 1000;

export const valid = (value?: string) => {
  if (!value || !S()) return false;

  // Split at the LAST dot, not a dot inside the email address.
  const separator = value.lastIndexOf(".");

  if (separator < 1) return false;

  const payload = value.slice(0, separator);
  const signature = value.slice(separator + 1);

  try {
    const expected = sign(payload);
    const actualBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expected, "hex");

    if (
      actualBuffer.length !== expectedBuffer.length ||
      !timingSafeEqual(actualBuffer, expectedBuffer)
    ) {
      return false;
    }

    const separatorIndex = payload.lastIndexOf("|");
    if (separatorIndex < 1) return false;

    const timestamp = Number(payload.slice(separatorIndex + 1));

    if (!Number.isFinite(timestamp)) return false;

    const age = Date.now() - timestamp;

    return age >= 0 && age < MAX_AGE_MS;
  } catch {
    return false;
  }
};

export const isAdmin = async () => {
  const cookieStore = await cookies();
  return valid(cookieStore.get(C)?.value);
};

export const cookieName = C;
