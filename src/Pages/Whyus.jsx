export default function WhyUs() {
  return (
    <div className="py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* ================= HEADER ================= */}
      <section className="px-4 md:px-8 py-16 text-center max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900">
          Why Choose <span className="text-emerald-600">Sankalpa?</span>
        </h2>

        <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>

        <p className="mx-auto text-gray-600 text-xl mx-w-3xl leading-relaxed">
          We blend the timeless wisdom of Ayurveda with cutting-edge research
          and compassionate care. Choosing us means choosing a journey of
          healing that is authentic, personalised, and holistic.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="px-4 sm:px-8 lg:px-16 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "9 Decades of Excellence",
              desc: "Ayurveda practitioner for 9 decades and 3 generations. Promising and proven result-oriented treatments.",
              color: "bg-green-100 text-green-700",
              icon: "🏅",
            },
            {
              title: "Authentic Ayurveda",
              desc: "Treatments rooted in traditional and classical Ayurveda, practised with integrity. Served more than 10 Lakh patients from across the globe.",
              color: "bg-blue-100 text-blue-600",
              icon: "🛡️",
            },
            {
              title: "Research-Driven Excellence",
              desc: "Evidence-based protocols integrating traditional wisdom with modern validation.",
              color: "bg-purple-100 text-purple-600",
              icon: "⚗️",
            },
            {
              title: "Personalised Care",
              desc: "Customised therapies to your Prakriti (constitution) and health needs. Yoga, diet, and Nutrition, Infertility, and couples counselling.",
              color: "bg-pink-100 text-pink-600",
              icon: "❤️",
            },
            {
              title: "Comprehensive Healing",
              desc: "Not just symptom relief, but restoration of balance in body, mind, and spirit. Less invasive, painless, harmless, and affordable treatments.",
              color: "bg-green-100 text-green-700",
              icon: "🌿",
            },
            {
              title: "Expert Team",
              desc: "Experienced Ayurvedic physicians, researchers, and therapists working in synergy.",
              color: "bg-orange-100 text-orange-600",
              icon: "👨‍⚕️",
            },
            {
              title: "State-of-the-Art Facilities",
              desc: "Modern infrastructure supporting traditional Panchakarma, Reproductive and Regenerative medicines, wellness, and integrative therapies.",
              color: "bg-indigo-100 text-indigo-600",
              icon: "🏢",
            },
            {
              title: "Eco-Conscious & Ethical",
              desc: "Sustainable practices, ethical sourcing of medicines, and community-centred healthcare.",
              color: "bg-teal-100 text-teal-600",
              icon: "🌱",
            },
            {
              title: "Education & Awareness",
              desc: "Empowering patients with lifestyle guidance, yoga, meditation, and mindful living.",
              color: "bg-sky-100 text-sky-600",
              icon: "🎓",
            },
            {
              title: "Global Outlook, Indian Soul",
              desc: "A vision that connects Ayurveda with international research while staying true to its roots.",
              color: "bg-purple-100 text-purple-600",
              icon: "🌍",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-xl mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 ">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-4 sm:px-8 lg:px-16 pb-16">
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-2xl text-center py-12 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Just Treatment, But Transformation
          </h2>

          <p className="text-xl opacity-98 mb-8">
            Choose Sankalpa – Where Tradition Heals, and Research Reveals
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg ">
              Book Your Appointment
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white transition-all hover:text-emerald-700">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="px-4 sm:px-8 lg:px-16 py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-700">Values</span>
          </h2>

          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>

          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-600">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {[
              {
                title: "Care with Compassion",
                desc: "Every patient is treated with empathy, respect, and personalized attention",
                bg: "bg-gradient-to-r from-pink-500 to-pink-400",
                icon: "❤️",
              },
              {
                title: "Research with Innovation",
                desc: "Continuously advancing Ayurveda through evidence-based research and modern science",
                bg: "bg-gradient-to-r from-yellow-400 to-orange-400",
                icon: "💡",
              },
              {
                title: "Healing with Integrity",
                desc: "Ethical, authentic, and quality Ayurveda services rooted in traditional wisdom",
                bg: "bg-gradient-to-r from-green-500 to-green-400",
                icon: "🛡️",
              },
              {
                title: "Passion & Commitment",
                desc: "Dedicated to Ayurveda excellence and unwavering commitment to patient well-being",
                bg: "bg-gradient-to-r from-orange-500 to-red-500",
                icon: "🔥",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} text-white group relative overflow-hidden mx-w-5 mt-4 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-trnslate-y-2`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>

                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
