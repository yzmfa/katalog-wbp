import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'Fashion',
    name: 'Fashion',
    description: 'Koleksi pakaian dan aksesoris hasil karya WBP',
    image: '/images/categories/fashion.jpg'
  },
  {
    id: 'Handcraft',
    name: 'Handcraft',
    description: 'Kerajinan tangan unik dan kreatif',
    image: '/images/categories/handcraft.jpg'
  },
  {
    id: 'Furniture',
    name: 'Furniture',
    description: 'Furnitur berkualitas dengan sentuhan seni',
    image: '/images/categories/furniture.jpg'
  }
];

export const products: Product[] = [
  // Fashion Products
  {
    id: 'fashion-1',
    name: 'Kemeja Batik Modern',
    description: 'Kemeja batik dengan desain modern dan nyaman dipakai. Terbuat dari bahan berkualitas tinggi dengan motif batik yang elegan.',
    price: 250000,
    category: 'Fashion',
    images: ['/images/products/kemeja-batik.jpg', '/images/products/kemeja-batik-2.jpg'],
    featured: true,
    shopeeLink: 'https://shopee.co.id/kemeja-batik-modern',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Kemeja Batik Modern'
  },
  {
    id: 'fashion-2',
    name: 'Tas Rajut Tradisional',
    description: 'Tas rajut dengan motif tradisional yang unik. Dibuat dengan tangan menggunakan teknik rajut tradisional.',
    price: 180000,
    category: 'Fashion',
    images: ['/images/products/tas-rajut.jpg'],
    featured: false,
    shopeeLink: 'https://shopee.co.id/tas-rajut-tradisional',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Tas Rajut Tradisional'
  },
  {
    id: 'fashion-3',
    name: 'Sarung Tenun Premium',
    description: 'Sarung tenun dengan kualitas premium. Motif tradisional yang elegan dan nyaman dipakai.',
    price: 350000,
    category: 'Fashion',
    images: ['/images/products/sarung-tenun.jpg'],
    featured: false,
    shopeeLink: 'https://shopee.co.id/sarung-tenun-premium',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Sarung Tenun Premium'
  },

  // Handcraft Products
  {
    id: 'handcraft-1',
    name: 'Lukisan Kanvas',
    description: 'Lukisan kanvas dengan tema pemandangan alam. Dibuat dengan teknik melukis yang detail dan warna yang hidup.',
    price: 500000,
    category: 'Handcraft',
    images: ['/images/products/lukisan-kanvas.jpg'],
    featured: true,
    shopeeLink: 'https://shopee.co.id/lukisan-kanvas',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Lukisan Kanvas'
  },
  {
    id: 'handcraft-2',
    name: 'Kerajinan Kayu Ukir',
    description: 'Kerajinan kayu dengan ukiran tradisional. Detail yang halus dan kualitas kayu pilihan.',
    price: 450000,
    category: 'Handcraft',
    images: ['/images/products/kayu-ukir.jpg'],
    featured: false,
    shopeeLink: 'https://shopee.co.id/kerajinan-kayu-ukir',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Kerajinan Kayu Ukir'
  },
  {
    id: 'handcraft-3',
    name: 'Vas Keramik',
    description: 'Vas keramik dengan motif batik. Dibuat dengan teknik pembakaran khusus untuk hasil yang tahan lama.',
    price: 200000,
    category: 'Handcraft',
    images: ['/images/products/vas-keramik.jpg'],
    featured: false,
    shopeeLink: 'https://shopee.co.id/vas-keramik',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Vas Keramik'
  },

  // Furniture Products
  {
    id: 'furniture-1',
    name: 'Meja Kayu Jati',
    description: 'Meja kayu jati dengan kualitas premium. Desain minimalis dan tahan lama.',
    price: 2500000,
    category: 'Furniture',
    images: ['/images/products/meja-jati.jpg'],
    featured: true,
    shopeeLink: 'https://shopee.co.id/meja-kayu-jati',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Meja Kayu Jati'
  },
  {
    id: 'furniture-2',
    name: 'Kursi Rotan',
    description: 'Kursi rotan dengan desain modern. Nyaman dan tahan lama.',
    price: 1500000,
    category: 'Furniture',
    images: ['/images/products/kursi-rotan.jpg'],
    featured: false,
    shopeeLink: 'https://shopee.co.id/kursi-rotan',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Kursi Rotan'
  },
  {
    id: 'furniture-3',
    name: 'Lemari Kayu',
    description: 'Lemari kayu dengan ukiran tradisional. Kualitas premium dan tahan lama.',
    price: 3500000,
    category: 'Furniture',
    images: ['/images/products/lemari-kayu.jpg'],
    featured: false,
    shopeeLink: 'https://shopee.co.id/lemari-kayu',
    whatsappNumber: '6281234567890',
    whatsappMessage: 'Halo, saya tertarik dengan Lemari Kayu'
  }
]; 