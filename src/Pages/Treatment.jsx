import { FiAward } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { RiCapsuleLine } from "react-icons/ri";
import { CiStethoscope } from "react-icons/ci";
export default function Treatments() {
  const treatments = [
    {
      title: "PCOS - Polycystic Ovarian Syndrome",
      color: "bg-green-100 border-green-400 text-green-700",
      icon: "💚",
    },
    {
      title: "Infertility - Male & Female",
      color: "bg-red-100 border-red-400 text-red-600",
      icon: "👶",
    },
    {
      title: "Obesity - Weight Management",
      color: "bg-yellow-100 border-yellow-400 text-yellow-700",
      icon: "⚖️",
    },
    {
      title: "Skin Care & Beauty Treatments",
      color: "bg-pink-100 border-pink-400 text-pink-600",
      icon: "✨",
    },
    {
      title: "Diabetes Mellitus",
      color: "bg-blue-100 border-blue-400 text-blue-600",
      icon: "📈",
    },
    {
      title: "Piles (Hemorrhoids)",
      color: "bg-red-100 border-red-400 text-red-600",
      icon: "🔴",
    },
    {
      title: "Fissure & Fistula",
      color: "bg-orange-100 border-orange-400 text-orange-600",
      icon: "⭕",
    },
    {
      title: "IBS - Irritable Bowel Syndrome",
      color: "bg-indigo-100 border-indigo-400 text-indigo-600",
      icon: "〰️",
    },
    {
      title: "Arthritis & Joint Pain",
      color: "bg-teal-100 border-teal-400 text-teal-700",
      icon: "🦴",
    },
    {
      title: "Spondylosis - Cervical & Lumbar",
      color: "bg-cyan-100 border-cyan-400 text-cyan-700",
      icon: "🦴",
    },
    {
      title: "Migraine & Headaches",
      color: "bg-purple-100 border-purple-400 text-purple-600",
      icon: "🧠",
    },
    {
      title: "Sinusitis & Respiratory Issues",
      color: "bg-sky-100 border-sky-400 text-sky-700",
      icon: "💨",
    },
    {
      title: "Stress & Anxiety Management",
      color: "bg-violet-100 border-violet-400 text-violet-600",
      icon: "🧠",
    },
    {
      title: "Gastritis & Acidity",
      color: "bg-lime-100 border-lime-400 text-lime-700",
      icon: "⚡",
    },
    {
      title: "Psoriasis & Eczema",
      color: "bg-fuchsia-100 border-fuchsia-400 text-fuchsia-600",
      icon: "✨",
    },
    {
      title: "Hair Fall & Premature Greying",
      color: "bg-yellow-100 border-yellow-400 text-yellow-700",
      icon: "⭐",
    },
    {
      title: "General Weakness & Fatigue",
      color: "bg-green-100 border-green-400 text-green-700",
      icon: "💚",
    },
    {
      title: "Eye Disorders",
      color: "bg-blue-100 border-blue-400 text-blue-600",
      icon: "👁️",
    },
  ];

  return (
    <>
      <section className="px-4 sm:px-8 lg:px-16 py-16 bg-[#f7f9f8]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Special <span className="text-emerald-600">Treatments</span>
          </h2>
          <div className="w-16 h-[3px] bg-green-600 mx-auto mt-3 rounded-full"></div>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-xl ">
            We specialize in treating a wide range of health conditions with
            authentic Ayurvedic therapies
          </p>
        </div>

        {/* Grid */}
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {treatments.map((item, index) => (
            <div
              key={index}
              className={`border ${item.color} rounded-2xl p-5 hover:shadow-md transition duration-300`}
            >
              {/* Icon */}
              <div className="text-2xl mb-3">{item.icon}</div>

              {/* Title */}
              <h3 className="font-semibold text-sm sm:text-base leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8 md:p-12 border-2 border-emerald-200">
            <RiCapsuleLine className="lucide lucide-pill w-12 h-12 text-emerald-600 mx-auto mb-4" />

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Holistic Approach to Healing
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              "Our treatments focus on addressing the root cause, not just
              symptoms. We combine traditional Panchakarma therapies, herbal
              medicines, dietary modifications, and lifestyle counseling for
              comprehensive healing."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="px-4 py-2 bg-white rounded-full">
                ✓ Personalized Treatment Plans
              </span>
              <span className="px-4 py-2 bg-white rounded-full">
                ✓ Evidence-Based Protocols
              </span>
              <span className="px-4 py-2 bg-white rounded-full">
                ✓ Expert Ayurvedic Physicians
              </span>
              <span className="px-4 py-2 bg-white rounded-full">
                ✓ Natural & Safe
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-white m via-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4  md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              "Meet Our "
              <span className="text-emerald-600">Expert Physicians</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced Ayurvedic physicians dedicated to your health and
              well-being
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8  lg:gap-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl        transition-all transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="/image1.png"
                  alt="Dr. Santrupti Katti"
                  className="w-full h-full object-cover"
                ></img>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Dr. Santrupti Katti
                </h3>
                <p className="text-emerald-600 font-semibold mb-1">
                  BAMS, MD (Ayurveda)
                </p>
                <p className="text-gray-700 mb-4">Chief Physician & Director</p>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <FiAward className="lucide lucide-award w-5 h-5 text-amber-500" />
                  <span className="font-medium">25+ Years Experience</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Areas of Expertise:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      Panchakarma
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      Reproductive Health
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      General Ayurveda
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl        transition-all transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src="/image.png"
                  alt="Dr. Santrupti Katti"
                  className="w-full h-full object-cover"
                ></img>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Dr. Pramod Katti
                </h3>
                <p className="text-emerald-600 font-semibold mb-1">
                  BAMS, MD (Ayurveda)
                </p>
                <p className="text-gray-700 mb-4">Senior Consultant</p>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <FiAward className="lucide lucide-award w-5 h-5 text-amber-500" />

                  <span className="font-medium">25+ Years Experience</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Areas of Expertise:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      Shalya Tantra
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      Research
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      Clinical Practice
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-xl p-6 text-center">
              <SlGraduation
                className="lucide lucide-graduation-cap w-10 h-10 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg mb-2">Highly Qualified</h4>
              <p className="text-sm text-emerald-100">
                Advanced degrees in Ayurvedic medicine with continuous research
                and training
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-xl p-6 text-center">
              <CiStethoscope
                className="lucide lucide-graduation-cap w-10 h-10 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg mb-2">
                Experienced Practitioners
              </h4>
              <p className="text-sm text-emerald-100">
                Decades of clinical experience treating thousands of patients
                successfully
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-xl p-6 text-center">
              <FiAward
                className="lucide lucide-graduation-cap w-10 h-10 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg mb-2">3 Generations Legacy</h4>
              <p className="text-sm text-emerald-100">
               Carrying forward 9 decades of authentic Ayurvedic healing tradition
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
