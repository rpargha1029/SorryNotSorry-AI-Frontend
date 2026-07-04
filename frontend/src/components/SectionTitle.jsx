export default function SectionTitle({ title }) {
  return (
    <div className="mb-5">

      <h3
        className="text-lg font-bold transition-all duration-300"
        style={{
          color: "var(--text)",
        }}
      >
        {title}
      </h3>

      <div
        className="mt-2 h-1 rounded-full transition-all duration-300"
        style={{
          width: "70px",
          background: "linear-gradient(90deg, var(--primary), transparent)",
        }}
      />

    </div>
  );
}