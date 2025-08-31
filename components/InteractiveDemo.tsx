"use client"

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { EquationComponent as Equation } from 'equamistry'

export function InteractiveDemo() {
  const [activeCategory, setActiveCategory] = useState('molecules')
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const categories = {
    molecules: {
      title: "Simple Molecules",
      subtitle: "Basic chemical compounds",
      color: "slate",
      examples: [
        { code: 'H2O', name: 'Water', type: 'Molecular compound' },
        { code: 'CO2', name: 'Carbon dioxide', type: 'Linear molecule' },
        { code: 'NH3', name: 'Ammonia', type: 'Polar molecule' },
        { code: 'CH4', name: 'Methane', type: 'Tetrahedral' },
        { code: 'O2', name: 'Oxygen', type: 'Diatomic gas' },
        { code: 'CaCl2', name: 'Calcium chloride', type: 'Ionic compound' }
      ]
    },
    ions: {
      title: "Ions & Charges",
      subtitle: "Charged species and complexes",
      color: "blue",
      examples: [
        { code: 'Na{+}', name: 'Sodium ion', type: 'Monovalent cation' },
        { code: 'Cl{-}', name: 'Chloride ion', type: 'Monovalent anion' },
        { code: 'Ca{2+}', name: 'Calcium ion', type: 'Divalent cation' },
        { code: 'SO4{2-}', name: 'Sulfate ion', type: 'Polyatomic anion' },
        { code: '[Fe(CN)6]{3-}', name: 'Ferricyanide', type: 'Complex ion' },
        { code: '[Cu(NH3)4]{2+}', name: 'Tetraamminecopper', type: 'Coordination complex' }
      ]
    },
    reactions: {
      title: "Chemical Reactions",
      subtitle: "Balanced equations and processes",
      color: "green",
      examples: [
        { code: '2H2 + O2 -> 2H2O', name: 'Combustion', type: 'Synthesis reaction' },
        { code: 'NaCl{aq} + AgNO3{aq} -> AgCl{s} + NaNO3{aq}', name: 'Precipitation', type: 'Double replacement' },
        { code: 'CaCO3{s} -> CaO{s} + CO2{g}', name: 'Decomposition', type: 'Thermal breakdown' },
        { code: 'HCl{aq} + NaOH{aq} -> NaCl{aq} + H2O{l}', name: 'Neutralization', type: 'Acid-base reaction' },
        { code: '2Na{s} + Cl2{g} -> 2NaCl{s}', name: 'Synthesis', type: 'Direct combination' },
        { code: 'Zn{s} + CuSO4{aq} -> ZnSO4{aq} + Cu{s}', name: 'Displacement', type: 'Single replacement' }
      ]
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(text)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-slate-100 text-slate-100 border-slate-200 px-3 py-1 text-sm mb-4">
            Interactive Examples
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
            See it in action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore comprehensive examples across different chemistry domains. Click any formula to copy the code.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-white/60 rounded-2xl border border-slate-200">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                  activeCategory === key
                    ? 'bg-slate-950 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Display */}
        <div className="mb-12">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-slate-950">
              {categories[activeCategory as keyof typeof categories].title}
            </h3>
            <p className="text-slate-600">
              {categories[activeCategory as keyof typeof categories].subtitle}
            </p>
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[activeCategory as keyof typeof categories].examples.map((example, index) => (
            <div
              key={index}
              className="group relative bg-white/70 border border-slate-200 rounded-2xl p-6 hover:bg-white/90 hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => copyToClipboard(example.code)}
            >
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-950 group-hover:text-slate-800">
                    {example.name}
                  </h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    {example.type}
                  </p>
                </div>
                
                {copiedItem === example.code ? (
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                    Copied!
                  </Badge>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs">
                      Click to copy
                    </Badge>
                  </div>
                )}
              </div>

              {/* Code Display */}
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <code className="text-sm font-mono text-slate-700 break-all">
                    {example.code}
                  </code>
                </div>

                {/* Rendered Output */}
                <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg">
                  <div className="text-center">
                    <div className={`mb-2 ${activeCategory === 'reactions' ? 'text-sm' : 'text-lg'}`}>
                      <Equation>{example.code}</Equation>
                    </div>
                    <div className="w-8 h-px bg-slate-300 mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Copy indicator */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}