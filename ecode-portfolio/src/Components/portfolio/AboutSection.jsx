import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Award, Target } from 'lucide-react';

export default function AboutSection() {
    const highlights = [
        {
            icon: Building2,
            title: "Founder & MD",
            description: "Leading Ecode Learning Software Services since 2016"
        },
        {
            icon: GraduationCap,
            title: "Ph.D. Scholar",
            description: "MR Deemed-to-be University - Smart Grids & EV Systems"
        },
        {
            icon: Award,
            title: "Published Author",
            description: "2 Books on EV & Battery Management Systems"
        },
        {
            icon: Target,
            title: "Project Mentor",
            description: "Guided thousands of B.Tech, M.Tech & Ph.D. scholars"
        }
    ];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">About</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        Engineering Excellence
                    </h2>
                </motion.div>
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            I am <span className="text-white font-semibold">Prashanth Reddy Bheemreddy</span>, 
                            Founder & Managing Director of Ecode Learning Software Services, with 9+ years of 
                            extensive industry and academic experience across EEE MATLAB modeling, Embedded Systems, 
                            IoT, Python programming, Artificial Intelligence, Data Science, Machine Learning, VLSI, and Robotics.
                        </p>
                        
                        <p className="text-slate-400 leading-relaxed mb-6">
                            I specialize in designing end-to-end engineering solutions, R&D-focused academic projects, 
                            industrial IoT systems, and advanced MATLAB simulations. Under my leadership, Ecode has become 
                            one of India's fastest-growing technical training and project development organizations, 
                            empowering thousands of engineering students, researchers, and professionals every year.
                        </p>
                        
                        <p className="text-slate-400 leading-relaxed mb-8">
                            As a technical author, project consultant, and research mentor, I have guided B.Tech, M.Tech, MS, 
                            and Ph.D. scholars across multiple domains, delivering high-standard project implementation, 
                            paper publications, SCI/Scopus journal support, book writing assistance, and deployment-ready prototypes.
                        </p>
                        
                        <div className="space-y-4">
                            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Published Books</p>
                            
                            {/* Book 1 */}
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692eea38101edd72adbede39/c31d8834f_WhatsAppImage2025-12-02at191716_50736006.jpg"
                                    alt="Vehicle-to-Grid Systems Book"
                                    className="w-16 h-20 object-cover rounded shadow-lg"
                                />
                                <div>
                                    <p className="text-white font-medium text-sm">Vehicle-to-Grid Systems and Smart Charging</p>
                                    <p className="text-slate-400 text-xs mt-1">A Comprehensive Technological Review</p>
                                    <a 
                                        href="https://www.flipkart.com/vehicle-to-grid-systems-smart-charging-comprehensive-technological-review/p/itm46cc94ba87677?pid=9788199138285"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                                    >
                                        View on Flipkart →
                                    </a>
                                    <br></br>
                                    <a 
                                        href="https://www.https://www.amazon.in/Vehicle-Grid-Systems-Smart-Charging-ebook/dp/B0FTZSXD35.com/vehicle-to-grid-systems-smart-charging-comprehensive-technological-review/p/itm46cc94ba87677?pid=9788199138285"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                                    >
                                        View on Amazon →
                                    </a>
                                </div>
                            </div>
                            
                            {/* Book 2 */}
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692eea38101edd72adbede39/d5db9b2cc_WhatsAppImage2025-12-02at191609_3fb41b02.jpg"
                                    alt="Battery Management Systems Book"
                                    className="w-16 h-20 object-cover rounded shadow-lg"
                                />
                                <div>
                                    <p className="text-white font-medium text-sm">Battery Management Systems and Charging Technologies in Electric Vehicles</p>
                                    <p className="text-slate-400 text-xs mt-1">By Bheemreddy Prashanth</p>
                                    <a 
                                        href="https://www.https://www.flipkart.com/battery-management-systems-charging-technologies-electric-vehicles/p/itmb7d41a78efcf7?pid=9788199138278.com/vehicle-to-grid-systems-smart-charging-comprehensive-technological-review/p/itm46cc94ba87677?pid=9788199138285"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                                    >
                                        View on Flipkart →
                                    </a>
                                    <br></br>
                                    <a 
                                        href="https://www.https://www.amazon.in/Vehicle-Grid-http://www.amazon.in/dp/B0G1ZFTLZ6-Smart-Charging-ebook/dp/B0FTZSXD35.com/vehicle-to-grid-systems-smart-charging-comprehensive-technological-review/p/itm46cc94ba87677?pid=9788199138285"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                                    >
                                        View on Amazon →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}