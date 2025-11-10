export interface EngineeringResource {
  slug: string
  title: string
  description: string
  image?: string
  content: {
    paragraphs: string[]
    subheadings: string[]
  }
  relatedResources?: string[]
}

const baseParagraphs = [
  'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida. Nunc ac sem iaculis, malesuada velit eu, pharetra sapien.',
  'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est. Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus, et malesuada ante lectus sed urna.',
  'Praesent lacinia feugiat libero. Morbi placerat dolor quis erat lacinia mattis. Vestibulum commodo tellus at turpis aliquet, sed suscipit ligula iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
]

const baseSubheadings = [
  'Pellentesque euismod mattis fringilla.',
  'Vestibulum ante ipsum primis.',
  'Curabitur condimentum magna.',
]

export const engineeringResource1: EngineeringResource = {
  slug: 'cad-drawing-pack',
  title: 'CAD Drawing Pack',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit et malesuada ante lectus sed urna.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedResources: [
    'revit-family-library',
    'installation-guide-suite',
    'specification-wording-kit',
  ],
}

export const engineeringResource2: EngineeringResource = {
  slug: 'revit-family-library',
  title: 'Revit Family Library',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedResources: ['cad-drawing-pack', 'installation-guide-suite', 'bim-coordination-notes'],
}

export const engineeringResource3: EngineeringResource = {
  slug: 'installation-guide-suite',
  title: 'Installation Guide Suite',
  description:
    'Donec luctus gravida gravida. Nunc ac sem iaculis, malesuada velit eu, pharetra sapien.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedResources: ['cad-drawing-pack', 'revit-family-library', 'specification-wording-kit'],
}

export const engineeringResource4: EngineeringResource = {
  slug: 'specification-wording-kit',
  title: 'Specification Wording Kit',
  description: 'Praesent lacinia feugiat libero. Morbi placerat dolor quis erat lacinia mattis.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedResources: ['cad-drawing-pack', 'bim-coordination-notes', 'project-submission-pack'],
}

export const engineeringResource5: EngineeringResource = {
  slug: 'bim-coordination-notes',
  title: 'BIM Coordination Notes',
  description: 'Vestibulum commodo tellus at turpis aliquet, sed suscipit ligula iaculis.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedResources: [
    'revit-family-library',
    'specification-wording-kit',
    'project-submission-pack',
  ],
}

export const engineeringResource6: EngineeringResource = {
  slug: 'project-submission-pack',
  title: 'Project Submission Pack',
  description: 'Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedResources: [
    'installation-guide-suite',
    'specification-wording-kit',
    'bim-coordination-notes',
  ],
}

export const engineeringResourcesConfig: Record<string, EngineeringResource> = {
  [engineeringResource1.slug]: engineeringResource1,
  [engineeringResource2.slug]: engineeringResource2,
  [engineeringResource3.slug]: engineeringResource3,
  [engineeringResource4.slug]: engineeringResource4,
  [engineeringResource5.slug]: engineeringResource5,
  [engineeringResource6.slug]: engineeringResource6,
}

export const allEngineeringResources: EngineeringResource[] = [
  engineeringResource1,
  engineeringResource2,
  engineeringResource3,
  engineeringResource4,
  engineeringResource5,
  engineeringResource6,
]
