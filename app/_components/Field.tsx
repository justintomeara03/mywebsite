export default function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  required,
  format,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  format?: (v: string) => string;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(format ? format(e.target.value) : e.target.value);
  }

  return (
    <div style={{ padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="label" style={{ marginBottom: 6 }}>
        {label}
        {required && <span style={{ color: "var(--amber)", marginLeft: 6 }}>*</span>}
      </div>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{ fontSize: 16, fontWeight: 700, padding: "6px 0" }}
      />
    </div>
  );
}
