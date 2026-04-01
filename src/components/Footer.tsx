"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d22] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2024/08/CaryPilates.png?fit=400%2C110&ssl=1"
              alt="Cary Pilates"
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p
              className="text-white/60 leading-relaxed text-sm mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A boutique Pilates studio serving Cary, Morrisville, Apex and the
              surrounding areas
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#8b7093] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#8b7093] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[#a990b0] text-sm font-semibold tracking-wider uppercase mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              QuickLinks
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "FAQ", href: "#" },
                { name: "Login to My Account", href: "https://momence.com/u/cary-pilates-ddAsiW" },
                { name: "Gift Cards", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#a990b0] transition-colors text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-2">
            <h4
              className="text-[#a990b0] text-sm font-semibold tracking-wider uppercase mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#a990b0] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/60 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  800 Gathering Park Circle, Suite 106, Cary, NC 27519
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#a990b0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:Info@CaryPilates.com" className="text-white/60 hover:text-[#a990b0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                  Info@CaryPilates.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#a990b0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+19845009147" className="text-white/60 hover:text-[#a990b0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                  984-500-9147
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            &copy; {new Date().getFullYear()} Cary Pilates. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
