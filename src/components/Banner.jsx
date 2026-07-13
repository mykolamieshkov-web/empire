export default function Banner() {
  return (
    <section className="banner bg-gradient-to-r from-[#fdf6ee] to-[#f5e6d0] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-brand-secondary)] leading-tight">
            Experience <br />the Essence of<br /> Italian Baking
          </h1>
          <p className="mt-4 text-lg text-[var(--color-brand-text)]">
            Discover the art of traditional baking
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a href="#" className="button" role="button" aria-label="Sign up for our newsletter to get the latest updates">
              <span aria-hidden="true" className="visually-hidden">click to sign up our newsletter</span>
              Join now
            </a>
            <a href="#explore" className="button bg-white text-[var(--color-brand-primary)] border-2 border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white transition-all" role="button" aria-label="Shop our full range of artisan bakery products">
              <span aria-hidden="true" className="visually-hidden">Explore our products</span>
              Shop now
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">            <img
            src="/img/main/hero-section__banner/hero-section__focal-point.png"
            alt="Freshly baked artisan bread, the centerpiece of our Italian bakery"
            aria-label="Freshly baked artisan bread, the centerpiece of our Italian bakery"
            width={350}
            height={350}
            className="drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
