export default function Delights() {
  return (
    <section className="delights py-16 md:py-24 bg-[var(--color-brand-cream)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
            Introducing Artisanal Delights
          </h3>
          <p className="mt-4 text-lg text-[var(--color-brand-text)]">
            Immerse yourself in centuries of authentic Italian baking
          </p>
          <a href="#" className="button mt-6 inline-block" role="button" aria-label="Explore more about our artisanal bakery and contact us">
            <span aria-hidden="true" className="visually-hidden">Click here to get our contact information</span>
            Explore more
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/img/main/delights/delights-image.png"
            alt="Our master baker proudly displaying freshly baked artisan breads and pastries"
            aria-label="Our master baker proudly displaying freshly baked artisan breads and pastries"
            className="w-full max-w-md rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
