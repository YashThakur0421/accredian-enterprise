import { Search, Pencil, Users, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Skill Gap Analysis",
    desc: "Our L&D consultants work with your HR and leadership teams to map existing skill gaps, business objectives, and workforce needs.",
    detail: "2–4 week engagement · Detailed report included",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Co-Create Custom Learning Journey",
    desc: "Collaborate with academic partners to design a bespoke curriculum — entirely tailored to your stack, tools, and growth plan.",
    detail: "Program design in 2 weeks · University accredited",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    number: "03",
    icon: Users,
    title: "Launch, Onboard & Mentor",
    desc: "Onboard your teams with platform access, orientation sessions, and mentor assignment. Live cohort starts on your schedule.",
    detail: "Dedicated success manager · Live sessions weekly",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Track, Review & Optimize ROI",
    desc: "Real-time analytics and monthly business reviews keep your investment measurable. Iterate based on data, not guesswork.",
    detail: "Monthly reviews · ROI guarantee available",
    color: "from-green-500 to-green-600",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-20 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            From zero to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              measurable outcomes
            </span>{" "}
            in 4 steps
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
            A proven engagement model trusted by Fortune 500s and fast-growing
            startups alike.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line for desktop */}
                {/* {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/40 to-transparent z-10 -translate-y-1/2" />
                )} */}

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Number */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display font-bold text-4xl text-white/20">
                      {step.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-white text-lg mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-blue-200/70 text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                  <p className="text-cyan-400/80 text-xs font-medium border-t border-white/10 pt-4">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-2xl shadow-blue-500/30"
          >
            Start Your Discovery Session
          </a>
        </div>
      </div>
    </section>
  );
}
