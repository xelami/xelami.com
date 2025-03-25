"use client"

import React from "react"
import { values } from "@/config/values"
import { motion, AnimatePresence } from "framer-motion"

export default function ValuesSection() {
  const [openId, setOpenId] = React.useState<number | null>(null)
  return (
    <section id="values" className="flex flex-col py-4 lg:py-12">
      <div className="flex flex-col gap-4">
        {values.map((value, i) => (
          <motion.div
            initial="collapsed"
            animate={openId === i ? "open" : "collapsed"}
            exit="collapsed"
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
            key={i}
            className="flex flex-col gap-4"
          >
            <div
              className="flex items-center gap-4 transition-colors duration-200 hover:text-neutral-400 cursor-pointer"
              onClick={() => setOpenId(openId === i ? null : i)}
            >
              <value.icon size={32} className="text-neutral-800" />
              <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tighter">
                {value.heading}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {openId === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-12 font-light text-xl sm:text-2xl lg:text-3xl max-w-[1200px]"
                >
                  {value.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
