import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h6 className="text-base font-semibold text-white mb-4">
              Katalog WBP
            </h6>
            <p className="max-w-xs mx-auto md:mx-0">
              Katalog WBP adalah website yang menyediakan katalog produk dari Warga Binaan Pemasyarakatan untuk memberikan edukasi dan informasi kepada semua pengguna.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h6 className="text-base font-semibold text-white mb-4">
              Contact Us
            </h6>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <i className="fas fa-map-marker-alt text-gray-400"></i>
                <span>Jl. Raya Semarang-Boja, Wates, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50188</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <i className="fas fa-envelope text-gray-400"></i>
                <a
                  href="mailto:hello@katalogwbp.com"
                  className="hover:text-white transition-colors"
                >
                  hello@katalogwbp.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <i className="fas fa-phone-alt text-gray-400"></i>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Katalog WBP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 