'use client'

import Link from 'next/link'
import { useState } from 'react'

const rootCauses = [
  {
    id: 1,
    title: 'All-or-Nothing Enforcement',
    percentage: '45%',
    description: 'Users see one meal off-plan as failure. Apps reinforce this by breaking streaks.',
    example: 'One missed dinner due to work → user feels they "broke" the plan → gives up',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 2,
    title: 'Meal Prep Friction Mismatch',
    percentage: '35%',
    description: 'Users underestimate actual prep time. Shopping is harder than expected.',
    example: '30-minute meal takes 60 minutes → accumulated stress → abandonment',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 3,
    title: 'Social Friction & FOMO',
    percentage: '25%',
    description: 'Social events conflict with meal plans. Users feel missing out.',
    example: 'Friday night friend dinner → breaks plan → user skips both plan AND social',
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 4,
    title: 'No Recovery Mechanism',
    percentage: '30%',
    description: 'Missing one day means the entire plan is broken with no way back.',
    example: 'Missed 2 days due to travel → no meal plan available → gives up completely',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 5,
    title: 'Motivation Decay',
    percentage: '40%',
    description: 'Habit formation takes 3-4 weeks; motivation peaks at Day 1.',
    example: 'Week 1 feels novel; Week 3 is routine WITHOUT visible results yet',
    color: 'from-blue-500 to-blue-600',
  },
]

export default function RootCauses() {
  const [expanded, setExpanded] = useState(null)

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
            <Link href="/segments" className="hover:text-cyan-400 transition">Segments</Link>
            <Link href="/solution" className="hover:text-cyan-400 transition">Solution</Link>
            <Link href="/metrics" className="hover:text-cyan-400 transition">Metrics</Link>
            <Link href="/gtm" className="hover:text-cyan-400 transition">GTM</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section pt-40">
        <div className="container-custom">
          <h1 className="text-6xl font-bold mb-6 gradient-text text-center">
            5 Root Causes of Abandonment
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Going deeper than "I got busy" — here's what actually happens at Week 2-3
          </p>
        </div>
      </section>

      {/* Root Causes Cards */}
      <section className="section py-20">
        <div className="container-custom">
          <div className="space-y-6">
            {rootCauses.map((cause) => (
              <div
                key={cause.id}
                className="card cursor-pointer"
                onClick={() => setExpanded(expanded === cause.id ? null : cause.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`bg-gradient-to-r ${cause.color} px-4 py-2 rounded-lg font-bold text-lg`}>
                        {cause.percentage}
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-400">
                        {cause.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg">
                      {cause.description}
                    </p>
                  </div>
                  <div className="text-2xl ml-4">
                    {expanded === cause.id ? '−' : '+'}
                  </div>
                </div>

                {expanded === cause.id && (
                  <div className="mt-6 pt-6 border-t border-white/10 animate-slide-up">
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">Example</p>
                      <p className="text-white">"{cause.example}"</p>
                    </div>
                    <p className="text-gray-300">
                      This root cause is why {cause.percentage} of meal plan users abandon. Current apps don't address this.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Insight */}
          <div className="card mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">The Fundamental Insight</h3>
            <p className="text-lg text-gray-300">
              The problem isn't that users lack discipline. The problem is that the product creates friction faster than it removes friction.
            </p>
            <p className="text-gray-400 mt-4">
              Current apps expect perfect consistency. Real users have chaotic lives—jobs, friends, disruptions, busy weeks. When a disruption happens at Week 2-3, there's no graceful way to recover.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">Now let's explore who suffers most</h2>
          <Link href="/segments" className="button-primary">
            See User Segments
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="container-custom text-center text-gray-500">
          <p>FlexPlan Case Study | Built with Next.js + React</p>
        </div>
      </footer>
    </div>
  )
}
