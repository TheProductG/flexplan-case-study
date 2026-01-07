'use client'

import Link from 'next/link'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const retentionData = [
  { week: 'W1', industry: 90, flexplan: 85, target: 85 },
  { week: 'W2', industry: 50, flexplan: 70, target: 70 },
  { week: 'W3', industry: 35, flexplan: 60, target: 60 },
  { week: 'W4', industry: 30, flexplan: 55, target: 55 },
]

const metricsData = [
  { metric: 'Retention', industry: 35, target: 60, difference: 25 },
  { metric: 'Reset Return', industry: 40, target: 85, difference: 45 },
  { metric: 'Social Engagement', industry: 45, target: 75, difference: 30 },
  { metric: 'Premium Conversion', industry: 5, target: 40, difference: 35 },
  { metric: 'NPS Score', industry: 20, target: 40, difference: 20 },
]

const COLORS = ['#ef4444', '#22d3ee']

export default function Metrics() {
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
            <Link href="/gtm" className="hover:text-cyan-400 transition">GTM</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section pt-40">
        <div className="container-custom">
          <h1 className="text-6xl font-bold mb-6 gradient-text text-center">
            Success Metrics & Validation
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            How we measure if FlexPlan actually solves the problem
          </p>
        </div>
      </section>

      {/* Primary Metric */}
      <section className="section py-20">
        <div className="container-custom">
          <div className="card bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Primary Success Metric</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-gray-400 uppercase text-sm tracking-wide mb-2">Metric</p>
                <p className="text-3xl font-bold text-cyan-300">Week 3-4 Retention</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-sm tracking-wide mb-2">Industry Baseline</p>
                <p className="text-3xl font-bold text-red-400">35%</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-sm tracking-wide mb-2">FlexPlan Target</p>
                <p className="text-3xl font-bold text-green-400">60%+</p>
              </div>
            </div>
            <p className="text-gray-300 mt-6">
              <strong>Why this metric?</strong> Week 3-4 is the critical danger zone. If users stick past this point, habit formation kicks in and they're likely to stay long-term.
            </p>
          </div>

          {/* Retention Chart */}
          <div className="card mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Retention Trajectory</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="week" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="industry" stroke="#ef4444" strokeWidth={2} name="Industry" />
                <Line type="monotone" dataKey="flexplan" stroke="#22d3ee" strokeWidth={2} name="FlexPlan Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Secondary Metrics */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            Secondary Success Metrics
          </h2>

          {/* Metrics Comparison Chart */}
          <div className="card mb-12">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={metricsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="metric" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                />
                <Legend />
                <Bar dataKey="industry" fill="#ef4444" name="Industry Baseline" />
                <Bar dataKey="target" fill="#22d3ee" name="FlexPlan Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed Metrics */}
          <div className="space-y-4">
            {[
              {
                name: 'Reset Button Return Rate',
                target: '≥85%',
                description: 'Of users who use reset, % who return within 2 days',
                why: 'Validates our recovery mechanism actually works',
              },
              {
                name: 'Social Event Engagement',
                target: '75%',
                description: 'Of users who log social events, % re-engage after',
                why: 'Validates social mode solves FOMO/friction',
              },
              {
                name: 'Premium Conversion',
                target: '40%',
                description: 'Free users converting to paid tier',
                why: 'Validates monetization assumptions & problem-solution fit',
              },
              {
                name: 'NPS Score',
                target: '≥40',
                description: 'Net Promoter Score (vs. industry 15-25)',
                why: 'Validates user satisfaction & word-of-mouth potential',
              },
              {
                name: 'Meal Adherence (Core Meals)',
                target: '70%+',
                description: 'User follows core meal recommendations by Week 4',
                why: 'Validates flexibility score maintains nutrition goals',
              },
            ].map((metric, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-cyan-400 mb-2">{metric.name}</h4>
                    <p className="text-gray-300">{metric.description}</p>
                    <p className="text-sm text-gray-400 mt-2">{metric.why}</p>
                  </div>
                  <div className="text-3xl font-bold text-green-400 ml-4">{metric.target}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Plan */}
      <section className="section py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
            4-Week Validation Plan
          </h2>

          <div className="space-y-6">
            {[
              {
                phase: 'Phase 1: Research',
                timeline: 'Weeks 1-2',
                activities: [
                  'Interview 20 people who abandoned meal plans',
                  'Ask: "What happened at Week 2-3?" "When did you decide to quit?"',
                  'Validate root causes against our hypothesis',
                ],
              },
              {
                phase: 'Phase 2: Prototype Testing',
                timeline: 'Weeks 3-4',
                activities: [
                  'Build low-fidelity prototype (Figma/simple app)',
                  'Test with 10 users from each segment',
                  'Key questions: "Does this feel less restrictive?" "Would you use reset?"',
                ],
              },
              {
                phase: 'Phase 3: Closed Beta',
                timeline: 'Weeks 5-8',
                activities: [
                  'Launch to 500 users (prioritize Busy Professionals)',
                  'Track retention, reset usage, social mode adoption',
                  'Do we hit 60% Week 3 retention? Which features are used?',
                ],
              },
              {
                phase: 'Phase 4: Rapid Iteration',
                timeline: 'Weeks 8-10',
                activities: [
                  'Analyze beta data; iterate on features that didn\'t work',
                  'Run second beta cohort with improvements',
                  'Make launch/pivot decision based on data',
                ],
              },
            ].map((phase, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg px-4 py-2 font-bold whitespace-nowrap">
                    {phase.timeline}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">{phase.phase}</h3>
                </div>
                <ul className="space-y-2 ml-4">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-cyan-400">✓</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Success Criteria */}
          <div className="card bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 mt-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Success Criteria to Move to Full Launch</h3>
            <div className="space-y-3">
              {[
                '✅ 55%+ Week 3 retention in beta (beat industry baseline)',
                '✅ 75%+ of users complete first reset without abandoning',
                '✅ User feedback shows clear problem-solution fit',
                '✅ At least 2 of 3 target segments show strong retention',
              ].map((criterion, idx) => (
                <p key={idx} className="text-white text-lg">{criterion}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">How do we bring this to market?</h2>
          <Link href="/gtm" className="button-primary">
            See Go-To-Market Strategy
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
