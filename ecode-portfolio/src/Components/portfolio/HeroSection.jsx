import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Globe,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { createPageUrl } from "../../utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              9+ Years of Excellence
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Prashanth Reddy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Bheemreddy
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-4">
              Founder & Managing Director
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692ee9d9175f8b0589333067/ca2c394db_Ecode.jpg"
                alt="Ecode"
                className="h-10"
              />
              <span className="text-slate-300">
                Ecode Learning Software Services
              </span>
            </div>

            <p className="text-slate-400 max-w-xl mb-8 mx-auto lg:mx-0">
              Technical Author, Ph.D. Scholar, Project Consultant & Mentor
              specializing in{" "}
              <span className="text-amber-400">
                MATLAB, IoT, Python, AI, Data Science & VLSI
              </span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </Link>

              <Link to={createPageUrl("Projects")}>
                <Button className="border border-slate-700 text-white px-8 py-6 text-lg rounded-xl hover:bg-slate-800">
                  View Projects
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800">
              <div>
                <p className="text-3xl font-bold text-white">1000+</p>
                <p className="text-sm text-slate-500">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">9+</p>
                <p className="text-sm text-slate-500">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">180+</p>
                <p className="text-sm text-slate-500">IoT Projects</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 rounded-full blur-xl" />

              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-slate-800">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692eea38101edd72adbede39/0b2164f87_WhatsAppImage2025-12-02at190757_4a27ea45.jpg"
                  alt="Prashanth Reddy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-4 -top-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3"
              >
                <div className="flex gap-2 items-center">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span className="text-white text-sm">Published Author</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-4 bottom-1/4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3"
              >
                <div className="flex gap-2 items-center">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-white text-sm">Ph.D. Scholar</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500">
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
