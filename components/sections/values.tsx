"use client"

import React from "react"
import { values } from "@/config/values"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function ValuesSection() {
  const [openId, setOpenId] = React.useState<number | null>(null)

  return (
    <section
      id="values"
      className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
        <div>
          <div className="sticky top-32">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Our approach
            </p>

            <p className="mt-5 max-w-[180px] text-sm leading-6 text-muted-foreground">
              Principles that shape what we make and how we work.
            </p>
          </div>
        </div>

        <div className="border-t border-black/10">
          {values.map((value, i) => {
            const isOpen = openId === i

            return (
              <motion.div key={i} layout className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : i)}
                  className="group flex w-full items-center gap-5 py-7 text-left sm:py-9"
                  aria-expanded={isOpen}
                >
                  <span className="w-8 shrink-0 text-xs font-medium text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-muted-foreground sm:text-5xl lg:text-6xl">
                    {value.heading}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-foreground text-background"
                        : "group-hover:bg-neutral-100"
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid pb-9 pl-[52px] pr-4 sm:grid-cols-[1fr_220px] sm:gap-12 sm:pr-16">
                        <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                          {value.description}
                        </p>

                        <div className="hidden text-xs uppercase leading-5 tracking-[0.15em] text-muted-foreground sm:block">
                          Principle
                          <br />
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
