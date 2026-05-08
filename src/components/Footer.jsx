const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Doctors",
    "Contact",
  ];

  const services = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Emergency Care",
    "Orthopedics",
  ];

  const socialIcons = [
    {
      id: 1,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      id: 2,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.9 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" />
        </svg>
      ),
    },
    {
      id: 3,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      ),
    },
    {
      id: 4,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2 8 8 0 0 1-2.5 1A4 4 0 0 0 12 8a11.3 11.3 0 0 1-8.2-4.1 4 4 0 0 0 1.2 5.3A4 4 0 0 1 3 8.6v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8.1 8.1 0 0 1 2 17.5 11.4 11.4 0 0 0 8.3 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 5.8z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-14 pb-6 px-5 sm:px-8 lg:px-16">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Hospital Info */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-white">
              CityCare
            </h2>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            CityCare Hospital provides world-class healthcare services with
            modern medical technology, expert doctors, and compassionate care
            for every patient.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            {socialIcons.map((item) => (
              <a
                key={item.id}
                href="#"
                className="
                  w-10 h-10 rounded-full
                  bg-white/10
                  flex items-center justify-center
                  text-gray-300
                  hover:bg-blue-600
                  hover:text-white
                  transition-all duration-300
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-blue-400
                    transition-colors duration-300
                    text-sm
                  "
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Our Services
          </h3>

          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="
                    text-gray-400
                    hover:text-blue-400
                    transition-colors duration-300
                    text-sm
                  "
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Contact Information
          </h3>

          <div className="space-y-4 text-sm">

            {/* Phone */}
            <div className="flex gap-3">
              <div className="text-blue-400 mt-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.45-1.1a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <p className="text-gray-400">
                +91 98765 43210
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <div className="text-blue-400 mt-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>

              <p className="text-gray-400">
                info@citycarehospital.com
              </p>
            </div>

            {/* Address */}
            <div className="flex gap-3">
              <div className="text-blue-400 mt-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <p className="text-gray-400">
                123 Health Street, New Delhi, India
              </p>
            </div>

            {/* Timing */}
            <div className="flex gap-3">
              <div className="text-blue-400 mt-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>

              <p className="text-gray-400">
                Mon - Sun : 24/7 Emergency Service
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="
          mt-12 pt-6
          border-t border-white/10
          flex flex-col sm:flex-row
          items-center justify-between
          gap-3
        "
      >
        <p className="text-sm text-gray-500 text-center sm:text-left">
          © 2026 CityCare Hospital. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 text-center sm:text-right">
          Designed & Developed by AJITONIX
        </p>
      </div>
    </footer>
  );
};

export default Footer;