import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="Geeky Squirrels home"
    >
      <span className="w-9 h-9 rounded-xl bg-[var(--color-brand-600)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-brand-700)] transition-colors">
        <SquirrelMark className="w-5 h-5 text-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold text-[var(--color-ink-900)]">
          Geeky Squirrels
        </span>
        <span className="text-[11px] text-[var(--color-ink-500)] font-medium tracking-wide">
          IT SUPPORT & CONSULTING
        </span>
      </span>
    </Link>
  )
}

function SquirrelMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 9.5c0-1.4-.6-2.7-1.7-3.6-.8-.7-1.9-1.1-3-1.1-.5 0-.9.1-1.3.2-.6-.5-1.4-.7-2.2-.6-1.8.2-3.1 1.7-3.1 3.5 0 .5.1 1 .3 1.4-.9.9-1.4 2.1-1.4 3.4 0 2.7 2.2 4.9 4.9 4.9h5.5c2.7 0 4.9-2.2 4.9-4.9 0-1.5-.7-2.9-1.9-3.8.6-.6 1-1.5 1-2.4 0-1.9-1.6-3.5-3.5-3.5h-.3c.1.4.2.8.2 1.3 0 1.4-.6 2.7-1.6 3.5.5.4 1.2.6 1.9.6.3 0 .6 0 .8-.1zM9 8.5c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5z" />
    </svg>
  )
}