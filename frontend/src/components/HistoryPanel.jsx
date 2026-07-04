import { useEffect, useState } from "react";
import {
  FaHistory,
  FaTrash,
  FaUser,
  FaTags,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import api from "../services/api";

export default function HistoryPanel({
  onSelect,
  refresh,
}) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHistory = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/history");
      setHistory(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, [refresh]);

  const deleteHistory = async (id) => {
    try {
      await api.delete(`/history/${id}`);
      setHistory((prev) =>
        prev.filter((item) => item.id !== id)
      );
      toast.success("History deleted");
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5">
        <FaHistory
          style={{ color: "var(--primary)" }}
          className="text-lg"
        />
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          History
        </h2>
      </div>

      {/* Loading */}
      {loading && (
        <div
          className="py-12 text-center text-sm"
          style={{
            color: "var(--text)",
            opacity: .5,
          }}
        >
          Loading history...
        </div>
      )}

      {/* Empty */}
      {!loading && history.length === 0 && (
        <div
          className="py-12 text-center text-sm"
          style={{
            color: "var(--text)",
            opacity: .5,
          }}
        >
          No excuses generated yet.
        </div>
      )}

      {/* History List */}
      <div className="space-y-3 overflow-y-auto pr-1 max-h-[560px]">

        {history.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{
              y: -2,
              scale: 1.005,
            }}
            transition={{
              duration: .15,
            }}
            className="rounded-xl overflow-hidden"
            style={{
              background: "var(--card)",
              border: "1px solid color-mix(in srgb, var(--border) 70%, transparent)",
            }}
          >

            <button
              onClick={() => onSelect(item)}
              className="w-full text-left p-4"
            >

              <div className="flex justify-between items-center">
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {item.category}
                </h3>

                <div
                  className="px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "color-mix(in srgb, var(--primary) 15%, transparent)",
                    color: "var(--primary)",
                  }}
                >
                  {item.believability}%
                </div>
              </div>

              <div
                className="flex flex-wrap gap-3 mt-2.5 text-xs"
                style={{
                  color: "var(--text)",
                  opacity: .55,
                }}
              >
                <span className="flex items-center gap-1.5">
                  <FaUser className="text-[10px]" />
                  {item.audience}
                </span>

                <span className="flex items-center gap-1.5">
                  <FaTags className="text-[10px]" />
                  {item.tone}
                </span>
              </div>

              <div
                className="flex items-center gap-1.5 mt-2.5 text-[11px]"
                style={{
                  color: "var(--text)",
                  opacity: .4,
                }}
              >
                <FaClock className="text-[9px]" />
                {item.created_at && !isNaN(Date.parse(item.created_at))
                  ? new Date(item.created_at).toLocaleString()
                  : "Recently"}
              </div>

            </button>

            <div
              style={{
                borderTop: "1px solid color-mix(in srgb, var(--border) 40%, transparent)",
              }}
            >
              <div className="grid grid-cols-2">

                <button
                  onClick={() => onSelect(item)}
                  className="py-2.5 text-xs font-medium transition-all duration-200 hover:bg-white/[0.03]"
                  style={{ color: "var(--primary)" }}
                >
                  <div className="flex justify-center items-center gap-1.5">
                    Open
                    <FaChevronRight className="text-[9px]" />
                  </div>
                </button>

                <button
                  onClick={() => deleteHistory(item.id)}
                  className="py-2.5 text-xs font-medium transition-all duration-200 hover:bg-red-500/10"
                  style={{
                    color: "#ef4444",
                    borderLeft: "1px solid color-mix(in srgb, var(--border) 40%, transparent)",
                  }}
                >
                  <div className="flex justify-center items-center gap-1.5">
                    <FaTrash className="text-[9px]" />
                    Delete
                  </div>
                </button>

              </div>
            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}