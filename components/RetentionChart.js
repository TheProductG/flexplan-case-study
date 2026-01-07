'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { week: 'Week 1', industry: 90, flexplan: 85 },
  { week: 'Week 2', industry: 50, flexplan: 70 },
  { week: 'Week 3', industry: 35, flexplan: 60 },
  { week: 'Week 4', industry: 30, flexplan: 55 },
  { week: 'Month 2', industry: 25, flexplan: 50 },
  { week: 'Month 3', industry: 20, flexplan: 48 },
]

export default function RetentionChart() {
  return (
    <div className="card w-full">
      <h3 className="text-2xl font-bold mb-6 text-cyan-400">Retention Comparison</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="week" stroke="rgba(255,255,255,0.6)" />
          <YAxis stroke="rgba(255,255,255,0.6)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="industry"
            stroke="#ef4444"
            strokeWidth={2}
            name="Industry Baseline"
            dot={{ fill: '#ef4444' }}
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="flexplan"
            stroke="#22d3ee"
            strokeWidth={2}
            name="FlexPlan Target"
            dot={{ fill: '#22d3ee' }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-400">Industry Baseline: 35% by Week 3</p>
        </div>
        <div>
          <p className="text-gray-400">FlexPlan Target: 60%+ by Week 3</p>
        </div>
      </div>
    </div>
  )
}
