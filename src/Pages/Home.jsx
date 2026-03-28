// import img1 from "/image.png";
// import img2 from "/image1.png";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center px-5 sm:px-10 py-12 sm:py-16 gap-10 max-w-7xl mx-auto">
        {/* Left */}
        <div>
          <p className="px-4 py-2 bg-emerald-100 text-emerald-600 text-sm rounded-full w-75 fw-medium">
            9 Decades of Ayurvedic Excellence
          </p>
          <h1 className="text-5xl sm:text-4xl lg:text-7xl font-bold text-gray-900">
            Your Sankalpa, <br />
            <span className="text-emerald-500">Our Ayurveda</span>
          </h1>

          <p className="mt-5 text-gray-600 text-sm sm:text-lg">
            Healing with Wisdom, Research with Purpose
          </p>
          <p className="mt-5 text-gray-600 text-sm sm:text-lg w-100">
            Where ancient Ayurvedic wisdom meets modern research, nurturing
            health, harmony, and hope for humanity.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-5">
            <button className="bg-emerald-600 text-white  px-4 py-4 rounded-full transition-all transform hover:scale-105">
              Book Appointment
            </button>
            <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full">
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 text-emerald-600 font-bold">
            <div>
              <h2 className="text-xl sm:text-2xl">10L+</h2>
              <p className="text-gray-500 text-xl sm:text-sm">
                Patients Treated
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl">90+</h2>
              <p className="text-gray-500 text-xl sm:text-sm">Years Legacy</p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl">3</h2>
              <p className="text-gray-500 text-xl sm:text-sm">Generations</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full">
          {/* Image */}
          <img src="/image1.png" alt="" className="rounded-xl shadow w-full" />

          {/* Motto Card */}
          <div
            className="
            absolute 
            bottom-0 
            left-1/5 
            transform -translate-x-1/2 translate-y-1/3
           bg-white 
            p-4 sm:p-6 
            rounded-xl 
            shadow-xl 
            w-[90%] sm:max-w-xs
            hidden md:block"
          >
            <p className="text-sm text-gray-600 mb-2">Our Motto</p>
            <p className="font-semibold text-emerald-800 italic text-sm sm:text-base">
              "Heal in Sankalpa and Heal by Sankalpa"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
