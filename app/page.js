'use client'

import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const RetentionChart = dynamic(() => import('@/components/RetentionChart'), {
  ssr: false,
  loading: () => <div className="card w-full h-96 bg-white/5 rounded-xl flex items-center justify-center">Loading chart...</div>,
})

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-md border-b border-white/10">
        <div className="container-custom flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold gradient-text">
            FlexPlan
          </Link>
          <div className="flex gap-6">
            <Link href="/#problem" className="hover:text-cyan-400 transition">Problem</Link>
            <Link href="/root-causes" className="hover:text-cyan-400 transition">Root Causes</Link>
            <Link href="/segments" className="hover:text-cyan-400 transition">Segments</Link>
            <Link href="/solution" className="hover:text-cyan-400 transition">Solution</Link>
            <Link href="/metrics" className="hover:text-cyan-400 transition">Metrics</Link>
            <Link href="/gtm" className="hover:text-cyan-400 transition">GTM</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section pt-40">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              The Meal Plan Abandonment Problem
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              40M people sign up for meal plans every year.<br />
              <span className="text-red-400 font-semibold">65% abandon within 2-3 weeks.</span>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              This isn't a willpower problem. It's a design problem.
            </p>

            <div className="flex gap-4 justify-center mb-12">
              <Link href="/root-causes" className="button-primary">
                Explore the Solution
              </Link>
              <a href="#problem" className="button-secondary">
                Learn More
              </a>
            </div>
          </div>

          {/* Retention Curve Visualization */}
          <div className="mt-16 animate-slide-up">
            <RetentionChart />
          </div>
        </div>
      </section>

      {/* Problem Deep Dive */}
      <section id="problem" className="section">
        <div className="container-custom">
          <h2 className="text-5xl font-bold mb-12 gradient-text">Why People Quit</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: The Sequence */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Abandonment Sequence</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Week 1: Honeymoon Phase</h4>
                    <p className="text-gray-300">Excited, motivated, paid money. Friction feels purposeful.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Week 2: Friction Appears</h4>
                    <p className="text-gray-300">Daily decisions compound. Social conflicts. Unexpected costs. Taste boredom.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Week 3: Critical Decision</h4>
                    <p className="text-gray-300">First disruption. User faces: recover (hard) OR quit (easy). Most choose quit.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Root Insight */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Real Problem</h3>
              <p className="text-gray-300 mb-6">
                It's not that users lack discipline. It's that the product creates friction faster than it removes friction.
              </p>
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Key Insight</p>
                <p className="text-lg font-semibold text-cyan-300">
                  Initial motivation (peaks Week 1) wears off before habit formation (needs Weeks 3-4).
                </p>
              </div>
              <p className="text-gray-300">
                Users get stuck in the transition zone with no reward yet. When a disruption happens, there's no graceful way to recover.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="card text-center">
              <div className="text-4xl font-bold gradient-text mb-2">40M</div>
              <p className="text-gray-400">Annual meal plan signups (US)</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">65%</div>
              <p className="text-gray-400">Abandon by Week 3</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$5B</div>
              <p className="text-gray-400">Market opportunity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to explore the solution?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/root-causes" className="button-primary">
              Understand Root Causes
            </Link>
            <Link href="/solution" className="button-secondary">
              See the Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="container-custom text-center text-gray-500">
          <p>FlexPlan Case Study | Built with Next.js + React</p>
          <p className="text-sm mt-2">GitHub: <a href="https://github.com/yourusername/flexplan" className="text-cyan-400 hover:text-cyan-300">yourusername/flexplan</a></p>
        </div>
      </footer>
    </div>
  )
}
