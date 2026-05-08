

/* ================= ICONS ================= */

const CardiologyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" fillOpacity="0.15" />
    <path d="M8 12h2l2-4 2 8 2-4h2" strokeWidth={1.8} />
  </svg>
);

const NeurologyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" fill="currentColor" fillOpacity="0.15" />
    <path d="M8 18c1.5-2 3-3 4-3s2.5 1 4 3" />
  </svg>
);

const OrthopedicsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" />
    <path d="M8 7h8" />
    <path d="M8 12h8" />
    <path d="M8 17h8" />
  </svg>
);

const PediatricsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="3.5" fill="currentColor" fillOpacity="0.15" />
    <path d="M6 18c1.5-3 4-5 6-5s4.5 2 6 5" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ================= SERVICES DATA ================= */

const services = [
  {
    id: 1,
    Icon: CardiologyIcon,
    title: "Cardiology",
    desc: "Advanced heart care and 24/7 cardiac monitoring.",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    tag: "Heart Care",
    tagBg: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    Icon: NeurologyIcon,
    title: "Neurology",
    desc: "Expert treatment for brain and nervous system disorders.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    tag: "Brain Care",
    tagBg: "bg-violet-100 text-violet-600",
  },
  {
    id: 3,
    Icon: OrthopedicsIcon,
    title: "Orthopedics",
    desc: "Bone, joint, and spine treatments by specialists.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    tag: "Bone Care",
    tagBg: "bg-teal-100 text-teal-600",
  },
  {
    id: 4,
    Icon: PediatricsIcon,
    title: "Pediatrics",
    desc: "Compassionate healthcare for children and newborns.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    tag: "Child Care",
    tagBg: "bg-amber-100 text-amber-600",
  },
];

/* ================= COMPONENT ================= */

export default function HospitalServicesSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#f8fbff] to-[#eef5ff] px-5 sm:px-8 lg:px-14 ">

      {/* Heading */}
      <div className="text-center mb-4">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
          Our Services
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight">
          Exceptional Medical
          <span className="text-blue-600"> Care</span>
        </h2>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
          We provide world-class healthcare services with experienced doctors,
          advanced technology, and patient-first treatment.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service, index) => (
          <div
            key={service.id}
            className="
              group relative overflow-hidden
              bg-white rounded-3xl
              p-6 border border-gray-100
              shadow-lg hover:shadow-2xl
              hover:-translate-y-3
              transition-all duration-500
            "
            style={{
              animation: "fadeUp 0.6s ease-out both",
              animationDelay: `${index * 100}ms`,
            }}
          >

            {/* Background Glow */}
            <div className="
              absolute -top-10 -right-10 w-32 h-32
              bg-blue-100/40 rounded-full blur-3xl
              opacity-0 group-hover:opacity-100
              transition duration-500
            " />

            {/* Top Row */}
            <div className="relative flex items-center justify-between">

              {/* Icon */}
              <div
                className={`
                  w-14 h-14 rounded-2xl
                  flex items-center justify-center
                  ${service.iconBg} ${service.iconColor}
                  shadow-md
                  group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-500
                `}
              >
                <service.Icon />
              </div>

              {/* Tag */}
              <span
                className={`
                  text-[10px] font-bold uppercase tracking-wide
                  px-3 py-1 rounded-full
                  ${service.tagBg}
                `}
              >
                {service.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="
              mt-6 text-xl font-bold text-slate-800
              group-hover:text-blue-600
              transition-colors duration-300
            ">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              {service.desc}
            </p>

            {/* Divider */}
            <div className="
              mt-5 w-10 h-1 rounded-full bg-blue-100
              group-hover:w-20 group-hover:bg-blue-500
              transition-all duration-500
            " />

            {/* Button */}
            <button className="
              mt-6 flex items-center gap-2
              text-sm font-semibold text-blue-600
              group-hover:gap-4
              transition-all duration-300
            ">
              Learn More
              <ArrowIcon />
            </button>

          </div>
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}