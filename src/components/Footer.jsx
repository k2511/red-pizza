export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🍕 RedPizza</h2>
          <p className="text-sm">
            Fresh, hot, and delicious pizza delivered straight to your door.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/menu" className="hover:text-white">Menu</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">📍 123 Pizza Street, Food City</p>
          <p className="text-sm">📞 +1 (234) 567-890</p>
          <p className="text-sm">✉️ order@redpizza.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} RedPizza. All rights reserved.
      </div>
    </footer>
  );
}
