const companies = [
  "Google", "Microsoft", "Amazon", "Flipkart", "Infosys",
  "Wipro", "TCS", "HDFC Bank", "Razorpay", "PhonePe",
  "Zomato", "Swiggy", "Meesho", "Paytm", "MakeMyTrip",
  "Google", "Microsoft", "Amazon", "Flipkart", "Infosys",
  "Wipro", "TCS", "HDFC Bank", "Razorpay", "PhonePe",
  "Zomato", "Swiggy", "Meesho", "Paytm", "MakeMyTrip",
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          Trusted by 500+ leading companies
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track">
          {companies.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex-shrink-0 h-10 px-6 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100 text-gray-600 font-medium text-sm whitespace-nowrap"
            >
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Enterprise Clients", sub: "Across 20+ industries" },
            { value: "1M+", label: "Employees Trained", sub: "And counting" },
            { value: "98%", label: "Completion Rate", sub: "Industry-leading" },
            { value: "60%", label: "Avg. Salary Hike", sub: "For program graduates" },
          ].map((stat) => (
            <div key={stat.label} className="stat-item">
              <p className="number-highlight text-4xl md:text-5xl mb-1">{stat.value}</p>
              <p className="text-gray-800 font-semibold text-base mb-0.5">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
