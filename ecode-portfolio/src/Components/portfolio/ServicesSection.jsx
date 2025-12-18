import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Cpu,
  CircuitBoard,
  Cog,
  Building,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../../Components/ui/Button";

export default function ServicesSection() {
  const domains = [
    {
      icon: Monitor,
      branch: "CSE / IT",
      areas: ["Python", "Java", "AI", "Data Science", "Cyber Security"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Cpu,
      branch: "EEE",
      areas: ["EEE MATLAB", "IoT", "Embedded Systems", "Robotics", "Drones"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: CircuitBoard,
      branch: "ECE",
      areas: ["ECE MATLAB", "IoT", "Embedded", "Robotics", "VLSI", "Drones"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Cog,
      branch: "MECHANICAL",
      areas: ["Robots", "AutoCAD", "ANFIS"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Building,
      branch: "CIVIL",
      areas: ["Software Projects", "Hardware Projects"],
      color: "from-rose-500 to-red-600",
    },
    {
      icon: GraduationCap,
      branch: "RESEARCH",
      areas: [
        "IEEE/Scopus Papers",
        "Thesis Support",
        "Journal Publication",
        "Ph.D. Guidance",
      ],
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Domains We Serve
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive project development and training services for all
            engineering branches
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative p-6 bg-slate-950/50 backdrop-blur border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300 h-full">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} mb-5`}
                >
                  <domain.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {domain.branch}
                </h3>

                <ul className="space-y-2">
                  {domain.areas.map((area, areaIndex) => (
                    <li
                      key={areaIndex}
                      className="flex items-center text-slate-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl("Projects")}>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-semibold px-8 py-6 text-lg rounded-xl">
              Explore All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
