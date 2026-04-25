import { Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Programs: [
    "Data Science & AI",
    "Product Management",
    "Generative AI",
    "Leadership & Strategy",
    "Software Engineering",
    "Design Thinking",
  ],
  Solutions: [
    "Enterprise Learning OS",
    "Custom Curriculum",
    "Live Mentorship",
    "Analytics Dashboard",
    "Certification Programs",
    "Distributed Teams",
  ],
  Company: [
    "About Us",
    "Careers",
    "Blog",
    "Press",
    "University Partners",
    "Case Studies",
  ],
  Support: [
    "Help Center",
    "Contact Sales",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Accessibility",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Start your enterprise learning journey today
          </h2>
          <p className="text-blue-100/80 text-base mb-6 max-w-xl mx-auto">
            Join 500+ companies already transforming their workforce with Accredian.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors shadow-xl"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-lg">
                Accredian{" "}
                <span className="text-cyan-400">Enterprise</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              The complete operating system for enterprise learning. Custom programs,
              live mentorship, and real-time analytics — at scale.
            </p>

            {/* Contact details */}
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                <span>+91 80951 58100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                <span>enterprise@accredian.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-500 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
