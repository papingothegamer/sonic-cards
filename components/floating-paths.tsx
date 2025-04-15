"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"

export default function FloatingPaths({
  position = 1,
  isHovered = false,
}: {
  position?: number
  isHovered?: boolean
}) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: 0.1 + i * 0.03,
    width: 0.5 + i * 0.03,
    duration: 20 + Math.random() * 10,
  }))

  const controls = useAnimationControls()

  useEffect(() => {
    if (isHovered) {
      controls.start((i) => ({
        pathLength: 1,
        opacity: [0.3, 0.6, 0.3],
        pathOffset: [0, 1, 0],
        transition: {
          duration: paths[i].duration,
          repeat: Infinity,
          ease: "linear",
        },
      }))
    } else {
      controls.stop()
    }
  }, [isHovered, controls])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
      >
        <defs>
          <linearGradient id="plays-stroke" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>
        </defs>
        {paths.map((path, i) => (
          <motion.path
            key={path.id}
            custom={i}
            d={path.d}
            stroke="url(#plays-stroke)"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0.3 }}
            animate={controls}
          />
        ))}
      </svg>
    </div>
  )
}
