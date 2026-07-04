import {
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaLink,
  FaTimes,
} from "react-icons/fa";
import toast from "react-hot-toast";

export default function ShareModal({
  open,
  onClose,
  excuse,
}) {
  if (!open) return null;

  const text = encodeURIComponent(excuse?.excuse || "");

  const copyLink = async () => {
    await navigator.clipboard.writeText(excuse.excuse);

    toast.success("Copied!");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">

      <div
        className="w-[420px] rounded-3xl p-6"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="flex justify-between items-center mb-6">

          <h2
            className="text-2xl font-bold"
            style={{
              color: "var(--primary)",
            }}
          >
            Share Excuse
          </h2>

          <button onClick={onClose}>
            <FaTimes />
          </button>

        </div>

        <div className="space-y-3">

          <button
            onClick={copyLink}
            className="w-full rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition"
          >
            <FaLink />
            Copy Text
          </button>

          <a
            href={`https://wa.me/?text=${text}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl p-4 hover:scale-105 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href={`https://t.me/share/url?text=${text}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl p-4 hover:scale-105 transition"
          >
            <FaTelegram />
            Telegram
          </a>

          <a
            href={`mailto:?subject=AI Excuse&body=${text}`}
            className="block rounded-xl p-4 hover:scale-105 transition"
          >
            <FaEnvelope />
            Email
          </a>

        </div>
      </div>
    </div>
  );
}