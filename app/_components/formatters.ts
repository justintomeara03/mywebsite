// Phone: (xxx) xxx-xxxx as you type
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
}

// Name: capitalize first letter of each word
export function formatName(raw: string): string {
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Email: force lowercase
export function formatEmail(raw: string): string {
  return raw.toLowerCase();
}

// Date: auto-format as MM-DD-YYYY as you type
export function formatDate(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  if (digits.length < 3) return digits;
  if (digits.length < 5) return `${digits.slice(0,2)}-${digits.slice(2)}`;
  return `${digits.slice(0,2)}-${digits.slice(2,4)}-${digits.slice(4)}`;
}

// URL: prepend https:// on blur if no protocol present
export function ensureHttps(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return "https://" + trimmed;
}
