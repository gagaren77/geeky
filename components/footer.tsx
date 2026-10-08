import Link from "next/link"
import { Mail, Phone, MapPin, Squirrel } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-ink-900)] text-[var(--color-ink-200)] mt-20">
      <div className="gs-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[var(--color-brand-600)] flex items-center justify-center">
                <Squirrel className="w-5 h-5 text-white" />
              </span>
              <span className="text-[15px] font-bold text-white">Geeky Squirrels</span>
            </div>
            <p className="text-sm text-[var(--color-ink-400)] max-w-md leading-relaxed">
              Experienced, friendly IT support and consulting for small businesses
              in Chicago and the surrounding suburbs. 25 years of hands-on experience,
              from help desk to data centers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#managed-it" className="hover:text-[var(--color-brand-300)]">Managed IT</Link></li>
              <li><Link href="/services#networking" className="hover:text-[var(--color-brand-300)]">Networking & WiFi</Link></li>
              <li><Link href="/services#data-center" className="hover:text-[var(--color-brand-300)]">Data Center</Link></li>
              <li><Link href="/services#security" className="hover:text-[var(--color-brand-300)]">Security & Cameras</Link></li>
              <li><Link href="/services#cloud" className="hover:text-[var(--color-brand-300)]">Cloud & M365</Link></li>
              <li><Link href="/services#web" className="hover:text-[var(--color-brand-300)]">Websites & Hosting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-brand-400)]" />
                <a href="tel:+13125550000" className="hover:text-[var(--color-brand-300)]">(312) 555-0000</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-brand-400)]" />
                <a href="mailto:hello@geekysquirrels.com" className="hover:text-[var(--color-brand-300)]">hello@geekysquirrels.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-brand-400)]" />
                <span>Chicago, IL & Suburbs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-ink-700)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-ink-500)]">
          <p>© {year} Geeky Squirrels. All rights reserved.</p>
          <p>Proudly serving Chicago and the surrounding suburbs.</p>
        </div>
      </div>
    </footer>
  )
}