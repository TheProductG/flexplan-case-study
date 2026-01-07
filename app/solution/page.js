'use client'

import Link from 'next/link'
import { useState } from 'react'

const features = [
  {
    id: 1,
    name: 'Dynamic Difficulty Score',
    emoji: '⚖️',
    description: 'Meals organized by execution difficulty and flexibility',
    details: [
      {
        label: '40% Core Meals',
        value: 'Essential nutrition (must-haves)',
        example: 'Grilled chicken, roasted broccoli, brown rice',
      },
      {
        label: '40% Flexible Meals',
        value: 'Same nutrition, faster execution',
        example: 'Rotisserie chicken (saves 20 min prep), restaurant option',
      },
      {
        label: '20% Wild Cards',
        value: 'Planned cheat meals',
        example: 'Anything goes (planned, not guilt)',
      },
    ],
    why: 'Reduces all-or-nothing thinking. Users maintain nutrition goals while having agency.',
    solves: ['All-or-Nothing Enforcement', 'Prep Friction Mismatch'],
  },
  {
    id: 2,
    name: 'Reset Button',
    emoji: '🔄',
    description: 'Graceful recovery mechanism for users who slip',
    details: [
      {
        label: 'Once Per Week',
        value: 'User can reset when needed',
        example: 'Had a bad day? Click reset.',
      },
      {
        label: '3-Day Simple Plan',
        value: 'Dead-simple options to recover',
        example: 'Takeout recommendations, zero-prep meals',
      },
      {
        label: 'Ramp Back Up',
        value: 'Gradually return to normal plan',
        example: 'Day 4: slowly introduce complexity again',
      },
    ],
    why: 'Removes shame and guilt. Provides clear path back in without "too far behind" feeling.',
    solves: ['No Recovery Mechanism', 'Motivation Decay'],
    impact: '85%+ of users who reset return within 2 days',
  },
  {
    id: 3,
    name: 'Social Mode',
    emoji: '🎉',
    description: 'Built-in flexibility for real-life social eating',
    details: [
      {
        label: 'Social Calendar',
        value: 'Mark social events planned',
        example: 'Friday restaurant dinner, friend meal',
      },
      {
        label: 'Auto-Adjustment',
        value: 'Plan adapts automatically',
        example: 'Skip Friday meal, balance nutrition across week',
      },
      {
        label: 'Restaurant Recommendations',
        value: 'Healthy options at restaurants you choose',
        example: 'Eating out becomes playing the game not breaking rules',
      },
    ],
    why: "Eating out and meal planning aren't in conflict. Foodies stay engaged.",
    solves: ['Social Friction & FOMO'],
  },
]

export default function Solution() {
  const [expandedFeature, setExpandedFeature] = useState(1)

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
            <Link href="/metrics" className="hover:text-cyan-400 transition">Metrics</Link>
            <Link href="/gtm" className="hover:text-cyan-400 transition">GTM</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section pt-40">
        <div className="container-custom">
          <h1 className="text-6xl font-bold mb-6 gradient-text text-center">
            Introducing FlexPlan
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            A meal planning system that expects imperfection and builds grace into it
          </p>
          <p className="text-lg text-cyan-400 text-center mt-4 font-semibold">
            "The best meal plan is one users can break and still return to"
          </p>
        </div>
      </section>

      {/* Three Core Features */}
      <section className="section py-20">
        <div className="container-custom">
          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="card cursor-pointer"
                onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{feature.emoji}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                          {feature.name}
                        </h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl ml-4">
                    {expandedFeature === feature.id ? '−' : '+'}
                  </div>
                </div>

                {expandedFeature === feature.id && (
                  <div className="mt-6 pt-6 border-t border-white/10 animate-slide-up">
                    {/* Details */}
                    <div className="space-y-4 mb-6">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <p className="text-sm text-cyan-400 uppercase tracking-wide font-bold mb-2">
                            {detail.label}
                          </p>
                          <p className="text-gray-300 mb-2">{detail.value}</p>
                          <p className="text-sm text-gray-400 italic">Example: {detail.example}</p>
                        </div>
                      ))}
                    </div>

                    {/* Why It Works */}
                    <div className="bg-white/5 rounded-lg p-4 mb-6">
                      <p className="text-sm text-green-400 uppercase tracking-wide font-bold mb-2">
                        Why It Works
                      </p>
                      <p className="text-white">{feature.why}</p>
                    </div>

                    {/* Solves */}
                    <div className="mb-6">
                      <p className="text-sm text-purple-400 uppercase tracking-wide font-bold mb-3">
                        Solves Root Causes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.solves.map((cause, idx) => (
                          <span key={idx} className="bg-purple-500/30 border border-purple-400/50 rounded-full px-4 py-2 text-sm">
                            {cause}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    {feature.impact && (
                      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4 border border-cyan-400/30">
                        <p className="text-cyan-300 font-semibold">Expected Impact</p>
                        <p className="text-white">{feature.impact}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progressive Onboarding */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Progressive Onboarding
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Most apps start at 100% difficulty. We start easy and ramp up aligned with habit formation science.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                week: 'Week 1',
                title: 'Honeymoon Phase',
                meals: '3 meals/week',
                recipes: 'Easiest (5-ingredient, 15 min)',
                goal: 'Build app habit',
                difficulty: 'Low',
                color: 'from-green-500 to-emerald-500',
              },
              {
                week: 'Week 2-3',
                title: 'Habit Formation Zone',
                meals: '4-5 meals/week',
                recipes: 'Medium (20-30 min)',
                goal: 'Extend habit + show results',
                difficulty: 'Medium',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                week: 'Week 4+',
                title: 'Sustainability Phase',
                meals: '7 meals/week',
                recipes: 'Full library available',
                goal: 'Habit + results sustain motivation',
                difficulty: 'High',
                color: 'from-blue-500 to-cyan-500',
              },
            ].map((phase, idx) => (
              <div key={idx} className="card">
                <div className={`bg-gradient-to-r ${phase.color} px-4 py-2 rounded-lg font-bold mb-4 inline-block`}>
                  {phase.week}
                </div>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <div className="space-y-3 text-gray-300">
                  <p><span className="text-cyan-400 font-semibold">Meals:</span> {phase.meals}</p>
                  <p><span className="text-cyan-400 font-semibold">Recipes:</span> {phase.recipes}</p>
                  <p><span className="text-cyan-400 font-semibold">Goal:</span> {phase.goal}</p>
                  <p><span className="text-cyan-400 font-semibold">Difficulty:</span> {phase.difficulty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Wins */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Why FlexPlan Wins
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-cyan-400">Factor</th>
                  <th className="text-left py-4 px-4 text-red-400">Industry Standard</th>
                  <th className="text-left py-4 px-4 text-green-400">FlexPlan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Week 3 Retention', industry: '35%', flexplan: '60%+', benefit: '2.5x better' },
                  { factor: 'Recovery Path', industry: 'None', flexplan: 'Reset Button', benefit: 'Only app with designed recovery' },
                  { factor: 'Social Flexibility', industry: 'Punitive', flexplan: 'Built-in', benefit: 'Foodies stay engaged' },
                  { factor: 'Starting Difficulty', industry: '100% Day 1', flexplan: 'Progressive', benefit: 'Matches science' },
                  { factor: 'Mental Model', industry: 'Perfect adherence', flexplan: 'Participation + recovery', benefit: 'Works with psychology' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition">
                    <td className="py-4 px-4 font-semibold">{row.factor}</td>
                    <td className="py-4 px-4 text-gray-400">{row.industry}</td>
                    <td className="py-4 px-4 text-cyan-300">{row.flexplan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">How do we know this works?</h2>
          <Link href="/metrics" className="button-primary">
            See the Metrics & Validation Plan
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
