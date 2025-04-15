"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import FloatingPaths from "./floating-paths"

export default function PlaysCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl bg-neutral-950 h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} isHovered={isHovered} />
        <FloatingPaths position={-1} isHovered={isHovered} />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
        <div className="text-white text-lg font-medium select-none">Plays</div>
        <div className="space-y-1">
          <div className="text-white text-5xl md:text-6xl font-bold select-none">
            350M+
          </div>
          <div className="text-white/80 text-sm select-none">
            350 Million Listens And Counting
          </div>
        </div>
      </div>
    </motion.div>
  )
}
