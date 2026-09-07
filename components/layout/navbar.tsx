"use client"

import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import ThemeSwitcher from "@/components/layout/theme-switcher"
import Logo from "@/components/ui/logo"

const links = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#values" },
  { label: "About", href: "/#about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8">
        <nav className="relative flex h-[62px] items-center justify-between rounded-full border border-black/10 bg-background/80 px-4 shadow-sm backdrop-blur-xl dark:border-white/10">
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <Logo
              size={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <span className="font-[family-name:var(--font-ubuntu-sans)] text-[19px] font-medium tracking-[-0.035em]">
              Xelami
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-all hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 sm:flex">
            <ThemeSwitcher />

            <Link
              href="/#contact"
              className="group flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              Let&apos;s talk
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeSwitcher />

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`absolute left-0 right-0 top-[70px] overflow-hidden rounded-[1.5rem] border border-black/10 bg-background/95 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-white/10 ${
              open
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="p-3">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {link.label}

                  <span className="text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-between rounded-xl bg-foreground px-4 py-4 text-lg font-medium text-background"
              >
                Let&apos;s talk
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
