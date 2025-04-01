import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useEffect, useState } from "react"

export default function Logo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {theme === "dark" ? (
        <Image
          src="/images/logo-dark.png"
          alt="Xelami"
          width={40}
          height={40}
          className="object-contain"
        />
      ) : (
        <Image
          src="/images/logo.png"
          alt="Xelami"
          width={40}
          height={40}
          className="object-contain"
        />
      )}
    </>
  )
}
