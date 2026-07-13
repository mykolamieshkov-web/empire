export default function Satisfaction() {
  return (
    <section className="satisfaction py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 order-2 md:order-1 flex justify-center">
          <img
            src="/img/main/satisfaction/satisfaction.png"
            alt="A delicious freshly baked homemade loaf of bread resting in a sunlit room"
            aria-label="A delicious freshly baked homemade loaf of bread resting in a sunlit room"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
            Your Satisfaction is Our Priority
          </h3>
          <p className="mt-4 text-lg text-[var(--color-brand-text)]">
            We combine the finest ingredients…
          </p>
          <a href="#" className="button mt-6 inline-block" role="button" aria-label="Taste our bakery delights and sign up for our newsletter">
            Taste now{' '}
            <span aria-hidden="true" className="visually-hidden">click to sign up our newsletter</span>
          </a>
        </div>
      </div>
    </section>
  )
}
