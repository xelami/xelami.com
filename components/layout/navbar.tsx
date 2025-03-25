import Link from "next/link"
import ThemeSwitcher from "@/components/layout/theme-switcher"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 sm:p-12 container mx-auto">
      <Link
        className="text-4xl font-bold tracking-tight font-[family-name:var(--font-ubuntu-sans)]"
        href="/"
      >
        Xelami
      </Link>
      <ThemeSwitcher />
    </nav>
  )
}
