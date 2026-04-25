import {
  BookOpen, BarChart3, Users, Brain, Globe, Award, Layers, Zap,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "University Co-Created Programs",
    desc: "Access a curated library of programs designed with IITs, IIMs, XLRI, and SP Jain — aligned to real business needs.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Live ROI Dashboard",
    desc: "Track completion rates, scores, and ROI in real time. Monthly reviews keep your investment measurable and transparent.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Users,
    title: "Expert Live Mentorship",
    desc: "Industry practitioners guide your teams through capstone projects and weekly live sessions — no recorded lectures.",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Brain,
    title: "AI-Personalized Paths",
    desc: "Adaptive learning journeys that adjust to each learner's pace, role, and baseline knowledge automatically.",
    color: "from-pink-500 to-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: Globe,
    title: "Distributed Team Support",
    desc: "Seamlessly upskill teams across time zones with synchronized learning paths and async-friendly content.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Award,
    title: "Recognizable Certifications",
    desc: "Earn credentials from top institutions that boost employee retention, LinkedIn profiles, and career growth.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Layers,
    title: "Custom Curriculum",
    desc: "Tailor every program entirely to your organization's specific tech stack, tools, and strategic goals.",
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Collaborative Learning Paths",
    desc: "Foster team collaboration with cohort-based programs, peer learning groups, and shared project outcomes.",
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
  },
];

export default function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Everything in One Platform
          </p>
          <div className="section-divider" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            From curriculum to analytics —{" "}
            <span className="gradient-text">everything L&D teams need</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A complete enterprise learning operating system built for scale, measurability,
            and genuine employee growth.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`feature-card ${feat.bg} rounded-2xl p-6 border border-transparent hover:border-blue-100 cursor-pointer`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
