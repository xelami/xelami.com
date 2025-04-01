import Link from "next/link"
import ThemeSwitcher from "@/components/layout/theme-switcher"
import Logo from "@/components/ui/logo"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 sm:p-12 container mx-auto">
      <Link
        className="flex items-center gap-0 text-[3rem] font-light tracking-tight font-[family-name:var(--font-ubuntu-sans)]"
        href="/"
      >
        <Logo />
      </Link>
      <ThemeSwitcher />
    </nav>
  )
}
