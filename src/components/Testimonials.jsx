const testimonials = [
  {
    quote: 'EmpireBakery has transformed our baking experience.',
    name: 'Giovanni',
    role: "Head Baker, Rossi's Bakery",
  },
  {
    quote: "I can't imagine my kitchen without EmpireBakery.",
    name: 'Sophia',
    role: "Product Developer, Bianchi's Sweets",
  },
  {
    quote: 'EmpireBakery has elevated our baking game.',
    name: 'Giovanni',
    role: "Head Baker, Rossi's Bakery",
  },
]

function StarIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="#8d4d14"
      viewBox="0 0 490 490"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="60.44,233.482 48.895,196.215 37.351,233.482 0,233.482 30.22,256.513 18.676,293.785 48.895,270.744 79.115,293.785 67.571,256.513 97.791,233.482" />
      <polygon points="158.492,233.482 146.948,196.215 135.403,233.482 98.052,233.482 128.272,256.513 116.728,293.785 146.948,270.744 177.168,293.785 165.623,256.513 195.843,233.482" />
      <polygon points="256.544,233.482 245,196.215 233.456,233.482 196.104,233.482 226.324,256.513 214.78,293.785 245,270.744 275.22,293.785 263.676,256.513 293.895,233.482" />
      <polygon points="354.596,233.482 343.052,196.215 331.508,233.482 294.157,233.482 324.377,256.513 312.832,293.785 343.052,270.744 373.272,293.785 361.728,256.513 391.948,233.482" />
      <polygon points="441.105,196.215 429.56,233.482 392.209,233.482 422.429,256.513 410.885,293.785 441.105,270.744 471.324,293.785 459.78,256.513 490,233.482 452.649,233.482" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonals py-16 md:py-24 bg-[var(--color-brand-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
            Customer testimonials
          </h3>
          <p className="mt-3 text-lg text-[var(--color-brand-text)]">
            Discover why our creations are loved by many
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <blockquote className="text-lg italic text-[var(--color-brand-secondary)] mb-4">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <h4 className="font-bold text-[var(--color-brand-secondary)]">{item.name}</h4>
              <p className="text-sm text-[var(--color-brand-text)]">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
