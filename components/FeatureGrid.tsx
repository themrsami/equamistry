"use client"

import { Badge } from '@/components/ui/badge'
import { EquationComponent as Equation } from 'equamistry'

export function FeatureGrid() {
  const features = [
    {
      category: "Syntax",
      title: "Natural Writing",
      description: "Write exactly as you would on paper",
      examples: [
        { code: "H2O", result: "Water" },
        { code: "Ca(OH)2", result: "Calcium hydroxide" },
        { code: "CH3COOH", result: "Acetic acid" }
      ]
    },
    {
      category: "Intelligence",
      title: "Auto Detection",
      description: "Automatically identifies chemical structures",
      examples: [
        { code: "H", result: "Element" },
        { code: "NaCl", result: "Compound" },
        { code: "2H2 + O2 -> 2H2O", result: "Equation" }
      ]
    },
    {
      category: "Charges",
      title: "Ions & States",
      description: "Handle charges and physical states",
      examples: [
        { code: "Na{+}", result: "Positive ion" },
        { code: "SO4{2-}", result: "Negative ion" },
        { code: "H2O{l}", result: "Liquid state" }
      ]
    },
    {
      category: "Advanced",
      title: "Complex Structures",
      description: "Coordination compounds and reactions",
      examples: [
        { code: "[Fe(CN)6]{3-}", result: "Complex ion" },
        { code: "CuSO4·5H2O", result: "Hydrate" },
        { code: "CH4 + 2O2 -> CO2 + 2H2O", result: "Combustion" }
      ]
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-slate-100 text-slate-100 border-slate-200 px-3 py-1 text-sm mb-4">
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
            Chemistry made simple
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From basic molecules to complex reactions, everything works naturally
          </p>
        </div>

        {/* Features Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs px-2 py-1">
                      {feature.category}
                    </Badge>
                    <div className="w-8 h-px bg-slate-200"></div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-950">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {feature.examples.slice(0, 2).map((example, exampleIndex) => (
                    <div key={exampleIndex} className="space-y-2">
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        {example.result}
                      </div>
                      <div className="p-3 bg-white/60 border border-slate-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <code className="text-sm font-mono text-slate-600">
                            {example.code}
                          </code>
                          <div className="text-base">
                            <Equation type={
                              example.code === 'H' ? 'symbol' : 
                              example.code.includes('->') ? 'equation' : 
                              'compound'
                            }>
                              {example.code}
                            </Equation>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Side */}
              <div className="relative">
                <div className="bg-white/70 border border-slate-200 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-slate-950 mb-2">Live Example</h4>
                      <p className="text-sm text-slate-500">See it in action</p>
                    </div>

                    <div className="space-y-4">
                      {feature.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="group">
                          <div className="flex items-center justify-between p-4 bg-slate-50 hover:bg-white rounded-xl transition-colors border border-slate-100">
                            <div className="flex items-center gap-4">
                              <code className="text-sm font-mono text-slate-600 bg-white px-2 py-1 rounded border">
                                {example.code}
                              </code>
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                            <div className="text-lg">
                              <Equation type={
                                example.code === 'H' ? 'symbol' : 
                                example.code.includes('->') ? 'equation' : 
                                'compound'
                              }>
                                {example.code}
                              </Equation>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating indicator */}
                <div className="absolute -top-3 -right-3 bg-slate-950 text-white text-xs px-3 py-1 rounded-full">
                  {feature.examples.length} examples
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-950 mb-2">TypeScript</div>
                <div className="text-sm text-slate-600">Full type safety</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-950 mb-2">React</div>
                <div className="text-sm text-slate-600">Component ready</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-950 mb-2">Zero Config</div>
                <div className="text-sm text-slate-600">Just install and use</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}