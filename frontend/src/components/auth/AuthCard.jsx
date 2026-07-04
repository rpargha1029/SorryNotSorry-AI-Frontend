export default function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="w-full max-w-md rounded-3xl p-8"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(18px)",
      }}
    >
      <h1
        className="text-3xl font-black"
        style={{
          color: "var(--primary)",
        }}
      >
        {title}
      </h1>

      <p
        className="mt-2 mb-8"
        style={{
          color: "var(--text)",
          opacity: 0.7,
        }}
      >
        {subtitle}
      </p>

      {children}
    </div>
  );
}