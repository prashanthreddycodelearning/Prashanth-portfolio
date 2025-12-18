import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send } from "lucide-react";
import { Button } from "../Components/ui/Button";
import { Input } from "../components/ui/Input";
import { Textarea } from "../Components/ui/Textarea";
import { Card, CardContent } from "../Components/ui/Card";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Company Email",
      value: "ecodelearningsoftwareservices@gmail.com",
      href: "mailto:ecodelearningsoftwareservices@gmail.com",
    },
    {
      icon: Mail,
      label: "Personal Email",
      value: "prashanthreddyprojects@gmail.com",
      href: "mailto:prashanthreddyprojects@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9160006006 / 9182344936",
      href: "tel:9160006006",
    },
    {
      icon: Globe,
      label: "Website",
      value: "ecodelearingsoftwareservices.com",
      href: "http://ecodelearingsoftwareservices.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
            CONTACT
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to discuss your project requirements? Reach out and let’s make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ===== LEFT COLUMN ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Published Books */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Published Books
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692eea38101edd72adbede39/c31d8834f_WhatsAppImage2025-12-02at191716_50736006.jpg"
                    alt="Book 1"
                    className="w-12 h-16 rounded shadow-lg"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Vehicle-to-Grid Systems and Smart Charging
                    </p>
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

                <div className="flex items-start gap-4">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692eea38101edd72adbede39/d5db9b2cc_WhatsAppImage2025-12-02at191609_3fb41b02.jpg"
                    alt="Book 2"
                    className="w-12 h-16 rounded shadow-lg"
                  />
                  <p className="text-white text-sm font-medium">
                    Battery Management Systems and Charging Technologies in EVs
                  </p>
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

            {/* Company Info */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692ee9d9175f8b0589333067/ca2c394db_Ecode.jpg"
                  alt="ECLS"
                  className="h-12"
                />
                <div>
                  <p className="text-white font-semibold">
                    Ecode Learning Software Services
                  </p>
                  <p className="text-slate-400 text-sm">Since 2016</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                One of India’s fastest-growing technical training and project
                development organizations, empowering thousands of engineering
                students, researchers, and professionals every year.
              </p>
            </div>
          </motion.div>

          {/* ===== RIGHT COLUMN (FORM) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="bg-slate-900/60 border border-slate-800">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Send a Message
                </h2>

                <form className="space-y-6">

  {/* Row 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input
      placeholder="Your name"
      className="h-12 rounded-xl bg-slate-950 border-slate-700 text-white"
    />
    <Input
      type="email"
      placeholder="your@email.com"
      className="h-12 rounded-xl bg-slate-950 border-slate-700 text-white"
    />
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input
      placeholder="Your phone number"
      className="h-12 rounded-xl bg-slate-950 border-slate-700 text-white"
    />
    <Input
      placeholder="Project inquiry, Training, etc."
      className="h-12 rounded-xl bg-slate-950 border-slate-700 text-white"
    />
  </div>

  {/* Row 3 — FULL WIDTH MESSAGE */}
  <Textarea
    rows={5}
    placeholder="Tell us about your project requirements..."
    className="w-full rounded-xl bg-slate-950 border-slate-700 text-white resize-none"
  />

  {/* Button */}
  <Button
    type="button"
    onClick={() =>
      (window.location.href =
        "mailto:ecodelearningsoftwareservices@gmail.com")
    }
    className="w-full py-6 rounded-xl text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900"
  >
    <Send className="w-5 h-5 mr-2" />
    Send Message
  </Button>

</form>

              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
