export interface ChemicalExample {
  code: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const basicCompounds: ChemicalExample[] = [
  {
    code: 'H2O',
    name: 'Water',
    description: 'Most common compound on Earth, essential for life',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'CO2',
    name: 'Carbon Dioxide',
    description: 'Greenhouse gas, product of combustion and respiration',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'NH3',
    name: 'Ammonia',
    description: 'Important industrial chemical, used in fertilizers',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'CH4',
    name: 'Methane',
    description: 'Simplest hydrocarbon, main component of natural gas',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'O2',
    name: 'Oxygen',
    description: 'Essential for respiration, makes up 21% of air',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'NaCl',
    name: 'Sodium Chloride',
    description: 'Table salt, ionic compound',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'CaCO3',
    name: 'Calcium Carbonate',
    description: 'Main component of limestone and marble',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'H2SO4',
    name: 'Sulfuric Acid',
    description: 'Strong acid, widely used in industry',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'Ca(OH)2',
    name: 'Calcium Hydroxide',
    description: 'Slaked lime, used in construction',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'Al2O3',
    name: 'Aluminum Oxide',
    description: 'Alumina, used in ceramics and abrasives',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'MgO',
    name: 'Magnesium Oxide',
    description: 'Used in refractory materials and medicine',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'ZnO',
    name: 'Zinc Oxide',
    description: 'Used in sunscreens and rubber production',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'Fe2O3',
    name: 'Iron(III) Oxide',
    description: 'Rust, hematite ore of iron',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'CuO',
    name: 'Copper(II) Oxide',
    description: 'Black copper oxide, used in ceramics',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'SiO2',
    name: 'Silicon Dioxide',
    description: 'Quartz, sand, main component of glass',
    category: 'Basic Compounds',
    difficulty: 'beginner'
  },
  {
    code: 'K2O',
    name: 'Potassium Oxide',
    description: 'Used in glass and ceramic manufacturing',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'Na2O',
    name: 'Sodium Oxide',
    description: 'Used in glass production',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'TiO2',
    name: 'Titanium Dioxide',
    description: 'White pigment in paints and cosmetics',
    category: 'Basic Compounds',
    difficulty: 'intermediate'
  },
  {
    code: 'BaO',
    name: 'Barium Oxide',
    description: 'Used in optical glass and ceramics',
    category: 'Basic Compounds',
    difficulty: 'advanced'
  }
];