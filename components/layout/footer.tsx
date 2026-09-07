import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/ui/logo"

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#values" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-5 pb-6 pt-6 sm:px-8 sm:pt-8">
      {/* Main footer */}
      <div className="overflow-hidden rounded-[2rem] border border-black/[0.08] bg-neutral-950 text-white dark:border-white/[0.08] dark:bg-white dark:text-neutral-950">
        {/* Large closing statement */}
        <div className="relative border-b border-white/[0.10] px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 dark:border-black/[0.10]">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[500px] w-[500px] rounded-full border border-white/[0.08] dark:border-black/[0.08]" />

          <div className="pointer-events-none absolute right-[80px] top-[-80px] h-[300px] w-[300px] rounded-full border border-white/[0.08] dark:border-black/[0.08]" />

          <div className="pointer-events-none absolute right-[170px] top-0 h-[140px] w-[140px] rounded-full border border-white/[0.08] dark:border-black/[0.08]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/45 dark:text-neutral-950/45">
                Xelami / Independent software studio
              </p>

              <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.065em] text-white dark:text-neutral-950">
                Build less.
                <br />
                <span className="text-white/40 dark:text-neutral-950/40">
                  Make it matter.
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-end lg:pb-2">
              <p className="text-sm leading-6 text-white/55 dark:text-neutral-950/55">
                Thoughtful software for ambitious ideas. From first concept
                through launch and beyond.
              </p>

              <a
                href="mailto:contact@xelami.com"
                className="group mt-6 inline-flex w-fit items-center gap-2 border-b border-white/20 pb-2 text-sm text-white/75 transition-colors hover:border-white hover:text-white dark:border-black/20 dark:text-neutral-950/75 dark:hover:border-black dark:hover:text-neutral-950"
              >
                contact@xelami.com
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation / company information */}
        <div className="grid gap-12 px-6 py-12 sm:px-12 lg:grid-cols-[1fr_2fr] lg:px-16 lg:py-16">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:scale-105 dark:bg-neutral-950">
                <Logo size={32} />
              </span>

              <span className="font-[family-name:var(--font-ubuntu-sans)] text-2xl font-medium tracking-[-0.03em] text-white dark:text-neutral-950">
                Xelami
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45 dark:text-neutral-950/45">
              Building tomorrow, today.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Explore */}
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 dark:text-neutral-950/35">
                Explore
              </p>

              <div className="flex flex-col items-start gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white dark:text-neutral-950/65 dark:hover:text-neutral-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 dark:text-neutral-950/35">
                Social
              </p>

              <div className="flex flex-col items-start gap-3">
                <Link
                  href="https://twitter.com/xelamico"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white dark:text-neutral-950/65 dark:hover:text-neutral-950"
                >
                  Twitter
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="https://github.com/xelami"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white dark:text-neutral-950/65 dark:hover:text-neutral-950"
                >
                  GitHub
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 dark:text-neutral-950/35">
                Get in touch
              </p>

              <a
                href="mailto:contact@xelami.com"
                className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white dark:text-neutral-950/65 dark:hover:text-neutral-950"
              >
                contact@xelami.com
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.10] px-6 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16 dark:border-black/[0.10] dark:text-neutral-950/40">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Xelami LTD.</span>

            <span className="hidden text-white/20 sm:inline dark:text-black/20">
              ·
            </span>

            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-white/40 transition-colors hover:text-white/80 dark:text-neutral-950/40 dark:hover:text-neutral-950/80"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-white/40 transition-colors hover:text-white/80 dark:text-neutral-950/40 dark:hover:text-neutral-950/80"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Exterior footer detail */}
      <div className="flex items-center justify-between px-2 py-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span>Independent software studio</span>

        <span>Made with intent.</span>
      </div>
    </footer>
  )
}
