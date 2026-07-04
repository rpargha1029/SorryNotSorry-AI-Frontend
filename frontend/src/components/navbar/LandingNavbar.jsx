import { Link } from "react-router-dom";
import NavbarLogo from "./NavbarLogo";

export default function LandingNavbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{
        background: "rgba(15,15,20,.65)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <NavbarLogo />

        <div className="hidden md:flex items-center gap-8">

          <a href="#features">
            Features
          </a>

          <a href="#faq">
            FAQ
          </a>

          <Link to="/login">
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}