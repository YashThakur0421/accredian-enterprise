import { ArrowRight, Clock, Users, Star } from "lucide-react";

const programs = [
  {
    tag: "Most Popular",
    tagColor: "bg-blue-600 text-white",
    title: "Data Science & AI",
    partner: "IIT Guwahati",
    duration: "6-12 months",
    learners: "12,000+",
    rating: 4.9,
    desc: "From Python fundamentals to advanced machine learning and deployment pipelines. Built for data analysts and engineers.",
    skills: ["Python", "ML/DL", "SQL", "MLOps", "LLMs"],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    tag: "High Demand",
    tagColor: "bg-purple-600 text-white",
    title: "Product Management",
    partner: "IIM Visakhapatnam",
    duration: "6 months",
    learners: "8,500+",
    rating: 4.8,
    desc: "Strategic product thinking, roadmapping, data-driven decisions, and stakeholder management for modern PMs.",
    skills: ["Roadmapping", "Analytics", "Agile", "UX", "GTM"],
    gradient: "from-purple-600 to-pink-500",
  },
  {
    tag: "New",
    tagColor: "bg-green-600 text-white",
    title: "Generative AI for Business",
    partner: "SP Jain Institute",
    duration: "3 months",
    learners: "5,000+",
    rating: 4.9,
    desc: "Hands-on training on LLMs, prompt engineering, AI workflows, and enterprise AI strategy for business leaders.",
    skills: ["Prompt Engineering", "LLM APIs", "RAG", "AI Strategy"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    tag: "Leadership",
    tagColor: "bg-amber-600 text-white",
    title: "Leadership & Strategy",
    partner: "XLRI Jamshedpur",
    duration: "9 months",
    learners: "3,200+",
    rating: 4.7,
    desc: "Executive leadership program for mid to senior managers covering strategy, finance, and organizational design.",
    skills: ["Strategy", "Finance", "OKRs", "Change Mgmt", "HR"],
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Program Library
          </p>
          <div className="section-divider" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            World-class programs,{" "}
            <span className="gradient-text">built for enterprise</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Co-created with India's top institutions, designed around your workforce's
            real skill gaps and business outcomes.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="group rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${prog.gradient} p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <span className={`${prog.tagColor} text-xs font-bold px-3 py-1 rounded-full`}>
                    {prog.tag}
                  </span>
                  <div className="flex items-center gap-1 bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                    <Star size={10} fill="white" />
                    {prog.rating}
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  {prog.title}
                </h3>
                <p className="text-white/70 text-sm">with {prog.partner}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{prog.desc}</p>

                {/* Meta */}
                <div className="flex items-center gap-5 text-sm text-gray-500 mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-blue-500" />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-blue-500" />
                    {prog.learners} trained
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {prog.skills.map((s) => (
                    <span
                      key={s}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group/btn flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Explore Program
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3.5 rounded-full hover:bg-blue-600 hover:text-white transition-all"
          >
            View All 30+ Programs
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
