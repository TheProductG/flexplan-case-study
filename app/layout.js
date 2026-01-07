import './globals.css'

export const metadata = {
  title: 'FlexPlan - Solving Meal Plan Abandonment',
  description: 'A product-driven solution to the $5B meal planning market opportunity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        {children}
      </body>
    </html>
  )
}
