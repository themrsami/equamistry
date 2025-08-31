import { basicCompounds } from './basic-compounds';
import { ions } from './ions';
import { equations } from './equations';
import { complexStructures } from './complex-structures';
import { statesOfMatter } from './states-of-matter';
import { organicCompounds } from './organic-compounds';

export type { ChemicalExample } from './basic-compounds';
export { basicCompounds } from './basic-compounds';
export { ions } from './ions';
export { equations } from './equations';
export { complexStructures } from './complex-structures';
export { statesOfMatter } from './states-of-matter';
export { organicCompounds } from './organic-compounds';

// Combine all examples for easy access
export const allExamples = [
  ...basicCompounds,
  ...ions,
  ...equations,
  ...complexStructures,
  ...statesOfMatter,
  ...organicCompounds
];

// Group examples by category
export const examplesByCategory = {
  'Basic Compounds': basicCompounds,
  'Ions': ions,
  'Chemical Equations': equations,
  'Complex Structures': complexStructures,
  'States of Matter': statesOfMatter,
  'Organic Compounds': organicCompounds
};

// Group examples by difficulty
export const examplesByDifficulty = {
  beginner: allExamples.filter(ex => ex.difficulty === 'beginner'),
  intermediate: allExamples.filter(ex => ex.difficulty === 'intermediate'),
  advanced: allExamples.filter(ex => ex.difficulty === 'advanced')
};