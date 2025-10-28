export interface CaseStudy {
  slug: string
  title: string
  description: string
  image?: string
  content: {
    paragraphs: string[]
    subheadings: string[]
  }
  relatedCases?: string[]
}

export const caseStudy1: CaseStudy = {
  slug: 'lorem-ipsum-1',
  title: 'Lorem ipsum dolor sit amet',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada...',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: [
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida. Nunc ac sem iaculis, malesuada velit eu, pharetra sapien. Sed eget ipsum sem. Fusce molestie lectus ut lorem feugiat, vitae lacinia urna volutpat. Cras magna mi, viverra et nunc eget, pretium bibendum sapien. Praesent lacinia feugiat libero. Morbi placerat dolor quis erat lacinia mattis.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est. Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus, et malesuada ante lectus sed urna. Praesent gravida ut arcu eu mollis.',
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida. Nunc ac sem iaculis, malesuada velit eu, pharetra sapien. Sed eget ipsum sem. Fusce molestie lectus ut lorem feugiat, vitae lacinia urna volutpat. Cras magna mi, viverra et nunc eget, pretium bibendum sapien. Praesent lacinia feugiat libero. Morbi placerat dolor quis erat lacinia mattis.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est. Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus, et malesuada ante lectus sed urna. Praesent gravida ut arcu eu mollis.',
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida. Nunc ac sem iaculis, malesuada velit eu, pharetra sapien. Sed eget ipsum sem. Fusce molestie lectus ut lorem feugiat, vitae lacinia urna volutpat. Cras magna mi, viverra et nunc eget, pretium bibendum sapien. Praesent lacinia feugiat libero. Morbi placerat dolor quis erat lacinia mattis.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est. Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus, et malesuada ante lectus sed urna. Praesent gravida ut arcu eu mollis.',
    ],
    subheadings: [
      'Pellentesque euismod mattis fringilla.',
      'Pellentesque euismod mattis fringilla.',
    ],
  },
  relatedCases: ['lorem-ipsum-2', 'lorem-ipsum-3'],
}

export const caseStudy2: CaseStudy = {
  slug: 'lorem-ipsum-2',
  title: 'Lorem ipsum dolor sit amet',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada...',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: [
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est.',
    ],
    subheadings: ['Pellentesque euismod mattis fringilla.'],
  },
  relatedCases: ['lorem-ipsum-1', 'lorem-ipsum-3'],
}

export const caseStudy3: CaseStudy = {
  slug: 'lorem-ipsum-3',
  title: 'Lorem ipsum dolor sit amet',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada...',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: [
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est.',
    ],
    subheadings: ['Pellentesque euismod mattis fringilla.'],
  },
  relatedCases: ['lorem-ipsum-1', 'lorem-ipsum-2'],
}

export const caseStudy4: CaseStudy = {
  slug: 'lorem-ipsum-4',
  title: 'Lorem ipsum dolor sit amet',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada...',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: [
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est.',
    ],
    subheadings: ['Pellentesque euismod mattis fringilla.'],
  },
  relatedCases: ['lorem-ipsum-5', 'lorem-ipsum-6'],
}

export const caseStudy5: CaseStudy = {
  slug: 'lorem-ipsum-5',
  title: 'Lorem ipsum dolor sit amet',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada...',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: [
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est.',
    ],
    subheadings: ['Pellentesque euismod mattis fringilla.'],
  },
  relatedCases: ['lorem-ipsum-4', 'lorem-ipsum-6'],
}

export const caseStudy6: CaseStudy = {
  slug: 'lorem-ipsum-6',
  title: 'Lorem ipsum dolor sit amet',
  description: 'Aenean tempor, dolor et mollis laoreet, eros turpis pretium metus malesuada...',
  image: '/meshcowirewall.png',
  content: {
    paragraphs: [
      'Contact us for expert advice, pricing, and custom solutions. In porttitor lorem in eros auctor interdum. Fusce sagittis aliquet augue. Ut nibh elit, tincidunt et justo in, hendrerit dignissim purus. Donec luctus gravida gravida.',
      'Donec congue quis magna quis suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sit amet ipsum commodo, placerat lectus feugiat, molestie est.',
    ],
    subheadings: ['Pellentesque euismod mattis fringilla.'],
  },
  relatedCases: ['lorem-ipsum-4', 'lorem-ipsum-5'],
}

export const caseStudiesConfig: Record<string, CaseStudy> = {
  'lorem-ipsum-1': caseStudy1,
  'lorem-ipsum-2': caseStudy2,
  'lorem-ipsum-3': caseStudy3,
  'lorem-ipsum-4': caseStudy4,
  'lorem-ipsum-5': caseStudy5,
  'lorem-ipsum-6': caseStudy6,
}

export const allCaseStudies: CaseStudy[] = [
  caseStudy1,
  caseStudy2,
  caseStudy3,
  caseStudy4,
  caseStudy5,
  caseStudy6,
]
