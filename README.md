# 🚀 Accredian Enterprise

A polished, fully responsive **Next.js 14** recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built as part of a Full Stack Developer Intern assignment.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

---

## 🌐 Live Demo

> **[👉 View Live on Vercel](https://accredian-enterprise-sigma.vercel.app/)**  
> **[📁 GitHub Repository](https://github.com/YashThakur0421/accredian-enterprise)**

---

## ✨ Features

- 🎨 **Pixel-perfect UI** — Matches Accredian Enterprise's design language
- 📱 **Fully Responsive** — Mobile, tablet, and desktop ready
- ⚡ **Fast Performance** — 99.6 kB first load JS, statically prerendered
- 🧩 **Reusable Components** — Every section is an isolated, clean component
- 📋 **Lead Capture Form** — With validation, API integration, and success/error states
- 🔌 **REST API** — `/api/leads` route with GET and POST support
- 🎭 **Smooth Animations** — Marquee, hover effects, gradient mesh, glassmorphism
- 🔍 **SEO Ready** — Semantic HTML + metadata

---

## 📸 Sections Built

| Section | Description |
|---|---|
| 🧭 **Navbar** | Scroll-aware — transparent on hero, white + shadow on scroll. Mobile hamburger menu |
| 🦸 **Hero** | Full-screen gradient with animated live dashboard mockup and dual CTAs |
| 🏢 **Clients** | Infinite auto-scrolling logo marquee + 4 animated stat counters |
| ⚙️ **Features** | 8 solution cards with icons, color-coded by category |
| 📚 **Programs** | 4 program cards (Data Science, PM, GenAI, Leadership) with partner & skills |
| 🗺️ **How It Works** | 4-step numbered process on a dark gradient background |
| 💬 **Testimonials** | 6 cards from L&D leaders at Infosys, Razorpay, TCS, Flipkart & more |
| 📬 **Lead Capture** | Validated form → calls `/api/leads` → success/error UI states |
| 🦶 **Footer** | CTA banner + 4-column links + social icons + contact info |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + Custom CSS Animations |
| Icons | Lucide React |
| Fonts | Sora (headings) + DM Sans (body) via Google Fonts |
| API | Next.js Route Handlers |
| Deployment | Vercel |

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── globals.css               # Global styles + custom animations
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Main page — composes all sections
│   └── api/
│       └── leads/
│           └── route.ts          # POST /api/leads — lead capture endpoint
│
├── components/
│   ├── Navbar.tsx                # Sticky scroll-aware navigation
│   ├── HeroSection.tsx           # Hero with dashboard mockup
│   ├── ClientsSection.tsx        # Logo marquee + stat counters
│   ├── FeaturesSection.tsx       # 8-feature solutions grid
│   ├── ProgramsSection.tsx       # 4 program cards
│   ├── HowItWorksSection.tsx     # 4-step process timeline
│   ├── TestimonialsSection.tsx   # 6 testimonial cards
│   ├── ContactSection.tsx        # Lead capture form
│   └── Footer.tsx                # Full footer with CTA banner
│
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+
- npm

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YashThakur0421/accredian-enterprise.git

# 2. Navigate into the project
cd accredian-enterprise

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🔌 API Reference

### `POST /api/leads` — Capture a lead

**Request body:**
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@company.com",
  "company": "Acme Corp",
  "size": "201–500 employees",
  "phone": "+91 98765 43210",
  "message": "Looking to upskill 200 data analysts"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "leadId": "lead_1745000000_abc12"
}
```

### `GET /api/leads` — Retrieve all leads
Returns a list of all captured leads with timestamps.

---

## 🤖 AI Usage (Claude)

AI was used as a **development accelerator** throughout this project.

### Where AI Helped
- **Component scaffolding** — Generated base structure for all 9 components
- **Lead form logic** — Validation, async fetch, and all UI states
- **CSS animations** — Marquee, gradient mesh, glassmorphism card
- **API route** — Route handler with validation and HTTP status codes
- **Content research** — Searched and extracted real Accredian Enterprise content

### What I Did Manually
- Debugged and fixed a PostCSS config conflict that broke the entire build
- Chose the font pairing (Sora + DM Sans) — AI defaults to generic fonts
- Verified all content against the real Accredian website
- Made all section ordering and UX flow decisions
- Handled the full Git + Vercel deployment pipeline

---

## 🚀 Improvements With More Time

- [ ] **Real database** — PostgreSQL + Prisma instead of in-memory storage
- [ ] **Email notifications** — Confirmation email on lead submit via Resend
- [ ] **Framer Motion** — Scroll-triggered `whileInView` animations per section
- [ ] **Admin dashboard** — Protected `/admin/leads` page to view all submissions
- [ ] **CMS integration** — Contentful or Sanity so content can be updated without code
- [ ] **Analytics** — PostHog for tracking CTA clicks, scroll depth, form submissions
- [ ] **Full mobile QA** — Test on real devices across all breakpoints

---

## 👨‍💻 Author

**Yash Thakur**  
[GitHub](https://github.com/YashThakur0421)

---

*Built for the Accredian Full Stack Developer Intern Assignment*
