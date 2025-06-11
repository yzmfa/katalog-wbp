import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ProductCategory } from '@/types/product';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ProductsPage({ searchParams }: PageProps) {
  const selectedCategory = searchParams.category as ProductCategory | undefined;
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Katalog Produk</h1>
          <p className="mt-4 text-lg text-gray-500">
            Temukan berbagai produk unik dan berkualitas hasil karya Warga Binaan Pemasyarakatan
          </p>

          {/* Category filters */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/products"
              className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                !selectedCategory
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Semua
            </a>
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/products?category=${category.id}`}
                className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </a>
            ))}
          </div>

          {/* Product grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-500">Tidak ada produk yang ditemukan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 