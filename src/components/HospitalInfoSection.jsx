const HospitalInfoSection = () => {
  const stats = [
    {
      number: "15,000+",
      label: "Happy Patients",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      number: "50+",
      label: "Expert Doctors",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
      ),
    },
    {
      number: "100+",
      label: "Hospital Beds",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7v10" />
          <path d="M21 7v10" />
          <path d="M3 13h18" />
          <path d="M7 13V9h5a3 3 0 0 1 3 3v1" />
        </svg>
      ),
    },
    {
      number: "30+",
      label: "Years Experience",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
  ];

  const features = [
    "Modern Infrastructure",
    "Advanced Medical Technology",
    "Patient-Centered Approach",
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-14 overflow-hidden">

      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* LEFT SIDE */}
        <div className="relative w-full lg:w-1/2">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Hospital"
            className="
              w-full
              h-65 sm:h-95 lg:h-130
              object-cover
              rounded-2xl lg:rounded-3xl
              shadow-xl
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl lg:rounded-3xl"></div>

          {/* Play Button */}
          <button
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-14 h-14 sm:w-20 sm:h-20
              rounded-full bg-white
              flex items-center justify-center
              shadow-2xl
              hover:scale-110 transition-all duration-300
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#2563eb"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2">

          {/* Subtitle */}
          <span
            className="
              inline-block
              text-[11px] sm:text-sm
              font-semibold
              text-blue-600
              uppercase
              tracking-[2px]
              bg-blue-50
              px-4 py-1.5
              rounded-full
            "
          >
            ABOUT CITYCARE HOSPITAL
          </span>

          {/* Heading */}
          <h2
            className="
              mt-4
              text-2xl sm:text-4xl lg:text-5xl
              font-bold
              text-slate-800
              leading-tight
            "
          >
            We Care for Your Health and Well Being
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              text-sm sm:text-base
              text-slate-500
              leading-relaxed
            "
          >
            CityCare Hospital is dedicated to delivering exceptional healthcare
            services with advanced medical technology, experienced doctors, and
            compassionate patient care in a modern healing environment.
          </p>

          {/* Features */}
          <div className="mt-7 flex flex-col gap-4">

            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                {/* Check Icon */}
                <div
                  className="
                    min-w-7 min-h-7
                    rounded-full
                    bg-green-100
                    text-green-600
                    flex items-center justify-center
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div
            className="
              mt-8
              grid grid-cols-2
              sm:grid-cols-2
              lg:grid-cols-4
              gap-3 sm:gap-4
            "
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  bg-blue-50
                  rounded-2xl
                  p-4 sm:p-5
                  text-center
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    mx-auto
                    rounded-full
                    bg-white
                    flex items-center justify-center
                    text-blue-600
                    shadow-sm
                  "
                >
                  {item.icon}
                </div>

                {/* Number */}
                <h3
                  className="
                    mt-3
                    text-lg sm:text-2xl
                    font-bold
                    text-slate-800
                  "
                >
                  {item.number}
                </h3>

                {/* Label */}
                <p
                  className="
                    mt-1
                    text-[12px] sm:text-sm
                    text-slate-500
                    leading-snug
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HospitalInfoSection;