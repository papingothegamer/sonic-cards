"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import AudioWaveform from "@/components/audio-waveform"

export default function HeadphonesCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl h-full bg-blue-600"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1470&auto=format&fit=crop"
        alt="Person wearing headphones"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <motion.div
        initial={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        animate={{ backgroundColor: isHovered ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.2)" }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-10"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
        <div className="text-white text-lg font-medium select-none">Start Your Sonic Journey.</div>

        <div className="space-y-2">
          {isHovered && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
              <AudioWaveform />
            </motion.div>
          )}

          <div className="text-white text-3xl md:text-4xl font-bold leading-tight select-none">
            "I Believe Sound Can Change The World."
          </div>
          <div className="text-white/80 text-sm select-none">Mike Brown, Producer</div>
        </div>
      </div>
    </motion.div>
  )
}
