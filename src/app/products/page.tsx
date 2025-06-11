import { Suspense } from 'react';
import ProductsContent from '@/components/products/ProductsContent';

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Katalog Produk</h1>
          <p className="mt-4 text-lg text-gray-500">
            Temukan berbagai produk unik dan berkualitas hasil karya Warga Binaan Pemasyarakatan
          </p>

          <Suspense fallback={
            <div className="mt-8 text-center">
              <p className="text-gray-500">Memuat produk...</p>
            </div>
          }>
            <ProductsContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
} 