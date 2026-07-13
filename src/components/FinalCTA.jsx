export default function FinalCTA() {
  return (
    <section className="final-cta py-16 md:py-24 bg-gradient-to-r from-[var(--color-brand-primary)] to-[#a85e1a] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Bakery Journey with Us
        </h3>
        <p className="text-lg mb-8 opacity-90">
          Enhance your baking experience…
        </p>
        <a href="#explore" className="inline-block bg-white text-[var(--color-brand-primary)] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg" role="button" aria-label="Shop our full range of bakery products now">
          <span aria-hidden="true" className="visually-hidden">Explore our products</span>
          Shop Now
        </a>
      </div>
    </section>
  )
}
