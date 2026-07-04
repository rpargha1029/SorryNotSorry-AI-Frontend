import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      className="mt-16 transition-all duration-500"
      style={{
        borderTop: "1px solid color-mix(in srgb, var(--border) 50%, transparent)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto py-10 px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3
              className="text-xl font-bold tracking-tight"
              style={{
                color: "var(--primary)",
              }}
            >
              SorryNotSorry
            </h3>

            <p
              className="mt-1.5 text-sm"
              style={{
                opacity: 0.55,
              }}
            >
              AI Powered Excuse Generator
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">

            <div
              className="flex items-center justify-center md:justify-end gap-2"
            >
              <span
                className="text-sm font-medium"
                style={{
                  opacity: 0.65,
                }}
              >
                Built with
              </span>

              <span className="text-red-400 text-base">
                ❤
              </span>

              <span
                className="text-sm font-medium"
                style={{
                  opacity: 0.65,
                }}
              >
                by
              </span>

              <img
                src={logo}
                alt="CONFUSION Stack"
                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p
              className="text-xs mt-3"
              style={{
                opacity: 0.4,
              }}
            >
              © 2026 CONFUSION Stack. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}