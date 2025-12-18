import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/ui/Button";
import { createPageUrl } from "../../utils";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Let&apos;s Connect
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need academic project support, industrial solutions, or
            technical training, I&apos;m here to help you achieve excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:ecodelearningsoftwareservices@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-slate-900/80 border border-slate-700 rounded-xl hover:border-amber-500/50 transition-all group"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              <span className="text-slate-300 group-hover:text-white transition-colors">
                ecodelearningsoftwareservices@gmail.com
              </span>
            </a>

            <a
              href="tel:9160006006"
              className="flex items-center gap-3 px-6 py-4 bg-slate-900/80 border border-slate-700 rounded-xl hover:border-amber-500/50 transition-all group"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span className="text-slate-300 group-hover:text-white transition-colors">
                9160006006
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/25">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <a
              href="http://ecodelearingsoftwareservices.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="border border-slate-700 text-white px-8 py-6 text-lg rounded-xl hover:bg-slate-800">
                <Globe className="w-5 h-5 mr-2" />
                Visit Company Website
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
