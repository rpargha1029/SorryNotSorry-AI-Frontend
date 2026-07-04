import { FaMagic, FaGithub } from "react-icons/fa";
import logo from "../assets/sorrynotsorry.png";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl transition-all duration-500"
      style={{
        background: "color-mix(in srgb, var(--card) 75%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div
  className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110"
  style={{
    background: "var(--card)",
    border: "1px solid var(--border)",
  }}
>
  <img
    src={logo}
    alt="CONFUSION Stack"
    className="w-130 h-130 object-contain"
  />
</div>

          <div>

            <h1
              className="text-2xl font-black"
              style={{
                color: "var(--primary)",
              }}
            >
              SorryNotSorry
            </h1>

            <p
              className="text-xs"
              style={{
                color: "var(--text)",
                opacity: 0.7,
              }}
            >
              AI Excuse Generator
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button
            title="GitHub Repository"
            className="p-3 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            <FaGithub className="text-lg" />
          </button>

        </div>

      </div>
    </nav>
  );
}