'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: PageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Produk tidak ditemukan</h1>
          <Link href="/products" className="mt-4 inline-block text-blue-600 hover:text-blue-500">
            Kembali ke daftar produk
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const whatsappUrl = product.whatsappNumber && product.whatsappMessage
    ? `https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`
    : undefined;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
          {/* Product images */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={800}
                height={800}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${product.name} - ${index + 2}`}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-blue-600">{formatPrice(product.price)}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Kategori</h3>
              <div className="mt-2">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors duration-200"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>
                  Hubungi via WhatsApp
                </a>
              )}
              {product.shopeeLink && (
                <a
                  href={product.shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors duration-200"
                >
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Beli di Shopee
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 