"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  size: string;
  phone: string;
  message: string;
}

const companySizes = [
  "1–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–2000 employees",
  "2000+ employees",
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", company: "", size: "", phone: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.company.trim()) errs.company = "Company name is required";
    if (!form.size) errs.size = "Please select company size";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    // Simulate API call to /api/leads
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", size: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right center, #2563eb, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Copy */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Get Started
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-5">
              Ready to{" "}
              <span className="gradient-text">transform your workforce?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Talk to our enterprise learning consultants. We'll map your skill gaps,
              recommend programs, and give you a customized ROI estimate — no commitment needed.
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {[
                "Free 45-minute discovery call",
                "Custom skill gap assessment",
                "Program recommendations & pricing",
                "Pilot program available for teams of 20+",
                "Dedicated enterprise success manager",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-10 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-blue-800 text-sm font-medium mb-1">
                "We got our first pilot program running in under 2 weeks."
              </p>
              <p className="text-blue-600 text-xs">
                — Talent Head, Fortune 500 Company
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl shadow-blue-500/10 p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                  We'll be in touch shortly!
                </h3>
                <p className="text-gray-600 text-sm">
                  Our enterprise team will reach out within 24 hours to schedule your
                  discovery call.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-blue-600 font-medium text-sm hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-1">
                  Request a Free Demo
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                        errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-blue-400"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                        errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-blue-400"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      errors.company ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-blue-400"
                    }`}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Company Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Size *
                    </label>
                    <select
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 appearance-none ${
                        errors.size ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:border-blue-400"
                      }`}
                    >
                      <option value="">Select size</option>
                      {companySizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.size && (
                      <p className="text-red-500 text-xs mt-1">{errors.size}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    What are you looking to achieve?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. Upskill 200 data analysts in Python and ML within 6 months..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 shadow-lg shadow-blue-500/25"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Request Free Demo
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center text-red-500 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <p className="text-center text-gray-400 text-xs">
                  No spam. We hate it too. Your data stays private and secure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
