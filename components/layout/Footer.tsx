import { Box } from "lucide-react";

const productLinks = [
  { label: "Le produit", href: "/product" },
  { label: "Comment ça marche", href: "/how-it-works" },
  { label: "Tarifs", href: "/pricing" },
  { label: "Se connecter", href: "#" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "#" },
  { label: "CGU", href: "#" },
  { label: "Mentions légales", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{
        backgroundColor: "#111D1C",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Box size={20} style={{ color: "#40916C" }} strokeWidth={2.5} />
              <span
                className="font-heading font-bold text-lg"
                style={{ color: "#FAF7F2" }}
              >
                Flow<span style={{ color: "#40916C" }}>Stock</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "#8A9E96",
                fontFamily: "var(--font-family-sans)",
                maxWidth: "220px",
              }}
            >
              Le stock, c&apos;est notre affaire.
              <br />
              La cuisine, c&apos;est la vôtre.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                color: "#8A9E96",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              Produit
            </p>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{
                      color: "#8A9E96",
                      textDecoration: "none",
                      fontFamily: "var(--font-family-sans)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                color: "#8A9E96",
                fontFamily: "var(--font-family-heading)",
              }}
            >
              Légal
            </p>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{
                      color: "#8A9E96",
                      textDecoration: "none",
                      fontFamily: "var(--font-family-sans)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs"
            style={{
              color: "#8A9E96",
              fontFamily: "var(--font-family-sans)",
            }}
          >
            © 2025 FlowStock. Tous droits réservés.
          </p>
          <p
            className="text-xs"
            style={{
              color: "rgba(138,158,150,0.5)",
              fontFamily: "var(--font-family-sans)",
            }}
          >
            Conçu pour les restaurateurs indépendants 🇫🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
