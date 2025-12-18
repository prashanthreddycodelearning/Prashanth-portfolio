import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "../components/ui/Tabs";
import { TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Input } from "../Components/ui/Input";
import { Badge } from "../Components/ui/Badge";
import {
  Search,
  Cpu,
  Zap,
  CircuitBoard,
  ChevronRight,
} from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("embedded");
  const [searchQuery, setSearchQuery] = useState("");
  const projectCategories = {
    embedded: {
      icon: Cpu,
      title: "Embedded & IoT",
      color: "from-emerald-500 to-green-600",
      pill: "bg-emerald-500",
      count: "180+",
      projects: [
        "Drowsiness Detection using EAR Algorithm",
                "Smart Agriculture Monitoring using ESP32",
                "Smart Home Surveillance System",
                "Vehicle Anti-Theft with Face Recognition",
                "Automatic License Plate Recognition",
                "Women Safety Device with GPS/GSM",
                "IoT-based Energy Monitoring System",
                "Intrusion Detection Embedded System",
                "MQTT-based Waste Segregation",
                "Traffic Monitoring with ESP32",
                "Weather & Pollution-based Traffic Management",
                "Home Entry Notification System",
                "Industrial Parameter Controllers",
                "Aquaculture IoT Monitoring",
                "Road Sign Recognition for Autonomous Cars",
                "Vehicle Safety Alarm Systems",
                "Smart Streetlights Automation",
                "Industrial Parameter Monitoring",
                "Greenhouse Automation System",
                "Real-time Vehicle Tracking",
                "Power Quality Monitoring System",
                "Virtual Patient Monitoring",
                "SCADA Implementation",
                "ATM Security System",
                "RFID-based Access Systems",
                "Fingerprint Authentication System",
                "Fire Fighting Robot",
                "Gas Detection Robot",
                "Line Follower Robot",
                "MEMS Gesture Control Robot",
                "Solar Powered Robot",
                "Landmine Detection Robot",
                "Video Surveillance Robot",
                "Disinfection Robot",
                "Patrolling Robot",
                "Smart Wheelchair Robot",
                "Voice Controlled Robot",
                "Obstacle Avoiding Robot",
                "Pick and Place Robot",
                "Bluetooth Controlled Robot"
      ],
    },
    matlab: {
      icon: Zap,
      title: "EEE MATLAB",
      color: "from-amber-500 to-orange-600",
      pill: "bg-amber-500",
      count: "40+",
      projects: [
        "Power Quality Improvement in EV Charging Stations",
                "VSG Controlled PV-Battery Hybrid Systems",
                "BLDC Drive Optimization Techniques",
                "UPQC for Power Quality Enhancement",
                "Solar PV MPPT Algorithm Implementation",
                "DC Voltage Ripple Suppression Methods",
                "Microgrid Integration Systems",
                "ANN-based DG Systems",
                "Fuzzy Logic Hybrid Power Supply",
                "Solar Fed BLDC Motor Drives",
                "DVR for Power Quality Compensation",
                "Multilevel Inverter Design",
                "Bidirectional EV Charging System",
                "Solid-State Transformer Systems",
                "Fast EV Charging Algorithms",
                "DC Microgrid Implementation",
                "Undersea Wireless Power Transfer",
                "Smart University Microgrid Design",
                "Renewable Energy Integration",
                "EV Battery Charger with ANFIS",
                "Space Engineering ECC Systems",
                "Grid-Connected Solar Inverter",
                "Wind Energy Conversion System",
                "Hybrid Renewable Energy System",
                "Power Factor Correction Systems",
                "Harmonic Analysis and Mitigation",
                "Electric Vehicle Modeling",
                "Battery Management System",
                "Smart Grid Communication",
                "Demand Response Management"
      ],
    },
    vlsi: {
      icon: CircuitBoard,
      title: "VLSI Design",
      color: "from-fuchsia-500 to-pink-600",
      pill: "bg-fuchsia-500",
      count: "25+",
      projects: [
        "Reversible Logic ALU Design",
        "Cryptographic Reversible Circuits",
        "Wallace Tree Multiplier Implementation",
        "Approximate Multiplier Design",
        "High-Speed Comparator Architecture",
        "TSPC Dual-Edge Flip-Flops",
        "Hybrid Master-Slave Flip-Flop",
        "Full Adder Optimization",
        "ECC Code Implementation",
        "RISC Core Design",
        "Quantum Reversible Converters",
        "FIR Filter using High-Speed Multipliers",
        "Low-Power CMOS Circuits",
        "Vedic Multiplier Design",
        "Booth Multiplier Implementation",
        "Carry Look-Ahead Adder",
        "Binary to BCD Converter",
        "UART Design and Implementation",
        "SPI Protocol Implementation",
        "I2C Interface Design",
        "Memory Controller Design",
        "Cache Memory Implementation",
        "Pipeline Processor Design",
        "DMA Controller Architecture",
        "Clock Gating Techniques",
      ],
    },
  };

  const currentCategory = projectCategories[activeCategory];

  const filteredProjects = currentCategory.projects.filter((p) =>
    p.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER (MATCHES IMAGE) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            PORTFOLIO
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our comprehensive collection of engineering projects across multiple domains
          </p>
        </motion.div>

        {/* ===== CATEGORY TABS + SEARCH ===== */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-14">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex gap-3 bg-slate-900/70 border border-slate-800 rounded-full p-2">
              {Object.entries(projectCategories).map(([key, cat]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  onClick={setActiveCategory}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.title}
                  <Badge className="ml-1 bg-black/30 text-xs">
                    {cat.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-slate-900/70 border border-slate-800 text-white rounded-full"
            />
          </div>
        </div>

        {/* ===== CATEGORY TITLE BAR (GREEN / PINK / ORANGE) ===== */}
        <div className="mb-10">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${currentCategory.color}`}
          >
            <currentCategory.icon className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">
              {currentCategory.title} Projects
            </span>
            <Badge className="bg-white/20 text-white">
              {filteredProjects.length} shown
            </Badge>
          </div>
        </div>

        {/* ===== PROJECT GRID ===== */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group flex items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-800 text-amber-400 text-xs font-bold">
                    {index + 1}
                  </span>
                  <p className="text-slate-200 group-hover:text-white text-sm">
                    {project}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ===== FOOTER INFO BAR ===== */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">
            All Projects Include
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm text-slate-300">
            {[
              "Complete Source Code",
              "MATLAB Simulation",
              "Report + PPT",
              "Result Analysis",
              "Journal Paper Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
