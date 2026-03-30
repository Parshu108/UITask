import { LuClipboardList } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { RiCapsuleLine } from "react-icons/ri";
import { SiPronounsdotpage } from "react-icons/si";
import { FaBed } from "react-icons/fa";
export default function Services() {
  return (
    <>
      <div className="px-10 py-20 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-green-700">Services</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          "Comprehensive Ayurvedic healthcare services blending tradition with
          modern excellence"
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?crop=entro…G1lZGljYWwlMjBkZXNrfGVufDF8fHx8MTc3MzEzMDc5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reception, Registration & Billing"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              ></img>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <LuClipboardList className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reception, Registration & Billing
              </h3>
              <p className="text-gray-600 mb-4">
                Streamlined patient registration and billing services
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1764727291644-5dcb0b1a0375?crop=entro…G1lZGljYWwlMjBkZXNrfGVufDF8fHx8MTc3MzEzMDc5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reception, Registration & Billing"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              ></img>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <FiAlertCircle className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Information Desk
              </h3>
              <p className="text-gray-600 mb-4">
                Complete guidance and support for all your queries
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entro…2N0b3IlMjBwYXRpZW50fGVufDF8fHx8MTc3MzEzMDc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Consultation Services"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              ></img>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <FaStethoscope className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Consultation Services
              </h3>
              <p className="text-gray-600 mb-4">
                Expert consultations across multiple Ayurvedic specialties
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Ayurveda General Practice
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">Panchakarma Therapy</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Rasayana – Rejuvenation Therapy
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Shalya Tantra – General Surgery & Ano-rectal Diseases
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Shalya Tantra – Ksharakarma, Agnikarma & Raktamokshana
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Shalakya Tantra – ENT & Eye
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1734607404481-856b3c04be29?crop=entro…ZWduYW5jeSUyMGNhcmV8ZW58MXx8fHwxNzczMTMwNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Supraja – Fertility & Wellness"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              ></img>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <FaRegHeart className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Supraja – Fertility & Wellness
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive reproductive health and wellness services
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Male & Female Infertility Consultation
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">Couple Counselling</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">Garbha Samskara</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">Garbhini Paricharya</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">Diet & Nutrition Advice</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">Lifestyle Modification</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Yoga, Pranayama & Dhyana Advice
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Swarna Prashana Samskara
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1768498950637-88d073faa491?crop=entro…3N0aWMlMjB0ZXN0aW5nfGVufDF8fHx8MTc3MzEzMDc5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Madhava – Diagnostic Laboratory"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              ></img>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <ImLab className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Madhava – Diagnostic Laboratory
              </h3>
              <p className="text-gray-600 mb-4">
                Modern diagnostic services with accurate results
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entro…mJhbCUyMG1lZGljaW5lfGVufDF8fHx8MTc3MzEzMDc5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bheshaja – Ayurveda Pharmacy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              ></img>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <RiCapsuleLine className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bheshaja – Ayurveda Pharmacy
              </h3>
              <p className="text-gray-600 mb-4">
                Authentic Ayurvedic medicines and preparations
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1611095789391-947c8f94179c?crop=entro…XJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc3MzEzMDc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Niramaya – Panchakarma Therapy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <SiPronounsdotpage className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Niramaya – Panchakarma Therapy
              </h3>
              <p className="text-gray-600 mb-4">
                Traditional detoxification and rejuvenation treatments
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entro…mJhbCUyMG1lZGljaW5lfGVufDF8fHx8MTc3MzEzMDc5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ananda – Retiring & Observation Room"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              ></img>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 bg-emerald-100">
                <FaBed className="w-8 h-8 object-fit-cover text-emerald-600 hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ananda – Retiring & Observation Room
              </h3>
              <p className="text-gray-600 mb-4">
                Comfortable resting facilities for patient care
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="px-4 sm:px-8 lg:px-16 py-16 bg-white">
        {/* Container */}
        <div className="bg-emerald-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <FaRegHeart className="lucide lucide-heart w-8 h-8 mx-auto mb-3 text-amber-300" />
              <p className="text-lg italic">
                "Choose Sankalpa – Where Tradition Heals, and Research Reveals."
              </p>
            </div>
            <div className="p-4">
              <FaRegHeart className="lucide lucide-heart w-8 h-8 mx-auto mb-3 text-amber-300" />
              <p className="text-lg italic">
                "Not just treatment, but transformation."
              </p>
            </div>
            <div className="p-4">
              <FaRegHeart className="lucide lucide-heart w-8 h-8 mx-auto mb-3 text-amber-300" />
              <p className="text-lg italic">"Your Sankalpa, Our Ayurveda."</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
