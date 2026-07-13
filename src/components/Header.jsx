import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      {/* Desktop Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto" role="navigation">
        <a href="/" className="header__logo" role="link" aria-label="Empire Bakery - Return to homepage">
          <h2 className="text-2xl font-bold text-[var(--color-brand-secondary)]">Empire</h2>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#explore" className="text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] transition-colors" role="link" aria-label="Explore our bakery products section">Explore</a>
          <a href="#" className="text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] transition-colors" role="link" aria-label="Learn more about Empire Bakery">Learn More</a>
          <a href="#" className="text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] transition-colors" role="link" aria-label="Get in touch with Empire Bakery">Get in</a>
          <a href="#" className="button" role="button" aria-label="Sign up for our newsletter">
            <span aria-hidden="true" className="visually-hidden">click to sign up our newsletter</span>
            Join now
          </a>
        </div>
      </nav>

      {/* Mobile Burger Button */}
      <div className="md:hidden absolute top-4 right-4">
        <button
          className="text-2xl text-[var(--color-brand-secondary)]"
          onClick={() => setIsOpen(true)}
          aria-label="Open mobile menu"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        id="burger"
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          <button
            className="self-end text-3xl text-[var(--color-brand-secondary)]"
            onClick={() => setIsOpen(false)}
            aria-label="Close mobile menu"
          >
            &times;
          </button>
          <a href="/" className="header__logo" aria-label="Empire Bakery - Return to homepage">
            <h2 className="text-2xl font-bold text-[var(--color-brand-secondary)]">Empire</h2>
          </a>
          <a href="#explore" className="text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] transition-colors py-2" role="link" aria-label="Explore our bakery products section">Explore</a>
          <a href="#" className="text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] transition-colors py-2" role="link" aria-label="Learn more about Empire Bakery">Learn More</a>
          <a href="#" className="text-[var(--color-brand-text)] hover:text-[var(--color-brand-primary)] transition-colors py-2" role="link" aria-label="Get in touch with Empire Bakery">Get in</a>
          <a href="#" className="button text-center" role="button" aria-label="Sign up for our newsletter">
            <span aria-hidden="true" className="visually-hidden">click to sign up our newsletter</span>
            Join now
          </a>
        </div>
      </div>
    </header>
  )
}
