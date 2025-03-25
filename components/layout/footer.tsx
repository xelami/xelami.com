import { Github } from "lucide-react"
import { Twitter } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"

export default function Footer() {
  return (
    <footer className="flex flex-col max-w-[1400px] w-full mx-auto p-4 sm:p-6 md:p-8 mt-24">
      <div className="flex justify-between w-full gap-8 lg:gap-12 mb-8 sm:mb-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Xelami</h3>
          <p className="text-sm text-muted-foreground">
            Building apps that empower the future.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-8 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p>© 2025 Xelami LTD.</p>
          <p className="hidden sm:block">·</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-2">
          <Link
            href="https://twitter.com/xelamico"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/xelami"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <p className="text-sm text-muted-foreground">contact@xelami.com</p>
        </div>
      </div>
    </footer>
  )
}
