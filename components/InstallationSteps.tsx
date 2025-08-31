"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function InstallationSteps() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [activeStep, setActiveStep] = useState(0)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(text)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const installCommands = {
    npm: "npm install equamistry",
    yarn: "yarn add equamistry", 
    pnpm: "pnpm add equamistry",
    bun: "bun add equamistry"
  }

  const steps = [
    {
      title: "Install Package",
      description: "Choose your preferred package manager and install Equamistry",
      content: "Select any package manager below to copy the install command",
      type: "install"
    },
    {
      title: "Import Component", 
      description: "Import the chemistry component into your React app",
      content: `import { EquationComponent as Equation } from 'equamistry'`,
      type: "code"
    },
    {
      title: "Start Creating",
      description: "Write beautiful chemistry instantly with simple syntax", 
      content: `function ChemistryApp() {
  return (
    <div>
      <h1>My Chemistry App</h1>
      <Equation>H2SO4</Equation>
      <Equation>Ca{2+}</Equation>
      <Equation>2H2 + O2 -> 2H2O</Equation>
    </div>
  )
}`,
      type: "example"
    }
  ]

  const features = [
    { icon: "⚡", title: "Zero Config", desc: "Works out of the box" },
    { icon: "🎯", title: "TypeScript", desc: "Full type safety included" },
    { icon: "📱", title: "Responsive", desc: "Looks great everywhere" },
    { icon: "🎨", title: "Customizable", desc: "Style to match your app" }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-slate-100 text-slate-100 border-slate-200 px-3 py-1 text-sm mb-4">
            Quick Setup
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
            Get started in minutes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Three simple steps to start rendering beautiful chemistry in your React applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Steps Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`group relative p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeStep === index
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white/60 border-slate-200 hover:bg-white/80 hover:border-slate-300'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeStep === index 
                        ? 'bg-white text-slate-950' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        activeStep === index ? 'text-white' : 'text-slate-950'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        activeStep === index ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 border border-slate-200 rounded-3xl p-8">
              
              {/* Step Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-600">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Install Commands */}
                {steps[activeStep].type === 'install' && (
                  <div className="space-y-4">
                    <div className="text-slate-600 text-sm mb-4">
                      {steps[activeStep].content}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(installCommands).map(([manager, command]) => (
                        <button
                          key={manager}
                          onClick={() => copyToClipboard(command)}
                          className="group relative p-4 bg-slate-950 hover:bg-slate-800 text-white rounded-xl transition-all"
                        >
                          <div className="text-center">
                            <div className="font-mono text-sm mb-1">{manager}</div>
                            <div className="text-xs opacity-80">Click to copy</div>
                          </div>
                          {copiedItem === command && (
                            <div className="absolute inset-0 bg-green-600 rounded-xl flex items-center justify-center">
                              <span className="text-white text-sm font-medium">Copied!</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Code Block */}
                {(steps[activeStep].type === 'code' || steps[activeStep].type === 'example') && (
                  <div className="space-y-4">
                    <div 
                      className="group relative bg-slate-950 text-slate-100 p-6 rounded-2xl cursor-pointer hover:bg-slate-800 transition-colors"
                      onClick={() => copyToClipboard(steps[activeStep].content)}
                    >
                      <pre className="text-sm overflow-x-auto">
                        <code>{steps[activeStep].content}</code>
                      </pre>
                      
                      {copiedItem === steps[activeStep].content ? (
                        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg text-xs">
                          Copied!
                        </div>
                      ) : (
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-xs">
                          Click to copy
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4">
                  <Button 
                    variant="outline"
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === activeStep ? 'bg-slate-950' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="bg-slate-950 hover:bg-slate-800 text-white disabled:opacity-50"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-950 mb-4">
              Why developers love Equamistry
            </h3>
            <p className="text-slate-600">
              Built with modern development practices in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/60 border border-slate-200 rounded-2xl hover:bg-white/80 transition-colors">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="font-semibold text-slate-950 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-950">
                Ready to start building?
              </h3>
              <p className="text-slate-600">
                Join developers already using Equamistry to create beautiful chemistry applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-slate-950 hover:bg-slate-800 text-white px-6 py-3 rounded-xl"
                  onClick={() => copyToClipboard('npm install equamistry')}
                >
                  {copiedItem === 'npm install equamistry' ? 'Copied!' : 'Install Now'}
                </Button>
                <Link href="/examples">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-xl">
                    View Examples
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}