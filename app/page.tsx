import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { InteractiveDemo } from '@/components/InteractiveDemo'
import { FeatureGrid } from '@/components/FeatureGrid'
import { InstallationSteps } from '@/components/InstallationSteps'

export default function HomePage() {
  return (
    <main 
      className="min-h-screen relative"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `
          linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px'
      }}
    >
      {/* Playground Link */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/playground"
          className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200 text-slate-700 hover:text-slate-950"
        >
          <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:bg-slate-600 transition-colors"></div>
          <span className="font-medium text-sm">Playground</span>
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <Hero />
      <FeatureGrid />
      <InteractiveDemo />
      <InstallationSteps />
    </main>
  )
}
