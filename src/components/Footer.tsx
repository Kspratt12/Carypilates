"use client";

export default function Footer() {
  const footerLinks = [
    { name: "Group Classes", href: "#classes" },
    { name: "Private Sessions", href: "#private-sessions" },
    { name: "Physical Therapy", href: "#physical-therapy" },
    { name: "Instructors", href: "#instructors" },
    { name: "Pricing", href: "#pricing" },
    { name: "Login to My Account", href: "https://momence.com/u/cary-pilates-ddAsiW" },
  ];

  return (
    <footer style={{ background: "#1a1a1a", color: "#fff", padding: "80px 0 0" }}>
      <div className="cp-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand + Social */}
          <div>
            <img
              src="https://i0.wp.com/carypilates.com/wp-content/uploads/2024/08/CaryPilates.png?fit=400%2C110&ssl=1"
              style={{ filter: "brightness(0) invert(1)", height: "24px", width: "auto", marginBottom: "20px" }}
              alt="Cary Pilates"
            />
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.92rem",
                lineHeight: 1.9,
                marginBottom: "28px",
                maxWidth: "280px",
              }}
            >
              A boutique Pilates studio serving Cary, Morrisville, Apex, and the
              surrounding Triangle area.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                {
                  href: "https://www.facebook.com/CaryPilates/",
                  label: "Facebook",
                  icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  href: "https://www.instagram.com/carypilates/",
                  label: "Instagram",
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#8b7093";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <svg style={{ width: "15px", height: "15px" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#c9b5d0",
                marginBottom: "24px",
                fontWeight: 600,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.92rem",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c9b5d0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#c9b5d0",
                marginBottom: "24px",
                fontWeight: 600,
              }}
            >
              Contact
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.92rem",
              }}
            >
              <li style={{ lineHeight: 1.9 }}>
                800 Gathering Park Circle,
                <br />
                Suite 106, Cary, NC 27519
              </li>
              <li>
                <a
                  href="mailto:Info@CaryPilates.com"
                  style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#c9b5d0"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
                >
                  Info@CaryPilates.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19845009147"
                  style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#c9b5d0"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
                >
                  984-500-9147
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "40px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}>
          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "6px", fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Stay in the Loop
            </h4>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
              Studio updates, wellness tips, and exclusive offers.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: "8px" }}
          >
            <input
              type="email"
              placeholder="Your email"
              style={{
                padding: "12px 20px",
                borderRadius: "50px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                fontSize: "0.85rem",
                outline: "none",
                width: "240px",
                fontFamily: "inherit",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,181,208,0.5)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                borderRadius: "50px",
                background: "#8b7093",
                color: "#fff",
                border: "none",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.3s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#6b5674"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#8b7093"; }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "28px 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "0.75rem",
              letterSpacing: "1px",
            }}
          >
            &copy; {new Date().getFullYear()} Cary Pilates. All Rights Reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
