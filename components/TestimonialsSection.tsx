import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. The analytics dashboard gives us clarity we've never had before — we can finally quantify our L&D ROI.",
    name: "Anita Krishnan",
    role: "Head of L&D, Infosys",
    initials: "AK",
    gradient: "from-blue-500 to-cyan-500",
    stars: 5,
  },
  {
    quote:
      "The custom curriculum they built for our data engineering team was spot-on. 3 months in, our team shipped a feature that saved us ₹2 crore annually. Worth every rupee.",
    name: "Ravi Shankar",
    role: "CTO, Razorpay",
    initials: "RS",
    gradient: "from-purple-500 to-pink-500",
    stars: 5,
  },
  {
    quote:
      "The live mentorship model is what sets Accredian apart. Our managers aren't just watching videos — they're building, presenting, and getting real feedback from IIM faculty.",
    name: "Priya Menon",
    role: "VP People, Meesho",
    initials: "PM",
    gradient: "from-green-500 to-teal-500",
    stars: 5,
  },
  {
    quote:
      "Onboarding 500 employees across 4 cities was seamless. The platform handled time zones, cohorts, and progress tracking without a single drop in quality.",
    name: "Deepak Gupta",
    role: "Chief HR Officer, TCS",
    initials: "DG",
    gradient: "from-amber-500 to-orange-500",
    stars: 5,
  },
  {
    quote:
      "We tried three other platforms before Accredian. The difference is the university co-creation — our employees actually trust the credentials they earn here.",
    name: "Sneha Agarwal",
    role: "Learning Manager, Flipkart",
    initials: "SA",
    gradient: "from-rose-500 to-pink-500",
    stars: 5,
  },
  {
    quote:
      "The AI-personalized paths reduced time-to-proficiency by 40% for our ML engineers. Remarkable results in just 6 months of deployment.",
    name: "Arjun Nair",
    role: "Engineering Director, Amazon India",
    initials: "AN",
    gradient: "from-indigo-500 to-blue-500",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Success Stories
          </p>
          <div className="section-divider" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Loved by{" "}
            <span className="gradient-text">L&D leaders everywhere</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From startups to Fortune 500s, here's what enterprise learning leaders say about
            working with Accredian.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card rounded-3xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.stars)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="text-blue-200 mb-3" />

              {/* Quote text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
