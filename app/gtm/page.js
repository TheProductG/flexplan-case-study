'use client'

import Link from 'next/link'

export default function GTM() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-md border-b border-white/10">
        <div className="container-custom flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold gradient-text">
            FlexPlan
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link href="/root-causes" className="hover:text-cyan-400 transition">Root Causes</Link>
            <Link href="/segments" className="hover:text-cyan-400 transition">Segments</Link>
            <Link href="/solution" className="hover:text-cyan-400 transition">Solution</Link>
            <Link href="/metrics" className="hover:text-cyan-400 transition">Metrics</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section pt-40">
        <div className="container-custom">
          <h1 className="text-6xl font-bold mb-6 gradient-text text-center">
            Go-To-Market Strategy
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            How we capture the $5B meal planning market
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Market Opportunity</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Market Size</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Global Market</p>
                  <p className="text-3xl font-bold text-cyan-300">$5B+</p>
                  <p className="text-gray-400 text-sm">Annual, growing 15%+ YoY</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-400 text-sm">US Addressable Market</p>
                  <p className="text-3xl font-bold text-cyan-300">3-4M</p>
                  <p className="text-gray-400 text-sm">Users in Year 1</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Competitive Advantage</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">1.</span>
                  <div>
                    <p className="font-semibold">Only app with designed recovery mechanism</p>
                    <p className="text-sm text-gray-400">Reset Button is patentable feature</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">2.</span>
                  <div>
                    <p className="font-semibold">Data moat from abandonment patterns</p>
                    <p className="text-sm text-gray-400">Competitors won't have this insight</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">3.</span>
                  <div>
                    <p className="font-semibold">First-mover advantage in flexibility</p>
                    <p className="text-sm text-gray-400">Network effects + community building possible</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Positioning */}
          <div className="card bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Positioning</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">NOT</p>
                <p className="text-white text-lg">"The best meal plan app" (too crowded)</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">INSTEAD</p>
                <p className="text-cyan-300 text-xl font-semibold">
                  "The first meal plan designed for real life, not Instagram"
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Tagline</p>
                <p className="text-white text-lg italic">
                  "Meal planning that doesn't require perfection—just participation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Phased Launch Strategy</h2>

          <div className="space-y-6">
            {[
              {
                phase: 'Months 0-1',
                name: 'Waitlist & Beta',
                target: 'Busy Professionals',
                goal: '10K waitlist, 500 beta users',
                tactics: [
                  'ProductHunt launch',
                  'Indie Hackers community',
                  'Corporate wellness partnerships',
                  'LinkedIn + Twitter threads',
                ],
              },
              {
                phase: 'Months 1-2',
                name: 'Soft Launch (Limited)',
                target: 'NYC/SF Metro (1-2 major cities)',
                goal: '5-10K paid signups, 60%+ Week 3 retention proof',
                tactics: [
                  'Word-of-mouth focus',
                  'Leverage beta cohort for referrals',
                  'Local PR in target cities',
                  'Micro-influencer partnerships',
                ],
              },
              {
                phase: 'Months 3-4',
                name: 'National Expansion',
                target: 'Full US rollout + Social Foodies segment',
                goal: '50-100K paid signups',
                tactics: [
                  'National PR push (health/lifestyle media)',
                  'Performance marketing (Google/Facebook ads)',
                  'Secondary segment messaging',
                  'Fitness app partnerships',
                ],
              },
              {
                phase: 'Months 4-6',
                name: 'Growth & Expansion',
                target: 'International (UK, Canada, Australia)',
                goal: 'Family mode feature, 100K+ paid users',
                tactics: [
                  'Add Budget-Conscious Parent segment features',
                  'International marketing',
                  'Health insurance partnerships',
                ],
              },
            ].map((phase, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg px-4 py-2 font-bold whitespace-nowrap text-sm">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400">{phase.name}</h3>
                    <p className="text-sm text-gray-400">Target: {phase.target}</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Goal</p>
                  <p className="text-white">{phase.goal}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide mb-3">Key Tactics</p>
                  <ul className="space-y-2">
                    {phase.tactics.map((tactic, i) => (
                      <li key={i} className="flex gap-2 text-gray-300">
                        <span className="text-cyan-400">▸</span>
                        <span>{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Channels */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Year 1 Acquisition Channels</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                channel: 'Organic / Word-of-Mouth',
                percentage: '30%',
                description: 'Referral program: $5 credit per friend',
                tactics: 'Net worth >1.5 (each user brings 1.5+ new users)',
                cost: 'Low',
              },
              {
                channel: 'Performance Marketing',
                percentage: '40%',
                description: 'Google/Facebook ads, YouTube, TikTok',
                tactics: 'Keywords: "meal planning", "weight loss", "healthy eating"',
                cost: 'CAC < $2 per user',
              },
              {
                channel: 'Partnerships',
                percentage: '20%',
                description: 'Corporate wellness, health insurance',
                tactics: 'White-label or embedded offering',
                cost: 'Medium (partnership setup)',
              },
              {
                channel: 'Content / Organic',
                percentage: '10%',
                description: 'Blog, SEO, podcast sponsorships',
                tactics: '"Why meal plans fail" content library',
                cost: 'Content creation costs',
              },
            ].map((channel, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">{channel.channel}</h3>
                  <div className="text-3xl font-bold text-green-400">{channel.percentage}</div>
                </div>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="text-cyan-400">Tactics:</span> {channel.tactics}</p>
                  <p><span className="text-cyan-400">Cost:</span> {channel.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Monetization Model</h2>

          <div className="card bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Freemium Strategy</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Free Tier</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    <span>3 meals/week</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    <span>1 reset/month</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Basic recipes (100+)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Simple progress tracking</span>
                  </li>
                </ul>
                <p className="text-gray-400 text-sm mt-4">Goal: Viral funnel with 1.5+ coefficient</p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-white">Premium Tier</h4>
                <div className="mb-4">
                  <p className="font-semibold text-cyan-300 text-lg">$9.99/month or $79.99/year</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Unlimited meals/week</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Unlimited resets</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Restaurant recommendations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Family mode (multiple users)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Accountability buddy system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Unit Economics */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: 'Conversion Rate', value: '40%', vs: 'vs. 5% industry' },
              { metric: 'Annual LTV', value: '$120', vs: 'per paying user' },
              { metric: 'CAC', value: '$2-3', vs: 'healthy 1:40 ratio' },
              { metric: 'Payback Period', value: '2 months', vs: 'fast ROI' },
              { metric: 'Year 1 Revenue', value: '$50-100K MRR', vs: 'growing 20%+ MoM' },
              { metric: 'Gross Margin', value: '80%+', vs: 'typical SaaS' },
            ].map((econ, idx) => (
              <div key={idx} className="card">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">{econ.metric}</p>
                <p className="text-3xl font-bold text-cyan-300 mb-2">{econ.value}</p>
                <p className="text-xs text-gray-400">{econ.vs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Year 1 Outcomes */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Expected Year 1 Outcomes</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { phase: 'Beta Phase', metric: '60%+ Week 3 retention', target: '✅ Validate core hypothesis' },
              { phase: 'Soft Launch', metric: '5-10K paid signups', target: '✅ Test PMF' },
              { phase: 'Full Launch', metric: '50-100K paid users', target: '✅ Scale acquisition' },
              { phase: 'Revenue', metric: '$50-100K MRR', target: '✅ Sustainable unit economics' },
              { phase: 'User Satisfaction', metric: 'NPS > 40', target: '✅ Word-of-mouth driver' },
              { phase: 'Market Position', metric: '#1 retention in category', target: '✅ Defensible moat' },
            ].map((outcome, idx) => (
              <div key={idx} className="card">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">{outcome.phase}</p>
                <p className="text-xl font-bold text-cyan-300 mb-4">{outcome.metric}</p>
                <p className="text-sm text-gray-300">{outcome.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to build this?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            FlexPlan solves a $5B market problem that every competitor has failed to crack. The first company to build real recovery mechanisms wins the category.
          </p>
          <Link href="/" className="button-primary">
            Back to Overview
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-cyan-400 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-cyan-400">Home</Link></li>
                <li><Link href="/root-causes" className="text-gray-400 hover:text-cyan-400">Root Causes</Link></li>
                <li><Link href="/segments" className="text-gray-400 hover:text-cyan-400">User Segments</Link></li>
                <li><Link href="/solution" className="text-gray-400 hover:text-cyan-400">Solution</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyan-400 mb-4">Document</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/yourusername/flexplan" className="text-gray-400 hover:text-cyan-400">GitHub Repo</a></li>
                <li><a href="https://yourdomain.com/case-study" className="text-gray-400 hover:text-cyan-400">Full Analysis (PDF)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyan-400 mb-4">Built With</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Next.js 14</li>
                <li>React 18</li>
                <li>Tailwind CSS</li>
                <li>Recharts</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500">
            <p>FlexPlan Case Study | A product strategy for solving meal plan abandonment</p>
            <p className="text-sm mt-2">Built with Next.js + React | Hosted on Vercel</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
