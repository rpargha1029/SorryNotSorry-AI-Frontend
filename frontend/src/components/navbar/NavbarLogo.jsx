import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavbarLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <img
        src={logo}
        alt="CONFUSION Stack"
        className="w-12 h-12 object-contain"
      />

      <div>
        <h2
          className="text-xl font-black"
          style={{
            color: "var(--primary)",
          }}
        >
          SorryNotSorry
        </h2>

        <p
          className="text-xs"
          style={{
            opacity: .7,
          }}
        >
          by CONFUSION Stack
        </p>
      </div>

    </Link>
  );
}