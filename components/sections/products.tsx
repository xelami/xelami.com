import { products } from "@/config/products"
import Link from "next/link"
import Image from "next/image"

export default function ProductsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.title}
            className="w-full rounded-2xl p-6 hover:scale-[1.02] transition-transform"
          >
            <Link href={product.link} target="_blank">
              <div className="aspect-video relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-2xl border-2 border-secondary"
                />
              </div>
            </Link>
            <h2 className="text-xl font-medium mt-4 mb-2">{product.title}</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
