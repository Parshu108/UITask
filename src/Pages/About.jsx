import { FaRegHeart } from "react-icons/fa";
export default function About() {
  return (
    <>
      <section className="px-4 sm:px-10 py-16 bg-gray-50">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-emerald-600">Sankalpa</span>
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-3 rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-green-50 border border-green-100 p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                🎯
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>

            <p className="text-gray-600 mb-4">
              To be a centre of excellence in holistic healing of patients,
              research, and integrating traditional wisdom with modern
              scientific advancements for the well-being of society.
            </p>

            <p className="text-gray-600 mb-6">
              We envision Sankalpa as a centre for cultivating wellness,
              advancing evidence-based Ayurveda, and inspiring a global movement
              towards natural and sustainable health care.
            </p>

            {/* Highlight Box */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-md">
              <h4 className="font-semibold text-gray-800 mb-1">
                Sannati Fertility and Wellness Centre
              </h4>
              <p className="text-sm text-gray-600">
                To make every couple's dream come true with healthy progeny –
                'SUPRAJA'. To lead with innovation, integrity and empathy in
                reproductive health.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-yellow-50 border border-yellow-100 p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                📌
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>

            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <li>
                • To deliver authentic, compassionate, and patient-centered
                Ayurvedic care rooted in tradition and enriched with modern
                clinical excellence.
              </li>
              <li>
                • To establish a research-driven ecosystem that validates and
                innovates Ayurvedic therapies for contemporary health
                challenges.
              </li>
              <li>
                • To integrate predictive, preventive, promotive, personalised,
                curative, and regenerative approaches for complete well-being.
              </li>
              <li>
                • To nurture the next generation of Ayurveda physicians,
                researchers, and healers through education, training, and
                experiential learning.
              </li>
              <li>
                • To contribute to community health and global wellness through
                outreach programs, publications, and collaborations.
              </li>
            </ul>
          </div>
        </div>
      </section>
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
