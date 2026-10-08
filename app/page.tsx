import Link from "next/link"
import {
  MonitorSmartphone,
  Wifi,
  Server,
  Camera,
  Cloud,
  Globe,
  Check,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react"

const SERVICES = [
  {
    id: "managed-it",
    icon: MonitorSmartphone,
    title: "Managed IT Support",
    description:
      "Help desk, remote support, and proactive monitoring. We keep your team working and your systems running.",
  },
  {
    id: "networking",
    icon: Wifi,
    title: "Networking & WiFi",
    description:
      "Office network design, installation, and troubleshooting. Fast, reliable WiFi your team can depend on.",
  },
  {
    id: "data-center",
    icon: Server,
    title: "Data Center & Servers",
    description:
      "Server setup, migrations, and ongoing maintenance. From a single file server to complex infrastructure.",
  },
  {
    id: "security",
    icon: Camera,
    title: "Security & Surveillance",
    description:
      "Security camera systems, access control, and network security that protects what matters.",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    description:
      "Email, Teams, SharePoint, OneDrive, and Okta identity management. Cloud done right.",
  },
  {
    id: "web",
    icon: Globe,
    title: "Websites & Hosting",
    description:
      "Custom websites, reliable hosting, and domain management. Your business online, done properly.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="gs-section pt-16 pb-20">
        <div className="gs-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="gs-eyebrow mb-4">Chicago & Suburbs · Since 2000</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-ink-900)] leading-[1.05]">
              IT that just{" "}
              <span className="text-[var(--color-brand-600)]">works.</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-600)] leading-relaxed max-w-xl">
              Friendly, experienced IT support for small businesses across
              Chicago and the suburbs. From a printer that won&apos;t print to a
              full data center migration — we&apos;ve seen it, fixed it, and
              made it reliable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="gs-btn-primary">
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="gs-btn-outline">
                See Our Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-ink-500)]">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--color-brand-600)]" />
                Same-day response
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--color-brand-600)]" />
                No long-term contracts
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[var(--color-brand-600)]" />
                On-site & remote
              </span>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-[var(--color-ink-200)] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-12 rounded-xl bg-[var(--color-brand-100)] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[var(--color-brand-700)]" />
                </span>
                <div>
                  <p className="text-sm text-[var(--color-ink-500)]">Average response</p>
                  <p className="text-lg font-bold text-[var(--color-ink-900)]">
                    Under 1 hour
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: "HIPAA & PCI compliance experience" },
                  { icon: Award, text: "25 years, help desk to management" },
                  { icon: Users, text: "Small business specialists" },
                  { icon: MapPin, text: "Serving Chicago & 50-mile radius" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[var(--color-brand-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--color-ink-700)]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────── */}
      <section className="gs-section bg-white border-y border-[var(--color-ink-200)]">
        <div className="gs-container">
          <div className="max-w-2xl mb-12">
            <p className="gs-eyebrow mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink-900)]">
              Everything your business needs, under one roof
            </h2>
            <p className="mt-4 text-[var(--color-ink-600)]">
              We handle the technical stuff so you can focus on running your
              business. One trusted partner for all your IT needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="gs-card group"
              >
                <span className="w-12 h-12 rounded-xl bg-[var(--color-brand-100)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-brand-600)] transition-colors">
                  <service.icon className="w-6 h-6 text-[var(--color-brand-700)] group-hover:text-white transition-colors" />
                </span>
                <h3 className="text-lg font-bold text-[var(--color-ink-900)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-600)] leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--color-brand-600)]">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ──────────────────────────────────────── */}
      <section className="gs-section">
        <div className="gs-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="gs-eyebrow mb-3">Why Geeky Squirrels</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink-900)]">
              25 years of &quot;we&apos;ve seen this before&quot;
            </h2>
            <p className="mt-4 text-[var(--color-ink-600)] leading-relaxed">
              We&apos;ve worked every level of IT — from resetting passwords at
              the help desk to managing entire data centers. That means when
              something breaks, we already know how to fix it. No guessing, no
              upsells, no runaround.
            </p>
            <p className="mt-4 text-[var(--color-ink-600)] leading-relaxed">
              And if we haven&apos;t seen your specific problem? We&apos;ll
              figure it out. That&apos;s what 25 years of solving hard problems
              teaches you — solid foundations, and the confidence to find
              answers.
            </p>
            <div className="mt-8">
              <Link href="/about" className="gs-btn-outline">
                Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Real Experience",
                body: "Help desk, sysadmin, management. We understand the whole picture.",
              },
              {
                title: "Honest Advice",
                body: "You need a $50 fix, not a $5,000 overhaul? We'll tell you.",
              },
              {
                title: "Fast Response",
                body: "Local, on-site when you need us, remote when you don't.",
              },
              {
                title: "One Partner",
                body: "Networks, computers, cloud, cameras, websites. We do it all.",
              },
            ].map((item) => (
              <div key={item.title} className="gs-card">
                <h3 className="font-bold text-[var(--color-ink-900)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-600)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────── */}
      <section className="gs-section bg-[var(--color-ink-900)] text-white">
        <div className="gs-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let&apos;s fix your IT problem.
          </h2>
          <p className="mt-4 text-[var(--color-ink-300)] text-lg">
            Tell us what&apos;s broken or what you need, and we&apos;ll get
            back to you with honest advice and a clear next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="gs-btn-primary">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+13125550000"
              className="gs-btn-outline !text-white !border-[var(--color-ink-600)] hover:!border-[var(--color-brand-400)] hover:!text-[var(--color-brand-300)]"
            >
              <Phone className="w-4 h-4" />
              (312) 555-0000
            </a>
          </div>
        </div>
      </section>
    </>
  )
}