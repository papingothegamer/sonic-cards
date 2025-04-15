"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function CreateCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-lime-400 h-full">
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="text-gray-900 text-2xl md:text-3xl font-bold leading-tight select-none">
          Create Your Own
          <br />
          Sonic Universe
        </div>

        <div className="flex justify-start">
          <AnimatedButton />
        </div>
      </div>
    </div>
  )
}

function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className="relative overflow-hidden rounded-full px-6 py-2 bg-white text-gray-900 font-medium select-none border-none"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-green-800"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="relative z-10"
        animate={{ color: isHovered ? "#ffffff" : "#000000" }}
        transition={{ duration: 0.2 }}
      >
        Explore More
      </motion.span>
    </motion.button>
  )
}
