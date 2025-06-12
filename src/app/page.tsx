import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/data/products';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div id="hero" className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 scroll-mt-24">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Temukan Produk Berkualitas dari Warga Binaan Pemasyarakatan
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Jelajahi berbagai produk unik dan berkualitas hasil karya Warga Binaan Pemasyarakatan. Dukung karya mereka dan dapatkan produk terbaik.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" href="/products">
                  Lihat Katalog
                </Button>
                <Button size="lg" variant='secondary' href="/#categories">
                  Jelajahi Kategori
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="relative w-full max-w-[550px] mx-auto aspect-square overflow-hidden rounded-[80px]">
              <Image
                src="/images/hero.png"
                alt="Kerajinan WBP"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products section */}
      <div id="featured-products" className="bg-white py-24 sm:py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Produk Unggulan</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Temukan produk-produk terbaik dari Warga Binaan Pemasyarakatan
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </div>

      {/* Categories section */}
      <div id="categories" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 scroll-mt-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kategori Produk</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Jelajahi berbagai kategori produk hasil karya Warga Binaan Pemasyarakatan
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="relative aspect-h-3 aspect-w-4 bg-gray-200 sm:aspect-none sm:h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
                <div className="mt-6">
                  <Button variant='secondary' fullWidth href={`/products?category=${category.id}`}>
                    Lihat Produk
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location section */}
      <div id="location" className="bg-gray-50 py-16 sm:py-24 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lokasi Kami</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Kunjungi Lembaga Pemasyarakatan Kelas I Semarang
            </p>
          </div>
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="aspect-[32/9] w-full overflow-hidden rounded-xl shadow-lg max-h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9564951266148!2d110.33552527499741!3d-7.0143993929870785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f4b3ec6f122b%3A0xbe1768cffef4275a!2sLembaga%20Pemasyarakatan%20Kelas%20I%20Semarang!5e0!3m2!1sid!2sid!4v1749637229263!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lembaga Pemasyarakatan Kelas I Semarang"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-base text-gray-600">
              Jl. Raya Semarang-Boja, Wates, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50188
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
