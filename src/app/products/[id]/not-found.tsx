import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Produk Tidak Ditemukan</h1>
          <p className="mt-4 text-base text-gray-500">
            Maaf, produk yang Anda cari tidak dapat ditemukan.
          </p>
          <div className="mt-10">
            <Button href="/products">
              Kembali ke Katalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 