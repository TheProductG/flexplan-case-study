'use client'

import Link from 'next/link'
import { useState } from 'react'

const segments = [
  {
    id: 1,
    name: 'Busy Professional',
    emoji: '💼',
    abandonmentRate: '65%',
    characteristics: [
      'Works 45+ hours/week',
      'Unpredictable schedule',
      'Eats out frequently',
      'Limited cooking time',
    ],
    painPoints: [
      'Meal prep incompatible with work urgency',
      'Rigid plans conflict with unpredictable schedule',
      'No time for complex recipes',
    ],
    whyTheyQuit: 'First unplanned day = cascading effect they can't recover from',
    marketSize: '6M+ users',
    value: 'High (willing to pay for convenience)',
  },
  {
    id: 2,
    name: 'Social Foodie',
    emoji: '🍽️',
    abandonmentRate: '60%',
    characteristics: [
      'Values social eating',
      'Concerned about food enjoyment',
      'Active social calendar',
      'Views food as lifestyle',
    ],
    painPoints: [
      'Meal plans create friction with social plans',
      'Feels restrictive and joyless',
      'FOMO from restaurants/cuisines',
    ],
    whyTheyQuit: 'Social plans feel more important; sees plan as sacrifice',
    marketSize: '5M+ users',
    value: 'High (willing to pay for flexibility)',
  },
  {
    id: 3,
    name: 'Budget-Conscious Parent',
    emoji: '👨‍👩‍👧‍👦',
    abandonmentRate: '70%',
    characteristics: [
      'Shopping on budget',
      'Responsible for family meals',
      'Time-starved',
      'Deal with food waste concerns',
    ],
    painPoints: [
      'Plan assumes consistent preferences',
      'Ingredient costs higher than expected',
      'Waste when kids refuse meals',
    ],
    whyTheyQuit: 'Plan doesn't align with family preferences; waste money',
    marketSize: '4M+ users',
    value: 'High (want to save money & time)',
  },
]

export default function Segments() {
  const [selected, setSelected] = useState(1)
  const selectedSegment = segments.find(s => s.id === selected)

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
            User Segments
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            3 segments account for 65% of signups + 65% of abandonment
          </p>
        </div>
      </section>

      {/* Segment Selector */}
      <section className="section py-20">
        <div className="container-custom">
          {/* Segment Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {segments.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setSelected(segment.id)}
                className={`card text-left transition-all ${selected === segment.id ? 'border-cyan-400 bg-white/20' : ''}`}
              >
                <div className="text-4xl mb-4">{segment.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{segment.name}</h3>
                <div className="text-3xl font-bold text-red-400 mb-4">
                  {segment.abandonmentRate}
                </div>
                <p className="text-sm text-gray-400">Abandonment Rate</p>
              </button>
            ))}
          </div>

          {/* Selected Segment Details */}
          {selectedSegment && (
            <div className="animate-fade-in">
              <div className="card bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                  <span className="text-5xl">{selectedSegment.emoji}</span>
                  {selectedSegment.name}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-cyan-400">Characteristics</h3>
                      <ul className="space-y-3">
                        {selectedSegment.characteristics.map((char, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-cyan-400">✓</span>
                            <span className="text-gray-300">{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-cyan-400">Market Size</h3>
                      <p className="text-gray-300">{selectedSegment.marketSize}</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-cyan-400">Pain Points</h3>
                      <ul className="space-y-3">
                        {selectedSegment.painPoints.map((pain, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-red-400">!</span>
                            <span className="text-gray-300">{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-cyan-400">Why They Quit</h3>
                      <p className="text-gray-300">{selectedSegment.whyTheyQuit}</p>
                    </div>
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Value Proposition</h3>
                  <p className="text-lg text-gray-300">{selectedSegment.value}</p>
                </div>
              </div>
            </div>
          )}

          {/* Key Insight */}
          <div className="card mt-12 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Why These Segments Matter</h3>
            <p className="text-lg text-gray-300">
              Together, these 3 segments represent <span className="text-cyan-400 font-bold">65% of all meal plan signups</span> but have the <span className="text-red-400 font-bold">highest abandonment rates (60-70%)</span>.
            </p>
            <p className="text-gray-400 mt-4">
              Current apps ignore their specific pain points. If we solve for them, we solve for the majority problem.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">Now let's solve their problems with FlexPlan</h2>
          <Link href="/solution" className="button-primary">
            Explore the Solution
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
