export const COMING_SOON_LABEL = 'Coming Soon'

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

export const comingSoonCaseStudy: CaseStudy = {
  slug: 'coming-soon',
  title: COMING_SOON_LABEL,
  description: COMING_SOON_LABEL,
  content: {
    paragraphs: [COMING_SOON_LABEL],
    subheadings: [],
  },
  relatedCases: [],
}

export const caseStudiesConfig: Record<string, CaseStudy> = {
  'coming-soon': comingSoonCaseStudy,
}

export const allCaseStudies: CaseStudy[] = [comingSoonCaseStudy]
