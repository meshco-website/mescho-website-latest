export interface PanelOption {
  slug: string
  title: string
  description: string
  image?: string
  content: {
    paragraphs: string[]
    subheadings: string[]
  }
  relatedOptions?: string[]
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

export const panelOption1: PanelOption = {
  slug: 'precision-security-355',
  title: 'Precision Security 355',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit et malesuada ante lectus sed urna.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedOptions: ['high-visibility-358', 'coastal-grade-3510', 'balanced-protection-3110'],
}

export const panelOption2: PanelOption = {
  slug: 'high-visibility-358',
  title: 'High Visibility 358',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedOptions: ['precision-security-355', 'coastal-grade-3510', 'rigid-mesh-3210'],
}

export const panelOption3: PanelOption = {
  slug: 'coastal-grade-3510',
  title: 'Coastal Grade 3510',
  description:
    'Donec luctus gravida gravida. Nunc ac sem iaculis, malesuada velit eu, pharetra sapien.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedOptions: ['precision-security-355', 'high-visibility-358', 'anti-force-af100'],
}

export const panelOption4: PanelOption = {
  slug: 'balanced-protection-3110',
  title: 'Balanced Protection 3110',
  description: 'Praesent lacinia feugiat libero. Morbi placerat dolor quis erat lacinia mattis.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedOptions: ['precision-security-355', 'rigid-mesh-3210', 'anti-force-af100'],
}

export const panelOption5: PanelOption = {
  slug: 'rigid-mesh-3210',
  title: 'Rigid Mesh 3210',
  description: 'Vestibulum commodo tellus at turpis aliquet, sed suscipit ligula iaculis.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedOptions: ['high-visibility-358', 'balanced-protection-3110', 'anti-force-af100'],
}

export const panelOption6: PanelOption = {
  slug: 'anti-force-af100',
  title: 'Anti-Force AF-100',
  description: 'Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est.',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: baseParagraphs,
    subheadings: baseSubheadings,
  },
  relatedOptions: ['coastal-grade-3510', 'balanced-protection-3110', 'rigid-mesh-3210'],
}

export const panelOptionsConfig: Record<string, PanelOption> = {
  [panelOption1.slug]: panelOption1,
  [panelOption2.slug]: panelOption2,
  [panelOption3.slug]: panelOption3,
  [panelOption4.slug]: panelOption4,
  [panelOption5.slug]: panelOption5,
  [panelOption6.slug]: panelOption6,
}

export const allPanelOptions: PanelOption[] = [
  panelOption1,
  panelOption2,
  panelOption3,
  panelOption4,
  panelOption5,
  panelOption6,
]
