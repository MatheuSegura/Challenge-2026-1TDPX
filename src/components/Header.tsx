import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/plataforma", label: "Plataforma" },
  { to: "/transporte", label: "Transporte" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
  { to: "/integrantes", label: "Equipe" },
];

export default function Header() {
  const scrolled = useScrollPosition(30);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkColorBase = "text-gray-dark";
  const linkColorDesktop = scrolled ? "md:text-gray-dark" : "md:text-white/90";
  const hoverDesktop = scrolled
    ? "md:hover:bg-primary-bg md:hover:text-primary"
    : "md:hover:bg-white/10 md:hover:text-white";
  const activeDesktop = scrolled ? "md:bg-primary-bg md:text-primary" : "md:bg-white/10 md:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[70px] transition-all duration-300 ${
        scrolled ? "bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-8 px-6">
        <Link to="/" className="flex shrink-0 items-center">
          <img src="/logo.svg" alt="Pointway" height={38} className="h-[38px] w-auto" />
        </Link>

        <ul
          className={`fixed inset-x-0 top-[70px] z-40 flex flex-col gap-1 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300 md:static md:z-auto md:flex-row md:items-center md:gap-1 md:bg-transparent md:p-0 md:shadow-none md:translate-y-0 md:opacity-100 md:pointer-events-auto ${
            menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[120%] opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `block rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${linkColorBase} ${linkColorDesktop} ${
                    isActive ? `bg-primary-bg text-primary ${activeDesktop}` : `hover:bg-primary-bg hover:text-primary ${hoverDesktop}`
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="z-50 flex flex-col gap-[5px] rounded-md p-2 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ${scrolled || menuOpen ? "bg-dark" : "bg-white"} ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ${scrolled || menuOpen ? "bg-dark" : "bg-white"} ${
              menuOpen ? "-translate-x-2 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ${scrolled || menuOpen ? "bg-dark" : "bg-white"} ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
