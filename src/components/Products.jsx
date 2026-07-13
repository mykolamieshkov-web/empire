const products = [
  { name: 'Sourdough', img: '/img/main/products/products-items/Sourdough.png' },
  { name: 'Croassants', img: '/img/main/products/products-items/croassants.png' },
  { name: 'Bagels', img: '/img/main/products/products-items/bagels.png' },
  { name: 'Macarons', img: '/img/main/products/products-items/macarons.png' },
  { name: 'Muffins', img: '/img/main/products/products-items/muffins.png' },
  { name: 'Bagets', img: '/img/main/products/products-items/bagets.png' },
]

export default function Products() {
  return (
    <section id="explore" className="products py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-secondary)]">
            Trusted by connoisseurs<br /> worldwide
          </h3>
          <p className="mt-3 text-lg text-[var(--color-brand-text)]">Product list:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card flex flex-col items-center p-4 rounded-xl bg-[var(--color-brand-cream)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={product.img}
                alt={`Freshly baked ${product.name.toLowerCase()} from Empire Bakery`}
                aria-label={`Freshly baked ${product.name.toLowerCase()} from Empire Bakery`}
                className="w-full max-w-[120px] h-auto mb-3"
                loading="lazy"
              />
              <p className="font-semibold text-[var(--color-brand-secondary)]">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
<section className="div">
  <a href="" className="button__test">Click me</a>
</section>