import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Zap, CircuitBoard, FileText, BrainCircuit } from 'lucide-react';

export default function ExpertiseSection() {
    const expertiseAreas = [
        {
            icon: Code,
            title: "Programming & AI",
            color: "from-blue-500 to-cyan-500",
            skills: ["Python", "Machine Learning", "Artificial Intelligence", "Deep Learning", "Data Science", "Java", "MATLAB"]
        },
        {
            icon: Zap,
            title: "EEE & Power Systems",
            color: "from-amber-500 to-orange-500",
            skills: ["Electric Vehicles", "Renewable Energy", "Microgrids", "Power Electronics", "Solar PV", "UPQC/DVR", "Fuzzy Logic Controllers"]
        },
        {
            icon: Cpu,
            title: "Embedded & IoT",
            color: "from-green-500 to-emerald-500",
            skills: ["Arduino", "ESP32", "Raspberry Pi", "Wireless Networks", "LoRa/ZigBee", "Robotics", "Home Automation"]
        },
        {
            icon: CircuitBoard,
            title: "VLSI Design",
            color: "from-purple-500 to-pink-500",
            skills: ["Reversible Logic", "ALU Design", "RISC Architectures", "CMOS", "FIR Filters", "Low-Power Circuits"]
        },
        {
            icon: BrainCircuit,
            title: "Research & Innovation",
            color: "from-rose-500 to-red-500",
            skills: ["Smart Grids", "EV Charging Systems", "Industrial IoT", "Drones & Robotics", "Automation Systems"]
        },
        {
            icon: FileText,
            title: "Publications Support",
            color: "from-indigo-500 to-violet-500",
            skills: ["IEEE Papers", "Scopus/SCI Journals", "Thesis Support", "Plagiarism Reduction", "Book Writing"]
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Technical Mastery
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Comprehensive expertise across multiple engineering domains, 
                        delivering cutting-edge solutions for academia and industry
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" 
                                 style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}} />
                            
                            <div className="h-full p-6 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} bg-opacity-20 flex items-center justify-center mb-5`}>
                                    <area.icon className="w-7 h-7 text-white" />
                                </div>
                                
                                <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
                                
                                <div className="flex flex-wrap gap-2">
                                    {area.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-3 py-1 text-xs bg-slate-800/80 text-slate-300 rounded-full border border-slate-700/50"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}