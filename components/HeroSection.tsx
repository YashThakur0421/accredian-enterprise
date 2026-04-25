"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const trustPoints = [
  "500+ Enterprise Clients",
  "50+ Top University Partners",
  "98% Completion Rate",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={heroRef}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Trusted by 500+ Companies Worldwide
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              The Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                Learning OS
              </span>{" "}
              for Enterprise
            </h1>

            <p className="text-lg text-blue-100/80 leading-relaxed mb-8 max-w-xl">
              Custom programs co-created with IITs & IIMs, live expert mentorship,
              and real-time ROI analytics — everything your L&D team needs in one platform.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4 mb-10">
              {trustPoints.map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-blue-100/70 text-sm">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                  {pt}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-white text-blue-700 font-semibold px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all shadow-2xl shadow-black/20"
              >
                Request a Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 text-white border border-white/25 px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                <Play size={16} className="text-cyan-400" />
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="hidden lg:block relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-blue-200 text-xs font-medium uppercase tracking-wider mb-1">
                    Live Dashboard
                  </p>
                  <h3 className="text-white font-display font-semibold text-lg">
                    TechCorp Learning Analytics
                  </h3>
                </div>
                <div className="bg-green-500/20 text-green-300 text-xs font-medium px-3 py-1 rounded-full">
                  ● Live
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Active Learners", value: "1,284", change: "+12%" },
                  { label: "Completion Rate", value: "94%", change: "+3%" },
                  { label: "Avg. Score", value: "87.4", change: "+5.2" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-2xl p-4">
                    <p className="text-blue-200 text-xs mb-2">{stat.label}</p>
                    <p className="text-white font-display font-bold text-xl">{stat.value}</p>
                    <p className="text-green-400 text-xs mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-3 mb-6">
                <p className="text-blue-200 text-xs font-medium uppercase tracking-wider">
                  Top Programs
                </p>
                {[
                  { name: "Data Science Fundamentals", pct: 88 },
                  { name: "AI for Product Managers", pct: 72 },
                  { name: "Advanced ML Engineering", pct: 61 },
                ].map((prog) => (
                  <div key={prog.name}>
                    <div className="flex justify-between text-xs text-blue-200 mb-1">
                      <span>{prog.name}</span>
                      <span>{prog.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        style={{ width: `${prog.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="space-y-2">
                {[
                  { name: "Priya S.", action: "Completed Module 7 · 2m ago" },
                  { name: "Rahul M.", action: "Scored 95% on Assessment · 15m ago" },
                ].map((act) => (
                  <div
                    key={act.name}
                    className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                      {act.name[0]}
                    </div>
                    <div>
                      <span className="text-white text-xs font-medium">{act.name}</span>
                      <p className="text-blue-300 text-xs">{act.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-2xl p-4 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                  IIT
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">IIT Guwahati</p>
                  <p className="text-xs text-gray-500">Partner University</p>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                Co-created curriculum with top-tier faculty
              </p>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
