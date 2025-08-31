# Equamistry

A beautiful, modern web application showcasing the **Equamistry** chemical formula parsing library. Built with Next.js, React, and TypeScript.

## ✨ Features

- **Interactive Playground**: Test chemical formulas in real-time
- **Beautiful UI**: Modern, minimalist design with Tailwind CSS
- **Comprehensive Examples**: Explore symbols, compounds, and equations
- **Real-time Rendering**: See chemical formulas rendered as you type
- **Error Handling**: Clear feedback for invalid formulas
- **Responsive Design**: Works perfectly on all devices

## 🚀 Live Demo

Experience the power of Equamistry chemistry parsing:
- **Homepage**: Modern landing page with feature showcase
- **Playground**: Interactive testing environment at `/playground`
- **Examples**: Pre-built examples for symbols, compounds, and equations

## 🧪 What You Can Parse

### Symbols
```
H, O, C, Na, Cl, Fe, Ca, Mg, Al...
```

### Compounds
```
H2O → H₂O
NaCl → NaCl
Ca(OH)2 → Ca(OH)₂
CuSO4·5H2O → CuSO₄·5H₂O
[Fe(CN)6]{3-} → [Fe(CN)₆]³⁻
```

### Equations
```
H2 + Cl2 -> 2HCl → H₂ + Cl₂ → 2HCl
Ca(OH)2 + 2HCl = CaCl2 + 2H2O → Ca(OH)₂ + 2HCl ⇌ CaCl₂ + 2H₂O
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom UI components
- **Chemistry**: Equamistry library (local development)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/themrsami/equamistry.git
   cd equamistry
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
equamistry/
├── app/                     # Next.js app directory
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── playground/         # Interactive playground
│   └── examples/           # Example pages
├── components/             # React components
│   ├── navbar.tsx         # Navigation
│   └── ui/                # UI components
├── equamistry-lib/        # Chemistry parsing library
│   ├── src/               # Library source code
│   └── package.json       # Library package config
└── lib/                   # Utilities
```

## 🎮 Using the Playground

1. Navigate to `/playground`
2. Enter any chemical formula in the input field
3. See real-time rendering and validation
4. Browse example formulas by category
5. Copy successful formulas to your clipboard

## 📚 Library Usage

The core Equamistry library is developed locally in the `equamistry-lib/` directory:

```typescript
import { EquationComponent as Equation } from './equamistry-lib';

// Auto-detection
<Equation>H2O</Equation>           // Compound
<Equation>Fe</Equation>            // Symbol  
<Equation>H2 + Cl2 -> 2HCl</Equation> // Equation

// Explicit types
<Equation type="compound">Ca(OH)2</Equation>
<Equation type="equation">N2 + 3H2 <-> 2NH3</Equation>
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 🧑‍💻 Development

### Building the Library
```bash
cd equamistry-lib
npm run build
```

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Usama (themrsami)**
- GitHub: [@themrsami](https://github.com/themrsami)
- npm: [~themrsami](https://www.npmjs.com/~themrsami)

## 🐛 Issues & Support

Found a bug or have a feature request? Please open an issue on [GitHub](https://github.com/themrsami/equamistry/issues).

---

Built with ❤️ using Next.js and the power of chemistry!
