"use client";

import { useState } from "react";
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa6";
import "./app.css";

const services = [
  {
    icon: FaInstagram,
    title: "Lifestyle Content",
    description:
      "Authentic everyday content, personal vlogs, and real storytelling. The kind of content people actually stop scrolling for.",
  },
  {
    icon: FaTiktok,
    title: "Brand Social Media",
    description:
      "Creating content for brands across Instagram and TikTok. From gifting campaigns and product features to full creative rollouts that convert.",
  },
];

const lifestyleReels = [
  "DbOwLRsu02W",
  "DVokxJxjW3Z",
  "DXh50oijqnl",
  "DSNcRiwiHPq",
  "Dbar0biuvOY",
  "DYeuWNwNI2y",
];

const brandReels = [
  "DXb2X04jNva",
  "DYxCD3XI23Z",
  "DXOgAbiDD2d",
  "DbN9S2gIfJm",
  "DRPcZqXgfqb",
  "DapZi1cIyRN",
  "DQ4LxBljMXd",
  "DaLLSXXodN1",
  "DYo4Q7Nsfj3",
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/global.dayem/", icon: FaInstagram },
  { name: "TikTok", href: "https://www.tiktok.com/@global.dayem?lang=en", icon: FaTiktok },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/amubieya-loveth/", icon: FaLinkedinIn },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("brand");
  const activeReels = activeTab === "brand" ? brandReels : lifestyleReels;
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 z-50 w-full px-8 py-5 flex items-center justify-between backdrop-blur-sm bg-[#FFF8F5]/80 border-b border-rose-100/50">
        <span className="font-[Cormorant_Garamond] text-2xl font-light tracking-widest text-[#8B4B5E]">
          LOVETH
        </span>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-[#9B7B84] font-[Poppins] font-light">
          <a href="#about" className="hover:text-[#8B4B5E] transition-colors">About</a>
          <a href="#services" className="hover:text-[#8B4B5E] transition-colors">Services</a>
          <a href="#work" className="hover:text-[#8B4B5E] transition-colors">Work</a>
          <a href="#contact" className="hover:text-[#8B4B5E] transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="text-xs tracking-widest uppercase font-[Poppins] font-light px-5 py-2 border border-[#E8A0B0] text-[#8B4B5E] hover:bg-[#F9E4EA] transition-colors rounded-full"
        >
          Work With Me
        </a>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden"
      >
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <p className="font-[Poppins] text-xs tracking-[0.3em] uppercase text-[#C97B8C] mb-6 fade-in">
          Content Creator &amp; Brand Partner
        </p>
        <h1 className="font-[Cormorant_Garamond] text-6xl md:text-8xl font-light text-[#3D2C2C] leading-tight mb-6 fade-in delay-1">
          Amubieya Loveth
        </h1>
        <p className="max-w-lg text-[#9B7B84] font-[Poppins] font-light text-base leading-relaxed mb-10 fade-in delay-2">
          Crafting authentic moments that connect brands to culture, through
          lifestyle, fashion, and storytelling that actually feels real.
        </p>
        <div className="flex gap-4 flex-wrap justify-center fade-in delay-3">
          <a
            href="#work"
            className="px-8 py-3 bg-[#C97B8C] text-white text-xs tracking-widest uppercase font-[Poppins] font-light rounded-full hover:bg-[#B56A7B] transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#E8A0B0] text-[#8B4B5E] text-xs tracking-widest uppercase font-[Poppins] font-light rounded-full hover:bg-[#F9E4EA] transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-6 mt-14 fade-in delay-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-[#C97B8C] hover:text-[#8B4B5E] transition-colors"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase font-[Poppins] text-[#D4A8B4]">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6 md:px-16 bg-[#FFF8F5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-[Poppins] text-xs tracking-[0.3em] uppercase text-[#C97B8C] mb-4">
              What I Offer
            </p>
            <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl font-light text-[#3D2C2C]">
              Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-rose-100 bg-white hover:border-[#E8A0B0] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,123,140,0.1)]"
              >
                <service.icon className="text-[#E8A0B0] group-hover:text-[#C97B8C] transition-colors mb-5" size={28} />
                <h3 className="font-[Cormorant_Garamond] text-2xl font-light text-[#3D2C2C] mb-3">
                  {service.title}
                </h3>
                <p className="font-[Poppins] font-light text-sm text-[#9B7B84] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 px-6 bg-[#FFF8F5]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[Poppins] text-xs tracking-[0.3em] uppercase text-[#C97B8C] mb-4">
            Resources
          </p>
          <h2 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-light text-[#3D2C2C] mb-10">
            Download My Files
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/loveth-portfolio.pdf"
              download
              className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-[#E8A0B0] bg-white hover:bg-[#F9E4EA] hover:border-[#C97B8C] transition-all duration-200 group"
            >
              <span className="text-2xl">📁</span>
              <div className="text-left">
                <p className="font-[Poppins] text-sm font-light text-[#3D2C2C] group-hover:text-[#8B4B5E] transition-colors">
                  Portfolio File
                </p>
                <p className="font-[Poppins] text-xs text-[#C4A0AC]">PDF</p>
              </div>
            </a>
            <a
              href="/loveth-resume.pdf"
              download
              className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-[#E8A0B0] bg-white hover:bg-[#F9E4EA] hover:border-[#C97B8C] transition-all duration-200 group"
            >
              <span className="text-2xl">📋</span>
              <div className="text-left">
                <p className="font-[Poppins] text-sm font-light text-[#3D2C2C] group-hover:text-[#8B4B5E] transition-colors">
                  Resume
                </p>
                <p className="font-[Poppins] text-xs text-[#C4A0AC]">PDF</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-28 px-6 md:px-16 bg-[#FEF1F4]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-[Poppins] text-xs tracking-[0.3em] uppercase text-[#C97B8C] mb-4">
              Selected Work
            </p>
            <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl font-light text-[#3D2C2C]">
              Portfolio
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {[
              { key: "brand", label: "Brand Work" },
              { key: "lifestyle", label: "Lifestyle" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase font-[Poppins] font-light transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#C97B8C] text-white"
                    : "border border-[#E8A0B0] text-[#8B4B5E] hover:bg-[#F9E4EA]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {activeReels.map((id) => (
              <div key={id} className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-sm border border-rose-100">
                <iframe
                  src={`https://www.instagram.com/reel/${id}/embed/`}
                  width="340"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  allowtransparency="true"
                  allow="encrypted-media"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 text-center bg-[#FFF8F5]">
        <div className="max-w-xl mx-auto">
          <p className="font-[Poppins] text-xs tracking-[0.3em] uppercase text-[#C97B8C] mb-4">
            Let&apos;s Create Together
          </p>
          <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl font-light text-[#3D2C2C] mb-6">
            Get In Touch
          </h2>
          <p className="font-[Poppins] font-light text-sm text-[#9B7B84] leading-relaxed mb-10">
            Open to brand partnerships, campaigns, and collaborations. Slide
            into my DMs or send an email. Let&apos;s make something beautiful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:amubieyaloveth@gmail.com"
              className="px-8 py-3 bg-[#C97B8C] text-white text-xs tracking-widest uppercase font-[Poppins] font-light rounded-full hover:bg-[#B56A7B] transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://www.instagram.com/global.dayem/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#E8A0B0] text-[#8B4B5E] text-xs tracking-widest uppercase font-[Poppins] font-light rounded-full hover:bg-[#F9E4EA] transition-colors"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-[Cormorant_Garamond] text-lg font-light tracking-widest text-[#8B4B5E]">
          LOVETH
        </span>
        <p className="font-[Poppins] font-light text-xs text-[#C4A0AC]">
          &copy; {new Date().getFullYear()} Loveth. All rights reserved.
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-[#C97B8C] hover:text-[#8B4B5E] transition-colors"
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
