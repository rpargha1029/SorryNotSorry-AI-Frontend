import LandingNavbar from "../components/navbar/LandingNavbar";
import Footer from "../components/Footer";

export default function PublicLayout({ children }) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <LandingNavbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}