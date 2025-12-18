import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, FolderOpen, Mail } from "lucide-react";

import { createPageUrl } from "./utils";
import { Button } from "./Components/ui/Button";
import Footer from "./Components/portfolio/Footer";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", icon: Home, page: "Home" },
    { name: "Projects", icon: FolderOpen, page: "Projects" },
    { name: "Contact", icon: Mail, page: "Contact" },
  ];

  const isActive = (pageName) => {
    const targetPath = createPageUrl(pageName);
    return (
      location.pathname === targetPath ||
      (pageName === "Home" && location.pathname === "/")
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692ee9d9175f8b0589333067/ca2c394db_Ecode.jpg"
              alt="Ecode"
              className="h-10"
            />
            <div className="hidden sm:block">
              <p className="text-white font-semibold leading-tight">
                Prashanth Reddy
              </p>
              <p className="text-slate-500 text-xs">
                Founder, Ecode Learning
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={createPageUrl(link.page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.page)
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact">
              <Button className="ml-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-semibold rounded-lg">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-950 border-b border-slate-800"
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className={`block px-4 py-3 rounded-xl transition ${
                      isActive(link.page)
                        ? "text-amber-400 bg-amber-500/10"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link to="/contact">
                  <Button className="w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold rounded-xl">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ================= PAGE CONTENT ================= */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
