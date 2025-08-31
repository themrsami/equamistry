"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Code } from '@/components/ui/code'
import { EquationComponent as Equation } from 'equamistry'

export function Hero() {
  const [currentExample, setCurrentExample] = useState(0)
  
  const examples = [
    { input: 'H2O{l}', label: 'Water molecule', description: 'Simple compound' },
    { input: 'Ca{2+}{aq}', label: 'Calcium ion', description: 'Charged species' },
    { input: '[Fe(CN)6]{3-}', label: 'Complex ion', description: 'Coordination compound' },
    { input: '2H2 + O2 -> 2H2O', label: 'Combustion', description: 'Chemical reaction' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [examples.length])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-slate-100 text-slate-100 border-slate-200 px-4 py-2 text-sm">
                React Chemistry Library
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-950 leading-tight">
                  Beautiful Chemistry
                  <span className="block text-slate-600">Made Simple</span>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Transform chemical notation into elegant, readable formulas with natural syntax that just works.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/playground">
                <Button className="bg-slate-950 hover:bg-slate-800 text-white px-8 py-4 text-lg rounded-2xl shadow-lg">
                  Start Building
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              
              <a href="https://github.com/themrsami/equamistry" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg rounded-2xl">
                  View Source
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-950">50+</div>
                <div className="text-sm text-slate-500">Chemical Elements</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-950">∞</div>
                <div className="text-sm text-slate-500">Combinations</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-950">0</div>
                <div className="text-sm text-slate-500">Configuration</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">Live Demo</h3>
                  <p className="text-sm text-slate-500">Watch the magic happen in real-time</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">Input</span>
                      <div className="flex space-x-1">
                        {examples.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentExample(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentExample === index ? 'bg-slate-950 scale-125' : 'bg-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <Code className="text-base p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono">
                      {examples[currentExample].input}
                    </Code>
                  </div>

                  <div className="flex items-center justify-center py-2">
                    <div className="w-8 h-px bg-slate-300"></div>
                    <svg className="mx-3 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className="w-8 h-px bg-slate-300"></div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-sm font-medium text-slate-600">Output</span>
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center">
                      <div className="text-2xl mb-2">
                        <Equation>{examples[currentExample].input}</Equation>
                      </div>
                      <div className="text-sm text-slate-500">{examples[currentExample].label}</div>
                      <div className="text-xs text-slate-400">{examples[currentExample].description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-slate-950">React</div>
                <div className="text-xs text-slate-500">TypeScript</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}