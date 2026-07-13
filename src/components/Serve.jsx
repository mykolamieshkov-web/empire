export default function Serve() {
  const steps = [
    {
      number: 'step 1',
      text: 'Connect with our experts for a personalized consultation.',
    },
    {
      number: 'step 2',
      text: 'Receive tailored recommendations for your enjoyment.',
    },
    {
      number: 'step 3',
      text: 'Experience the magic of tradition in every bite.',
    },
  ]

  return (
    <section className="serve py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-10">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
            How to savor our delights
          </h3>
          <p className="mt-4 text-lg text-[var(--color-brand-text)]">
            Three steps to elevate your bakery experience.
          </p>
          <a href="#" className="button mt-6 inline-block" role="button" aria-label="Join our newsletter and start your bakery journey with us">
            <span aria-hidden="true" className="visually-hidden">Click to subscribe our newsletter</span>
            Join us Now
          </a>
        </div>
        <div className="flex-1 w-full">
          <ul className="space-y-6">
            {steps.map((step, index) => (
              <li key={index}>
                <h2 className="text-xl font-bold text-[var(--color-brand-primary)] uppercase mb-2">{step.number}</h2>
                <p className="text-[var(--color-brand-text)]">{step.text}</p>
                {index < steps.length - 1 && <hr className="mt-4 border-[var(--color-brand-primary)]/20" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
