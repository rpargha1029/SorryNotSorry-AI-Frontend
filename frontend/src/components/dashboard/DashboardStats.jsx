import { motion } from "framer-motion";
import {
  FaRobot,
  FaStar,
  FaBolt,
  FaFire,
} from "react-icons/fa";

export default function DashboardStats({

  generated = 0,

  favorites = 0,

  aiScore = 0,

  streak = 0,

}) {

  const stats = [

    {
      title: "Generated",
      value: generated,
      suffix: "",
      icon: <FaRobot />,
      color: "#06b6d4",
    },

    {
      title: "Favorites",
      value: favorites,
      suffix: "",
      icon: <FaStar />,
      color: "#facc15",
    },

    {
      title: "AI Score",
      value: aiScore,
      suffix: "%",
      icon: <FaBolt />,
      color: "#8b5cf6",
    },

    {
      title: "Streak",
      value: streak,
      suffix: " Days",
      icon: <FaFire />,
      color: "#f97316",
    },

  ];

  return (

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

      {stats.map((item, index) => (

        <motion.div

          key={item.title}

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: index * 0.08,
          }}

          whileHover={{
            y: -4,
            scale: 1.02,
            boxShadow: `0 12px 30px ${item.color}15, 0 0 1px ${item.color}33`,
          }}

          className="rounded-2xl p-5 transition-all duration-300"

          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}

        >

          {/* Icon */}

          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg"
            style={{
              background: `${item.color}18`,
              color: item.color,
            }}
          >
            {item.icon}
          </div>

          {/* Number */}

          <h2
            className="text-3xl font-black"
            style={{
              color: "var(--primary)",
            }}
          >
            {item.value}
            {item.suffix}
          </h2>

          {/* Title */}

          <p
            className="mt-2 text-xs tracking-widest uppercase font-medium"
            style={{
              color: "var(--text)",
              opacity: 0.5,
            }}
          >
            {item.title}
          </p>

        </motion.div>

      ))}

    </div>

  );

}