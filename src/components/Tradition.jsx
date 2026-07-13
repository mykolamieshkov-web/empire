export default function Tradition() {
  return (
    <section className="tradition py-16 md:py-24 bg-[var(--color-brand-cream)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src="/img/main/tradition/tradition.png"
            alt="Our bakers carefully kneading dough following time-honored traditional recipes"
            aria-label="Our bakers carefully kneading dough following time-honored traditional recipes"
            className="w-full max-w-md rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
            Savoring the Taste of Tradition
          </h3>
          <p className="mt-4 text-lg text-[var(--color-brand-text)]">
            Immerse yourself in centuries of authentic Italian baking
          </p>
          <a href="#" className="button mt-6 inline-block" role="button" aria-label="Subscribe to our newsletter for exclusive bakery updates">
            <span aria-hidden="true" className="visually-hidden">sign-up to our newsletter</span>
            Subscribe now
          </a>
        </div>
      </div>
    </section>
  )
}
