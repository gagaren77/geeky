"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "./logo"

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-ink-50)]/90 backdrop-blur border-b border-[var(--color-ink-200)]">
      <div className="gs-container flex items-center justify-between py-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-ink-700)] hover:text-[var(--color-brand-600)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+13125550000"
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink-800)] hover:text-[var(--color-brand-600)] transition-colors"
          >
            <Phone className="w-4 h-4" />
            (312) 555-0000
          </a>
          <Link href="/contact" className="gs-btn-primary text-sm !py-2.5 !px-5">
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-[var(--color-ink-700)]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-ink-200)] bg-white">
          <div className="gs-container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-[var(--color-ink-800)] hover:text-[var(--color-brand-600)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+13125550000"
              className="py-3 text-base font-medium text-[var(--color-ink-800)] flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (312) 555-0000
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="gs-btn-primary justify-center mt-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}