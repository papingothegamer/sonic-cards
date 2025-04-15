"use client"
import { motion } from "framer-motion"

export default function AudioWaveform() {
  // Create an array of 30 bars with different heights
  const bars = Array.from({ length: 30 }, () => Math.random() * 20 + 5)

  return (
    <div className="flex items-center justify-center h-8 gap-[2px]">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-1 bg-white/60 rounded-full"
          initial={{ height: 4 }}
          animate={{
            height: [4, height, 4],
          }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: i * 0.03,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
