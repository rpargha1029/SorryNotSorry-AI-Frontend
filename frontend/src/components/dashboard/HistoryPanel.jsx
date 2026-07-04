import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHistory, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

import api from "../../services/api";

export default function HistoryPanel({
  refresh,
  onSelect,
}) {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/history");
      setHistory(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [refresh]);

  // ==========================
  // Delete History
  // ==========================

  const deleteHistory = async (id) => {
    try {
      await api.delete(`/history/${id}`);
      toast.success("History deleted.");
      fetchHistory();
    } catch (error) {
      console.error(error);
      toast.error("Unable to delete.");
    }
  };

  // ==========================
  // UI
  // ==========================

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p
          className="text-sm"
          style={{
            color: "var(--text)",
            opacity: .5,
          }}
        >
          Loading history...
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5">
        <FaHistory
          className="text-lg"
          style={{ color: "var(--primary)" }}
        />
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          History
        </h2>
      </div>

      {/* Empty */}
      {history.length === 0 && (
        <div
          className="flex-1 flex items-center justify-center text-center text-sm"
          style={{
            color: "var(--text)",
            opacity: .5,
          }}
        >
          No history yet.
        </div>
      )}

      {/* List */}
      <div className="space-y-3 overflow-y-auto pr-1 flex-1">

        {history.map((item, index) => (

          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * .04,
            }}
            className="rounded-xl p-3.5 cursor-pointer transition-all duration-200 hover:scale-[1.01]"
            style={{
              background: "var(--card)",
              border: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
            }}
            onClick={() => onSelect(item)}
          >

            <p
              className="line-clamp-2 text-sm leading-6"
              style={{ color: "var(--text)" }}
            >
              {item.responses?.[0]?.text ||
               item.excuse ||
               "AI Response"}
            </p>

            <div className="flex justify-between items-center mt-3">
              <span
                className="text-[11px]"
                style={{
                  color: "var(--text)",
                  opacity: 0.4,
                }}
              >
                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : "Recently"}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteHistory(item.id);
                }}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(239,68,68,.08)",
                  color: "#ef4444",
                }}
              >
                <FaTrash className="text-[10px]" />
              </button>
            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}