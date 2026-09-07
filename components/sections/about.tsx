import React from "react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-[1440px] px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="grid gap-12 border-t border-black/10 pt-6 lg:grid-cols-[220px_1fr] lg:gap-20">
        <div className="flex items-start gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground" />
          About
        </div>

        <div>
          <p className="max-w-[1050px] text-[clamp(2rem,4.5vw,5rem)] font-medium leading-[1.03] tracking-[-0.055em]">
            We craft lean, high-performance software that turns{" "}
            <span className="text-muted-foreground">
              ambitious ideas into useful products.
            </span>
          </p>

          <div className="mt-16 grid max-w-4xl gap-10 border-t border-black/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium">Small by design</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Small teams. Short feedback loops. No layers of process between
                an idea and the people building it.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Built to last</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Thoughtful interfaces, solid engineering and technology chosen
                for the problem — not the hype cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
