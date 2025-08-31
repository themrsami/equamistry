"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { EquationComponent as Equation } from 'equamistry'

export default function PlaygroundPage() {
  const [input, setInput] = useState('H2O')
  const [savedExamples, setSavedExamples] = useState<string[]>(['H2O', 'CO2', 'Ca{2+}'])
  const [activeTab, setActiveTab] = useState('editor')

  const presetExamples = {
    basic: [
      'H2O', 'CO2', 'NH3', 'CH4', 'O2', 'NaCl', 'CaO', 'FeO', 'MgO'
    ],
    ions: [
      'Na{+}', 'Cl{-}', 'Ca{2+}', 'SO4{2-}', '[Fe(CN)6]{3-}', '[Cu(NH3)4]{2+}'
    ],
    reactions: [
      '2H2 + O2 -> 2H2O',
      'NaCl + AgNO3 -> AgCl + NaNO3',
      'CaCO3 -> CaO + CO2',
      'HCl + NaOH -> NaCl + H2O'
    ],
    complex: [
      'Fe2O3 + 3CO -> 2Fe + 3CO2',
      '[Cr(H2O)6]{3+} + 6NH3 -> [Cr(NH3)6]{3+} + 6H2O',
      'C6H12O6 + 6O2 -> 6CO2 + 6H2O',
      'Ca(OH)2 + H2SO4 -> CaSO4 + 2H2O'
    ]
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const addToSaved = (formula: string) => {
    if (!savedExamples.includes(formula)) {
      setSavedExamples([...savedExamples, formula])
    }
  }

  const clearInput = () => {
    setInput('')
  }

  const randomExample = () => {
    const allExamples = Object.values(presetExamples).flat()
    const randomIndex = Math.floor(Math.random() * allExamples.length)
    setInput(allExamples[randomIndex])
  }

  return (
    <main 
      className="min-h-screen"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `
          linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 pt-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200 text-slate-700 hover:text-slate-950"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium text-sm">Back to Home</span>
            </Link>
            
            <div className="h-6 w-px bg-slate-300"></div>
            
            <div>
              <h1 className="text-2xl font-bold text-slate-950">Chemistry Playground</h1>
              <p className="text-sm text-slate-600">Test and experiment with chemical formulas in real-time</p>
            </div>
          </div>

          <Badge className="bg-slate-100 text-slate-100 border-slate-200 px-3 py-1">
            Live Preview
          </Badge>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              activeTab === 'editor'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            Formula Editor
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              activeTab === 'examples'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            Example Library
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              activeTab === 'saved'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
            }`}
          >
            Saved Formulas
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Panel - Input/Examples */}
          <div className="lg:col-span-2 space-y-6">
            
            {activeTab === 'editor' && (
              <div className="bg-white/70 border border-slate-200 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-950">
                      Enter Chemical Formula
                    </label>
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your chemical formula here... (e.g., H2O, Ca{2+}, 2H2 + O2 -> 2H2O)"
                      className="min-h-32 text-lg font-mono bg-white border-slate-300 focus:border-slate-500 focus:ring-slate-500 rounded-xl resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={randomExample}
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50"
                    >
                      Random Example
                    </Button>
                    <Button
                      onClick={clearInput}
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50"
                    >
                      Clear
                    </Button>
                    <Button
                      onClick={() => copyToClipboard(input)}
                      className="bg-slate-950 hover:bg-slate-800 text-white"
                    >
                      Copy Formula
                    </Button>
                    <Button
                      onClick={() => addToSaved(input)}
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50"
                    >
                      Save Formula
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-6">
                {Object.entries(presetExamples).map(([category, examples]) => (
                  <div key={category} className="bg-white/70 border border-slate-200 rounded-3xl p-6">
                    <h3 className="text-lg font-semibold text-slate-950 mb-4 capitalize">
                      {category} Examples
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {examples.map((example, index) => (
                        <button
                          key={index}
                          onClick={() => setInput(example)}
                          className="p-3 text-left bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all group"
                        >
                          <code className="text-sm font-mono text-slate-700 group-hover:text-slate-950">
                            {example}
                          </code>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="bg-white/70 border border-slate-200 rounded-3xl p-8">
                <h3 className="text-lg font-semibold text-slate-950 mb-4">
                  Your Saved Formulas
                </h3>
                {savedExamples.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {savedExamples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(example)}
                        className="p-3 text-left bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all group"
                      >
                        <code className="text-sm font-mono text-slate-700 group-hover:text-slate-950">
                          {example}
                        </code>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-slate-400 mb-2">📝</div>
                    <p className="text-slate-600">No saved formulas yet</p>
                    <p className="text-sm text-slate-500">Click &quot;Save Formula&quot; to add formulas here</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Panel - Live Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Live Preview */}
              <div className="bg-white/70 border border-slate-200 rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-950">Live Preview</h3>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="min-h-24 flex items-center justify-center p-6 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl">
                    {input.trim() ? (
                      <div className="text-center">
                        <div className="text-2xl mb-2">
                          {(() => {
                            try {
                              return <Equation>{input}</Equation>
                            } catch (error) {
                              return (
                                <div className="text-red-500 text-sm">
                                  Error: {error instanceof Error ? error.message : 'Unknown error'}
                                </div>
                              )
                            }
                          })()}
                        </div>
                        <div className="w-12 h-px bg-slate-300 mx-auto"></div>
                      </div>
                    ) : (
                      <div className="text-slate-400 text-center">
                        <div className="text-2xl mb-2">⚗️</div>
                        <p className="text-sm">Enter a formula to see preview</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-white/70 border border-slate-200 rounded-3xl p-6">
                <h4 className="font-semibold text-slate-950 mb-3">Quick Tips</h4>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Use curly braces for charges: <code className="bg-slate-100 px-1 rounded">Ca&#123;2+&#125;</code></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Use -&gt; for reaction arrows: <code className="bg-slate-100 px-1 rounded">A + B -&gt; C</code></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Numbers auto-subscript: <code className="bg-slate-100 px-1 rounded">H2O</code></p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>States: <code className="bg-slate-100 px-1 rounded">H2O&#123;l&#125;</code> for liquid</p>
                  </div>
                </div>
              </div>

              {/* Syntax Guide */}
              <div className="bg-white/70 border border-slate-200 rounded-3xl p-6">
                <h4 className="font-semibold text-slate-950 mb-3">Syntax Guide</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subscripts:</span>
                    <code className="bg-slate-100 px-1 rounded text-slate-700">H2O</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Charges:</span>
                    <code className="bg-slate-100 px-1 rounded text-slate-700">&#123;2+&#125;</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">States:</span>
                    <code className="bg-slate-100 px-1 rounded text-slate-700">&#123;aq&#125;</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Arrows:</span>
                    <code className="bg-slate-100 px-1 rounded text-slate-700">-&gt;</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}