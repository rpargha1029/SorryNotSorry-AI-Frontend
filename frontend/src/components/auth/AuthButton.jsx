export default function AuthButton({
  children,
  loading,
}) {
  return (
    <button
      disabled={loading}
      className="w-full py-3 rounded-xl font-semibold transition-all duration-300"
      style={{
        background: "var(--primary)",
        color: "#fff",
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}