"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Keep the layout occupied during hydration.
  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={`block shrink-0 ${className}`}
        style={{ width: size, height: size }}
      />
    )
  }

  const src =
    resolvedTheme === "dark" ? "/images/logo-dark.png" : "/images/logo.png"

  return (
    <Image
      src={src}
      alt="Xelami"
      width={size}
      height={size}
      priority
      className={`shrink-0 object-contain ${className}`}
    />
  )
}
