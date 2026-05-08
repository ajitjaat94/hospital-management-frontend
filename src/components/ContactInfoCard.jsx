

// ✅ SVG as components — fixes map() rendering issue
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21.5l4.443-.873A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm5.093 13.56c-.214.599-1.322 1.17-1.796 1.207-.475.037-.921.18-3.093-.645-2.614-1.006-4.28-3.666-4.41-3.836-.13-.17-1.057-1.407-1.057-2.685 0-1.278.669-1.907.906-2.168.237-.261.517-.327.689-.327l.496.009c.159.007.373-.061.584.445.214.516.727 1.778.79 1.908.064.13.107.282.021.453-.086.17-.129.276-.257.424-.13.148-.272.33-.388.444-.13.13-.265.271-.114.532.151.26.672 1.107 1.443 1.793.99.883 1.825 1.156 2.086 1.286.261.13.413.108.565-.065.152-.172.649-.757.822-1.017.173-.261.346-.217.584-.13.238.086 1.513.714 1.773.845.26.13.433.195.496.303.064.108.064.624-.15 1.224Z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const contactCards = [
  {
    id: 1,
    Icon: PhoneIcon,
    iconBg: "bg-red-50",
    iconColor: "#dc2626",
    title: "Emergency Call",
    desc: "Reach our emergency team instantly, day or night.",
    value: "+98 983 948 990",
    valueColor: "text-red-600",
    badge: "24/7 Available",
    badgeBg: "bg-red-50 text-red-600",
    dot: "bg-red-500",
    shadowHover: "hover:shadow-red-200",
    borderHover: "hover:border-red-300",
  },
  {
    id: 2,
    Icon: WhatsAppIcon,
    iconBg: "bg-green-50",
    iconColor: "#16a34a",
    title: "WhatsApp Us",
    desc: "Chat with our team for quick medical guidance.",
    value: "Chat with our team",
    valueColor: "text-green-600",
    badge: "Quick Response",
    badgeBg: "bg-green-50 text-green-600",
    dot: "bg-green-500",
    shadowHover: "hover:shadow-green-200",
    borderHover: "hover:border-green-300",
  },
  {
    id: 3,
    Icon: LocationIcon,
    iconBg: "bg-blue-50",
    iconColor: "#2563eb",
    title: "Our Location",
    desc: "Find us at our main hospital campus in Jaipur.",
    value: "Health City, Jaipur, Rajasthan, India",
    valueColor: "text-blue-600",
    badge: null,
    dot: null,
    shadowHover: "hover:shadow-blue-200",
    borderHover: "hover:border-blue-300",
  },
  {
    id: 4,
    Icon: ClockIcon,
    iconBg: "bg-amber-50",
    iconColor: "#d97706",
    title: "Opening Hours",
    desc: "We are here for you every day of the year.",
    value: "Mon – Sun",
    valueColor: "text-amber-600",
    badge: "Open 24 × 7",
    badgeBg: "bg-blue-50 text-blue-600",
    dot: null,
    shadowHover: "hover:shadow-amber-200",
    borderHover: "hover:border-amber-300",
  },
];

const ContactCard = ({
  Icon, iconBg, iconColor, title, desc,
  value, valueColor, badge, badgeBg, dot,
  shadowHover, borderHover,
}) => (
  <div
    className={`
      group w-full h-full bg-white rounded-2xl
      border border-blue-100 ${borderHover}
      shadow-md ${shadowHover} hover:shadow-2xl
      hover:-translate-y-2
      transition-all duration-500 ease-out
      p-3 sm:p-5 lg:p-6
      flex flex-col items-center text-center
    `}
  >
    {/* Icon */}
    <div
      className={`
        w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0
        rounded-full flex items-center justify-center ${iconBg}
        group-hover:scale-110 group-hover:rotate-6
        transition-transform duration-300 ease-out
      `}
      style={{ color: iconColor }}
    >
      <Icon />
    </div>

    {/* Title */}
    <h3 className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] lg:text-[15px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
      {title}
    </h3>

    {/* Desc — hidden on mobile */}
    <p className="hidden sm:block mt-1 text-[11px] lg:text-[12px] text-slate-500 leading-relaxed">
      {desc}
    </p>

    {/* Divider */}
    <div className="mt-2 w-6 sm:w-8 h-0.5 bg-blue-400 opacity-40 rounded-full group-hover:w-14 group-hover:opacity-70 transition-all duration-300" />

    {/* Value */}
    <p className={`mt-2 text-[11px] sm:text-xs lg:text-sm font-semibold ${valueColor} leading-snug`}>
      {value}
    </p>

    {/* Badge pinned to bottom */}
    <div className="mt-auto pt-2 min-h-6 flex items-center justify-center">
      {badge ? (
        <span className={`
          inline-flex items-center gap-1 text-[9px] sm:text-[10px] lg:text-[11px]
          font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${badgeBg}
          group-hover:scale-105 transition-transform duration-300
        `}>
          {dot && <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${dot} animate-pulse`} />}
          {badge}
        </span>
      ) : (
        // invisible spacer — keeps card height equal when no badge
        <span className="opacity-0 text-[9px] px-2 py-0.5">_</span>
      )}
    </div>
  </div>
);

export default function ContactInfoSection() {
  return (
    <section className="relative bg-[#f0f6ff] px-3 sm:px-6 pb-4 overflow-hidden">

      {/* Decorative bg blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-96 h-40 bg-indigo-200 opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* ✅ 2 cols mobile, 4 cols desktop — items-stretch = equal height */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 items-stretch gap-2 sm:gap-3 lg:gap-5 mx-auto -translate-y-6 sm:-translate-y-8 lg:-translate-y-10">
        {contactCards.map((card, index) => (
          <div
            key={card.id}
            className="h-full"
            style={{
              animation: "fadeSlideUp 0.5s ease-out both",
              animationDelay: `${index * 120}ms`,
            }}
          >
            <ContactCard {...card} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}