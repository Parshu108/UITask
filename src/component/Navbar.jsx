import { useState } from "react";
import { Link } from "react-router-dom";
// import img1 from "/logo1.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white text-xs sm:text-sm px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between gap-3">
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <span>📞 +91 98765 43210</span>
          <span>✉️ info@sankalpaayurveda.com</span>
        </div>
        <div>📍 Dharwad, Karnataka</div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4  bg-white shadow mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
            S
          </div>
          <div>
            <h1 className="font-bold text-emerald-700">SANKALPA</h1>
            <p className="text-xs text-gray-500 hidden sm:block">
              Ayurveda Hospital & Research Centre
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium">
          <Link to="/home" className="hover:text-emerald-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-emerald-600">
            About
          </Link>
          <Link to="/service" className="hover:text-emerald-600">
            Services
          </Link>
          <Link to="/treatment" className="hover:text-emerald-600">
            Treatments
          </Link>
          <Link to="whyus" className="hover:text-emerald-600">
            Why Us
          </Link>
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-full">
            Contact
          </button>
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden block bg-white px-6 py-4 space-y-4 shadow">
          <Link to="/home" className="hover:text-emerald-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-emerald-600">
            About
          </Link>
          <Link to="/service" className="hover:text-emerald-600">
            Services
          </Link>
          <Link to="/treatment" className="hover:text-emerald-600">
            Treatments
          </Link>
          <Link to="whyus" className="hover:text-emerald-600">
            Why Us
          </Link>
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-full w-full">
            Contact
          </button>
        </div>
      )}
    </>
  );
}
