import AboutSection from "@/components/sections/about"
import ProductsSection from "@/components/sections/products"
import ValuesSection from "@/components/sections/values"
import Link from "next/link"
import { ArrowUpRight, ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-neutral-200/40 blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:min-h-screen">
        <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-foreground" />
          Independent software studio
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
          <h1 className="max-w-[1100px] text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            Software
            <br />
            <span className="text-muted-foreground">with intent.</span>
          </h1>

          <div className="max-w-sm pb-2">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              We design and build focused digital products for people who care
              about how software feels, not just what it does.
            </p>

            <a
              href="#work"
              className="mt-7 inline-flex items-center gap-3 text-sm font-medium"
            >
              Explore our work
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all hover:bg-foreground hover:text-background">
                <ArrowDown size={15} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 border-t border-black/10 pt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:grid-cols-4">
          <div>
            <span className="block text-foreground">01</span>
            Strategy
          </div>
          <div>
            <span className="block text-foreground">02</span>
            Design
          </div>
          <div>
            <span className="block text-foreground">03</span>
            Engineering
          </div>
          <div>
            <span className="block text-foreground">04</span>
            Launch
          </div>
        </div>
      </section>

      <AboutSection />
      <ProductsSection />
      <ValuesSection />

      {/* CTA */}
      <section
        id="contact"
        className="mx-auto w-full max-w-[1440px] px-5 pt-24 sm:px-8 sm:pt-32"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-background sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[500px] w-[500px] rounded-full border border-white/10 dark:border-black/10" />
          <div className="pointer-events-none absolute right-[-20px] top-[-100px] h-[300px] w-[300px] rounded-full border border-white/10 dark:border-black/10" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/50 dark:text-black/50">
                Have something in mind?
              </p>

              <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Let's make
                <br />
                something good.
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="mb-7 max-w-xs text-sm leading-6 text-white/55 dark:text-black/55">
                Have an idea worth building? Tell us about it and let's see
                where it goes.
              </p>

              <a
                href="mailto:hello@xelami.com"
                className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-medium transition-colors hover:border-white dark:border-black/30 dark:hover:border-black"
              >
                Start a conversation
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
