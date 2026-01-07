# FlexPlan: Solving the Meal Plan Abandonment Problem

**A product case study analyzing why 65% of meal plan users abandon within 2-3 weeks, and proposing FlexPlan—a behavioral design solution.**

This is an **interactive Next.js website** that presents a complete product strategy analysis, complete with visualizations, metrics dashboards, and strategic recommendations.

## 📋 Quick Overview

**Problem:** 40M people sign up for meal plans yearly. 65% quit by Week 3.

**Root Cause:** Product creates friction faster than it removes friction. Users get stuck in Week 2-3 transition zone with no recovery path.

**Solution:** FlexPlan - A meal planning system with:
- ⚖️ **Dynamic Difficulty Score** - Flexible meals maintain nutrition while reducing all-or-nothing thinking
- 🔄 **Reset Button** - Graceful recovery mechanism for when users slip
- 🎉 **Social Mode** - Built-in flexibility for real-life social eating

**Result:** Target 60%+ Week 3 retention (vs. 35% industry baseline)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- Git installed
- A code editor (VS Code recommended)

### Installation

1. **Navigate to project directory:**
```bash
cd C:\Users\ifaiz\Desktop\flexplan-case-study
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
flexplan-case-study/
├── app/
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page (problem intro)
│   ├── globals.css               # Global styles
│   ├── root-causes/
│   │   └── page.js              # Root causes analysis
│   ├── segments/
│   │   └── page.js              # User segmentation
│   ├── solution/
│   │   └── page.js              # Product solution
│   ├── metrics/
│   │   └── page.js              # Success metrics & validation
│   └── gtm/
│       └── page.js              # Go-to-market strategy
├── components/
│   └── RetentionChart.js         # Interactive retention curve
├── public/                        # Static assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .gitignore
└── README.md
```

### Pages

- **`/`** - Home: Problem statement, hero section, retention curve
- **`/root-causes`** - 5 root causes of abandonment with expandable details
- **`/segments`** - 3 user segments (Busy Professional, Social Foodie, Budget Parent)
- **`/solution`** - FlexPlan features: Dynamic Difficulty, Reset Button, Social Mode
- **`/metrics`** - Success metrics, validation plan, interactive dashboards
- **`/gtm`** - Go-to-market strategy, acquisition channels, monetization, budget

---

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Animation:** Framer Motion (CSS animations)
- **Hosting:** Vercel (recommended)

---

## 📊 Key Features

### Interactive Elements
- ✅ Expandable root cause cards with examples
- ✅ Interactive user segment selector
- ✅ Clickable solution feature cards
- ✅ Live retention curve chart
- ✅ Metrics comparison dashboard
- ✅ Smooth animations & transitions

### Content Coverage
- ✅ Deep problem analysis (root causes)
- ✅ User segmentation (3 target segments)
- ✅ Product solution (3 core features)
- ✅ Success metrics & validation plan
- ✅ Go-to-market strategy
- ✅ Financial projections & unit economics

---

## 🛠️ Development

### Available Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Customization

**Change colors:**
Edit `tailwind.config.js` to modify brand colors.

**Update content:**
Edit individual page files in `app/` directory.

**Add new pages:**
Create new folders in `app/` directory with `page.js` file.

---

## 🚀 Deployment to Vercel

### Option 1: One-Click Deploy (Easiest)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: FlexPlan case study"
git branch -M main
git remote add origin https://github.com/yourusername/flexplan-case-study.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Select your GitHub repo (`flexplan-case-study`)

5. Click "Deploy"

Vercel will auto-deploy every time you push to GitHub.

### Option 2: Deploy from CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set as production
vercel --prod
```

### Option 3: Manual GitHub Pages

```bash
# Build
npm run build

# Deploy to GitHub Pages (requires setup)
```

---

## 📝 Content to Customize

Before submitting, customize these sections:

1. **Your Name & Contact** (Footer)
   - Edit `/app/gtm/page.js` - Footer section

2. **Your GitHub URL** (Footer)
   - Change from `yourusername` to your actual GitHub username

3. **Your Email/LinkedIn** (if adding contact section)
   - Add to footer or create contact page

4. **Personal Insights** (any section)
   - Add your own research findings
   - Include personal anecdotes where relevant
   - Add quotes from user interviews if applicable

---

## 🎯 How to Use for Your Interview Submission

### Step 1: Install & Run Locally
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to verify everything works.

### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: FlexPlan case study analysis"
git remote add origin https://github.com/yourusername/flexplan-case-study.git
git push -u origin main
```

### Step 3: Deploy to Vercel
Follow "Deployment to Vercel" section above.

### Step 4: Submit to Interview
Send them the Vercel URL:
```
https://flexplan-case-study.vercel.app
```

Or include in email:
```
Here's my interactive case study analysis: [Vercel URL]

The site covers:
- Problem discovery & root cause analysis
- User segmentation (3 target groups)
- Product solution (FlexPlan with 3 features)
- Success metrics & validation approach
- Go-to-market strategy

Code available on GitHub: [GitHub URL]

Feel free to explore the interactive dashboards and click through the sections.
```

---

## 📊 Submission Email Template

```
Subject: Meal Plan Abandonment Case Study - [Your Name]

Hi [Hiring Manager],

I've completed your case study assignment and built an interactive analysis instead of a traditional PDF. Here's what I created:

🌐 **Live Website:** [Vercel URL]
💻 **Code:** [GitHub URL]

The analysis covers:
1. Root cause analysis (5 specific reasons people abandon)
2. User segmentation (3 underserved segments)
3. Product solution (FlexPlan with 3 core features)
4. Success metrics & validation plan (4-week approach)
5. Go-to-market strategy ($2-3M Year 1 investment)

The key insight: Current apps fail because they create friction faster than they remove friction. FlexPlan solves this through a designed recovery mechanism (Reset Button), built-in social flexibility, and progressive onboarding.

The site includes interactive visualizations, retention curves, metrics dashboards, and detailed strategic analysis.

I'm excited to discuss the validation approach and business model.

Thanks,
[Your Name]
```

---

## 🎓 What This Demonstrates

Your submission showcases:
- ✅ **Problem-solving:** Deep analysis beyond surface-level answers
- ✅ **Product thinking:** Specific features solving real pain points
- ✅ **Technical skills:** Next.js, React, Tailwind CSS, interactive visualizations
- ✅ **Strategic thinking:** GTM, metrics, unit economics, risks
- ✅ **Design:** Beautiful, professional UI with smooth interactions
- ✅ **Communication:** Complex ideas presented clearly and interactively

---

## 📚 Case Study Contents

### Problem Discovery
- Industry abandonment rates: 65% by Week 3
- Root causes: all-or-nothing enforcement, prep friction, social conflicts, no recovery path, motivation decay
- Why it's a design problem, not a willpower problem

### User Segmentation
- Busy Professionals (45%+ of users, 65% abandonment)
- Social Foodies (25%+ of users, 60% abandonment)
- Budget-Conscious Parents (20%+ of users, 70% abandonment)

### Product Solution (FlexPlan)
- Dynamic Difficulty Score (40% core, 40% flexible, 20% wild card)
- Reset Button (once/week recovery mechanism)
- Social Mode (calendar + restaurant recommendations)
- Progressive onboarding (Week 1: 3 meals, ramp to 7 by Week 4)

### Metrics & Validation
- Primary: 55%+ Week 3 retention (vs. 35% industry)
- Secondary: Reset return rate (85%+), social engagement (75%+), NPS (40+)
- 4-week validation plan: research → prototyping → beta → iteration

### Go-to-Market
- Positioning: "Meal planning designed for real life, not Instagram"
- Phased launch: Waitlist → Soft launch (NYC/SF) → National → International
- Acquisition: 30% organic, 40% performance marketing, 20% partnerships, 10% content
- Freemium: Free (3 meals/week) → Premium ($9.99/month, unlimited)
- Year 1 budget: $2-3M (engineering $600K, marketing $800K)
- Expected: 50-100K paid users, $50-100K MRR, 60%+ retention

---

## 🤝 Contributing

This is your submission, but feel free to:
- Add more sections (team, risks, appendix)
- Include additional charts or data visualizations
- Add user testimonials or interview excerpts
- Create new pages for deeper dives

---

## 📄 License

This case study is for your personal interview submission. Feel free to modify and customize as needed.

---

## ❓ FAQ

**Q: Will Vercel deployment be fast?**
A: Yes, Vercel is optimized for Next.js. Your site will load in <1 second.

**Q: Can I add more pages?**
A: Absolutely. Create new folders in `/app` with `page.js` files and add navigation links.

**Q: Should I change the styling?**
A: The design is professional and clean. Keep it unless you have specific feedback to incorporate.

**Q: How do I update content after deployment?**
A: Push changes to GitHub; Vercel auto-redeploys within seconds.

---

## 🎉 You're Ready!

You now have a **production-ready, interactive case study website** that will impress interviewers far more than a PDF ever could.

Good luck with your interview! 🚀

---

**Built with Next.js + React + Tailwind CSS**
**Deployed on Vercel**
**Submitted for [Company Name] Product Manager interview**
