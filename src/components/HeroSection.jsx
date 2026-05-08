const HeroSection = () => {
  return (
    <section className=" bg-white flex items-center px-2 py-0 md:px-12 lg:px-0">
      <div className=" relative mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 ">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left px-6 py-2 relative z-20">
          {/* Small Heading */}
          <span className="inline-block text-[#2563eb] font-semibold text-sm uppercase tracking-widest">
            Your Health, Our Priority
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Compassionate Care for a{" "}
            <span className="text-[#2563eb]">Healthier Tomorrow</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            We are dedicated to providing world-class medical care with empathy
            and excellence. Your well-being is at the heart of everything we do
            — from routine checkups to advanced treatments.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-base">
              Book Appointment
            </button>

            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
              Call Us
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 justify-center md:justify-start mt-4 pt-4 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-gray-900">15K+</p>
              <p className="text-sm text-gray-400">Patients Treated</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-gray-900">200+</p>
              <p className="text-sm text-gray-400">Expert Doctors</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Right Side — Hospital Image */}
        <div className="flex-1 w-full">
          <div className="relative">
            {/* Decorative background blob */}
            <div className=" -top-6 -right-6 w-full h-full bg-blue-50 rounded-3xl -z-10 hidden md:flex" />

            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80"
              alt="Modern hospital building with professional medical staff"
              className="w-full h-100 md:h-130 object-cover  shadow-xl"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
              }}
            />

            {/* Floating Badge */}
            <div className="absolute z-10 bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
              <div className="bg-green-100 rounded-full p-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Available 24/7</p>
                <p className="text-sm font-semibold text-gray-800">
                  Emergency Care
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0.5 bg-linear-to-r from-sky-50 to-sky-400/20  "></div>
      </div>
    </section>
  );
};

export default HeroSection;
