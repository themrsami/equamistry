'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { EquationComponent } from 'equamistry'
import { allExamples, examplesByCategory, examplesByDifficulty, ChemicalExample } from '@/public/examples'

export default function ExamplesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Filter examples based on search and filters
  const filteredExamples = useMemo(() => {
    let examples = allExamples

    // Filter by category
    if (selectedCategory !== 'all') {
      examples = examples.filter(ex => ex.category === selectedCategory)
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      examples = examples.filter(ex => ex.difficulty === selectedDifficulty)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      examples = examples.filter(ex => 
        ex.name.toLowerCase().includes(term) ||
        ex.code.toLowerCase().includes(term) ||
        ex.description.toLowerCase().includes(term)
      )
    }

    return examples
  }, [searchTerm, selectedCategory, selectedDifficulty])

  // Get filtered examples for a specific category
  const getFilteredExamplesForCategory = (category: string) => {
    return filteredExamples.filter(ex => ex.category === category)
  }

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const renderChemicalFormula = (code: string, category: string) => {
    try {
      if (category === 'Chemical Equations') {
        // Use EquationComponent for chemical equations
        return (
          <div className="text-lg font-mono">
            <EquationComponent>{code}</EquationComponent>
          </div>
        )
      } else {
        // Use EquationComponent with type="compound" for individual compounds/ions/molecules
        return (
          <div className="text-lg font-mono">
            <EquationComponent type="compound">{code}</EquationComponent>
          </div>
        )
      }
    } catch {
      return <span className="text-lg font-mono text-red-500">{code}</span>
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const categories = Object.keys(examplesByCategory)
  const difficulties = Object.keys(examplesByDifficulty)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Back to Home button */}
      <div className="flex items-center gap-4 mb-8">
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
          <h1 className="text-4xl font-bold">Chemical Formula Examples</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our comprehensive collection of chemical formulas organized by category and difficulty level.
          </p>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Each example demonstrates the power of Equamistry&apos;s rendering capabilities.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name, formula, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="All Difficulties" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              {difficulties.map(difficulty => (
                <SelectItem key={difficulty} value={difficulty}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredExamples.length} of {allExamples.length} examples
        </p>
      </div>

      {/* Examples by Category Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="text-xs lg:text-sm"
            >
              {category.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExamples.map((example, index) => (
              <Card key={`${example.code}-${index}`} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{example.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        {renderChemicalFormula(example.code, example.category)}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(example.code, `${example.code}-${index}`)}
                          className="h-8 w-8 p-0"
                        >
                          {copiedId === `${example.code}-${index}` ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{example.category}</Badge>
                        <Badge className={getDifficultyColor(example.difficulty)}>
                          {example.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{example.description}</CardDescription>
                  <div className="mt-4 p-3 bg-muted rounded-md">
                    <code className="text-sm font-mono">{example.code}</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {categories.map(category => {
          const categoryExamples = getFilteredExamplesForCategory(category)
          return (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryExamples.map((example: ChemicalExample, index: number) => (
                <Card key={`${example.code}-${index}`} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{example.name}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          {renderChemicalFormula(example.code, example.category)}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(example.code, `${category}-${example.code}-${index}`)}
                            className="h-8 w-8 p-0"
                          >
                            {copiedId === `${category}-${example.code}-${index}` ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <Badge className={getDifficultyColor(example.difficulty)}>
                          {example.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{example.description}</CardDescription>
                    <div className="mt-4 p-3 bg-muted rounded-md">
                      <code className="text-sm font-mono">{example.code}</code>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          )
        })}
      </Tabs>

      {filteredExamples.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No examples found matching your criteria.</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
              setSelectedDifficulty('all')
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}