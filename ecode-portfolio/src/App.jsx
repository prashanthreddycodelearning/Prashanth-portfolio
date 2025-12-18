import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Shared Layout (Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
              Page not found
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
