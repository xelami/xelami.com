import { products } from "@/config/products"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function ProductsSection() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mb-12 flex items-end justify-between border-t border-black/10 pt-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            Things we've built.
          </h2>
        </div>

        <span className="hidden text-xs uppercase tracking-[0.15em] text-muted-foreground sm:block">
          {String(products.length).padStart(2, "0")} projects
        </span>
      </div>

      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-28">
        {products.map((product, index) => (
          <Link
            key={product.title}
            href={product.link}
            target="_blank"
            className="group block"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] bg-neutral-100">
              <div className="absolute left-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
            </div>

            <div className="mt-5 flex items-start justify-between gap-8 border-b border-black/10 pb-5">
              <div>
                <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                  {product.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <span className="mt-1 shrink-0 text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-foreground">
                View
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
