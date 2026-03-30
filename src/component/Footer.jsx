import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0b3d2e] to-[#0f5c45] text-white px-4 sm:px-8 lg:px-16 py-14">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-600 w-12 h-12 flex items-center justify-center rounded-full font-bold">
              <img
                src="/logo.png"
                alt="logo"
                className="w-full h-full object-contain "
              />
            </div>
            <div>
              <h2 className="font-bold text-lg">SANKALPA</h2>
              <p className="text-sm text-gray-300">Ayurveda Hospital</p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Where ancient Ayurvedic wisdom meets modern research, nurturing
            health, harmony, and hope for humanity.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {[
              <IoLogoFacebook />,
              <FaInstagram />,
              <FaTwitter />,
              <FaYoutube />,
            ].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-emerald-600 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-emerald-500 transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Treatments</li>
            <li className="hover:text-white cursor-pointer">Why Choose Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-emerald-600 text-xl" /> +91 98765
              43210
            </p>
            <p className="flex items-center gap-2">
              <IoMdMailOpen className="text-emerald-600 text-xl" />{" "}
              info@sankalpaayurveda.com
            </p>
            <p className="flex items-start gap-2">
              <CiLocationOn className="text-emerald-600 text-xl" /> Sankalpa
              Ayurveda Hospital <br />
              Dharwad, Karnataka, India
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Working Hours</h3>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <MdOutlineWatchLater className="text-emerald-600 text-xl" />
              <div>
                <p className="font-medium text-white">Monday - Saturday</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MdOutlineWatchLater className="text-emerald-600 text-xl" />
              <div>
                <p className="font-medium text-white">Sunday</p>
                <p>9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-700">
              <p className="text-emerald-400 font-medium">Emergency Services</p>
              <p>Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-emerald-700 mt-10 pt-6 text-sm text-gray-300 flex flex-col lg:flex-row justify-between items-center gap-4">
        <p>
          © 2026 Sankalpa Ayurveda Hospital & Research Centre. All rights
          reserved.
        </p>

        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">Disclaimer</span>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-4 text-sm text-emerald-400">
        <p>
          "Your Sankalpa, Our Ayurveda" – Heal in Sankalpa and Heal by Sankalpa
        </p>

        <p className="mt-2 text-gray-300">
          Designed with ❤️ by{" "}
          <span className="text-emerald-400 font-medium">
            Newrise Technosys Pvt Ltd
          </span>
        </p>
      </div>
    </footer>
  );
}
