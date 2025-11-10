// Single source of truth for all products

export interface Product {
  id: string
  name: string
  title?: string
  imageFolder: string
  image: string
  slug: string
  type: string
  industry: string
  category: string
}

export interface Specification {
  label: string
  value: string
}

export interface WireWallSpecification {
  height: string[]
  vBends: string[]
  length: string[]
  aperture: string[]
  wireDiameter: string[]
  zincCoating: string[]
  tensileStrength: string[]
  weldStrength: string[]
  colourCoating: string[]
}

export interface TechnicalData {
  property: string
  value: string
  unit?: string
}

export interface TabData {
  id: string
  label: string
  content: string[]
  image?: string
}

export interface RelatedProductConfig {
  id: string
  name: string
  image: string
  slug: string
  category: string
}

export type LayoutType = 'standard' | 'wirewall' | 'simple'

export interface ProductDetail {
  description: string
  layoutType: LayoutType
  specifications: Specification[]
  wireWallSpecifications?: WireWallSpecification
  applications: string[]
  technicalData: TechnicalData[]
  tabs?: TabData[]
  relatedProductKeys?: string[]
}

export interface ProductDetailConfig {
  name: string
  title: string
  category: string
  heroImage: string
  description: string
  layoutType: LayoutType
  specifications: Specification[]
  wireWallSpecifications?: WireWallSpecification
  applications: string[]
  technicalData: TechnicalData[]
  tabs?: TabData[]
  relatedProducts: RelatedProductConfig[]
}

// All products organized by category
export const products: Product[] = [
  // Wire Products
  {
    id: '1',
    name: 'Hard Drawn Wire',
    title: 'Hard Drawn Wire',
    imageFolder: '/products/Wire/hard-drawn-wire',
    image: '/products/Wire/hard-drawn-wire/meshco-hard-drawn-wire.webp',
    slug: 'hard-drawn-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '2',
    name: 'Galvanised Wire',
    title: 'Galvanised Wire',
    imageFolder: '/products/Wire/galvanised-wire',
    image: '/products/Wire/galvanised-wire/meshco-galvanised-wire-coil-1.webp',
    slug: 'galvanised-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '3',
    name: 'High Strain Wire',
    title: 'High Strain Wire',
    imageFolder: '/products/Wire/high-strain-wire',
    image: '/products/Wire/high-strain-wire/meshco-black-pvc-binding-straining-wire.webp',
    slug: 'high-strain-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '4',
    name: 'Black Annealed Wire',
    title: 'Black Annealed Wire (including Autobale Wire)',
    imageFolder: '/products/Wire/black-annealed-wire',
    image: '/products/Wire/black-annealed-wire/meshco-black-annealed-autobale-2.webp',
    slug: 'black-annealed-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '5',
    name: 'PVC Coated Wire',
    title: 'PVC Coated Wire',
    imageFolder: '/products/Wire/pvc-coated-wire',
    image: '/products/Wire/pvc-coated-wire/meshco-green-pvc-wire-50kg.webp',
    slug: 'pvc-coated-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '6',
    name: 'Straight & Cut Wire',
    title: 'Straight & Cut Wire',
    imageFolder: '/products/Wire/straight-and-cut-wire',
    image: '/products/Wire/straight-and-cut-wire/meshco-straight-and-cut-galvanised-wire-2.webp',
    slug: 'straight-cut-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '7',
    name: 'Slab Wire',
    title: 'Slab Wire (Straight & Cut Wire for Precast Concrete)',
    imageFolder: '/products/Wire/slab-wire',
    image: '/products/Wire/slab-wire/meshco-slab-wire.webp',
    slug: 'slab-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },

  // WireWall Products
  {
    id: '8',
    name: 'DoubleWall (12.5mm x 12.5mm)',
    title: 'DoubleWall (12.5mm x 12.5mm)',
    imageFolder: '/products/WireWall/doublewall',
    image: '/products/WireWall/doublewall/meshco-wirewall-post-baseplate.webp',
    slug: 'doublewall',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '9',
    name: '355 (75 x 12.7mm)',
    title: '355 Panel (75x12.7mm)',
    imageFolder: '/products/WireWall/355-panel',
    image: '/products/WireWall/355-panel/meshco-wirewall-355.webp',
    slug: '355',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '10',
    name: '358 (75x 12.7mm)',
    title: '358 Panel (75x12.7mm)',
    imageFolder: '/products/WireWall/358-panel',
    image: '/products/WireWall/358-panel/meshco-wirewall-358.webp',
    slug: '358',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '11',
    name: '3510 Panel (75 x 12.7mm)',
    title: '3510 Panel (75 x 12.7mm)',
    imageFolder: '/products/WireWall/3510',
    image: '/products/WireWall/3510/meshco-wirewall-3510-high-security-1.webp',
    slug: '3510',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '12',
    name: '3110 Panel (75 x 25mm)',
    title: '3110 Medium Panel (75mm x 25mm)',
    imageFolder: '/products/WireWall/3110',
    image: '/products/WireWall/3110/meshco-wirewall-3110-medium-security-1.webp',
    slug: '3110',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '13',
    name: '3210 Panel (75x50mm)',
    title: '3210 Light Panel (75mm x 50mm)',
    imageFolder: '/products/WireWall/3210',
    image: '/products/WireWall/3210/meshco-wirewall-3210-medium-security-1.webp',
    slug: '3210',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '14',
    name: 'AF100 Panel (50 x 100mm)',
    title: 'AF100 Panel (50 x 100mm)',
    imageFolder: '/products/WireWall/af-100',
    image: '/products/WireWall/af-100/meshco-wirewall-af100-1.webp',
    slug: 'af100',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '15',
    name: 'Gates',
    title: 'Gates',
    imageFolder: '/products/WireWall/gates',
    image: '/products/WireWall/gates/meshco-wirewall-gates.webp',
    slug: 'gates',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '16',
    name: 'Spikes',
    title: 'Spikes',
    imageFolder: '/products/WireWall/spikes',
    image: '/products/WireWall/spikes/meshco-wirewall-heavy-spike-1.webp',
    slug: 'spikes',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '17',
    name: 'UnderDigs',
    title: 'WireWall UnderDig Panel',
    imageFolder: '/products/WireWall/underdig-panel',
    image: '/products/WireWall/underdig-panel/meshco-wirewall-underdig.webp',
    slug: 'underdig-panel',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },

  // Reinforcing Products
  {
    id: '18',
    name: 'Brickforce',
    title: 'Galvanised Brickforce NHBRC and STANDARD',
    imageFolder: '/products/Reinforcing/brick-force',
    image: '/products/Reinforcing/brick-force/meshco-brickforce-galvanised.webp',
    slug: 'brickforce',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '19',
    name: 'Reinforcing Mesh',
    title: 'Reinforcing Mesh',
    imageFolder: '/products/Reinforcing/reinforcing-mesh',
    image: '/products/Reinforcing/reinforcing-mesh/meshco-concrete-reinforcing-mesh1.webp',
    slug: 'reinforcing-mesh',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '20',
    name: 'Hoop Iron',
    title: 'Hoop Iron',
    imageFolder: '/products/Reinforcing/hoop-iron',
    image: '/products/Reinforcing/hoop-iron/meshco-hoop-iron.webp',
    slug: 'hoop-iron',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '21',
    name: 'Cavity Wall Ties',
    title: 'Cavity Wall Ties',
    imageFolder: '/products/Reinforcing/cavity-wall-ties',
    image: '/products/Reinforcing/cavity-wall-ties/meshco-butterfly-wall-tie-1.webp',
    slug: 'cavity-wall-ties',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '22',
    name: 'Reinforcing Steel',
    title: 'Reinforcing Steel Bars (Rebar)',
    imageFolder: '/products/Reinforcing/reinforcing-steel-bars',
    image: '/products/Reinforcing/reinforcing-steel-bars/meshco-reinforcing-bar-rebar-2.webp',
    slug: 'reinforcing-steel',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '23',
    name: 'Ceramic Door Anchors',
    title: 'Ceramic Door Anchors',
    imageFolder: '/products/Reinforcing/ceramic-door-anchors',
    image: '/products/Reinforcing/ceramic-door-anchors/meshco-ceramic-door-anchor.webp',
    slug: 'ceramic-door-anchors',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },

  // Fencing Products
  {
    id: '24',
    name: 'Welded Fence Mesh',
    title: 'Welded Fence Mesh',
    imageFolder: '/products/Fencing/welded-fence-mesh',
    image: '/products/Fencing/welded-fence-mesh/meshco-weld-fence-mesh-galvanised-2.webp',
    slug: 'welded-fence-mesh',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '25',
    name: 'Welded Fence Mesh (PVC)',
    title: 'PVC-Coated Welded Fence Mesh',
    imageFolder: '/products/Fencing/welded-fence-mesh-pvc',
    image: '/products/Fencing/welded-fence-mesh-pvc/meshco-pvc-weld-fence-mesh.webp',
    slug: 'welded-fence-mesh-pvc',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '26',
    name: 'Diamond Mesh',
    title: 'Diamond Mesh Fencing',
    imageFolder: '/products/Fencing/diamond-mesh',
    image: '/products/Fencing/diamond-mesh/meshco-diamond-mesh-galvanised-1.webp',
    slug: 'diamond-mesh',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '27',
    name: 'Barbed Wire',
    title: 'Barbed Wire',
    imageFolder: '/products/Fencing/barbed-wire',
    image: '/products/Fencing/barbed-wire/meshco-barb-wire-single-strand-3.webp',
    slug: 'barbed-wire',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '28',
    name: 'Razor Wire - Flatwrap',
    title: 'Razor Wire - Flatwrap',
    imageFolder: '/products/Fencing/razor-wire-flatwrap',
    image: '/products/Fencing/razor-wire-flatwrap/meshco-razor-flatwrap-3.webp',
    slug: 'razor-wire-flatwrap',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '29',
    name: 'Razor Wire (BTC)',
    title: 'Razor Wire - Concertina (BTC)',
    imageFolder: '/products/Fencing/razor-wire-btc',
    image: '/products/Fencing/razor-wire-btc/meshco-concertina-razor-wire-btc1.webp',
    slug: 'razor-wire-btc',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '30',
    name: 'Razor Wall',
    title: 'RazorWall',
    imageFolder: '/products/Fencing/razor-wall',
    image: '/products/Fencing/razor-wall/meshco-razor-wall-mesh-1.webp',
    slug: 'razorwall',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '31',
    name: 'Field & Game Fence',
    title: 'Field & Game Fence',
    imageFolder: '/products/Fencing/field-and-game-fence',
    image: '/products/Fencing/field-and-game-fence/meshco-field-fence-galvanised-1.webp',
    slug: 'field-game-fence',
    type: 'Fencing',
    industry: 'Agricultural',
    category: 'fencing',
  },
  {
    id: '32',
    name: 'Hexagonal Wire Netting',
    title: 'Hexagonal Wire Netting',
    imageFolder: '/products/Fencing/hexagonal-wire-netting',
    image: '/products/Fencing/hexagonal-wire-netting/meshco-hexagonal-netting-galvanised.webp',
    slug: 'hexagonal-netting',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '33',
    name: 'Standards',
    title: 'Standards',
    imageFolder: '/products/Fencing/standards',
    image: '/products/Fencing/standards/meshco-ystandard-bitumen-dipped.webp',
    slug: 'standards',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '34',
    name: 'Droppers',
    title: 'Droppers',
    imageFolder: '/products/Fencing/droppers',
    image: '/products/Fencing/droppers/meshco-droppers.webp',
    slug: 'droppers',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },

  // Fasteners Products
  {
    id: '35',
    name: 'Round Wire Nails',
    title: 'Round Wire Nails',
    imageFolder: '/products/Fasteners/round-wire-nails',
    image: '/products/Fasteners/round-wire-nails/meshco-round-wire-nail.webp',
    slug: 'round-wire-nails',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '36',
    name: 'Staples',
    title: 'Fencing Staples (Plain and Barbed)',
    imageFolder: '/products/Fasteners/fencing-staples',
    image: '/products/Fasteners/fencing-staples/meshco-barbed-fence-staple-1.webp',
    slug: 'staples',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '37',
    name: 'Clout Nails',
    title: 'Clout Nails',
    imageFolder: '/products/Fasteners/clout-nails',
    image: '/products/Fasteners/clout-nails/meshco-clout-nail-galvanised.webp',
    slug: 'clout-nails',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '38',
    name: 'Hog Rings',
    title: 'Hog Rings',
    imageFolder: '/products/Fasteners/hog-rings',
    image: '/products/Fasteners/hog-rings/meshco-hogring-cclip-1.webp',
    slug: 'hog-rings',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '39',
    name: 'Hog Ring Pliers',
    title: 'Hog Ring Pliers',
    imageFolder: '/products/Fasteners/hog-ring-pliers',
    image: '/products/Fasteners/hog-ring-pliers/meshco-hogring-pliers-1.webp',
    slug: 'hog-ring-pliers',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '41',
    name: 'Pliers',
    title: 'Pliers',
    imageFolder: '/products/Fasteners/pliers',
    image: '/products/Fasteners/pliers/meshco-topgraf-hogring-plier-3.webp',
    slug: 'pliers',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '40',
    name: 'Cutting Nippers',
    title: 'Cutting Nippers',
    imageFolder: '/products/Fasteners/cutting-nippers',
    image: '/products/Fasteners/cutting-nippers/meshco-cutting-nippers.webp',
    slug: 'cutting-nippers',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },

  // Mining Support Products
  {
    id: '42',
    name: 'Mining Mesh',
    title: 'Mining Mesh',
    imageFolder: '/products/Mining Support/mining-support-mesh',
    image:
      '/products/Mining Support/mining-support-mesh/meshco-underground-mining-support-mesh.webp',
    slug: 'mining-mesh',
    type: 'Mining Support',
    industry: 'Mining',
    category: 'mining-support',
  },
  {
    id: '43',
    name: 'Backfill Mesh',
    title: 'Backfill Mesh',
    imageFolder: '/products/Mining Support/backfill-mesh',
    image: '/products/Mining Support/backfill-mesh/meshco-backfill-mesh.webp',
    slug: 'backfill-mesh',
    type: 'Mining Support',
    industry: 'Mining',
    category: 'mining-support',
  },

  // Utility Products
  {
    id: '44',
    name: 'Precision Welded Mesh',
    title: 'Precision Welded Mesh',
    imageFolder: '/products/Utility/precision-welded-mesh',
    image: '/products/Utility/precision-welded-mesh/meshco-precision-weld-mesh-galvanised.webp',
    slug: 'precision-welded-mesh',
    type: 'Utility',
    industry: 'Construction',
    category: 'utility',
  },
  {
    id: '45',
    name: 'Growing Stakes',
    title: 'Growing Stakes',
    imageFolder: '/products/Utility/growing-stakes',
    image: '/products/Utility/growing-stakes/meshco-growing-stake-1.webp',
    slug: 'growing-stakes',
    type: 'Utility',
    industry: 'Agricultural',
    category: 'utility',
  },
  {
    id: '46',
    name: 'SpeciMesh Panels',
    title: 'SpeciMesh Panels',
    imageFolder: '/products/Utility/specimesh-panels',
    image: '/products/Utility/specimesh-panels/meshco-specimesh-panel-cage-3.webp',
    slug: 'specimesh-panels',
    type: 'Utility',
    industry: 'Construction',
    category: 'utility',
  },
]

// Helper functions to query products
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductsByType(type: string): Product[] {
  return products.filter((product) => product.type === type)
}

export function getProductsByIndustry(industry: string): Product[] {
  return products.filter((product) => product.industry === industry)
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return products.find((product) => product.category === category && product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map((product) => product.category)))
}

export function getAllTypes(): string[] {
  return Array.from(new Set(products.map((product) => product.type)))
}

export function getAllIndustries(): string[] {
  return Array.from(new Set(products.map((product) => product.industry)))
}

// Export products grouped by category for convenience
export const productsByCategory = {
  wire: getProductsByCategory('wire'),
  wirewall: getProductsByCategory('wirewall'),
  reinforcing: getProductsByCategory('reinforcing'),
  fencing: getProductsByCategory('fencing'),
  fasteners: getProductsByCategory('fasteners'),
  'mining-support': getProductsByCategory('mining-support'),
  utility: getProductsByCategory('utility'),
}

const productsByKey = new Map<string, Product>(
  products.map((product) => [`${product.category}-${product.slug}`, product]),
)

const productsByCategoryMap = new Map<string, Product[]>()

for (const product of products) {
  const list = productsByCategoryMap.get(product.category)
  if (list) {
    list.push(product)
  } else {
    productsByCategoryMap.set(product.category, [product])
  }
}

const cloneTabs = (tabs?: TabData[]): TabData[] | undefined =>
  tabs?.map((tab) => ({ ...tab, content: [...tab.content] }))

const cloneWireWallSpecifications = (
  specs?: WireWallSpecification,
): WireWallSpecification | undefined =>
  specs
    ? {
        height: [...specs.height],
        vBends: [...specs.vBends],
        length: [...specs.length],
        aperture: [...specs.aperture],
        wireDiameter: [...specs.wireDiameter],
        zincCoating: [...specs.zincCoating],
        tensileStrength: [...specs.tensileStrength],
        weldStrength: [...specs.weldStrength],
        colourCoating: [...specs.colourCoating],
      }
    : undefined

const buildRelatedProducts = (keys: string[] = []): RelatedProductConfig[] =>
  keys
    .map((key) => {
      const product = productsByKey.get(key)
      if (!product) {
        return undefined
      }

      return {
        id: product.id,
        name: product.name,
        image: product.image,
        slug: product.slug,
        category: product.category,
      }
    })
    .filter((related): related is RelatedProductConfig => Boolean(related))

const createProductDetail = (detail: ProductDetail): ProductDetail => ({
  description: detail.description,
  layoutType: detail.layoutType,
  specifications: detail.specifications.map((spec) => ({ ...spec })),
  wireWallSpecifications: cloneWireWallSpecifications(detail.wireWallSpecifications),
  applications: [...detail.applications],
  technicalData: detail.technicalData.map((item) => ({ ...item })),
  tabs: cloneTabs(detail.tabs),
  relatedProductKeys: detail.relatedProductKeys ? [...detail.relatedProductKeys] : undefined,
})

const withProduct = (key: string, detail: ProductDetail): ProductDetailConfig => {
  const product = productsByKey.get(key)

  if (!product) {
    throw new Error(`Missing product definition for key: ${key}`)
  }

  const enrichedDetail = createProductDetail(detail)

  return {
    name: product.name,
    title: product.title ?? product.name,
    category: product.type,
    heroImage: product.image,
    description: enrichedDetail.description,
    layoutType: enrichedDetail.layoutType,
    specifications: enrichedDetail.specifications,
    wireWallSpecifications: enrichedDetail.wireWallSpecifications,
    applications: enrichedDetail.applications,
    technicalData: enrichedDetail.technicalData,
    tabs: enrichedDetail.tabs,
    relatedProducts: buildRelatedProducts(enrichedDetail.relatedProductKeys),
  }
}

const productDetailData: Record<string, ProductDetail> = {
  'wire-hard-drawn-wire': {
    description:
      'High-quality hard drawn wire manufactured to meet demanding industrial and construction requirements. Produced using premium steel and advanced drawing processes for strength, durability, and consistent performance.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High Carbon Steel' },
      { label: 'Diameter Range', value: '1.0mm - 6.0mm' },
      { label: 'Tensile Strength', value: '1400-1800 N/mm²' },
      { label: 'Surface Finish', value: 'Bright' },
      { label: 'Standards', value: 'SANS 1026, BS 1052' },
    ],
    applications: [
      'General construction reinforcement',
      'Concrete reinforcement applications',
      'Industrial manufacturing',
      'Agricultural fencing',
      'Wire mesh production',
      'Cable and wire rope manufacturing',
    ],
    technicalData: [
      { property: 'Superior tensile strength', value: '1400-1800', unit: 'N/mm²' },
      { property: 'High carbon steel construction', value: '', unit: '' },
      { property: 'Consistent diameter tolerance', value: '±0.05mm', unit: '' },
      { property: 'Bright surface finish', value: '', unit: '' },
      { property: 'Meets international standards', value: 'SANS 1026, BS 1052', unit: '' },
      { property: 'Excellent ductility', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Superior tensile strength of 1400-1800 N/mm²',
          'High carbon steel construction for maximum durability',
          'Consistent diameter tolerance of ±0.05mm',
          'Bright surface finish for enhanced appearance',
          'Meets international standards SANS 1026, BS 1052',
          'Excellent ductility for easy handling and installation',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'General construction reinforcement',
          'Concrete reinforcement applications',
          'Industrial manufacturing processes',
          'Agricultural fencing systems',
          'Wire mesh production',
          'Cable and wire rope manufacturing',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Long-lasting performance in harsh environments',
          'Easy installation and handling',
          'Cost-effective solution for various applications',
          'Consistent quality and reliability',
          'Wide range of diameter options available',
          'Compatible with standard construction practices',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-galvanised-wire',
      'wire-high-strain-wire',
      'wire-pvc-coated-wire',
      'wire-black-annealed-wire',
      'wire-straight-cut-wire',
    ],
  },
  'wire-galvanised-wire': {
    description:
      'Premium galvanised wire offering superior corrosion resistance for outdoor applications. Manufactured with consistent zinc coating for long service life and reliable performance.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High Carbon Steel' },
      { label: 'Coating', value: 'Uniform galvanised finish' },
      { label: 'Diameter Range', value: '1.0mm - 6.0mm' },
      { label: 'Tensile Strength', value: '1400-1800 N/mm²' },
      { label: 'Standards', value: 'SANS 1026, BS 1052' },
    ],
    applications: [
      'Outdoor fencing systems',
      'Agricultural applications',
      'Construction projects',
      'Cable and wire rope manufacturing',
      'Industrial reinforcement',
      'Wire mesh production',
    ],
    technicalData: [
      { property: 'Corrosion-resistant zinc coating', value: '', unit: '' },
      { property: 'High tensile strength', value: '1400-1800', unit: 'N/mm²' },
      { property: 'Consistent diameter control', value: '±0.05mm', unit: '' },
      { property: 'Long service life in harsh conditions', value: '', unit: '' },
      { property: 'Meets international standards', value: 'SANS 1026, BS 1052', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Uniform galvanised coating for corrosion resistance',
          'High tensile strength core wire',
          'Consistent diameter tolerance',
          'Long-lasting performance outdoors',
          'Suitable for demanding industrial use',
          'Meets SANS 1026, BS 1052 standards',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Perimeter and agricultural fencing',
          'Construction reinforcement projects',
          'Cable and rope manufacturing',
          'Industrial wire products',
          'Wire mesh and panels',
          'General outdoor applications',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-hard-drawn-wire',
      'wire-high-strain-wire',
      'wire-pvc-coated-wire',
      'wire-black-annealed-wire',
      'wire-straight-cut-wire',
    ],
  },
  'wire-high-strain-wire': {
    description:
      'High strain wire engineered for applications demanding maximum tensile strength and resilience. Ideal for security, agricultural, and industrial uses requiring dependable performance under load.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High Carbon Steel' },
      { label: 'Tensile Strength', value: 'Up to 1800 N/mm²' },
      { label: 'Diameter Range', value: '1.6mm - 4.0mm' },
      { label: 'Surface Finish', value: 'Bright or galvanised' },
      { label: 'Applications', value: 'High-tension fences and stays' },
    ],
    applications: [
      'High-tension fencing',
      'Security barrier systems',
      'Agricultural strain wire',
      'Industrial reinforcement',
      'Horticultural trellising',
      'Cable manufacturing',
    ],
    technicalData: [
      { property: 'Exceptional tensile strength', value: '', unit: '' },
      { property: 'Minimal elongation under load', value: '', unit: '' },
      { property: 'Corrosion-resistant options available', value: '', unit: '' },
      { property: 'Precision drawn for consistent performance', value: '', unit: '' },
      { property: 'Compatible with straining equipment', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Engineered for maximum tensile strength',
          'Low elongation characteristics',
          'Available in galvanised or bright finish',
          'Consistent diameter tolerance',
          'Suitable for high tension installations',
          'Reliable performance in harsh conditions',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-hard-drawn-wire',
      'wire-galvanised-wire',
      'wire-pvc-coated-wire',
      'wire-black-annealed-wire',
      'wire-straight-cut-wire',
    ],
  },
  'wire-black-annealed-wire': {
    description:
      'Black annealed wire offering excellent ductility and workability for tying, binding, and reinforcement applications. Heat-treated for softness while maintaining essential strength.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'Low Carbon Steel' },
      { label: 'Heat Treatment', value: 'Annealed for softness' },
      { label: 'Diameter Range', value: '1.0mm - 4.0mm' },
      { label: 'Finish', value: 'Black annealed' },
      { label: 'Packaging', value: 'Coils, spools, cut lengths' },
    ],
    applications: [
      'Construction tying applications',
      'Rebar binding',
      'Packaging and bundling',
      'Automotive and recycling industries',
      'Agricultural uses',
      'General manufacturing',
    ],
    technicalData: [
      { property: 'Soft, pliable finish', value: '', unit: '' },
      { property: 'Consistent annealing process', value: '', unit: '' },
      { property: 'Excellent knot holding', value: '', unit: '' },
      { property: 'Reliable tensile properties', value: '', unit: '' },
      { property: 'Available in multiple packaging formats', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Annealed for flexibility and ease of use',
          'Consistent soft black finish',
          'Available in coils, spools, or cut lengths',
          'Reliable strength for tying applications',
          'Wide range of diameters',
          'Ideal for construction and industrial use',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-hard-drawn-wire',
      'wire-galvanised-wire',
      'wire-pvc-coated-wire',
      'wire-straight-cut-wire',
      'wire-slab-wire',
    ],
  },
  'wire-pvc-coated-wire': {
    description:
      'PVC coated wire providing an additional protective layer and improved aesthetics for fencing, gardening, and industrial applications. Combines a galvanised core with durable plastic coating.',
    layoutType: 'standard',
    specifications: [
      { label: 'Core Material', value: 'Galvanised steel wire' },
      { label: 'Coating', value: 'PVC extrusion' },
      { label: 'Diameter Range', value: '2.0mm - 5.0mm (after coating)' },
      { label: 'Colour Options', value: 'Green, black, custom colours' },
      { label: 'Packaging', value: 'Coils or cut lengths' },
    ],
    applications: [
      'Garden and perimeter fencing',
      'Horticultural support systems',
      'Industrial binding',
      'Decorative wire solutions',
      'Coastal installations',
      'General outdoor use',
    ],
    technicalData: [
      { property: 'Enhanced corrosion resistance', value: '', unit: '' },
      { property: 'UV-resistant PVC coating', value: '', unit: '' },
      { property: 'Smooth finish for safe handling', value: '', unit: '' },
      { property: 'Flexible yet strong construction', value: '', unit: '' },
      { property: 'Low maintenance requirements', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'PVC coated for corrosion resistance and aesthetics',
          'Galvanised steel core for strength',
          'Available in multiple colours and diameters',
          'Smooth, easy-to-handle finish',
          'Long-lasting outdoor performance',
          'Ideal for fencing and garden applications',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-galvanised-wire',
      'wire-hard-drawn-wire',
      'wire-high-strain-wire',
      'wire-straight-cut-wire',
      'wire-slab-wire',
    ],
  },
  'wire-straight-cut-wire': {
    description:
      'Straight and cut wire supplied to precise lengths for construction, manufacturing, and reinforcing applications. Produced from high-quality wire with tight dimensional tolerances.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material Options', value: 'Bright, galvanised, black annealed' },
      { label: 'Length Range', value: 'Up to 6m' },
      { label: 'Diameter Range', value: '1.2mm - 6.0mm' },
      { label: 'Cutting Accuracy', value: '±1mm' },
      { label: 'Packaging', value: 'Bundles or boxed' },
    ],
    applications: [
      'Reinforcing in construction',
      'Precast concrete manufacturing',
      'Formwork tying and support',
      'Industrial assembly',
      'Manufacturing lines',
      'General fabrication',
    ],
    technicalData: [
      { property: 'Precision cut lengths', value: '', unit: '' },
      { property: 'Straightness control', value: '', unit: '' },
      { property: 'Available in various finishes', value: '', unit: '' },
      { property: 'Consistent mechanical properties', value: '', unit: '' },
      { property: 'Custom lengths on request', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Cut to exact length requirements',
          'Available in bright, galvanised, or annealed finishes',
          'Excellent straightness and consistency',
          'Ideal for reinforcing and fabrication tasks',
          'Reliable mechanical performance',
          'Delivered in easy-to-handle bundles',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-hard-drawn-wire',
      'wire-galvanised-wire',
      'wire-black-annealed-wire',
      'wire-pvc-coated-wire',
      'wire-slab-wire',
    ],
  },
  'wire-slab-wire': {
    description:
      'Slab wire specifically prepared for precast concrete applications. Straightened and cut wire offering consistent strength and reliable bonding within concrete elements.',
    layoutType: 'standard',
    specifications: [
      { label: 'Application', value: 'Precast concrete slabs' },
      { label: 'Length Range', value: 'Custom to project requirements' },
      { label: 'Diameter Options', value: '3.0mm - 6.0mm' },
      { label: 'Material', value: 'High strength wire' },
      { label: 'Finish', value: 'Bright or galvanised' },
    ],
    applications: [
      'Precast concrete slab reinforcement',
      'Construction formwork',
      'Infrastructure projects',
      'Industrial precast manufacturing',
      'Reinforced concrete products',
      'Civil engineering applications',
    ],
    technicalData: [
      { property: 'Consistent tensile properties', value: '', unit: '' },
      { property: 'Custom lengths for efficient production', value: '', unit: '' },
      { property: 'Produced from high-quality wire', value: '', unit: '' },
      { property: 'Excellent bonding with concrete', value: '', unit: '' },
      { property: 'Available in galvanised or bright finish', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Tailored for precast concrete manufacturing',
          'Custom cut lengths for reduced waste',
          'Consistent mechanical performance',
          'High-quality wire for structural integrity',
          'Compatible with automated production lines',
          'Available in bright or galvanised finishes',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-hard-drawn-wire',
      'wire-galvanised-wire',
      'wire-black-annealed-wire',
      'wire-pvc-coated-wire',
      'wire-straight-cut-wire',
    ],
  },
  'wirewall-doublewall': {
    description:
      'WireWall DoubleWall panels deliver high-security performance with a compact 12.5mm x 12.5mm aperture and dual vertical wire design. Engineered for installations that demand maximum anti-climb resistance and structural strength.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Panel Type', value: 'DoubleWall (12.5mm x 12.5mm)' },
      { label: 'Wire Configuration', value: 'Double 4.0mm vertical, 4.0mm horizontal' },
      { label: 'Aperture', value: '12.5mm x 12.5mm' },
      { label: 'Coating', value: 'Fully Galvanised 275g/m² with optional PVC' },
      { label: 'Security Level', value: 'Maximum anti-climb deterrence' },
    ],
    wireWallSpecifications: undefined,
    applications: [
      'Critical infrastructure protection',
      'Correctional facilities',
      'Military and defence perimeters',
      'High-risk commercial sites',
      'Airport security zones',
      'Industrial compounds requiring anti-cut performance',
    ],
    technicalData: [
      { property: 'Compact aperture prevents footholds', value: '', unit: '' },
      { property: 'Dual vertical wires enhance rigidity', value: '', unit: '' },
      { property: 'Precision welding ensures bond strength', value: '', unit: '' },
      { property: 'Compatible with WireWall post systems', value: '', unit: '' },
      { property: 'Optional powder or PVC coating', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/358-panel/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'Ultra-tight 12.5mm aperture for anti-climb performance',
          'Double vertical wire construction for strength',
          'Galvanised protection with optional PVC coating',
          'Engineered for high-risk installations',
          'Compatible with WireWall accessories',
          'Supports electric fencing integration',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Maximum perimeter deterrence',
          'High structural rigidity',
          'Long service life in harsh climates',
          'Low maintenance requirements',
          'Custom heights available',
          'Integrates with WireWall gates and spikes',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-355',
      'wirewall-358',
      'wirewall-3510',
      'wirewall-gates',
      'wirewall-spikes',
    ],
  },
  'wirewall-355': {
    description:
      'WireWall 355 Supermax panels deliver extreme perimeter protection for high-security sites such as supermax prisons, defence facilities, and critical infrastructure. The 5.6mm vertical wires paired with 4.0mm horizontal wires provide unparalleled rigidity and resistance to cutting.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Standard', value: 'SANS 10400-A:2022' },
      { label: 'Panel Type', value: '355 Supermax' },
      { label: 'Wire Configuration', value: '5.6mm vertical, 4.0mm horizontal' },
    ],
    wireWallSpecifications: {
      height: ['1200', '1800', '2100', '2400', '3000'],
      vBends: ['4', '4', '4', '5', '6'],
      length: ['3050', '3050', '3050', '3050', '3050'],
      aperture: ['75 x 12.7', '75 x 12.7', '75 x 12.7', '75 x 12.7', '75 x 12.7'],
      wireDiameter: ['4mm', '4mm', '4mm', '4mm', '4mm'],
      zincCoating: [
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
      ],
      tensileStrength: [
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
      ],
      weldStrength: ['60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%'],
      colourCoating: [
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
      ],
    },
    applications: [
      'Supermax prisons',
      'Defence facilities',
      'High-risk government installations',
      'Maximum security perimeters',
      'Critical infrastructure protection',
    ],
    technicalData: [
      { property: 'Superior weld strength compared to double 4mm wire', value: '', unit: '' },
      { property: 'Increased difficulty to cut', value: '', unit: '' },
      { property: 'Unparalleled rigidity and resistance to impact', value: '', unit: '' },
      { property: 'Resistance to forcing and cutting attempts', value: '', unit: '' },
      { property: 'Allows panel top to be bowed while maintaining security', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/355-panel/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          '5.6mm vertical wires with 4.0mm horizontal wires',
          'Superior weld strength compared to double 4mm wire',
          'Increased difficulty to cut through',
          'Unparalleled rigidity and resistance to impact',
          'Resistance to forcing and cutting attempts',
          'Allows panel top to be bowed while maintaining security',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Supermax prisons',
          'Defence facilities',
          'High-risk government installations',
          'Maximum security perimeters',
          'Critical infrastructure protection',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Same weight per meter as double 4mm wire option',
          'Superior weld strength and increased difficulty to cut',
          'Full height security with bowed top capability',
          'Unparalleled rigidity and resistance',
          'Professional-grade security solution',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-3510',
      'wirewall-3110',
      'wirewall-af100',
      'wirewall-spikes',
      'wirewall-underdig-panel',
    ],
  },
  'wirewall-358': {
    description:
      'WireWall 358 panels provide high-security protection with a 75mm x 12.7mm aperture and 4.0mm wire diameter. Designed to resist climbing and cutting, 358 mesh is a trusted specification for correctional facilities and sensitive installations.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Panel Type', value: '358 High Security Mesh' },
      { label: 'Aperture', value: '75mm x 12.7mm' },
      { label: 'Wire Diameter', value: '4.0mm vertical, 4.0mm horizontal' },
      { label: 'Coating', value: 'Galvanised with optional PVC' },
      { label: 'Security Level', value: 'High anti-climb performance' },
    ],
    wireWallSpecifications: {
      height: ['1800', '2100', '2400', '3000'],
      vBends: ['4', '4', '5', '6'],
      length: ['3050', '3050', '3050', '3050'],
      aperture: ['75 x 12.7', '75 x 12.7', '75 x 12.7', '75 x 12.7'],
      wireDiameter: ['4mm', '4mm', '4mm', '4mm'],
      zincCoating: [
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
      ],
      tensileStrength: ['500 - 650 MPA', '500 - 650 MPA', '500 - 650 MPA', '500 - 650 MPA'],
      weldStrength: ['60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%'],
      colourCoating: [
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
      ],
    },
    applications: [
      'Correctional facilities',
      'High-security perimeters',
      'Transport hubs',
      'Industrial complexes',
      'Military installations',
    ],
    technicalData: [
      { property: 'Tight aperture prevents climbing', value: '', unit: '' },
      { property: 'Resists cutting with standard tools', value: '', unit: '' },
      { property: 'Compatible with security toppings', value: '', unit: '' },
      { property: 'High rigidity and wind load performance', value: '', unit: '' },
      { property: 'Custom colours available', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/358-panel/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          '75mm x 12.7mm anti-climb aperture',
          '4.0mm wire for high rigidity',
          'Galvanised with optional PVC finish',
          'Compatible with WireWall posts',
          'Supports electrification and toppings',
          'High visibility with strong security',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-355',
      'wirewall-3510',
      'wirewall-af100',
      'wirewall-gates',
      'wirewall-spikes',
    ],
  },
  'wirewall-3510': {
    description:
      'WireWall 3510 panels deliver robust perimeter security with the proven 75mm x 12.7mm aperture. Manufactured with precision welding and high-quality materials for reliable protection across industrial and commercial sites.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Panel Type', value: '3510' },
      { label: 'Material', value: 'High-strength steel wire' },
      { label: 'Coating', value: 'Galvanised or PVC coated' },
    ],
    wireWallSpecifications: {
      height: ['1200', '1800', '2100', '2400', '3000'],
      vBends: ['4', '4', '4', '5', '6'],
      length: ['3050', '3050', '3050', '3050', '3050'],
      aperture: ['75 x 12.7', '75 x 12.7', '75 x 12.7', '75 x 12.7', '75 x 12.7'],
      wireDiameter: ['4mm', '4mm', '4mm', '4mm', '4mm'],
      zincCoating: [
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
      ],
      tensileStrength: [
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
      ],
      weldStrength: ['60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%'],
      colourCoating: [
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
      ],
    },
    applications: [
      'Perimeter security fencing',
      'Industrial compound protection',
      'Residential property boundaries',
      'Commercial facility security',
      'Government and institutional sites',
    ],
    technicalData: [
      { property: 'High-strength welded construction', value: '', unit: '' },
      { property: 'Corrosion-resistant coating', value: '', unit: '' },
      { property: 'Consistent panel dimensions', value: '', unit: '' },
      { property: 'Easy installation and maintenance', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/3510/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-strength welded construction',
          'Corrosion-resistant coating options',
          'Consistent panel dimensions',
          'Easy installation and maintenance',
          'Reliable protection for various security applications',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Perimeter security fencing',
          'Industrial compound protection',
          'Residential property boundaries',
          'Commercial facility security',
          'Government and institutional sites',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Excellent security and durability',
          'Precision welding and high-quality materials',
          'Reliable protection for various applications',
          'Professional-grade construction',
          'Long-lasting performance',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-355',
      'wirewall-3110',
      'wirewall-3210',
      'wirewall-gates',
      'wirewall-spikes',
    ],
  },
  'wirewall-3110': {
    description:
      'WireWall 3110 medium panels balance visibility with security using a 75mm x 25mm aperture. Ideal for medium- and high-security perimeters that require robust protection with improved sightlines.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Panel Type', value: '3110 Medium Panel' },
      { label: 'Aperture', value: '75mm x 25mm' },
      { label: 'Wire Diameter', value: '4.0mm vertical, 4.0mm horizontal' },
      { label: 'Coating', value: 'Galvanised or PVC coated' },
      { label: 'Heights', value: '1200mm - 3000mm' },
    ],
    wireWallSpecifications: {
      height: ['1200', '1800', '2100', '2400', '3000'],
      vBends: ['3', '3', '4', '4', '5'],
      length: ['3050', '3050', '3050', '3050', '3050'],
      aperture: ['75 x 25', '75 x 25', '75 x 25', '75 x 25', '75 x 25'],
      wireDiameter: ['4mm', '4mm', '4mm', '4mm', '4mm'],
      zincCoating: [
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
      ],
      tensileStrength: [
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
      ],
      weldStrength: ['60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%'],
      colourCoating: [
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
      ],
    },
    applications: [
      'Industrial perimeters',
      'Logistics hubs',
      'Commercial properties',
      'Public infrastructure',
      'Utility protection',
    ],
    technicalData: [
      { property: 'Enhanced visibility panels', value: '', unit: '' },
      { property: 'Strong welded joints', value: '', unit: '' },
      { property: 'Compatible with WireWall posts and rails', value: '', unit: '' },
      { property: 'Available with security toppings', value: '', unit: '' },
      { property: 'Optional custom colours', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/3110/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          '75mm x 25mm aperture for balanced visibility',
          'High-strength welded construction',
          'Galvanised with optional PVC coating',
          'Available in multiple heights',
          'Compatible with WireWall accessories',
          'Suitable for medium- to high-security sites',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-3510',
      'wirewall-3210',
      'wirewall-gates',
      'wirewall-spikes',
      'wirewall-underdig-panel',
    ],
  },
  'wirewall-3210': {
    description:
      'WireWall 3210 light panels offer secure perimeter protection with a 75mm x 50mm aperture for improved sightlines. Suitable for commercial, institutional, and residential estates needing dependable security.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Panel Type', value: '3210 Light Panel' },
      { label: 'Aperture', value: '75mm x 50mm' },
      { label: 'Wire Diameter', value: '4.0mm vertical, 4.0mm horizontal' },
      { label: 'Coating', value: 'Galvanised or PVC coated' },
      { label: 'Heights', value: '1200mm - 2400mm' },
    ],
    wireWallSpecifications: {
      height: ['1200', '1800', '2100', '2400'],
      vBends: ['3', '3', '3', '4'],
      length: ['3050', '3050', '3050', '3050'],
      aperture: ['75 x 50', '75 x 50', '75 x 50', '75 x 50'],
      wireDiameter: ['4mm', '4mm', '4mm', '4mm'],
      zincCoating: [
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
      ],
      tensileStrength: ['500 - 650 MPA', '500 - 650 MPA', '500 - 650 MPA', '500 - 650 MPA'],
      weldStrength: ['60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%'],
      colourCoating: [
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
      ],
    },
    applications: [
      'Residential estates',
      'Commercial complexes',
      'Schools and universities',
      'Public facilities',
      'Light industrial sites',
    ],
    technicalData: [
      { property: 'Balanced visibility and security', value: '', unit: '' },
      { property: 'Rigid panel construction', value: '', unit: '' },
      { property: 'Compatible with security toppings', value: '', unit: '' },
      { property: 'Low maintenance coating options', value: '', unit: '' },
      { property: 'Available in custom colours', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/358-panel/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          '75mm x 50mm aperture for clear visibility',
          'Galvanised with optional PVC finish',
          'Compatible with WireWall post systems',
          'Ideal for estates and public facilities',
          'Available in multiple heights and colours',
          'Supports electric fence integration',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-3110',
      'wirewall-3510',
      'wirewall-gates',
      'wirewall-spikes',
      'wirewall-underdig-panel',
    ],
  },
  'wirewall-af100': {
    description:
      'WireWall AF100 panels feature advanced anti-climb design elements that make scaling extremely difficult. Combining traditional security with modern anti-climb technology, AF100 panels secure high-risk perimeters.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Panel Type', value: 'AF100 Anti-Climb' },
      { label: 'Anti-Climb Features', value: 'Advanced design elements' },
      { label: 'Security Level', value: 'High' },
    ],
    wireWallSpecifications: {
      height: ['1200', '1800', '2100', '2400', '3000'],
      vBends: ['4', '4', '4', '5', '6'],
      length: ['3050', '3050', '3050', '3050', '3050'],
      aperture: ['75 x 12.7', '75 x 12.7', '75 x 12.7', '75 x 12.7', '75 x 12.7'],
      wireDiameter: ['4mm', '4mm', '4mm', '4mm', '4mm'],
      zincCoating: [
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
        'Fully Galvanised 275g/m2',
      ],
      tensileStrength: [
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
        '500 - 650 MPA',
      ],
      weldStrength: ['60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%', '60% - 80%'],
      colourCoating: [
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
        'Thermal Plastic 400 Microns min.',
      ],
    },
    applications: [
      'High-security perimeter fencing',
      'Correctional facilities',
      'Government installations',
      'Military bases',
      'Critical infrastructure protection',
    ],
    technicalData: [
      { property: 'Advanced anti-climb design elements', value: '', unit: '' },
      { property: 'Extremely difficult to scale', value: '', unit: '' },
      { property: 'Maximum perimeter protection', value: '', unit: '' },
      { property: 'Combines traditional and modern security', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/af-100/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'Advanced anti-climb geometry',
          'High-tensile welded construction',
          'Optional PVC coating',
          'Compatible with WireWall posts and toppings',
          'Suitable for high-security facilities',
          'Engineered for long-term durability',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'High-security perimeter fencing',
          'Correctional facilities',
          'Government installations',
          'Military bases',
          'Critical infrastructure protection',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-355',
      'wirewall-3510',
      'wirewall-spikes',
      'wirewall-underdig-panel',
      'wirewall-gates',
    ],
  },
  'wirewall-gates': {
    description:
      'WireWall Gates are engineered to integrate seamlessly with WireWall perimeter systems, delivering matching security levels and robust access control. Available as swing, sliding, and custom gate solutions.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Gate Types', value: 'Single, double swing, sliding' },
      { label: 'Infill Options', value: 'WireWall mesh to match perimeter' },
      { label: 'Coating', value: 'Galvanised or galvanised plus powder coat' },
      { label: 'Hardware', value: 'Heavy-duty hinges and locking systems' },
      { label: 'Automation', value: 'Compatible with access control systems' },
    ],
    wireWallSpecifications: undefined,
    applications: [
      'Vehicle and pedestrian access control',
      'High-security perimeters',
      'Industrial entrances',
      'Critical infrastructure gateways',
      'Logistics hubs',
      'Commercial properties',
    ],
    technicalData: [
      { property: 'Engineered to match WireWall security levels', value: '', unit: '' },
      { property: 'Available with electric locking and automation', value: '', unit: '' },
      { property: 'Reinforced frames for structural rigidity', value: '', unit: '' },
      { property: 'Custom widths and heights', value: '', unit: '' },
      { property: 'Hot-dip galvanised protection', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Fencing/field-and-game-fence/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'Designed to integrate with WireWall fencing',
          'Available in swing or sliding configurations',
          'Supports manual or automated operation',
          'Heavy-duty locking hardware',
          'Custom infill options including spikes and sensors',
          'Engineered for high-traffic durability',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-355',
      'wirewall-3510',
      'wirewall-358',
      'wirewall-spikes',
      'wirewall-underdig-panel',
    ],
  },
  'wirewall-spikes': {
    description:
      "Meshco's WireWall Spike Strips are designed for maximum deterrence, preventing climbing or tampering on WireWall and other fencing systems. Manufactured from heavy-duty steel for durability and effective intrusion resistance.",
    layoutType: 'wirewall',
    specifications: [
      { label: 'Material', value: 'Heavy-duty steel' },
      { label: 'Profiles Available', value: 'Standard, Heavy, Raptor Tooth, Assegai' },
      { label: 'Application', value: 'WireWall and compatible fencing systems' },
    ],
    wireWallSpecifications: undefined,
    applications: [
      'Standard Spike - General perimeter protection',
      'Heavy Spike - Reinforced deterrence for high-risk sites',
      'Raptor Tooth - Aggressive anti-climb performance',
      'Assegai - Extended spear-point for extreme resistance',
    ],
    technicalData: [
      { property: 'Maximum deterrence against climbing', value: '', unit: '' },
      { property: 'Prevents tampering on fencing systems', value: '', unit: '' },
      { property: 'Sharp, visible, and highly effective deterrent', value: '', unit: '' },
      { property: 'Engineered for durability', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'types-of-spike-strips',
        label: 'Types of Spike Strips',
        content: [
          'Standard Spike - General perimeter protection',
          'Heavy Spike - Reinforced deterrence for high-risk perimeters',
          'Raptor Tooth - Aggressive profile for maximum bite',
          'Assegai - Long spear-point for extreme anti-climb resistance',
        ],
      },
      {
        id: 'installation',
        label: 'Installation',
        content: [
          'Compatible with WireWall panels and posts',
          'Supplied with fixing options',
          'Can be powder-coated for corrosion protection',
          'Suitable for gates and fence toppings',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-355',
      'wirewall-3510',
      'wirewall-3110',
      'wirewall-gates',
      'wirewall-underdig-panel',
    ],
  },
  'wirewall-underdig-panel': {
    description:
      'WireWall Underdig (Anti-burrow) panels extend perimeter security below ground, preventing unauthorised entry attempts by stopping digging beneath fence lines. Manufactured from high-strength welded mesh for underground use.',
    layoutType: 'wirewall',
    specifications: [
      { label: 'Material', value: 'High-strength welded mesh' },
      { label: 'Installation', value: 'Below ground level' },
      { label: 'Compatibility', value: 'WireWall and other perimeter fencing systems' },
    ],
    wireWallSpecifications: undefined,
    applications: [
      'Manufactured from heavy-duty welded mesh panels.',
      'Standard galvanised finish, with optional plastic coating for enhanced corrosion protection.',
      'Compatible with Meshco WireWall and other perimeter fencing systems.',
      'Supplied with secure fixings for integration into fence lines.',
      'Designed for quick installation and long service life.',
    ],
    technicalData: [
      { property: 'Prevents unauthorised entry from below ground', value: '', unit: '' },
      { property: 'Creates effective underground barrier against intrusion', value: '', unit: '' },
      { property: 'Extends perimeter security below ground level', value: '', unit: '' },
      { property: 'Works in combination with above ground fencing', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Manufactured from heavy-duty welded mesh panels',
          'Standard galvanised finish with optional plastic coating',
          'Compatible with WireWall and other perimeter fencing systems',
          'Supplied with secure fixings for integration',
          'Designed for quick installation and long service life',
        ],
      },
    ],
    relatedProductKeys: [
      'wirewall-355',
      'wirewall-3510',
      'wirewall-af100',
      'wirewall-spikes',
      'wirewall-gates',
    ],
  },
  'reinforcing-brickforce': {
    description:
      'Galvanised Brickforce is a welded steel ladder mesh used as horizontal reinforcement in masonry construction. Installed between brick or block courses, it enhances tensile strength, minimises cracking, and improves structural performance.',
    layoutType: 'standard',
    specifications: [
      { label: 'Standard', value: 'SANS 10400-A:2022' },
      { label: 'Length of Roll', value: '20m' },
      { label: 'Available Sizes', value: '57mm, 75mm, 100mm, 150mm, 230mm' },
    ],
    applications: [
      'Reinforcement of masonry walls',
      'Crack prevention in brickwork',
      'Durability enhancement',
      'High wind load areas',
      'Seismic risk zones',
      'Unstable soil conditions',
      'Coastal and humid environments',
    ],
    technicalData: [
      {
        property:
          'Increases tensile strength between mortar layers, improving structural integrity of masonry walls.',
        value: '',
        unit: '',
      },
      {
        property: 'Minimises cracking from thermal expansion, contraction, and settlement.',
        value: '',
        unit: '',
      },
      { property: 'Manufactured from high-quality, low-carbon steel.', value: '', unit: '' },
      { property: 'Galvanised coating protects against corrosion.', value: '', unit: '' },
      {
        property: 'Strong welds at every intersection resist bending and breaking.',
        value: '',
        unit: '',
      },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Made from high-quality, low-carbon steel for strength without brittleness',
          'Thicker zinc coating prevents rust and extends lifespan',
          'Strong welds at every intersection resist bending and breaking',
          'Consistent spacing ensures even load distribution',
          'Tightly wound rolls for easier transport and handling',
          'Flexible but not flimsy - rolls uncoil smoothly',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Residential construction projects',
          'Commercial building construction',
          'High wind load areas',
          'Seismic risk zones',
          'Unstable soil conditions',
          'Coastal and humid environments',
        ],
      },
      {
        id: 'installation',
        label: 'Installation',
        content: [
          'Installed between brick courses during masonry construction',
          'Available in multiple widths to suit wall thickness',
          'Supplied in 20m rolls for easy handling',
          'Compatible with standard masonry practices',
          'Professional installation recommended for best performance',
        ],
      },
    ],
    relatedProductKeys: [
      'reinforcing-brickforce',
      'reinforcing-reinforcing-mesh',
      'reinforcing-cavity-wall-ties',
      'reinforcing-reinforcing-steel',
      'reinforcing-ceramic-door-anchors',
    ],
  },
  'reinforcing-reinforcing-mesh': {
    description:
      'Reinforcing mesh provides structural reinforcement for concrete slabs and precast elements. Manufactured to precise dimensional tolerances, the welded mesh improves crack control and load distribution in concrete construction.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High tensile steel' },
      { label: 'Mesh Size', value: 'Standard 100mm x 100mm or custom' },
      { label: 'Wire Diameter', value: '4.0mm - 12.0mm' },
      { label: 'Sheet Size', value: '2.4m x 6.0m standard' },
      { label: 'Standards', value: 'SANS specifications for reinforcing' },
    ],
    applications: [
      'Concrete slabs and flooring',
      'Precast concrete products',
      'Driveways and paving',
      'Industrial flooring',
      'Civil engineering structures',
      'Reinforced foundations',
    ],
    technicalData: [
      { property: 'Welded intersections ensure load transfer', value: '', unit: '' },
      { property: 'Improves crack control in concrete', value: '', unit: '' },
      { property: 'Available in custom sheet sizes', value: '', unit: '' },
      { property: 'Supplied flattened for easy placement', value: '', unit: '' },
      { property: 'Compatible with concrete cover blocks', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High tensile steel wires for structural reinforcement',
          'Welded joints for consistent performance',
          'Standard and custom mesh sizes available',
          'Supplied in flat sheets for quick placement',
          'Improves concrete durability and crack resistance',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Concrete slabs and flooring',
          'Precast concrete panels',
          'Paving and driveways',
          'Industrial floors',
          'Civil engineering works',
        ],
      },
    ],
    relatedProductKeys: [
      'reinforcing-brickforce',
      'reinforcing-hoop-iron',
      'reinforcing-cavity-wall-ties',
      'reinforcing-reinforcing-steel',
      'reinforcing-ceramic-door-anchors',
    ],
  },
  'reinforcing-hoop-iron': {
    description:
      'Hoop iron is a galvanised mild steel strip used for securing roof trusses, reinforcing brickwork, and tying structural elements. The flexible yet strong strip is a staple in construction and carpentry applications.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'Galvanised mild steel strip' },
      { label: 'Width Options', value: '20mm - 40mm' },
      { label: 'Thickness', value: '0.8mm - 1.6mm' },
      { label: 'Coating', value: 'Hot-dip galvanised' },
      { label: 'Length', value: 'Coils or cut lengths' },
    ],
    applications: [
      'Roof truss bracing',
      'Securing door and window frames',
      'Brickwork reinforcement',
      'Timber framing ties',
      'General construction fixing',
      'Packaging and industrial bundling',
    ],
    technicalData: [
      { property: 'Flexible yet strong steel strip', value: '', unit: '' },
      { property: 'Galvanised for corrosion resistance', value: '', unit: '' },
      { property: 'Pre-punched options available', value: '', unit: '' },
      { property: 'Supplied in coils for easy handling', value: '', unit: '' },
      { property: 'Compatible with nails, screws, or bolts', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Hot-dip galvanised for corrosion protection',
          'High-tensile mild steel strip',
          'Flexible for easy installation',
          'Available perforated or solid',
          'Supplied in coils or cut to length',
          'Ideal for roof and structural bracing',
        ],
      },
    ],
    relatedProductKeys: [
      'reinforcing-brickforce',
      'reinforcing-cavity-wall-ties',
      'reinforcing-reinforcing-mesh',
      'reinforcing-reinforcing-steel',
      'reinforcing-ceramic-door-anchors',
    ],
  },
  'reinforcing-cavity-wall-ties': {
    description:
      'Cavity wall ties secure the inner and outer leaves of masonry cavity walls, maintaining structural stability and ensuring load transfer. Manufactured from corrosion-resistant materials for long-term performance.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'Galvanised or stainless steel' },
      { label: 'Lengths', value: '150mm - 300mm' },
      { label: 'Profiles', value: 'Z-pattern, butterfly, fishtail' },
      { label: 'Coating', value: 'Hot-dip galvanised or stainless' },
      { label: 'Applications', value: 'Brick and block cavity walls' },
    ],
    applications: [
      'Residential cavity walls',
      'Commercial masonry construction',
      'High wind load structures',
      'Coastal and humid environments',
      'Renovation and retrofitting of cavity walls',
    ],
    technicalData: [
      { property: 'Corrosion-resistant materials', value: '', unit: '' },
      { property: 'Designed for structural load transfer', value: '', unit: '' },
      { property: 'Available for varied cavity widths', value: '', unit: '' },
      { property: 'Compatible with insulation retaining clips', value: '', unit: '' },
      { property: 'Meets building regulations for cavity wall ties', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Precision-formed for structural performance',
          'Galvanised or stainless steel options',
          'Suitable for various cavity widths',
          'Available with drip features to prevent moisture transfer',
          'Compatible with insulation retaining clips',
          'Meets relevant building standards',
        ],
      },
    ],
    relatedProductKeys: [
      'reinforcing-brickforce',
      'reinforcing-hoop-iron',
      'reinforcing-reinforcing-mesh',
      'reinforcing-reinforcing-steel',
      'reinforcing-ceramic-door-anchors',
    ],
  },
  'reinforcing-reinforcing-steel': {
    description:
      'Reinforcing steel bars (rebar) provide tensile strength and reinforcement within concrete structures. Available in high-yield deformed bars and smooth bars across a range of diameters.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-yield deformed steel' },
      { label: 'Diameter Range', value: '6mm - 40mm' },
      { label: 'Lengths', value: '6m, 12m, or custom cut and bend' },
      { label: 'Standards', value: 'SANS 920 / BS 4449' },
      { label: 'Finishes', value: 'Black or epoxy coated' },
    ],
    applications: [
      'Reinforced concrete structures',
      'Infrastructure projects',
      'Precast concrete manufacturing',
      'Foundations and beams',
      'Columns and slabs',
      'Civil engineering works',
    ],
    technicalData: [
      { property: 'High yield strength', value: '', unit: '' },
      { property: 'Ribbed profile for concrete bond', value: '', unit: '' },
      { property: 'Available in cut, bend, and prefabricated shapes', value: '', unit: '' },
      { property: 'Certified to meet structural standards', value: '', unit: '' },
      { property: 'Traceability and mill certificates available', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High yield strength for structural performance',
          'Deformed profile for enhanced concrete bond',
          'Supplied in standard or customised lengths',
          'Cut-and-bend service available',
          'Meets SANS 920 / BS 4449 requirements',
        ],
      },
    ],
    relatedProductKeys: [
      'reinforcing-reinforcing-mesh',
      'reinforcing-brickforce',
      'reinforcing-hoop-iron',
      'reinforcing-cavity-wall-ties',
      'reinforcing-ceramic-door-anchors',
    ],
  },
  'reinforcing-ceramic-door-anchors': {
    description:
      'Ceramic door anchors provide secure fixing points within masonry openings, improving door frame stability in fire-rated and high-security environments.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'Ceramic body with steel reinforcement' },
      { label: 'Application', value: 'Door frame anchoring' },
      { label: 'Compatibility', value: 'Brick and block masonry' },
      { label: 'Finish', value: 'Galvanised steel components' },
      { label: 'Installation', value: 'Embedded during construction' },
    ],
    applications: [
      'Heavy-duty door installations',
      'Correctional facility doors',
      'Fire-rated door frames',
      'Security doors in masonry walls',
      'Commercial and industrial doorways',
    ],
    technicalData: [
      { property: 'Provides secure anchoring within masonry', value: '', unit: '' },
      { property: 'Ceramic body resists heat transfer', value: '', unit: '' },
      { property: 'Galvanised components resist corrosion', value: '', unit: '' },
      { property: 'Compatible with welded or bolted door frames', value: '', unit: '' },
      { property: 'Installed during wall construction', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Secure anchoring for high-security doors',
          'Ceramic core minimises heat transfer',
          'Galvanised steel components',
          'Designed for masonry wall integration',
          'Improves door frame stability and strength',
        ],
      },
    ],
    relatedProductKeys: [
      'reinforcing-brickforce',
      'reinforcing-hoop-iron',
      'reinforcing-reinforcing-mesh',
      'reinforcing-reinforcing-steel',
      'reinforcing-ceramic-door-anchors',
    ],
  },
  'fencing-welded-fence-mesh': {
    description:
      'Durable welded fence mesh providing excellent security and visibility. Manufactured using precision welding techniques to ensure consistent quality and long-lasting performance in various environmental conditions.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'Mild Steel Wire' },
      { label: 'Wire Diameter', value: '3.0mm - 5.0mm' },
      { label: 'Mesh Size', value: '50mm x 50mm, 75mm x 75mm' },
      { label: 'Coating', value: 'Galvanised or PVC Coated' },
      { label: 'Panel Size', value: '2.4m x 1.2m' },
    ],
    applications: [
      'Perimeter security fencing',
      'Industrial compound fencing',
      'Residential property boundaries',
      'Sports field enclosures',
      'Construction site security',
    ],
    technicalData: [
      { property: 'Tensile Strength', value: '400-500', unit: 'N/mm²' },
      { property: 'Zinc Coating', value: '275', unit: 'g/m²' },
      { property: 'Panel Weight', value: '15-25', unit: 'kg' },
      { property: 'Service Life', value: '20-30', unit: 'years' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Fencing/welded-fence-mesh/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'Mild steel wire construction',
          'Wire diameter options (3.0mm - 5.0mm)',
          'Mesh sizes: 50mm x 50mm, 75mm x 75mm',
          'Galvanised or PVC coating options',
          'Panel size: 2.4m x 1.2m',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Perimeter security fencing',
          'Industrial compound fencing',
          'Residential property boundaries',
          'Sports field enclosures',
          'Construction site security',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Excellent security and visibility',
          'Precision welding techniques',
          'Consistent quality and performance',
          'Long-lasting in various environmental conditions',
          'Durable construction',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh-pvc',
      'fencing-diamond-mesh',
      'fencing-standards',
      'fencing-droppers',
      'fencing-barbed-wire',
    ],
  },
  'fencing-welded-fence-mesh-pvc': {
    description:
      'PVC-coated welded fence mesh combines the strength of welded steel panels with a durable plastic coating for enhanced corrosion protection and aesthetics. Ideal for coastal or decorative applications requiring long service life.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'Mild steel wire' },
      { label: 'Coating', value: 'PVC over galvanised steel' },
      { label: 'Wire Diameter', value: '3.0mm - 5.0mm (after coating)' },
      { label: 'Mesh Size', value: '50mm x 50mm, 75mm x 75mm' },
      { label: 'Panel Size', value: '2.4m x 1.2m' },
    ],
    applications: [
      'Residential estates',
      'Parks and recreational areas',
      'Coastal installations',
      'Schools and sports facilities',
      'Commercial properties',
    ],
    technicalData: [
      { property: 'PVC coating enhances corrosion resistance', value: '', unit: '' },
      { property: 'Smooth finish improves safety', value: '', unit: '' },
      { property: 'Multiple colour options available', value: '', unit: '' },
      { property: 'Retains welded mesh strength', value: '', unit: '' },
      { property: 'Low maintenance requirements', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'PVC coating for enhanced durability',
          'Retains welded mesh structural strength',
          'Available in multiple colours',
          'Suitable for coastal or decorative applications',
          'Compatible with WireWall posts and fittings',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-diamond-mesh',
      'fencing-hexagonal-netting',
      'fencing-standards',
      'fencing-droppers',
    ],
  },
  'fencing-diamond-mesh': {
    description:
      'Diamond mesh fencing provides excellent security and visibility for various applications. The diamond-shaped openings offer superior strength and durability while maintaining clear sight lines for security purposes.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'Galvanised steel wire' },
      { label: 'Mesh Pattern', value: 'Diamond shape' },
      { label: 'Wire Diameter', value: '2.5mm - 4.0mm' },
      { label: 'Mesh Size', value: '50mm x 50mm, 75mm x 75mm' },
      { label: 'Coating', value: 'Galvanised or PVC coated' },
    ],
    applications: [
      'Perimeter security fencing',
      'Residential property boundaries',
      'Industrial compound protection',
      'Sports field enclosures',
      'Construction site security',
      'Agricultural fencing',
      'Playground safety barriers',
    ],
    technicalData: [
      { property: 'Superior strength and durability', value: '', unit: '' },
      { property: 'Clear visibility for security', value: '', unit: '' },
      { property: 'Corrosion-resistant coating', value: '', unit: '' },
      { property: 'Easy installation and maintenance', value: '', unit: '' },
      { property: 'Cost-effective security solution', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Diamond-shaped openings for superior strength',
          'Galvanised steel wire construction',
          'Multiple wire diameter options (2.5mm - 4.0mm)',
          'Various mesh sizes available (50mm x 50mm, 75mm x 75mm)',
          'Galvanised or PVC coating options',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Perimeter security fencing',
          'Residential property boundaries',
          'Industrial compound protection',
          'Sports field enclosures',
          'Construction site security',
          'Agricultural fencing',
          'Playground safety barriers',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Superior strength and durability',
          'Clear visibility for security purposes',
          'Corrosion-resistant coating',
          'Easy installation and maintenance',
          'Cost-effective security solution',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'fencing-hexagonal-netting',
      'fencing-standards',
      'fencing-droppers',
    ],
  },
  'fencing-barbed-wire': {
    description:
      'High-quality barbed wire designed for maximum security and deterrence. Manufactured using premium steel and advanced coating processes to ensure long-lasting performance in harsh environmental conditions.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'High-tensile steel wire' },
      { label: 'Wire Diameter', value: '2.5mm - 3.0mm' },
      { label: 'Barbs', value: '4-point barbs' },
      { label: 'Coating', value: 'Galvanised or PVC coated' },
      { label: 'Length', value: '400m - 500m per roll' },
    ],
    applications: [
      'Perimeter security fencing',
      'Agricultural boundary protection',
      'Industrial facility security',
      'Military and defence installations',
      'Correctional facility fencing',
      'High-security area protection',
      'Livestock containment',
    ],
    technicalData: [
      { property: 'Maximum security and deterrence', value: '', unit: '' },
      { property: 'High-tensile strength construction', value: '', unit: '' },
      { property: 'Corrosion-resistant coating', value: '', unit: '' },
      { property: 'Sharp, effective barbs', value: '', unit: '' },
      { property: 'Long-lasting performance', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel wire construction',
          '4-point barbs for maximum effectiveness',
          'Wire diameter options (2.5mm - 3.0mm)',
          'Galvanised or PVC coating options',
          'Available in 400m - 500m rolls',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Maximum security and deterrence',
          'High-tensile strength construction',
          'Corrosion-resistant coating',
          'Sharp, effective barbs',
          'Long-lasting performance in harsh conditions',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-razor-wire-btc',
      'fencing-razor-wire-flatwrap',
      'fencing-diamond-mesh',
      'fencing-standards',
      'fencing-droppers',
    ],
  },
  'fencing-razor-wire-flatwrap': {
    description:
      'Flatwrap razor wire offers high-security protection with a compact profile ideal for wall- and fence-mounted applications. The flat coil design provides overlapping blades for continuous deterrence without excessive projection.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'High-tensile steel core' },
      { label: 'Blade Type', value: 'Stainless steel razor' },
      { label: 'Coil Length', value: '10m - 15m per panel' },
      { label: 'Coil Width', value: '700mm, 900mm, 1000mm' },
      { label: 'Coating', value: 'Galvanised or stainless steel' },
    ],
    applications: [
      'Perimeter wall topping',
      'Security fence upgrades',
      'Urban and industrial facilities',
      'Logistics and distribution centres',
      'High-risk commercial sites',
    ],
    technicalData: [
      { property: 'Overlap design ensures no gaps', value: '', unit: '' },
      { property: 'High-tensile core resists stretching', value: '', unit: '' },
      { property: 'Compact installation footprint', value: '', unit: '' },
      { property: 'Compatible with brackets and fence tops', value: '', unit: '' },
      { property: 'Supplied in flat panels for quick install', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Flatwrap configuration for compact profile',
          'Continuous overlapping razor blades',
          'High-tensile reinforced core wire',
          'Available in multiple diameters',
          'Ideal for wall and fence topping',
          'Supplied ready for quick installation',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-razor-wire-btc',
      'fencing-razorwall',
      'fencing-barbed-wire',
      'fencing-standards',
      'fencing-droppers',
    ],
  },
  'fencing-razor-wire-btc': {
    description:
      'Concertina (BTC) razor wire delivers maximum perimeter deterrence using concentric coils of razor wire expanded along the fence line. The spiral concertina design creates a formidable barrier for high-security installations.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'High-tensile steel core' },
      { label: 'Blade Type', value: 'Stainless steel razor' },
      { label: 'Coil Diameter', value: '450mm, 730mm, 980mm' },
      { label: 'Loops per Coil', value: '33 - 55' },
      { label: 'Coating', value: 'Galvanised or stainless steel' },
    ],
    applications: [
      'Military and defence installations',
      'Correctional facilities',
      'Critical infrastructure',
      'Border security',
      'High-value asset protection',
    ],
    technicalData: [
      { property: 'Concertina coils expand to form robust barrier', value: '', unit: '' },
      { property: 'Clipped loops maintain structure and spacing', value: '', unit: '' },
      { property: 'High-tensile core resists cutting and forcing', value: '', unit: '' },
      { property: 'Available in multiple diameters and clip spacings', value: '', unit: '' },
      { property: 'Compatible with posts, brackets, and fence toppings', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Concertina coil for maximum deterrence',
          'Stainless steel razor blades on high-tensile core',
          'Available in multiple diameters and loop counts',
          'Supplied with clips for assembly',
          'Suitable for high-security perimeters',
          'Compatible with electric fence systems',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-razor-wire-flatwrap',
      'fencing-razorwall',
      'fencing-barbed-wire',
      'fencing-standards',
      'fencing-droppers',
    ],
  },
  'fencing-razorwall': {
    description:
      'RazorWall panels combine a welded mesh panel with integrated razor strips to deliver a modular, high-security barrier. The rigid panels provide rapid installation and consistent anti-climb performance.',
    layoutType: 'simple',
    specifications: [
      { label: 'Panel Width', value: '2.4m standard' },
      { label: 'Panel Height', value: '600mm - 2400mm modules' },
      { label: 'Razor Profile', value: 'Integrated razor strips' },
      { label: 'Coating', value: 'Galvanised or powder-coated' },
      { label: 'Installation', value: 'Bolt-on modular panels' },
    ],
    applications: [
      'High-security perimeter upgrades',
      'Sensitive infrastructure protection',
      'Utility substations',
      'Logistics depots',
      'Military and government facilities',
    ],
    technicalData: [
      { property: 'Integrated razor strips eliminate gaps', value: '', unit: '' },
      { property: 'Rigid panel construction resists deformation', value: '', unit: '' },
      { property: 'Modular design for rapid deployment', value: '', unit: '' },
      { property: 'Compatible with existing fence structures', value: '', unit: '' },
      { property: 'Optional powder coat for additional protection', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Modular razor mesh panel system',
          'Integrated razor strips for continuous protection',
          'Rigid design for rapid installation',
          'Compatible with existing fences and walls',
          'Ideal for high-security upgrades',
          'Available in galvanised or powder-coated finish',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-razor-wire-btc',
      'fencing-razor-wire-flatwrap',
      'fencing-barbed-wire',
      'fencing-standards',
      'fencing-droppers',
    ],
  },
  'fencing-field-game-fence': {
    description:
      'Field and game fencing is designed for agricultural and wildlife management applications, providing effective containment for livestock while allowing natural movement of wildlife.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'Galvanised steel wire' },
      { label: 'Wire Diameter', value: '2.0mm - 3.0mm' },
      { label: 'Mesh Size', value: '100mm x 100mm graduated mesh' },
      { label: 'Height Options', value: '1.2m - 2.4m' },
      { label: 'Coating', value: 'Galvanised or PVC coated' },
    ],
    applications: [
      'Livestock containment',
      'Wildlife management',
      'Agricultural boundaries',
      'Game reserve fencing',
      'Farm perimeter protection',
      'Pasture management',
      'Wildlife corridor protection',
    ],
    technicalData: [
      { property: 'Effective livestock containment', value: '', unit: '' },
      { property: 'Wildlife-friendly design', value: '', unit: '' },
      { property: 'Durable agricultural construction', value: '', unit: '' },
      { property: 'Easy installation in rural areas', value: '', unit: '' },
      { property: 'Cost-effective for large areas', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Fencing/field-and-game-fence/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'Galvanised steel wire construction',
          'Graduated mesh for wildlife management',
          'Available in multiple heights',
          'Suitable for agricultural and game applications',
          'Optional PVC coating for enhanced durability',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-diamond-mesh',
      'fencing-welded-fence-mesh-pvc',
      'fencing-standards',
      'fencing-droppers',
      'utility-specimesh-panels',
    ],
  },
  'fencing-hexagonal-netting': {
    description:
      'Hexagonal wire netting (chicken mesh) offers flexible containment for agricultural, construction, and DIY applications. The hex pattern provides strength while remaining easy to shape.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'Galvanised steel wire' },
      { label: 'Mesh Pattern', value: 'Hexagonal (13mm - 50mm)' },
      { label: 'Wire Diameter', value: '0.7mm - 1.2mm' },
      { label: 'Roll Widths', value: '0.6m - 2.4m' },
      { label: 'Coating', value: 'Galvanised with optional PVC' },
    ],
    applications: [
      'Poultry and small animal enclosures',
      'Garden protection',
      'Plaster and stucco reinforcement',
      'Gabions and erosion control',
      'DIY projects',
      'Tree guards and plant protection',
    ],
    technicalData: [
      { property: 'Flexible yet resilient mesh', value: '', unit: '' },
      { property: 'Easy to cut and install', value: '', unit: '' },
      { property: 'Galvanised finish resists corrosion', value: '', unit: '' },
      { property: 'Available in various mesh sizes and widths', value: '', unit: '' },
      { property: 'Supplied in rolled form', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Fencing/hexagonal-wire-netting/specifications.png',
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'Hexagonal mesh pattern for flexibility',
          'High-tensile wire construction',
          'Galvanised coating for corrosion resistance',
          'Various mesh sizes and diameters available',
          'Easy to cut and shape for custom applications',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-diamond-mesh',
      'fencing-field-game-fence',
      'fencing-welded-fence-mesh-pvc',
      'fencing-standards',
      'fencing-droppers',
    ],
  },
  'fencing-standards': {
    description:
      'Fence standards provide the primary support posts for wire and mesh fencing systems. Manufactured from high-tensile steel and treated for corrosion resistance, they offer a stable foundation for perimeter solutions.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material', value: 'High-tensile steel (Y-standards)' },
      { label: 'Lengths', value: '1.8m, 2.1m, 2.4m, 3.0m' },
      { label: 'Coating', value: 'Galvanised or bitumen dipped' },
      { label: 'Weight', value: 'Standard weights per metre' },
      { label: 'Accessories', value: 'Pre-punched for fence attachment' },
    ],
    applications: [
      'Agricultural fencing',
      'Security fencing support',
      'Temporary fencing systems',
      'Field and game fencing',
      'Perimeter upgrades',
    ],
    technicalData: [
      { property: 'Hot-dip galvanised or bitumen dipped', value: '', unit: '' },
      { property: 'High strength for post support', value: '', unit: '' },
      { property: 'Pre-punched holes for wire attachment', value: '', unit: '' },
      { property: 'Compatible with droppers and stays', value: '', unit: '' },
      { property: 'Supplied with or without foot plates', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel Y-standards',
          'Galvanised or bitumen dipped for corrosion resistance',
          'Pre-punched for easy fence installation',
          'Compatible with wire, mesh, and electric fencing',
          'Available in multiple lengths',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-droppers',
      'fencing-welded-fence-mesh',
      'fencing-diamond-mesh',
      'fencing-field-game-fence',
      'fencing-razor-wire-btc',
    ],
  },
  'fencing-droppers': {
    description:
      'Fence droppers maintain spacing and alignment between fence wires, improving stability and fence performance. Manufactured from durable materials for long-term outdoor use.',
    layoutType: 'simple',
    specifications: [
      { label: 'Material Options', value: 'Steel or PVC-coated steel' },
      { label: 'Lengths', value: '0.9m - 2.4m' },
      { label: 'Attachment', value: 'Pre-notched or clip-on' },
      { label: 'Finish', value: 'Galvanised or PVC coated' },
      { label: 'Compatibility', value: 'Wire and mesh fencing systems' },
    ],
    applications: [
      'Field and game fencing',
      'Agricultural perimeters',
      'Security fencing support',
      'Droppers for long fence lines',
      'Electric fence spacing',
    ],
    technicalData: [
      { property: 'Maintains consistent wire spacing', value: '', unit: '' },
      { property: 'Reduces sagging on long fence runs', value: '', unit: '' },
      { property: 'Corrosion-resistant finishes', value: '', unit: '' },
      { property: 'Lightweight and easy to install', value: '', unit: '' },
      { property: 'Compatible with standards and stays', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Keeps fence wires aligned and tensioned',
          'Available in galvanised or PVC coated finishes',
          'Lightweight for quick installation',
          'Compatible with multiple fence wire configurations',
          'Suitable for agricultural and security fencing',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-standards',
      'fencing-field-game-fence',
      'fencing-diamond-mesh',
      'fencing-welded-fence-mesh',
      'fencing-razor-wire-btc',
    ],
  },
  'fasteners-round-wire-nails': {
    description:
      'Round wire nails manufactured from premium steel for superior holding power and durability. Designed for a wide range of construction and manufacturing fastening applications.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-carbon steel' },
      { label: 'Finish', value: 'Bright or galvanised' },
      { label: 'Length Range', value: '25mm - 150mm' },
      { label: 'Diameter Range', value: '2.0mm - 6.0mm' },
      { label: 'Standards', value: 'SANS 1026, BS 1202' },
    ],
    applications: [
      'General construction',
      'Framing and structural work',
      'Furniture manufacturing',
      'Packaging and crating',
      'DIY and home improvement',
      'Industrial assembly',
      'Timber construction',
    ],
    technicalData: [
      { property: 'Superior holding power', value: '', unit: '' },
      { property: 'High-carbon steel construction', value: '', unit: '' },
      { property: 'Corrosion-resistant coating options', value: '', unit: '' },
      { property: 'Consistent quality and dimensions', value: '', unit: '' },
      { property: 'Wide range of sizes available', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'General construction',
          'Framing and structural work',
          'Furniture manufacturing',
          'Packaging and crating',
          'DIY and home improvement',
          'Industrial assembly',
          'Timber construction',
        ],
      },
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-carbon steel for superior strength',
          'Available in bright or galvanised finish',
          'Wide size range for multiple applications',
          'Consistent manufacturing quality',
          'Compatible with automated nailing systems',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-cutting-nippers',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
      'fasteners-round-wire-nails',
      'fasteners-clout-nails',
    ],
  },
  'fasteners-staples': {
    description:
      'Professional-grade fencing staples designed for secure fastening of wire and mesh to wooden posts. Manufactured from high-tensile steel with galvanised or bright finishes.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-tensile steel' },
      { label: 'Finish', value: 'Galvanised or bright' },
      { label: 'Crown Width', value: '12mm - 25mm' },
      { label: 'Leg Length', value: '6mm - 50mm' },
      { label: 'Wire Gauge', value: '16 - 20 gauge' },
    ],
    applications: [
      'Upholstery and furniture',
      'Carpet installation',
      'Wire mesh fastening',
      'Packaging and sealing',
      'Construction applications',
      'Manufacturing assembly',
      'Agricultural fencing',
    ],
    technicalData: [
      { property: 'Secure fastening capability', value: '', unit: '' },
      { property: 'High-tensile steel construction', value: '', unit: '' },
      { property: 'Corrosion-resistant options', value: '', unit: '' },
      { property: 'Consistent quality and performance', value: '', unit: '' },
      { property: 'Wide range of sizes and configurations', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel construction',
          'Galvanised or bright finish options',
          'Crown width from 12mm - 25mm',
          'Leg length from 6mm - 50mm',
          'Wire gauge options (16 - 20 gauge)',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-round-wire-nails',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
      'fasteners-pliers',
      'fasteners-cutting-nippers',
    ],
  },
  'fasteners-clout-nails': {
    description:
      'Clout nails with large flat heads provide secure fixing for roofing felt, sheet materials, and cladding. Manufactured from high-carbon steel with galvanised or bright finishes.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-carbon steel' },
      { label: 'Finish', value: 'Galvanised or bright' },
      { label: 'Length Range', value: '25mm - 75mm' },
      { label: 'Head Type', value: 'Large flat head' },
      { label: 'Applications', value: 'Roofing felt, sheet fixings' },
    ],
    applications: [
      'Roofing felt installation',
      'Timber cladding',
      'Packaging and crate assembly',
      'Carpentry projects',
      'Insulation fastening',
    ],
    technicalData: [
      { property: 'Large head for secure holding', value: '', unit: '' },
      { property: 'Galvanised finish resists corrosion', value: '', unit: '' },
      { property: 'High-carbon steel shank', value: '', unit: '' },
      { property: 'Available in multiple lengths', value: '', unit: '' },
      { property: 'Suitable for manual or pneumatic tools', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Large flat head for securing sheet materials',
          'High-carbon steel construction',
          'Galvanised or bright finish options',
          'Available in a range of lengths',
          'Ideal for roofing and cladding',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-round-wire-nails',
      'fasteners-staples',
      'fasteners-hog-rings',
      'fasteners-pliers',
      'fasteners-cutting-nippers',
    ],
  },
  'fasteners-hog-rings': {
    description:
      'Heavy-duty hog rings designed for secure fastening of wire mesh, fencing, and other applications requiring strong, reliable connections.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-carbon steel' },
      { label: 'Finish', value: 'Galvanised or bright' },
      { label: 'Diameter Range', value: '8mm - 25mm' },
      { label: 'Wire Gauge', value: '12 - 16 gauge' },
      { label: 'Standards', value: 'SANS 1026' },
    ],
    applications: [
      'Wire mesh fastening',
      'Fencing installation',
      'Upholstery applications',
      'Industrial assembly',
      'Agricultural equipment',
      'Construction fastening',
      'Manufacturing processes',
    ],
    technicalData: [
      { property: 'Strong, secure connections', value: '', unit: '' },
      { property: 'High-carbon steel construction', value: '', unit: '' },
      { property: 'Corrosion-resistant coating', value: '', unit: '' },
      { property: 'Easy installation with hog ring pliers', value: '', unit: '' },
      { property: 'Suitable for heavy-duty applications', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Wire mesh fastening',
          'Fencing installation',
          'Upholstery applications',
          'Industrial assembly',
          'Agricultural equipment',
          'Construction fastening',
          'Manufacturing processes',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-hog-ring-pliers',
      'fasteners-round-wire-nails',
      'fasteners-staples',
      'fasteners-clout-nails',
      'fasteners-pliers',
    ],
  },
  'fasteners-hog-ring-pliers': {
    description:
      'Hog ring pliers provide the specialised tooling required to install hog rings quickly and securely. Designed for ergonomic use and compatibility with Meshco hog rings.',
    layoutType: 'standard',
    specifications: [
      { label: 'Tool Type', value: 'Manual or pneumatic pliers' },
      { label: 'Compatibility', value: 'Meshco hog ring sizes' },
      { label: 'Construction', value: 'Hardened steel jaws' },
      { label: 'Handles', value: 'Comfort grip for prolonged use' },
      { label: 'Application', value: 'Fencing, upholstery, assembly' },
    ],
    applications: [
      'Installing hog rings on fencing',
      'Upholstery fastening',
      'Industrial mesh assembly',
      'Packaging and crating',
      'Agricultural equipment maintenance',
    ],
    technicalData: [
      { property: 'Precision-formed jaws for secure closures', value: '', unit: '' },
      { property: 'Durable steel construction', value: '', unit: '' },
      { property: 'Ergonomic handles reduce fatigue', value: '', unit: '' },
      { property: 'Compatible with multiple ring sizes', value: '', unit: '' },
      { property: 'Available in manual or pneumatic versions', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Designed for Meshco hog rings',
          'Durable construction with hardened jaws',
          'Comfortable grips for prolonged use',
          'Available in manual and pneumatic options',
          'Delivers consistent ring closure',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-hog-rings',
      'fasteners-pliers',
      'fasteners-cutting-nippers',
      'fasteners-round-wire-nails',
      'fasteners-clout-nails',
    ],
  },
  'fasteners-pliers': {
    description:
      'Professional pliers for fencing and fastening applications. Designed for reliable gripping, bending, and cutting of wire products.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'Forged alloy steel' },
      { label: 'Handles', value: 'Insulated comfort grips' },
      { label: 'Functions', value: 'Gripping, bending, cutting' },
      { label: 'Sizes', value: '170mm - 250mm' },
      { label: 'Applications', value: 'Fencing, assembly, maintenance' },
    ],
    applications: [
      'Fence installation and maintenance',
      'Wire bending and tying',
      'General fabrication tasks',
      'Agricultural repairs',
      'Industrial assembly',
    ],
    technicalData: [
      { property: 'Hardened jaws for gripping and cutting', value: '', unit: '' },
      { property: 'Comfort grip handles', value: '', unit: '' },
      { property: 'Corrosion-resistant finish', value: '', unit: '' },
      { property: 'Multipurpose functionality', value: '', unit: '' },
      { property: 'Suitable for professional use', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-strength forged construction',
          'Comfortable insulated grips',
          'Integrated wire cutting edges',
          'Precision jaws for secure grip',
          'Ideal for fencing and workshop use',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-cutting-nippers',
      'fasteners-hog-rings',
      'fasteners-round-wire-nails',
      'fasteners-clout-nails',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fasteners-cutting-nippers': {
    description:
      'Cutting nippers provide precise cutting of wire and mesh products. Made from high-grade steel with hardened cutting edges for long service life.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-grade tool steel' },
      { label: 'Cutting Capacity', value: 'Up to 4mm wire' },
      { label: 'Handle', value: 'Comfort grip' },
      { label: 'Finish', value: 'Corrosion-resistant' },
      { label: 'Sizes', value: '160mm - 240mm' },
    ],
    applications: [
      'Wire mesh trimming',
      'Fencing installation',
      'Electrical and mechanical work',
      'Workshop and fabrication tasks',
      'Agricultural maintenance',
    ],
    technicalData: [
      { property: 'Hardened cutting edges', value: '', unit: '' },
      { property: 'Precision cutting with minimal effort', value: '', unit: '' },
      { property: 'Comfort grip handles reduce fatigue', value: '', unit: '' },
      { property: 'Durable corrosion-resistant finish', value: '', unit: '' },
      { property: 'Suitable for left or right-handed use', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Hardened cutting edges for clean cuts',
          'Comfortable grips for prolonged use',
          'Durable tool steel construction',
          'Ideal for fencing and workshop tasks',
          'Compact design for tight spaces',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-pliers',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
      'fasteners-clout-nails',
      'fasteners-round-wire-nails',
    ],
  },
  'mining-support-mining-mesh': {
    description:
      'Mining support mesh provides critical reinforcement for underground excavations, preventing rock falls and supporting shotcrete applications. Manufactured from heavy-duty welded wire for extreme environments.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-tensile steel wire' },
      { label: 'Mesh Size', value: '100mm x 100mm or custom' },
      { label: 'Wire Diameter', value: '4.0mm - 8.0mm' },
      { label: 'Sheet Size', value: '2.0m x 3.0m, 2.4m x 6.0m' },
      { label: 'Coating', value: 'Black or galvanised' },
    ],
    applications: [
      'Underground mine excavation support',
      'Shotcrete reinforcement',
      'Temporary and permanent ground support',
      'Tunnel construction',
      'Backfill retention systems',
    ],
    technicalData: [
      { property: 'Heavy-duty welded intersections', value: '', unit: '' },
      { property: 'High load-bearing capacity', value: '', unit: '' },
      { property: 'Available in custom panel sizes', value: '', unit: '' },
      { property: 'Suitable for corrosive environments', value: '', unit: '' },
      { property: 'Supports rapid installation underground', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Heavy-duty welded mesh construction',
          'High-tensile steel wire',
          'Designed for mining support applications',
          'Compatible with rock bolts and plates',
          'Available in custom sizes and finishes',
        ],
      },
    ],
    relatedProductKeys: ['mining-support-backfill-mesh'],
  },
  'mining-support-backfill-mesh': {
    description:
      'Backfill mesh is engineered to retain backfill materials in underground mining, ensuring structural stability and preventing material slippage. The mesh delivers consistent support in demanding underground conditions.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-tensile steel wire' },
      { label: 'Mesh Pattern', value: 'Square or rectangular grid' },
      { label: 'Wire Diameter', value: '4.0mm - 8.0mm' },
      { label: 'Sheet Sizes', value: 'Custom to stope dimensions' },
      { label: 'Coating', value: 'Black or galvanised' },
    ],
    applications: [
      'Underground backfill containment',
      'Support of paste fill operations',
      'Stope and drive reinforcement',
      'Temporary workings support',
    ],
    technicalData: [
      { property: 'High structural integrity under load', value: '', unit: '' },
      { property: 'Customisable to mining layouts', value: '', unit: '' },
      { property: 'Resists corrosion in humid environments', value: '', unit: '' },
      { property: 'Compatible with rock bolt systems', value: '', unit: '' },
      { property: 'Facilitates safe backfill placement', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Specialised mesh for mining backfill support',
          'High-tensile wire for load bearing',
          'Custom panel sizes available',
          'Suitable for paste and cemented backfill',
          'Durable in underground conditions',
        ],
      },
    ],
    relatedProductKeys: ['mining-support-mining-mesh'],
  },
  'utility-precision-welded-mesh': {
    description:
      'Precision welded mesh delivers consistent mesh openings and flatness for architectural, industrial, and utility applications. Produced from high-quality wire for clean presentation and reliable performance.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'Mild or stainless steel wire' },
      { label: 'Mesh Size', value: '25mm x 25mm to 100mm x 100mm' },
      { label: 'Wire Diameter', value: '2.0mm - 6.0mm' },
      { label: 'Sheet Size', value: 'Standard and custom panels' },
      { label: 'Finish', value: 'Galvanised, stainless, or powder coated' },
    ],
    applications: [
      'Architectural infill panels',
      'Security partitions',
      'Machine guarding',
      'Shelving and display systems',
      'General fabrication projects',
    ],
    technicalData: [
      { property: 'Precision welded intersections', value: '', unit: '' },
      { property: 'Consistent mesh spacing', value: '', unit: '' },
      { property: 'Available in decorative finishes', value: '', unit: '' },
      { property: 'Flat panels for easy fabrication', value: '', unit: '' },
      { property: 'Custom sizes available on request', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Precision-welded mesh construction',
          'High-tensile steel wire',
          'Consistent mesh spacing',
          'Corrosion-resistant coating options',
          'Easy to cut and shape',
          'Durable and long-lasting',
        ],
      },
    ],
    relatedProductKeys: ['utility-specimesh-panels', 'utility-growing-stakes'],
  },
  'utility-growing-stakes': {
    description:
      'Growing stakes provide robust plant support for agricultural and horticultural use. Manufactured from galvanised steel to resist corrosion and deliver long service life.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'Galvanised steel wire or rod' },
      { label: 'Lengths', value: '0.9m - 2.4m' },
      { label: 'Coating', value: 'Galvanised or PVC coated' },
      { label: 'Applications', value: 'Crop and vine support' },
      { label: 'Accessories', value: 'Available with clips or ties' },
    ],
    applications: [
      'Vineyard trellising',
      'Orchard support systems',
      'Greenhouse crop support',
      'Garden structures',
      'Nursery plant training',
    ],
    technicalData: [
      { property: 'High-tensile rod resists bending', value: '', unit: '' },
      { property: 'Corrosion-resistant coating', value: '', unit: '' },
      { property: 'Smooth finish protects plants', value: '', unit: '' },
      { property: 'Available with support accessories', value: '', unit: '' },
      { property: 'Reusable season after season', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel construction',
          'Galvanised coating for corrosion resistance',
          'Various lengths available',
          'Easy installation',
          'Durable and weather-resistant',
          'Suitable for agricultural applications',
        ],
      },
    ],
    relatedProductKeys: ['utility-precision-welded-mesh', 'utility-specimesh-panels'],
  },
  'utility-specimesh-panels': {
    description:
      'SpeciMesh panels are specialised welded mesh panels designed for architectural, security, and industrial applications requiring precision, rigidity, and aesthetic appeal.',
    layoutType: 'standard',
    specifications: [
      { label: 'Material', value: 'High-tensile steel wire' },
      { label: 'Mesh Pattern', value: 'Customisable to project needs' },
      { label: 'Wire Diameter', value: '2.5mm - 6.0mm' },
      { label: 'Panel Size', value: 'Custom fabricated' },
      { label: 'Finish', value: 'Galvanised, powder-coated, or stainless' },
    ],
    applications: [
      'Architectural screening',
      'Security partitions',
      'Machine guarding',
      'Retail and display fixtures',
      'Industrial enclosures',
    ],
    technicalData: [
      { property: 'Precision welded for dimensional accuracy', value: '', unit: '' },
      { property: 'Customisable mesh geometry', value: '', unit: '' },
      { property: 'Supports powder coating for aesthetics', value: '', unit: '' },
      { property: 'Rigid panel construction', value: '', unit: '' },
      { property: 'Suitable for interior and exterior use', value: '', unit: '' },
    ],
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Specialised mesh panel design',
          'High-tensile steel construction',
          'Precision welding for strength',
          'Corrosion-resistant finishes',
          'Easy installation and handling',
          'Versatile applications',
        ],
      },
    ],
    relatedProductKeys: ['utility-precision-welded-mesh', 'utility-growing-stakes'],
  },
}

export const productDetailConfigs: Record<string, ProductDetailConfig> = Object.fromEntries(
  Object.entries(productDetailData).map(([key, detail]) => [key, withProduct(key, detail)]),
)
