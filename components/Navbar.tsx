"use client";
import { useEffect, useState } from "react";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const toggle = () => {
    const t = theme === "dark" ? "light" : "dark";
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch {}
  };

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="logo">SA<span>.</span></a>
      <nav className={open ? "open" : ""}>
        {links.map(([id, l]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">{theme === "dark" ? "☀️" : "🌙"}</button>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
      </div>
    </header>
  );
}
