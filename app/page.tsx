import AboutSection from "@/components/sections/about"
import ProductsSection from "@/components/sections/products"
import ValuesSection from "@/components/sections/values"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-4 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <AboutSection />
      <ProductsSection />
      <ValuesSection />
    </div>
  )
}
