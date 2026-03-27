export default function Footer() {
  return (
    <div className="bg-emerald-600 text-white px-4 sm:px-10 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg">SANKALPA</h2>
          <p className="text-sm mt-3">
            Where ancient Ayurvedic wisdom meets modern research.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">+91 98765 43210</p>
          <p className="text-sm">info@sankalpaayurveda.com</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Working Hours</h3>
          <p className="text-sm">Mon-Sat: 9AM - 7PM</p>
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm mt-10">
        © 2026 Sankalpa Ayurveda
      </p>
    </div>
  );
}
