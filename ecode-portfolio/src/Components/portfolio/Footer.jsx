import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692ee9d9175f8b0589333067/ca2c394db_Ecode.jpg"
              alt="ECLS"
              className="h-12 mb-6"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Leading technical training and project development organization
              empowering engineers across India.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-amber-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-400 hover:text-amber-400 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-amber-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">
                ecodelearningsoftwareservices@gmail.com
              </p>
              <p className="text-slate-400">
                9160006006 / 9182344936
              </p>
              <a
                href="http://ecodelearingsoftwareservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition"
              >
                ecodelearingsoftwareservices.com
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-12" />

        {/* Bottom */}
        <div className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Prashanth Reddy Bheemreddy. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
