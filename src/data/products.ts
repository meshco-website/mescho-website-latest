// Single source of truth for all products

export interface Product {
  id: string
  name: string
  title?: string
  otherTitle?: string
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
  format?: 'inline' | 'list'
  labelBold?: boolean
  labelMediumBold?: boolean
  wrapAlign?: boolean
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
  image?: string | null
  format?: 'bullet' | 'heading-description' | 'heading-colon' | 'plain'
  imageMaxWidth?: string
}

export interface RelatedProductConfig {
  id: string
  name: string
  otherTitle?: string
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
  images?: string[]
}

export interface ProductDetailConfig {
  name: string
  title: string
  otherTitle?: string
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
  images?: string[]
}

// All products organized by category
export const products: Product[] = [
  // Wire Products
  {
    id: '1',
    name: 'Hard Drawn Wire',
    title: 'Hard Drawn Wire',
    imageFolder: '/products/Wire/hard-drawn-wire',
    image: '/products/Wire/hard-drawn-wire/meshco-hard-drawn-wire-coil.webp',
    slug: 'hard-drawn-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '2',
    name: 'Galvanised Wire',
    title: 'Galvanised Wire',
    otherTitle: 'Galvanised Wire (Coils)',
    imageFolder: '/products/Wire/galvanised-wire',
    image: '/products/Wire/galvanised-wire/meshco-galvanised-wire-coil-1.jpg',
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
    image: '/products/Wire/high-strain-wire/meshco-high-strain-galvanised-wire-50kg-coil1.webp',
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
    image: '/products/Wire/black-annealed-wire/meshco-black-annealed-wire_1.png',
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
    image: '/products/Wire/pvc-coated-wire/meshco-pvc-coated-wire_1.png',
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
    image: '/products/Wire/straight-and-cut-wire/meshco-straight-and-cut-wire_1.png',
    slug: 'straight-cut-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '7',
    name: 'Slab Wire',
    title: 'Slab Wire',
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
    otherTitle: 'WireWall AF100 Panel (50 x 100mm)',
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
    title: 'UnderDig Panel',
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
    image: '/products/Reinforcing/brick-force/meshco-brick-force_1.png',
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
    image: '/products/Reinforcing/hoop-iron/meshco-hoop-iron_1.png',
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
    image: '/products/Reinforcing/cavity-wall-ties/meshco-cavity-wall-ties_1.png',
    slug: 'cavity-wall-ties',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '22',
    name: 'Reinforcing Steel',
    title: 'Reinforcing Steel Bars (Rebar)',
    otherTitle: 'Deformed Bar (Y-bar)',
    imageFolder: '/products/Reinforcing/reinforcing-steel-bars',
    image: '/products/Reinforcing/reinforcing-steel-bars/meshco-reinforcing-rebar-1.webp',
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
    image: '/products/Fencing/welded-fence-mesh/meshco-weld-fence-mesh-galvanised.webp',
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
    image: '/products/Fencing/diamond-mesh/meshco-pvc-diamond-mesh-dhl-stadium-4.webp',
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
    image: '/products/Fencing/barbed-wire/meshco-barbed-wire-1.webp',
    slug: 'barbed-wire',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '28',
    name: 'Razor Wire (Flatwrap)',
    title: 'Razor Wire (Flatwrap)',
    imageFolder: '/products/Fencing/razor-wire-flatwrap',
    image: '/products/Fencing/razor-wire-flatwrap/meshco-razor-wire-flatwrap_1.png',
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
    image: '/products/Fencing/field-and-game-fence/meshco-field-and-game-fence_1.png',
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
    image: '/products/Fencing/hexagonal-wire-netting/meshco-hexagonal-wire-netting_1.png',
    slug: 'hexagonal-netting',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '33',
    name: 'Standards',
    title: 'Standards',
    otherTitle: 'Steel Fencing Y-Standards',
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
    otherTitle: 'Steel Droppers',
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
    image: '/products/Fasteners/round-wire-nails/meshco-round-wire-nails_1.png',
    slug: 'round-wire-nails',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '36',
    name: 'Staples',
    title: 'Fencing Staples (Plain and Barbed)',
    otherTitle: 'Fence Staples',
    imageFolder: '/products/Fasteners/fencing-staples',
    image: '/products/Fasteners/fencing-staples/meshco-fencing-staples_1.png',
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
  // {
  //   id: '41',
  //   name: 'Pliers',
  //   title: 'Pliers',
  //   imageFolder: '/products/Fasteners/pliers',
  //   image: '/products/Fasteners/pliers/meshco-pliers_1.webp',
  //   slug: 'pliers',
  //   type: 'Fasteners',
  //   industry: 'Manufacturing',
  //   category: 'fasteners',
  // },
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
    name: 'Mining Support Mesh',
    title: 'Mining Support Mesh',
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
    image: '/products/Utility/precision-welded-mesh/meshco-precision-welded-mesh_1.png',
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
    image: '/products/Utility/specimesh-panels/meshco-specimesh-panels_1.png',
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
        otherTitle: product.otherTitle,
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
  images: detail.images ? [...detail.images] : undefined,
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
    otherTitle: product.otherTitle,
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
    images: enrichedDetail.images,
  }
}

const productDetailData: Record<string, ProductDetail> = {
  'wire-hard-drawn-wire': {
    description:
      "<b>Tough. Reliable. Purpose-Drawn.</b>\n\n\nMeshco's <b>Hard Drawn Wire</b> is trusted for its uncompromising strength, uniformity, and durability. Manufactured from high-quality low-carbon steel, this wire undergoes a precision cold-drawing process that enhances tensile strength and dimensional accuracy—making it ideal for a wide range of applications.",
    layoutType: 'standard',
    images: ['/products/Wire/hard-drawn-wire/meshco-hard-drawn-wire-coil.webp'],
    specifications: [],
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
        id: 'overview',
        label: 'Overview',
        content: [
          'Wire Diameter - 1.40mm to 12.00mm',
          'Tensile Strength - Mild Steel 350-575MPa\nHigh Tensile 950MPa min.\nVery High Tensile 1250MPa min.',
          'Form - Supplied in tightly wound coils',
          'Finish - Bright steel (uncoated)',
          'Standard Coil Mass - 5kg, 50kg and Jumbos (custom coil sizes available on request)',
          ' - Manufactured to conform with SANS 675 standards for plain hard drawn wire.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        imageMaxWidth: '80%',
        image: '/products/Wire/hard-drawn-wire/applications.png',
        content: [
          'Hard drawn wire is a staple across industries where strength, stiffness, and cost-efficiency matter. Common applications include:',
          'Reinforcing components in welded mesh and precast concrete',
          'Shutter wire and formwork bracing in construction',
          'Hanger wire, binding wire, and structural supports',
          'Manufacture of straight and cut wire, wall ties, nails, and other fasteners',
          'Use in agriculture and general purpose straining',
        ],
      },
      {
        id: 'advantages',
        label: 'Advantages',
        image: '/products/Wire/hard-drawn-wire/meshco-advantages.png',
        imageMaxWidth: '60%',
        content: [
          'Higher tensile strength - than annealed wire for improved rigidity and load-bearing',
          'Cost-effective - solution for structural and industrial use',
          'Excellent dimensional consistency - and surface finish',
          'Drawn in-house under strict quality control to ensure reliability',
        ],
      },
      {
        id: 'customisation',
        label: 'Customisation',
        image: '/products/Wire/hard-drawn-wire/customisation.png',
        content: [
          'Available in various coil weights and internal diameters to suit automated processing',
          'Can be straightened and cut to custom lengths upon request',
          'Bulk supply options available for high-volume customers',
          'Made strong. Made local. Made to matter.:',
          "Meshco's hard drawn wire is the foundation behind countless infrastructure and industrial projects across Southern Africa. Whether you're building, binding, or reinforcing; we supply the wire that delivers uncompromising performance every time.",
        ],
      },
    ],
    relatedProductKeys: [
      'wire-straight-cut-wire',
      'wire-galvanised-wire',
      'wire-hard-drawn-wire',
      'wire-black-annealed-wire',
      'wire-high-strain-wire',
    ],
  },
  'wire-galvanised-wire': {
    description:
      "<b>Fully (Class A) and Lightly (Class C) Galvanised Wire Coils</b>\n\n\n<b>Strength in every wire</b>\n\n\nMeshco's <b>Galvanised Wire in Coils</b> is the gold standard for general-purpose wire across Southern Africa. Drawn and galvanised in-house with tight process control, this wire delivers consistent quality, excellent workability, and superior corrosion resistance. Conforming to SANS 10244-2:2010 standards, it's trusted for everything from binding and straining wire, to manufacturing display shelving and underground mining support mesh.",
    layoutType: 'standard',
    images: [
      '/products/Wire/galvanised-wire/meshco-galvanised-wire-coil-1.jpg',
      '/products/Wire/galvanised-wire/meshco-galvanised-wire-coil-2.webp',
      '/products/Wire/galvanised-wire/meshco-galvanised-wire-jumbo-coil-3.webp',
    ],
    specifications: [],
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
          'Continuous Hot-dip Galvanised - Uniform zinc coating provides long-lasting protection from rust and weathering.',
          "Clean Finish - Smooth, scale-free surface that's easy to handle and work with.",
          'Coil Options - Available in loose coils, bundles, spools, or hardware-ready packs.',
          'Flexible Supply - Low and medium tensile strength options for easy forming, tying, and shaping.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Mesh, fence and other wire products manufacturing',
          'Tying, lacing, binding, straining',
          'Trellising and garden structures',
          'Livestock enclosures',
          'General DIY and Maintenance work',
          'Sculpting, floral arrangements, and decorative wirework',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [
          'Wire Diameter - 1.25mm to 5.6mm',
          'Coil Weights - 500g, 2kg, 5kg, 25kg, 50kg, 500kg, and 1-tonne jumbos (other coil sizes to order)',
          'Coating - Class A and C continuous hot-dip galvanised',
          'Standards - Manufactured to SANS 10244-2:2010, ensuring reliable performance across all uses.',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Why Meshco?:',
          "With over six decades of wire production experience, Meshco offers unmatched consistency and support. Our galvanised wire is clean, dependable, and backed by technical expertise — perfect for businesses that can't afford downtime or defects.",
        ],
      },
    ],
    relatedProductKeys: [
      'wire-high-strain-wire',
      'wire-pvc-coated-wire',
      'wire-straight-cut-wire',
      'wire-slab-wire',
      'wire-hard-drawn-wire',
    ],
  },
  'wire-high-strain-wire': {
    description:
      "<b>Tension that holds. Quality that lasts.</b>\n\n\nMeshco's <b>High Strain Wire</b> is engineered for long-distance fencing applications where superior tension, minimal sag, and long-term durability are non-negotiable. Manufactured using high-tensile wire and galvanised for corrosion resistance, this product is the go-to solution for farmers, fencing contractors, and security professionals across Southern Africa.",
    layoutType: 'standard',
    images: [
      '/products/Wire/high-strain-wire/meshco-high-strain-galvanised-wire-50kg-coil1.webp',
      '/products/Wire/high-strain-wire/meshco-high-strain-galvanised-wire-50kg-coil2.webp',
      '/products/Wire/high-strain-wire/meshco-high-strain-galvanised-wire-3.webp',
    ],
    specifications: [],
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
          'High Tensile Strength - Rated at 1200–1350 MPa, ideal for large spans with minimal post spacing.',
          'Long-term tension retention - Less maintenance over time, even under animal pressure or environmental stress.',
          'Uniform zinc coating - Hot-dip galvanised to prevent rust and ensure extended outdoor performance.',
          'Lightweight yet strong - Easier to handle than thicker mild steel wire, but with much higher performance.',
          'Low elongation - Holds tension over time without stretching.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Netting Structures',
          'Livestock fencing (cattle, game, perimeter control)',
          'Electrical fencing core wire',
          'Orchard and vineyard trellising',
          'Fruit support and protection wire',
          'High-security fencing systems',
          'Long-line farm or estate boundaries',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [
          'Wire Diameter - 2.00mm, 2.24mm, 3.06mm and Oval',
          'Tensile Strength - 1200–1350 MPa',
          'Coil Weights - 2kg, 5kg, 50kg, Jumbos',
          'Finish - Hot-dip galvanised, class C and class A',
          'Packaging - Loose or layer-wound coils, strapped or wrapped',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Meshco's High Strain Wire?:",
          "We manufacture wire for the real world; where fences need to work year after year, not just the day they're installed. Meshco's high strain wire is tension-tested, corrosion-protected, and battle-proven across agricultural, game, and commercial security sectors.",
          'Strength in every wire. Reliability in every coil.',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-standards',
      'fencing-droppers',
      'fasteners-staples',
      'fencing-field-game-fence',
      'fencing-hexagonal-netting',
    ],
  },
  'wire-black-annealed-wire': {
    description:
      "Meshco's easy to work with Black Annealed Wire is a versatile, soft, and flexible low-carbon steel wire, heat-treated to enhance ductility and strength, whilst making the wire less brittle. Its pliability and durability make it ideal for a wide range of applications, including construction, agriculture, packaging, and general-purpose binding. One of the most common uses in construction is to fix steel reinforcement and mesh to prevent movement while concrete is poured. The annealing process imparts a black oxide finish, providing mild corrosion resistance and a smooth surface for easy handling.​\n\n\nBaling wire is a type of wire used primarily to bind, secure, or package materials.\n\n\nBaling wire is often used in balers, which are machines that compress large amounts of material, such as hay, cardboard, paper, and scrap metal, into compact bales.",
    layoutType: 'standard',
    images: [
      '/products/Wire/black-annealed-wire/meshco-black-annealed-wire_1.png',
      '/products/Wire/black-annealed-wire/meshco-black-annealed-binding-wire-1.webp',
      '/products/Wire/black-annealed-wire/meshco-black-annealed-autobale-2.webp',
      '/products/Wire/black-annealed-wire/meshco-black-annealed-autobale-wire-3.webp',
    ],
    specifications: [],
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
          'Enhanced Flexibility - The annealing process increases ductility, allowing for easy bending and tying without breakage.',
          'Corrosion Resistance - The black oxide layer, combined with optional oiling, offers mild protection against rust and oxidation.',
          'Versatility - Suitable for various applications across multiple industries.',
          'Ease of Use - Smooth surface finish ensures safe and efficient handling during manual or automated operations.',
          'Budget-friendly - Significantly lower cost per unit comapred to straps and ropes.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Wire/black-annealed-wire/specifications.png',
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [
          'Construction - Tying and securing rebar, binding construction materials, and general-purpose fastening.',
          'Agriculture - Baling hay, tying vines, and general farm maintenance tasks.',
          'Packaging - Securing bundles, boxes, and pallets for storage or transport.',
          'Recycling - Binding recyclable materials like cardboard, paper, and metals. This includes baling with a baling machine. Our Black Annealed Autobale wire is for use with automatic baling machines and is a great option to increase efficiency within your business.',
        ],
      },
      {
        id: 'guide-for-fixing-on-site',
        label: 'Guide for Fixing on Site',
        image: '/products/Wire/black-annealed-wire/meshco-guide.png',
        content: [
          'The quantity of black annealed tying wire required to secure reinforcement bars (rebar) on a construction site in South Africa depends on the diameter of the rebar being tied. The required amount can vary based on tying method, bar spacing, and site specifics. A general guideline is:',
          'Most projects:',
          'Plan for 9–13 kg of black annealed tying wire per ton of rebar, adjusting based on actual bar diameters and tying practices',
          'Smaller diameter rebar:',
          'Use the higher end of the range (up to 12–13 kg per ton).',
          'Larger diameter rebar:',
          'Use the lower end of the range (as little as 7 kg per ton).',
          'For precise requirements, consult your rebar supplier or site engineer, as local practices and project specifics may affect the total quantity needed.',
        ],
      },
    ],
    relatedProductKeys: [
      'reinforcing-reinforcing-mesh',
      'reinforcing-reinforcing-steel',
      'wire-galvanised-wire',
      'wire-slab-wire',
      'wire-hard-drawn-wire',
    ],
  },
  'wire-pvc-coated-wire': {
    description:
      "<b>Versatile, Durable and Weather-Resistant Fencing Wire</b>\n\n\nMeshco's <b>PVC Coated Wire</b> offers the perfect combination of strength, flexibility, and corrosion resistance. Manufactured by applying a tough, UV-resistant PVC coating over galvanised steel wire, it delivers long-lasting performance across a wide range of fencing and general-purpose applications. Standard colours are black and green.",
    layoutType: 'standard',
    images: [
      '/products/Wire/pvc-coated-wire/meshco-pvc-coated-wire_1.png',
      '/products/Wire/pvc-coated-wire/meshco-green-pvc-wire-5kg.webp',
      '/products/Wire/pvc-coated-wire/meshco-green-pvc-wire-50kg.webp',
    ],
    specifications: [
      {
        label: 'AVAILABLE STOCK SIZES',
        value:
          '1.60MM*50KG\n2.00MM*50KG\n2.50MM*50KG\n3.15MM*50KG\n4.00MM*50KG\n1.60MM*5KG\n2.00MM*5KG\n2.50MM*5KG\n3.15MM*5KG\n4.00MM*5KG',
        format: 'list',
      },
      {
        label: 'LENGTH / COIL',
        value: '± 2450m\n±1650m\n±1150m\n±700m\n±450m\n±245m\n±165m\n±115m\n±70m\n±45m',
        format: 'list',
      },
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
          'Dual Layer Protection - Galvanised core with a tough PVC outer coating ensures excellent rust resistance and a longer service life.',
          'Weather and UV Resistant - Designed to withstand harsh sunlight, rain, and coastal conditions.',
          'Flexible and Easy to Work With - The PVC coating provides smooth handling and reduces wire kinking during installation.',
          'Available in Different Diameters - Choose the right wire thickness for your specific fencing or agricultural needs.',
          'Available in diameters from 1.6mm to 4.0mm, each size is suited to specific uses — from light binding to heavy-duty straining.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        imageMaxWidth: '80%',
        image: '/products/Wire/pvc-coated-wire/specifications.png',
      },
      {
        id: 'benefits',
        label: 'Benefits',
        image: '/products/Wire/pvc-coated-wire/benefits.png',
        imageMaxWidth: '80%',
        content: [
          "Why Choose Meshco's PVC Coated Wire?",
          'Enhanced Longevity:',
          'Our industry-leading, dual protection extends lifespan, even in tough environments.',
          'Strong and Reliable:',
          'Manufactured from high-quality steel wire for excellent tensile strength, making it suitable for load-bearing and tensioning applications.',
          'Low Maintenance:',
          'PVC coating resists rust, corrosion, and UV damage, reducing the need for frequent repairs or replacements.',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-slab-wire',
      'wire-galvanised-wire',
      'wire-hard-drawn-wire',
      'wire-black-annealed-wire',
      'wire-high-strain-wire',
    ],
  },
  'wire-straight-cut-wire': {
    description:
      "<b>Precision Cut. Purpose Ready.</b>\n\n\nAt Meshco, we understand that every construction or manufacturing project starts with the basics—but that doesn't mean the basics should be average. Our straight and cut wire is manufactured with precision and durability in mind, offering consistent quality in every length.\n\nAVAILABLE IN:\n\n<b>Hard Drawn Wire</b> – for strength and rigidity\n\n<b>Galvanised Wire</b> – for corrosion resistance and longevity\n\n<b>Black Annealed Wire</b> –  for flexibility, ease of handling, and tying applications",
    layoutType: 'standard',
    images: [
      '/products/Wire/straight-and-cut-wire/meshco-straight-and-cut-wire_1.png',
      '/products/Wire/straight-and-cut-wire/meshco-straight-and-cut-galvanised-wire.webp',
      '/products/Wire/straight-and-cut-wire/meshco-straight-and-cut-galvanised-wire-2.webp',
      '/products/Wire/straight-and-cut-wire/meshco-straight-and-cut-galvanised-wire-3.webp',
    ],
    specifications: [],
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
        id: 'options',
        label: 'Options',
        format: 'bullet',
        content: [
          'Custom cut lengths from 300mm to 6000mm',
          'Wire diameters ranging from 1.4mm to 12.0mm',
          'Available in hard drawn, annealed and galvanised finish',
          'Cut to tolerance with minimal bend or bow',
          'Supplied in bundles or boxed to customer requirements',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Reinforcing panels in precast concrete products',
          'Welded mesh frame components',
          'Support struts or ties in construction',
          'Manufacturing of cages, stands, and brackets',
          'Furniture, shelving, and display frameworks',
        ],
      },
      {
        id: 'quality-assurance',
        label: 'Quality Assurance',
        image: '/products/Wire/straight-and-cut-wire/meshco-quality.png',
        imageMaxWidth: '80%',
        content: [
          'Our straight and cut wire is:',
          'Drawn from high-quality SAE steel wire rod',
          'Manufactured to meet SANS 675 and SANS 10244-2 standards',
          'Produced under strict quality controls to ensure uniformity, strength, and straightness',
          'Reliable. Customisable. Built to Last.:',
          "Meshco's straight and cut wire gives you the confidence of strength with the flexibility to suit your job. Whether you need high-volume runs or small-batch precision lengths, our team is here to deliver wire that's manufactured to matter.",
        ],
      },
    ],
    relatedProductKeys: [
      'wire-slab-wire',
      'wire-galvanised-wire',
      'wire-hard-drawn-wire',
      'wire-black-annealed-wire',
      'wire-high-strain-wire',
    ],
  },
  'wire-slab-wire': {
    description:
      "<b>Invisible strength. Essential support.</b>\n\n\nMeshco's <b>Slab Wire</b> is straightened and cut black or galvanised wire used to reinforce precast concrete walling, including vibracrete slabs. Manufactured with precision and supplied in consistent lengths, this wire provides structural integrity and crack resistance during and after the concrete curing process.\n\nTrusted by leading precast manufacturers across South Africa, Meshco's Slab Wire is made to spec, delivered on time, and backed by 60+ years of wire expertise.",
    layoutType: 'standard',
    images: ['/products/Wire/slab-wire/meshco-slab-wire.webp'],
    specifications: [
      {
        label: 'AVAILABLE SIZES',
        value: 'SLABWIRE 2.50MM\nSLABWIRE 3.15MM',
        format: 'list',
      },
      {
        label: 'UNIT OF SALE',
        value: '25KG BUNDLES - 1420MM LENGTHS\n25KG BUNDLES - 1420MM LENGTHS',
        format: 'list',
      },
      {
        label: '',
        value: 'Note: Mixed-diameter bundles available at reduced pricing',
        format: 'inline',
      },
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
          'Straight and cut to length - No need for on-site straightening or cutting — every wire is ready to use.',
          'Superior crack resistance - Tensile strength increases crack resistance in vibracrete slabs.',
          'Galvanised for corrosion resistance - Ensures long-term durability and performance within concrete.',
          'Consistent lengths and finishes - Produced to precise specifications for reliable concrete casting and reinforcement.',
          'Custom sizing available - Cut to match your mould or product specs — no waste, no delays.',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Slab Wire?",
          "At Meshco, we understand what goes into every slab — and we're here to strengthen it from the inside out. Our Slab Wire is precision-manufactured to your needs, backed by technical support, and delivered reliably to ensure your production lines never skip a beat.",
          'Made to your length. Engineered for your strength.:',
        ],
      },
    ],
    relatedProductKeys: [
      'wire-straight-cut-wire',
      'wire-galvanised-wire',
      'wire-hard-drawn-wire',
      'wire-black-annealed-wire',
      'wire-high-strain-wire',
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
      '<b>Extreme perimeter protection for the highest security sites</b>\n\n\n<b>The WireWall 355 Supermax</b> panel is engineered for the most demanding security environments, <b>including supermax prisons, defence facilities, and high-risk government installations.</b>\n\nHistorically government specifications called for a double 4mm vertical wire panel. However the weld strength between the three wires was found to be inadequate, with welds coming apart on site either by themselves or through the application of minimal force. This led to requests for a new, superior specification. Enter the WireWall 355 Supermax. The weight per meter of the SuperMax panel is the same as the double 4mm wire option, but with superior weld strength and an increased difficulty to cut. The SuperMax design also allows the same security across the full height of panels while still allowing the top of the panel to be bowed.\n\nWith its <b>5.6mm vertical wires</b> combined with <b>4.0mm horizontal wires</b>, the 355 Supermax provides unparalleled rigidity and resistance to impact, forcing, and cutting.',
    layoutType: 'wirewall',
    specifications: [],
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
        id: 'downloads',
        label: 'Downloads',
        content: [],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/355-panel/specifications.png',
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: [],
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
      'The 358 Heavy panel incorporates thicker wire than the 3510, with both vertical and horizontal wires measuring 4.0mm, delivering extreme cut resistance and increased perimeter security. Sometimes referred to as bullet proof mesh, the gap between crosswires is less than 9mm.',
    layoutType: 'wirewall',
    specifications: [],
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
        id: 'downloads',
        label: 'Downloads',
        content: [],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/358-panel/specifications.png',
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: [],
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
      '<strong>High security, anti-climb and anti-cut</strong>\n\n\nDesigned for South African security requirements, the WireWall 3510 panel offers small openings, making it anti-climb and anti-cut. Trusted to protect police stations, schools, corporate head offices, solar plants, golf courses and farms.',
    layoutType: 'wirewall',
    images: [
      '/products/WireWall/3510/meshco-3510_1.png',
      '/products/WireWall/3510/meshco-wirewall-3510-high-security-1.webp',
      '/products/WireWall/3510/meshco-wirewall-3510-high-security-2.webp',
      '/products/WireWall/3510/meshco-3510_4.png',
      '/products/WireWall/3510/meshco-3510_5.png',
      '/products/WireWall/3510/meshco-3510_6.png',
      '/products/WireWall/3510/meshco-3510_7.png',
      '/products/WireWall/3510/meshco-3510_8.png',
      '/products/WireWall/3510/meshco-3510_9.png',
      '/products/WireWall/3510/meshco-3510_10.png',
    ],
    specifications: [],
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
        id: 'downloads',
        label: 'Downloads',
        content: [],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/3510/specifications.png',
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: [
          '/products/WireWall/3510/meshco-3510_1.png',
          // '/products/WireWall/3510/3510_2.webp',
          // '/products/WireWall/3510/3510_3.webp',
          '/products/WireWall/3510/meshco-3510_4.png',
          '/products/WireWall/3510/meshco-3510_5.png',
          '/products/WireWall/3510/meshco-3510_6.png',
          '/products/WireWall/3510/meshco-3510_7.png',
          '/products/WireWall/3510/meshco-3510_8.png',
          '/products/WireWall/3510/meshco-3510_9.png',
          '/products/WireWall/3510/meshco-3510_10.png',
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
      '<strong>Medium security, high-visibility</strong>\n\n\nDesigned for South African security requirements, the WireWall 3110 panel offers larger openings than the 3510 panel, with the same anti-cut strength and rigidity. Classified as medium security, it can be upgraded to high security with electrification or razor wire topping. Trusted to protect residential buildings, parks, golf courses, corporate offices and farms.',
    layoutType: 'wirewall',
    images: [
      '/products/WireWall/3110/meshco-3110_1.png',
      '/products/WireWall/3110/meshco-wirewall-3110-medium-security-1.webp',
      '/products/WireWall/3110/meshco-wirewall-3110-medium-security-2.webp',
      '/products/WireWall/3110/meshco-3110_4.png',
      '/products/WireWall/3110/meshco-3110_5.png',
      '/products/WireWall/3110/meshco-3110_6.png',
    ],
    specifications: [],
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
        id: 'downloads',
        label: 'Downloads',
        content: [],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/3110/specifications.png',
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: [
          '/products/WireWall/3110/meshco-3110_1.png',
          // '/products/WireWall/3110/3110_2.webp',
          // '/products/WireWall/3110/3110_3.webp',
          '/products/WireWall/3110/meshco-3110_4.png',
          '/products/WireWall/3110/meshco-3110_5.png',
          '/products/WireWall/3110/meshco-3110_6.png',
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
      '<strong>Budget friendly security option, high-visibility</strong>\n\n\nThe WireWall 3210 panel offers larger (75mm x 50mm) openings than the 3110 panel, with a similar look and feel. This is a budget friendly option, ideal for demarcation of boundaries, where restricting access to a property is important.',
    layoutType: 'wirewall',
    images: [
      '/products/WireWall/3210/meshco-3210_1.png',
      '/products/WireWall/3210/meshco-wirewall-3210-medium-security-1.webp',
      '/products/WireWall/3210/meshco-wirewall-3210-medium-security-2.webp',
      '/products/WireWall/3210/meshco-3210_4.png',
    ],
    specifications: [],
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
        id: 'downloads',
        label: 'Downloads',
        content: [],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/3210/specifications.png',
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: [
          '/products/WireWall/3210/meshco-3210_1.png',
          // '/products/WireWall/3210/3210_2.webp',
          // '/products/WireWall/3210/3210_3.webp',
          '/products/WireWall/3210/meshco-3210_4.png',
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
      '<strong>Low security, high-visibility</strong>\n\n\nAn older design, still popular throughout the country. The panel sports 50 by 100mm gaps with 4mm diameter for both the vertical and horizontal wires. Classified as low security, the security can be upgraded with electrification or razor wire topping. Chosen for boundary demarcation in residential and lower cost commercial applications.',
    layoutType: 'wirewall',
    images: [
      '/products/WireWall/af-100/meshco-af-100_1.png',
      '/products/WireWall/af-100/meshco-wirewall-af100-1.webp',
      '/products/WireWall/af-100/meshco-wirewall-af100-2.webp',
      '/products/WireWall/af-100/meshco-af-100_2.png',
      '/products/WireWall/af-100/meshco-af-100_3.png',
      '/products/WireWall/af-100/meshco-af-100_4.webp',
      '/products/WireWall/af-100/meshco-af-100_5.webp',
    ],
    specifications: [],
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
        id: 'downloads',
        label: 'Downloads',
        content: [],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/WireWall/af-100/specifications.png',
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: [
          // '/products/WireWall/af-100/meshco-af-100_1.png',
          '/products/WireWall/af-100/meshco-af-100_2.png',
          '/products/WireWall/af-100/meshco-af-100_3.png',
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
      '<b>Seamless access with uncompromising security</b>\n\n\nMeshco offers a full range of <b>WireWall pedestrian and vehicular gates,</b> designed to integrate seamlessly with WireWall fencing systems. Built with the same high-strength anti-cut, anti-climb mesh panels and robust steel frames, our gates provide secure access points without compromising perimeter protection.\n\nAll WireWall gates are <b>made to order</b> to meet site-specific requirements, ensuring the perfect balance of strength, durability, and functionality.',
    layoutType: 'wirewall',
    specifications: [],
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
        id: 'types-of-wirewall-gates',
        label: 'Types of WireWall Gates',
        format: 'bullet',
        content: [
          'Pedestrian Gates (Swing, Single Leaf)',
          'Typically 1m wide; height matches adjoining WireWall fence.',
          'Provides secure access for foot traffic while maintaining anti-climb and anti-cut performance.',
          'Available with lock boxes, closers, and access control integration.',
          'Applications: Staff entrances, visitor access, controlled pedestrian points.',
          '',
          'Vehicular Gates',
          'Single and Double Leaf Swing Gates',
          'Available in standard clear openings of 4m and 6m, with customer sizes on request.',
          'Designed for medium- to large-vehicle access.',
          'Heavy-duty hinges and lock systems ensure long service life.',
          'Ideal where space allows for swing operation.',
          '',
          'Sliding Gates',
          'Manufactured for smooth, secure operation in high-traffic environments.',
          'Eliminates the need for a large swing area (clearance space) in front of or behind the gate. This makes them ideal when space is tight, like along roads, parking areas, or high-traffic sites.',
          'Available in widths of 4m and 6m, with custom sizes on request.',
          'Can be automated for access control integration',
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
      "Meshco's Spike Strips are designed for maximum deterrence, to enhance perimeter protection by preventing climbing or tampering on WireWall and other fencing systems. Manufactured from heavy-duty steel and engineered for durability, our spike strips provide a sharp, visible, and highly effective deterrent to intrusion.\n\nAvailable in four profiles — Standard Spike, Heavy Spike, Raptor Tooth, and Assegai — Meshco spike strips deliver a layered security solution for any site, from commercial to high-security infrastructure.",
    layoutType: 'wirewall',
    images: [
      '/products/WireWall/spikes/meshco-wirewall-heavy-spike-1.webp',
      '/products/WireWall/spikes/meshco-wirewall-heavy-spike-2.webp',
      '/products/WireWall/spikes/meshco-wirewall-spike-1.webp',
      '/products/WireWall/spikes/meshco-wirewall-spike-2.webp',
    ],
    specifications: [],
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
        format: 'bullet',
        content: [
          'Standard Spike',
          'Traditional deterrent profile.',
          'Economical and effective for general perimeter protection.',
          'Applications: Commercial, residential, light industrial.',
          '',
          'Heavy Spike',
          'Larger, reinforced spike profile for maximum physical deterrence.',
          'Designed for high-risk perimeters requiring extra strength.',
          'Applications: Industrial sites, logistics hubs, substations.',
          '',
          'Raptor Tooth',
          'Aggressive design with angled teeth for maximum bite.',
          'Creates a more intimidating visual deterrent.',
          'Applications: High-security zones, correctional facilities, restricted government areas.',
          '',
          'Assegai',
          'Long, tapered spear-point design inspired by traditional assegai blades.',
          'Provides extreme anti-climb resistance with striking visual presence.',
          'Applications: Military, airports, critical infrastructure.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
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
      "<b>Prevent intrusions from below</b>\n\n\nMeshco's Underdig (Anti-burrow) panels are designed to prevent unauthorised entry by stopping attempts to dig underneath perimeter fences. Manufactured from high-strength welded mesh, these panels are buried below ground level and securely fixed to the main fence line, creating an effective underground barrier against intrusion.\n\nUsed in combination with above ground fencing systems such as WireWall, underdig panels ensure that perimeter security extends below ground as well as above it.",
    layoutType: 'wirewall',
    specifications: [],
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
        format: 'bullet',
        content: [
          'Manufactured from heavy-duty welded mesh panels.',
          'Standard galvanised finish, with optional plastic coating for enhanced corrosion protection.',
          'Compatible with Meshco WireWall and other perimeter fencing systems.',
          'Supplied with secure fixings for integration into fence lines.',
          'Designed for quick installation and long service life.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        format: 'bullet',
        content: [
          'Panel depth: Typically 400mm or 600mm (others available on request).',
          'Panel length: 3000mm',
          'Wire diameters: 3.0mm - 5.6mm',
          'Aperture sizes: 75mm x 12.7mm (customisable to requirements)',
          'Finishes: Galvanised, Plastic coated',
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
      "Brickforce is a welded steel mesh used as horizontal reinforcement in masonry construction. It is laid in the mortar joints of brick or block walls to improve stability and reduce cracking.\n\nMeshco's Brickforce is manufactured from high-strength galvanised steel wire that is welded into a ladder-like mesh.",
    layoutType: 'standard',
    images: [
      '/products/Reinforcing/brick-force/meshco-brick-force_1.png',
      '/products/Reinforcing/brick-force/meshco-brickforce-galvanised.webp',
    ],
    specifications: [
      { label: 'Standard', labelBold: true, value: 'SANS 10400-A:2022', format: 'inline' },
      { label: 'Length of Roll', labelBold: true, value: '20m', format: 'inline' },
      {
        label: 'Available Sizes',
        labelBold: true,
        value: '57MM\n75MM\n100MM\n150MM\n230MM',
        format: 'list',
      },
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
          'Reinforcement - It increases the tensile strength of the wall by adding reinforcement between the mortar layers or rows of bricks.',
          'Crack Prevention - Brickforce minimises the risk of cracking due to thermal expansion, contraction and structural settlement.',
          'Durability - Increases the durability of masonry structures, making them last longer and maintaining their structural integrity.',
          'Installation - Generally installed during masonry installation, steel strengthening being placed between brick lessons during the construction of the wall.',
          'Applications: Common in residential and commercial construction projects, in particular in high wind load areas, seismic risks or unstable soil conditions. This form of reinforcement is often used in combination with other building practices to improve overall structural performance.',
          'High-Grade Steel - The best Brickforce is made from high-quality, low-carbon steel, which ensures strength without brittleness.',
          'Galvanisation - A thicker zinc coating (e.g., minimum 80g/m²) prevents rust and extends lifespan, especially in coastal or humid areas.',
          'High tensile strength - Ensures the mesh resists bending and breaking under pressure.',
          'Strong welds at every intersection - Prevent the mesh from breaking during handling or installation.',
          'Consistent spacing - Ensures even load distribution, reducing weak points in the wall.',
          'Tightly wound rolls - With uniform layers make transport and handling easier.',
          'Flexible but not flimsy - Rolls uncoil smoothly without excessive bending or kinking.',
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
      "Strengthen Your Structures with Meshco's Durable Reinforcing Mesh\n\nMeshco's Reinforcing Mesh, also known as Welded Mesh Reinforcement, Fabric Mesh and Ref Mesh, is engineered to enhance the tensile strength of concrete structures, mitigating the risk of cracking and structural failures. Ideal for a variety of applications, our mesh ensures durability and longevity in construction projects.",
    layoutType: 'standard',
    images: [
      '/products/Reinforcing/reinforcing-mesh/meshco-concrete-reinforcing-mesh1.webp',
      '/products/Reinforcing/reinforcing-mesh/meshco-concrete-reinforcing-mesh2.webp',
      '/products/Reinforcing/reinforcing-mesh/meshco-reinforcing-mesh3.webp',
    ],
    specifications: [
      {
        label: 'Available Sizes',
        labelBold: true,
        value: '2.4m x 6m sheets and 60m x 2.4m rolls (for wire diameters up to 5.6mm)',
        format: 'inline',
        wrapAlign: true,
      },
      { label: 'Unit of Sale', labelBold: true, value: 'Sheets or rolls', format: 'inline' },
      { label: 'Standard', labelBold: true, value: 'SANS 1024:2024', format: 'inline' },
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
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Reinforcing/reinforcing-mesh/specifications.png',
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
      'Meshco supplies high-quality Hoop Iron, a versatile and essential building material used for bracing, strapping, and reinforcing masonry and timber structures.\n\nThe material is galvanised to prevent rusting and corrosion, increasing its longevity.',
    layoutType: 'standard',
    images: [
      '/products/Reinforcing/hoop-iron/meshco-hoop-iron_1.png',
      '/products/Reinforcing/hoop-iron/meshco-hoop-iron.webp',
    ],
    specifications: [],
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
        id: 'applications',
        label: 'Applications',
        content: [
          'Masonry Reinforcement',
          'Strengthening and tying brick and block walls to improve structural stability.',
          'Roof Truss Bracing',
          'Securing timber trusses and preventing lateral movement.',
          'Strapping and Bracing',
          'Used in general construction for securing formwork, shuttering, and frames.',
          'Timber Construction',
          'Connecting and reinforcing wooden components in structures like pergolas, sheds, and decking.',
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
      'Meshco manufactures a complete range of galvanised cavity wall ties, designed to securely connect brick or block leaves in cavity wall construction. Each type provides different structural and thermal performance to suit various building requirements.',
    layoutType: 'standard',
    images: [
      '/products/Reinforcing/cavity-wall-ties/meshco-cavity-wall-ties_1.png',
      'public/products/Reinforcing/cavity-wall-ties/meshco-butterfly-wall-tie-1.webp',
      '/products/Reinforcing/cavity-wall-ties/meshco-butterfly-wall-tie-2.webp',
      '/products/Reinforcing/cavity-wall-ties/meshco-crimp-cavity-wall-tie-3.webp',
      '/products/Reinforcing/cavity-wall-ties/meshco-zpattern-cavity-wall-tie-4.webp',
    ],
    specifications: [
      {
        label: 'Types',
        value:
          'Butterfly Wall Ties\nCrimped Wall Ties\nZ-Pattern Wall Ties\nVertical Twist Wall Ties',
        format: 'list',
      },
      { label: 'Standard', value: 'SANS 28:2023', format: 'inline', labelBold: true },
      {
        label: 'Available Sizes',
        value: '150MM\n200MM\n225MM\n250MM\n300MM\nBUTTERFLY EXTENSION',
        format: 'list',
        labelBold: true,
      },
      {
        label: 'Unit of Sale',
        value:
          'Bundle of 100\nBundle of 100\nBundle of 100\nBundle of 100\nBundle of 100\nBundle of 50',
        format: 'list',
        labelBold: true,
      },
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
        id: 'types-of-wall-ties',
        label: 'Types of Wall Ties',
        format: 'bullet',
        content: [
          'Butterfly Wall Ties',
          'Simple wire design that reduces thermal bridging.',
          'Cost-effective, easy to install.',
          'Available sizes: 200mm, 250mm, 300mm, 350mm, 400mm, Butterfly extension.',
          'Unit of sale: Bundles of 100 (Butterfly extension: Bundles of 50).',
          'Crimped Wall Ties',
          'Crimped pattern allows for controlled movement while maintaining stiffness and improving bond with mortar. Ideal where thermal or structural shifts may occur.',
          'Superior tensile strength and stability.',
          'Ideal for areas with high wind loads.',
          'Available sizes: 200mm – 400mm.',
          'Unit of sale: Bundles of 100.',
          'Z-Pattern Wall Ties',
          'Simple, robust angular design provides strength and stability, particularly in load-bearing applications.',
          'Economical solution available in various lengths.',
          'Available sizes: 200mm – 300mm.',
          'Unit of sale: Bundles of 100.',
          'Vertical Twist Wall Ties',
          'Provide secure wall tie connections while reducing thermal bridging.',
          'Twist enhances mechanical keying into mortar, improving stability and bonding.',
          'Suitable for residential and commercial cavity walls.',
          'Available sizes: 250mm, 450mm.',
          'Unit of sale: Sold individually.',
          'Key Benefits of Meshco Wall Ties',
          'Manufactured from high-quality galvanised steel for durability.',
          'Available in a full range of patterns to meet SANS building standards.',
          'Designed for strength, ease of installation, and reduced heat transfer.',
          'Suitable for residential, commercial, and industrial masonry projects.',
        ],
      },
      {
        id: 'pro-tip',
        label: 'Pro-Tip',
        image: '/products/Reinforcing/cavity-wall-ties/protip.png',
        content: [
          'How many wall ties to use? - As a rule of thumb, 2.5 wall ties per square meter is the standard density for masonry cavity walls, with the following specifics:',
          'Spacing:',
          'Horizontal: 900mm maximum.',
          'Vertical: 450mm maximum.',
          '',
          'Distribution:',
          'Ties should be evenly staggered across the wall, except around openings (e.g., windows, doors), where they are spaced every 300mm vertically and within 225mm of the edge.',
          'For timber frame walls, the density increases:',
          '4.4 ties/m² for basic wind speeds ≤25m/s.',
          '7 ties/m² in high-wind areas.',
          '',
          'Key exceptions:',
          'Insulated cavities: Ties may need closer spacing (e.g., 600mm horizontally) to secure insulation boards.',
          'Remedial work: Follow the same 2.5 ties/m² guideline unless specified otherwise.',
          'Note:',
          'This assumes standard masonry walls with both leaves (walls) ≥90mm thick. Always confirm spacing with local building codes or structural engineers for atypical designs.',
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
      "Meshco manufactures a wide range of high-quality Reinforcing Steel Bar (Rebar), designed to add strength, durability, and resilience to concrete structures. Because concrete has low tensile strength, it relies on rebar as a robust structural component to prevent cracking and structural failure.\n\nWhether you're reinforcing residential slabs or building large-scale infrastructure, Meshco's rebar delivers the structural performance you can trust.",
    layoutType: 'standard',
    images: [
      '/products/Reinforcing/reinforcing-steel-bars/meshco-reinforcing-rebar-1.webp',
      '/products/Reinforcing/reinforcing-steel-bars/meshco-reinforcing-bar-rebar-2.webp',
      '/products/Reinforcing/reinforcing-steel-bars/meshco-reinforcing-bar-rebar-3.webp',
    ],
    specifications: [
      {
        label: 'Standard Diameters',
        value: '6mm, 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm and 40mm',
        format: 'list',
        labelBold: true,
      },
      { label: 'Standard', value: 'SANS 920:2011', format: 'inline', labelBold: true },
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
        id: 'types-of-rebar',
        label: 'Types of Rebar',
        format: 'bullet',
        content: [
          'Deformed Bar (Y-bar)',
          'High-tensile reinforcing steel bar with surface deformations (ridges) designed to form a strong mechanical bond with concrete.',
          'Enhances tensile strength and reduces the risk of cracking.',
          'Applications: Reinforced beams, columns, slabs, foundations, precast products, infrastructure, and heavy construction.',
          'Standard sizes: 6mm, 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm.',
          'Standard lengths: 6.5m and 13m (custom lengths available).',
          'Round Bar (R-bar)',
          'Mild steel reinforcing bar with a smooth surface and lower yield strength than deformed bar.',
          'Typically used in non-structural applications where high tensile performance is not required.',
          'Applications: Light reinforcement, dowel bars, architectural concrete elements, general construction uses.',
          'Standard sizes: 6mm, 8mm, 10mm, 12mm',
          'Standard lengths: 6m and 12m (custom lengths available).',
          'Key Benefits of Meshco Rebar',
          'Manufactured to national standards for consistency and safety.',
          'Available in both high-tensile deformed bar and mild steel round bar.',
          'Supplied in a wide range of sizes and lengths, with custom lengths on request.',
          'Trusted for use in residential, commercial, and heavy infrastructure projects.',
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
      'Our Ceramic Door Anchors are engineered for maximum strength and reliability, ensuring that your doors are securely fastened and able to withstand the elements. Made from high-quality ceramic materials, these anchors provide exceptional resistance to wear, corrosion, and environmental stresses.',
    layoutType: 'standard',
    images: ['/products/Reinforcing/ceramic-door-anchors/meshco-ceramic-door-anchor.webp'],
    specifications: [],
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
          'Key Features:',
          'Durability - Made from advanced ceramic materials, our door anchors offer superior resistance to cracking, chipping, and corrosion.',
          'High Load Capacity - Designed to support heavy doors, ensuring long-lasting performance without compromising security.',
          'Easy Installation - Features a user-friendly design that simplifies the installation process, saving time and effort.',
          'Weather-Resistant - Resistant to harsh environmental conditions, making them ideal for both indoor and outdoor use.',
          "Non-Conductive - Ceramic's non-conductive properties ensure electrical safety in sensitive areas.",
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
      "<b>Reliable, versatile, and built to last.</b>\n\n\nMeshco's <b>Galvanised Welded Fencing Mesh</b> is a strong, cost-effective solution for perimeter protection, containment, and barrier control. Made from precision-welded steel wire and coated with a durable zinc layer, this mesh provides long-lasting resistance to corrosion while maintaining excellent rigidity and strength.\n\nFrom agricultural fencing to commercial enclosures and residential boundaries, our welded mesh panels and rolls offer security without compromising visibility.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/welded-fence-mesh/meshco-weld-fence-mesh-galvanised.webp',
      '/products/Fencing/welded-fence-mesh/meshco-weld-fence-mesh-galvanised-2.webp',
    ],
    specifications: [],
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
          'Strong welded joints - Each intersection is electronically welded for strength and shape retention.',
          'Galvanised for longevity - Available in lightly (Class C) and fully galvanised (Class A) material, our welded fencing products are manufactured to resist corrosion and withstand harsh weather conditions.',
          'Wide range of mesh sizes - Available in various aperture sizes and wire diameters to suit your specific application.',
          'Easy to cut, shape and install - Suitable for mounting on posts, frames, or walls.',
          'Rigid yet lightweight - Maintains structural integrity while remaining easy to handle and transport.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Animal enclosures and poultry cages',
          'Agricultural fencing',
          'Boundary fences for commercial or residential properties',
          'Security perimeters for low to medium-risk areas',
          'Greenhouse or nursery structures',
          'DIY and general-purpose use',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Welded Fencing Mesh?",
          "As a trusted name in fencing for over 60 years, Meshco's welded mesh products combine reliable strength with cost-efficiency. Manufactured to strict quality standards, our galvanised mesh is easy to work with, long-lasting, and adaptable to a wide range of uses.",
          "Whether you\'re fencing a farm, enclosing a warehouse, or building a custom gate or frame, Meshco provides the foundation you can depend on.",
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-welded-fence-mesh-pvc': {
    description:
      '<b>Strong, durable, and low-maintenance fencing</b>\n\n\nThe PVC-Coated Welded Fence Mesh is a versatile fencing solution designed for residential, commercial, and light agricultural applications. Manufactured from high-quality galvanised steel wire that is welded at 50mm spacings, the mesh is then coated in UV-resistant PVC to provide dual protection against rust and corrosion.\n\nThe smooth PVC finish not only extends the lifespan of the mesh but also offers an attractive appearance, making it ideal for gardens and light boundary fencing.',
    layoutType: 'simple',
    images: ['/products/Fencing/welded-fence-mesh-pvc/meshco-pvc-weld-fence-mesh.webp'],
    specifications: [],
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
        id: 'specifications',
        label: 'Specifications',
        content: [
          'Wire diameters (after coating) - 1.80mm',
          'Aperture sizes - 50 × 50mm (only available option)',
          'Height - 2000mm (only available option)',
          'Roll Lengths - 25m',
          'Finish - Galvanised wire with PVC coating',
        ],
        image: null,
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-diamond-mesh': {
    description:
      "Meshco's Diamond Mesh (also known as Chainlink or Tennis Court Mesh) is a versatile and durable fencing solution used across residential, agricultural, commercial, and recreational applications.\n\nManufactured by weaving high-quality steel wire into an interlocking diamond pattern, Diamond Mesh provides excellent strength, flexibility, and security while remaining cost-effectiveness and ease of installation.\n\nAvailable in lightly and fully galvanised as well as pvc coated galvanised wire.\n\n<b>Standard:</b> SANS 1373:2018 and SANS 675:2011",
    layoutType: 'simple',
    images: [
      '/products/Fencing/diamond-mesh/meshco-pvc-diamond-mesh-dhl-stadium-4.webp',
      '/products/Fencing/diamond-mesh/meshco-diamond-mesh-galvanised-1.webp',
      '/products/Fencing/diamond-mesh/meshco-pvc-diamond-mesh-2.webp',
      '/products/Fencing/diamond-mesh/meshco-pvc-diamond-mesh-3.webp',
      '/products/Fencing/diamond-mesh/meshco-pvc-diamond-mesh-green-5.webp',
    ],
    specifications: [],
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
          'Choice of Colours - Available in green (standard), black (standard), and other colours on request.',
          'Dual Protection - Galvanised wire core with a UV-resistant PVC outer layer for maximum longevity.',
          'Smooth, Safe Surface - PVC coating reduces risk of injury and gives a neat, finished appearance.',
          'Weather Resistant - Withstands sun, rain, and coastal conditions with minimal fading or cracking.',
          'Low Maintenance - The coating provides increased resistance to dirt, pollutants and other elements, reducing the need for frequent cleaning and maintenance.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Coastal and humid environment fencing',
          'Sports field and tennis court demarcations',
          'Garden and boundary fencing',
          'Agricultural fencing',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        format: 'bullet',
        content: [
          'Finish Options:',
          'Lightly Galvanised:',
          'Affordable protection against rust and corrosion in low- to moderate-exposure environments.',
          'Lightweight, easy to tension, and secure to posts and wires.',
          'Applications: Residential fencing, agricultural enclosures, light commercial use.',
          'Fully Galvanised:',
          'Galvanised for superior resistance to rust and weathering.',
          'Long service life with minimal maintenance.',
          'Applications: Perimeter fencing, industrial sites, residential boundaries, sports facilities.',
          'PVC Coated (Green or Black):',
          'Dual protection: galvanised steel wire core with a UV-resistant PVC coating.',
          'Smooth finish reduces risk of injury and provides a neat, aesthetic appearance.',
          'Withstands harsh coastal and high-sun environments.',
          'Low maintenance: resistant to dirt and pollutants.',
          'Applications: Schools, parks, residential estates, coastal fencing, sports grounds.',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-barbed-wire': {
    description:
      "<b>Classic perimeter security. Trusted protection.</b>\n\n\nMeshco's <b>Barbed Wire</b> is manufactured from high-strength steel wire, designed for reliable perimeter security and property protection. With sharp barbs twisted around the line wires at regular intervals, barbed wire provides an effective deterrent to intruders while remaining a cost-effective fencing solution.\n\nBarbed wire can be installed as a standalone fence or in combination with other fencing systems (such as diamond mesh, field fence, or WireWall) to increase height and security.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/barbed-wire/meshco-barbed-wire-1.webp',
      '/products/Fencing/barbed-wire/meshco-double-strand-barbed-wire-2.webp',
      '/products/Fencing/barbed-wire/meshco-barb-wire-single-strand-3.webp',
    ],
    specifications: [],
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
          'Galvanised for longevity - Available in lightly (Class C) and fully galvanised (Class A) material, our barbed wire products are manufactured to resist corrosion and withstand harsh weather conditions.',
          'Sharp steel barbs - Four-point barbs spaced at standard intervals create a strong deterrent to climbing or breaching.',
          'Easy to install - Can be used on its own, or mounted atop diamond mesh and other fencing for added protection.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Fencing/barbed-wire/specifications.png',
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Agricultural fencing and livestock control',
          'Property demarcation',
          'Perimeter topping for existing fences or walls',
          'Industrial zones and logistics yards',
          'Utility infrastructure',
          'Correctional and military zones (when combined with additional fencing systems)',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Barbed Wire?",
          "Backed by over 60 years of manufacturing excellence, Meshco's Barbed Wire is made for the long haul. Whether you're fencing farmland or fortifying infrastructure, our barbed wire offers the ideal balance between affordability, ease of use, and rugged performance.",
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-razor-wire-flatwrap': {
    description:
      "<b>High-security perimeter protection in a compact, low-profile design.</b>\n\n\n<b>Meshco's Flat Wrap Razor Wire</b> is the ideal deterrent where space is limited but uncompromising security is essential. Designed to lay flat against and above fences or walls, it delivers a neat, discreet, and highly effective barrier that's difficult to climb, cut, or bypass.\n\nWhether used alone or as an upgrade to existing security fencing, our flat wrap design offers the same intimidating appearance and defensive strength of traditional concertina razor wire—without the excessive bulk.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/razor-wire-flatwrap/meshco-razor-wire-flatwrap_1.png',
      '/products/Fencing/razor-wire-flatwrap/meshco-razor-flatwrap-3.webp',
    ],
    specifications: [
      {
        label: 'AVAILABLE SIZES',
        value: '500MM\n700MM\n900MM\nUNCLIPPED GALV RAZOR TAPE',
        format: 'list',
      },
      {
        label: 'SHEET LENGTH',
        value: '15M\n15M\n15M\n200M',
        format: 'list',
      },
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
          'Space-efficient design - Flat wrap coils are compressed to sit flush against surfaces, reducing protrusion into public or adjacent areas.',
          'High tensile wire core - Tough, resilient steel core resists cutting and distortion, increasing durability.',
          'Aggressive galvanised blades - Razor-sharp barbs provide a strong visual and physical deterrent to intrusion.',
          'Easy to install - Can be fastened directly to fences, gates, or mesh panels and straining wire using hog rings or binding wire.',
          'Corrosion-resistant - Galvanised to suit your environment and longevity requirements.',
          'Compatible with Meshco systems - Pairs seamlessly with our full range of perimeter fencing solutions, including WireWall fencing.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Industrial and commercial perimeters',
          'Warehouses and logistics hubs',
          'Correctional facilities and military zones',
          'Utility infrastructure (telecoms, water, energy)',
          'Medium to High-risk residential developments',
          'Airports and restricted-access areas',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Flat Wrap Razor Wire?",
          "Backed by over 60 years of manufacturing expertise, Meshco's razor wire solutions combine premium materials with precision engineering. We prioritise safety, performance, and ease of use; making our products the trusted choice for high-security fencing across Southern Africa.",
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-razor-wire-btc': {
    description:
      "<b>Maximum deterrence. Maximum protection.</b>\n\n\nMeshco's <b>Concertina Razor Wire</b>, also known as <b>BTC (Barbed Tape Concertina)</b>, is engineered for the highest levels of perimeter security. Designed to expand into large, sharp coils with strong spring-back action, this type of razor wire forms an unbreachable barrier that is both physically dangerous and psychologically intimidating.\n\nWhether protecting high-risk infrastructure or securing remote boundaries, our concertina coils offer a proven, cost-effective solution trusted across defence, correctional, commercial and infrastructure sites.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/razor-wire-btc/meshco-concertina-razor-wire-btc1.webp',
      '/products/Fencing/razor-wire-btc/meshco-razor-wire-tape-2.webp',
    ],
    specifications: [
      {
        label: 'AVAILABLE SIZES',
        value: '250MM\n730MM\n900MM',
        format: 'list',
      },
      {
        label: 'SHEET LENGTH',
        value: '10M\n12M\n14M',
        format: 'list',
      },
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
          'Helical coil formation - Expands into overlapping loops that increase strength and restrict climbing or separation.',
          'Barbed tape with high tensile core - Razor-sharp steel blades wrapped around a hardened wire core for unmatched cutting resistance and coil memory.',
          'Corrosion-resistant - Galvanised to suit your environment and longevity requirements.',
          'Heavy-duty clip connectors - Reinforce the coil structure and prevent forced separation of loops.',
          'Rapid deployment - Suitable for both permanent and temporary installations; available in compact coils for easy handling and transport.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          '450MM Standard perimeter and residential protection',
          '730MM Medium to high-security applications',
          '980MM Maximum deterrent; military and critical infrastructure',
          'Military bases and border fencing',
          'Prisons and detention facilities',
          'Government buildings',
          'Airports and ports',
          'Industrial zones and depots',
          'Construction site boundaries',
          'Utility and power substations',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Concertina Razor Wire?",
          "At Meshco, we've spent decades perfecting security wire solutions that balance strength, reliability and ease of deployment. Our BTC razor wire is manufactured under stringent quality controls using only premium materials, giving you confidence in long-term security and resilience.",
          'Pair it with our WireWall fencing for layered protection that meets the toughest standards.',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-razorwall': {
    description:
      "<b>When you need security with teeth.</b>\n\n\n<b>Maximum security. Minimal compromise.</b>\n\n\nMeshco's <b>RazorWall</b>, also known as <b>Razor Mesh</b>, delivers mean security—no-nonsense perimeter protection designed to send a clear message: keep out. This aggressive barrier combines the penetration resistance of razor wire with the rigidity of welded mesh, making it one of the toughest and most intimidating fencing solutions on the market.\n\nWith its diamond mesh pattern and welded intersection points, every strand is armed with razor-sharp barbs that are virtually impossible to climb, cut, or bypass.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/razor-wall/meshco-razor-wall-mesh-1.webp',
      '/products/Fencing/razor-wall/meshco-razor-wall-mesh-2.webp',
    ],
    specifications: [
      {
        label: 'Available Sizes',
        value: '1.0 x 6.0m\n2.1 x 6.0m\n2.4 x 6.0m',
        format: 'list',
      },
      {
        label: 'Unit of Sale',
        value: 'BUNDLES OF 5 SHEETS\nBUNDLES OF 5 SHEETS\nBUNDLES OF 5 SHEETS',
        format: 'list',
      },
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
        image: '/products/Fencing/razor-wall/features.png',
        imageMaxWidth: '60%',
        content: [
          'Mean, aggressive appearance:',
          "Razor Wall doesn't just stop intruders—it scares them off before they even try.",
          'Razor wire sheet with welded intersections:',
          'Increases structural integrity and prevents manipulation or separation of the mesh.',
          'Razor-sharp barbs on every strand:',
          'High-density barbing delivers serious psychological and physical deterrence.',
          'Galvanised protection:',
          'Excellent corrosion resistance for long-term outdoor performance.',
          'Climb-resistant design:',
          'Narrow apertures and sharp edges eliminate grip and footholds.',
          'Modular installation:',
          'Supplied in flat sheets for easy mounting on walls, fences, or frames.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        image: '/products/Fencing/razor-wall/specifications.png',
        imageMaxWidth: '30%',
        content: [
          'Sheet Height:',
          '1800mm, 2100mm, 2400mm',
          'Sheet Length:',
          '6000mm',
          'Aperture Size:',
          'Approx. 150mm x 75mm (diamond pattern)',
          'Material Options:',
          'Galvanised steel',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Prisons and correctional facilities',
          'Military installations and border control',
          'Airports, power stations, and water plants',
          'Mining and industrial perimeters',
          'High-security commercial zones',
          'Government sites and embassies',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's RazorWall?",
          "When you need a barrier that looks as tough as it performs, Meshco's RazorWall is your answer. It's hard, it's hostile, and it's built for serious protection. With over 60 years in wire and perimeter security manufacturing, Meshco provides tough solutions for tough environments.",
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-field-game-fence': {
    description:
      "<b>Field Fence / Game Fence (used where Bonnox or Veldspan-type fences are specified)</b>\n\n\n<b>Tough. Flexible. Made for Africa.</b>\n\n\nMeshco's <b>Field Fence</b> is a high-tensile, wire-knotted fencing solution engineered for agricultural and wildlife control. Designed to withstand the movement and pressure of animals while maintaining structure over long distances, Field Fence is ideal for farms, game reserves, and rural boundary applications.\n\nIts graduated aperture design allows for versatility across livestock types, while the flexible knot system absorbs impact and resists sagging—even across uneven terrain.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/field-and-game-fence/meshco-field-and-game-fence_1.png',
      '/products/Fencing/field-and-game-fence/meshco-field-fence-galvanised-1.webp',
      '/products/Fencing/field-and-game-fence/meshco-field-game-veld-fence-2.webp',
    ],
    specifications: [],
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
          'High-tensile steel wire - Strong, springy, and corrosion-resistant—perfect for long fence runs.',
          'Flexible hinge joints - Absorbs animal impact and prevents wire shifting or deformation.',
          'Graduated spacing - Smaller gaps at the bottom for small animals, wider gaps at the top for visibility and material efficiency.',
          'Galvanised coating - Protects against rust and corrosion in harsh outdoor environments.',
          'Cost-effective long runs - Lightweight, easy to install, and requires fewer posts due to tensile strength.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Livestock enclosures (sheep, cattle, goats)',
          'Game reserves and wildlife control',
          'Farm and rural boundary fencing',
          'Airfields and bushveld properties',
          'Agricultural co-operatives and conservation areas',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Field Fence?",
          "Rugged, reliable, and ready for the wild—Meshco's Field Fence is built to handle Southern Africa's toughest environments. Whether you're fencing a smallholding or managing thousands of hectares of game reserve, our field fencing delivers a long-term, low-maintenance solution.",
          'Let Meshco help you contain what matters—naturally.',
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-hexagonal-netting': {
    description:
      "<b>Flexible, multipurpose, and built to last.</b>\n\n\nMeshco's <b>Hexagonal Wire Netting</b> is a lightweight yet durable mesh made from galvanised wire woven into a continuous hexagonal pattern. Its flexibility, ease of use, and wide range of aperture sizes make it ideal for agricultural, industrial, and domestic applications — from poultry enclosures to erosion control and masonry reinforcement.\n\nWhether you're building a chicken coop, lining a fence, or reinforcing plaster, Meshco has the right size and strength netting to suit your project.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/hexagonal-wire-netting/meshco-hexagonal-wire-netting_1.png',
      '/products/Fencing/hexagonal-wire-netting/meshco-hexagonal-netting-galvanised.webp',
    ],
    specifications: [],
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
          "Hexagonal weave for flexibility - Won't unravel when cut, and adapts easily to uneven surfaces and curved structures.",
          'Corrosion-resistant galvanised wire - Ensures long-term durability outdoors or in contact with cement.',
          'Multiple aperture sizes - From fine 13mm mesh for bird cages to large 90mm mesh for pig enclosures.',
          'Available in rolls - Supplied in convenient 50m roll lengths for easy transport, cutting, and installation.',
          'Light to medium duty - Offers containment and structure without excessive weight.',
          'The aperture size determines what can pass through or be contained by the mesh. Smaller apertures offer finer control, while larger ones allow better airflow and cost efficiency over large areas.',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Poultry and pet enclosures',
          'Bird aviaries and rabbit runs',
          'Garden protection and climbing plant support',
          'Wall and plaster reinforcement',
          'Gabion walls and light erosion control',
          'Temporary fencing and screening',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Wire Netting?",
          'At Meshco, we combine decades of manufacturing expertise with premium raw materials to deliver reliable products you can trust. Our Hexagonal Wire Netting is versatile, strong, and built to handle the demands of both rural and urban environments.',
          "From backyard to building site, we've got you covered.",
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-welded-fence-mesh',
      'fencing-barbed-wire',
      'wirewall-af100',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
    ],
  },
  'fencing-standards': {
    description:
      "<b>Dependable Support for Stronger Fences</b>\n\n\nSteel Fencing Y-Standards, also known as Y-posts or Y-sections, are the backbone of wire fence installations. Manufactured from durable steel and engineered for strength, their distinctive Y-shape offers outstanding rigidity and durability, making them ideal for use in demanding environments. Whether securing game farms, agricultural boundaries, or critical infrastructure, Meshco's Y-Sections provide dependable support where it matters most.",
    layoutType: 'simple',
    images: [
      '/products/Fencing/standards/meshco-ystandard-bitumen-dipped.webp',
      '/products/Fencing/standards/meshco-ystandard-fence-post-bundle-2.webp',
    ],
    specifications: [],
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
          'Lengths - 1.40m, 1.50m, 1.70m, 1.85m, 2.15m, 2.45m, 3.05m and 3.60m',
          'Finish - Bitumen-dipped',
          'Punch Pattern - Pre-punched holes for easy attachment of wires',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Livestock and game fencing',
          'Security and perimeter control',
          'Temporary or permanent enclosures',
          'Roadside, rail and boundary lines',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        image: '/products/Fencing/standards/benefits.png',
        imageMaxWidth: '81%',
        content: [
          'Why Choose Meshco?',
          'Made from high-strength steel for long-lasting performance',
          'Pre-punched for fast and accurate wire placement',
          'Compatible with a wide range of fencing wires and accessories',
          'Proven in the field across Southern Africa',
          '',
          "Strong lines start with strong supports - Whether you're fencing off farmland or securing industrial sites, Meshco's Y-Standards and Droppers deliver strength you can stake your reputation on.",
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-droppers',
      'fencing-field-game-fence',
      'wire-hard-drawn-wire',
      'wire-black-annealed-wire',
      'wire-high-strain-wire',
    ],
  },
  'fencing-droppers': {
    description:
      '<b>Keep Your Lines Straight and Strong</b>\n\n\nSteel Droppers are the ideal solution for maintaining tension and spacing between wires along long stretches of fencing. Used between main posts, these lightweight components prevent sagging, extend fence life, and improve overall stability without adding major cost or complexity.',
    layoutType: 'simple',
    specifications: [],
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
          'Lengths - 0.95m, 1.10m, 1.25m, 1.40m, 1.55m, 1.85m and 2.45m',
          'Finish - Bitumen dipped for durability',
          'Fixing - Available pre-notched for quick wire tying',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Supporting fencing wire between Y-Standards or poles',
          'Game, stock, and perimeter fencing',
          'Long rural fence lines where cost and weight matter',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        image: '/products/Fencing/droppers/benefits.png',
        content: [
          'Why Choose Meshco?',
          'Manufactured from high-strength steel for long service life',
          'Easy to transport and install',
          'Precision pre-notching speeds up installation',
          "Designed to work seamlessly with Meshco's fencing products",
          'Meshco Droppers — a small part that makes a big difference.',
          "Whether you're fencing off farmland or securing industrial sites, Meshco's Y-Standards and Droppers deliver strength you can stake your reputation on.",
        ],
      },
    ],
    relatedProductKeys: [
      'fencing-standards',
      'wire-galvanised-wire',
      'wire-hard-drawn-wire',
      'wire-black-annealed-wire',
      'wire-high-strain-wire',
    ],
  },
  'fasteners-round-wire-nails': {
    description:
      'Meshco supplies a wide range of Round Wire Nails, trusted for their strength, durability, and versatility across construction and general-purpose applications.\n\nManufactured from high-quality steel and available in a variety of sizes, our nails are the reliable choice for fastening wood, securing formwork, and general building tasks.\n\nAvailable in convenient <b>packets, boxes, and buckets</b> — Meshco makes it easy to choose the right quantity for your project needs.',
    layoutType: 'standard',
    images: [
      '/products/Fasteners/round-wire-nails/meshco-round-wire-nails_1.png',
      '/products/Fasteners/round-wire-nails/meshco-round-wire-nail.webp',
    ],
    specifications: [
      {
        label: 'Available Sizes',
        value:
          '50MM (2 inch)\n63MM (2.5 inch)\n75MM (3 inch)\n100MM (4 inch)\n125MM (5 inch)\n150MM (6 inch)',
        format: 'list',
      },
      {
        label: 'Unit of Sale',
        value:
          '25KG or 25X1KG\n25KG or 25X1KG\n25KG or 25X1KG\n25KG or 25X1KG\n25KG or 25X1KG\n25KG or 25X1KG',
        format: 'list',
      },
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
        id: 'application',
        label: 'Application',
        format: 'bullet',
        content: [
          'Application:',
          'Timber construction and carpentry',
          'Roof truss assembly',
          'Pallet and crate manufacturing',
          'Formwork and shuttering',
          'Fencing and general repairs',
          'DIY and maintenance work',
          '',
          'Key features of round wire nails:',
          '',
          'Shank: The round shank is smooth, which can reduce splitting in the material being nailed.',
          '',
          'Head: The flat, consistently round, head provides a surface for a hammer to strike, helping drive the nail into materials.',
          '',
          'Material: Manufactured from the highest quality, low carbon steel.',
        ],
      },
      {
        id: 'nail-size-guide',
        label: 'Nail Size Guide',
        content: [
          'Choosing the Right Round Wire Nail Size',
          '',
          'Application:',
          'Light Carpentry (e.g., frames, trims)',
          'Roofing Battens',
          'General Timber Work',
          'Pallets & Crates',
          'Heavy Construction (e.g., beams, trusses)',
          'Formwork & Shuttering',
          'Fencing',
          '',
          'Recommended Nail Size:',
          '30–40 mm length, 2.0–2.5 mm diameter',
          '50 mm length, 3.0mm diameter',
          '50–75 mm length, 3.0–3.5 mm diameter',
          '75 mm length, 3.5 mm diameter',
          '100–125 mm length, 4.0–5.0 mm diameter',
          '75–100 mm length, 3.5–4.0 mm diameter',
          '40–75 mm length, galvanised nails recommended',
        ],
      },
      {
        id: 'pro-tip',
        label: 'Pro-Tip',
        content: [
          "2.5 to 3 times Material Thickness Rule - Choose a nail length about 2.5 to 3 times the thickness of the material you\'re fixing.",
          'Galvanised Nails - Always recommended for outdoor, fencing, or exposed areas.',
          'Buckets or Boxes - Choose buckets or bulk boxes for large jobs to avoid running out mid-project.',
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
      "Meshco's <b>Plain</b> and <b>Barbed Galvanised Fencing Staples</b> (also referred to as <b>U Nails</b>) are designed to provide a strong, reliable fastening solution for securing barbed wire, netting and other wire and fencing products to wooden poles. Made from high-quality steel, these staples are built to withstand the toughest conditions, ensuring your fence stays intact and secure for years to come.",
    layoutType: 'standard',
    images: [
      '/products/Fasteners/fencing-staples/meshco-fencing-staples_1.png',
      '/products/Fasteners/fencing-staples/meshco-barbed-fence-staple-1.webp',
      '/products/Fasteners/fencing-staples/meshco-fence-staple-plain-2.webp',
    ],
    specifications: [
      {
        label: 'Available Sizes',
        value: '25MM (Plain only)\n32MM\n40MM',
        format: 'list',
      },
      {
        label: 'Unit of Sale',
        value: '25kg Bucket\n25kg Bucket\n25kg Bucket',
        format: 'list',
      },
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
          'Durable - Manufactured from high-quality galvanised steel for superior resistance to rust, corrosion, and wear.',
          'Secure Fastening - Designed to securely install wire and fencing products, preventing sagging and ensuring long-term stability.',
          'Easy Installation - Sharp points for easy penetration into posts and quick installation, saving you time and effort.',
          'Increased hold - Both our plain and barbed staples are designed for maximum hold strength with the posts. The barbed staples offer further increased strength, leading to a more secure installation',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-round-wire-nails',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
      // 'fasteners-pliers',
      'fasteners-cutting-nippers',
    ],
  },
  'fasteners-clout-nails': {
    description:
      "Meshco's galvanised <b>Clout Nails</b> are designed to provide a strong, reliable fastening solution for a variety of applications. Whether you're working with roofing, cladding, or timber, these nails ensure a secure, long-lasting bond that withstands the elements. Made from high-quality steel and galvanised for corrosion resistance, our clout nails are the perfect choice for both professional contractors and DIY enthusiasts.",
    layoutType: 'standard',
    images: ['/products/Fasteners/clout-nails/meshco-clout-nail-galvanised.webp'],
    specifications: [
      {
        label: 'Available Sizes',
        value: '20MM\n25MM\n32MM\n40MM\n50MM',
        format: 'list',
      },
      {
        label: 'Unit of Sale',
        value: '25X1KG\n25X1KG\n25X1KG\n25X1KG\n25X1KG',
        format: 'list',
      },
      {
        label: '',
        value:
          'These are sold in a box of 25kgs, inside the 25kg box there are packs of 1kgs x 25.',
        format: 'inline',
      },
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
          'Durable Construction - Made from robust, high-carbon steel, providing superior strength and longevity.',
          'Galvanised Finish - Coated with a galvanised layer to resist rust and corrosion, even in the harshest environments.',
          'Sharp Point - Designed for easy penetration into timber and other materials, ensuring quick and efficient installation.',
          'Wide Flat Head - The broad head ensures a secure, flush finish, minimizing the risk of nails pulling through materials.',
          'Versatile Use - Suitable for a wide range of applications including roofing, cladding, fencing, and general construction projects.',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-round-wire-nails',
      'fasteners-staples',
      'fasteners-hog-rings',
      // 'fasteners-pliers',
      'fasteners-cutting-nippers',
    ],
  },
  'fasteners-hog-rings': {
    description:
      '<b>EDMA Hog Rings</b> are designed to provide a quick, strong, and secure way to fasten wire to posts, mesh, and other wire products. Ideal for agricultural, commercial, and residential fencing, these high-quality hog rings are perfect for securing wire fences, wire mesh, and other fencing materials, ensuring a long-lasting, tight connection.',
    layoutType: 'standard',
    images: [
      '/products/Fasteners/hog-rings/meshco-hogring-cclip-1.webp',
      '/products/Fasteners/hog-rings/meshco-hogring-cclip-box-2.webp',
    ],
    specifications: [
      {
        label: 'AVAILABLE CLIP AND PACK SIZES',
        value: '16MM*250 GALV\n16MM*2500 GALV\n20MM*1000 GALV',
        format: 'list',
      },
      {
        label: '',
        value:
          '16mm hog ring when installed leaves an inner dimension of 6mm. 20mm hog ring when installed leaves an inner dimension of 8mm.',
        format: 'inline',
      },
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
          'Livestock Fencing - Secure wires to mesh or other fencing materials in livestock enclosures.',
          'Garden Fencing - Quickly and securely fasten wire or mesh fencing for garden boundaries.',
          'Security Fencing - Ideal for high-tensile wire security fences or razor wire installations.',
          'Industrial and Commercial Fencing - Use for building strong, durable fences around commercial properties, construction sites, and agricultural facilities.',
          'General Wire Netting Projects - Fasten wire mesh or netting to various structures for a range of applications. For example, many farmers choose to fasten the netting structure to the stay wire with 20mm hog rings.',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-hog-ring-pliers',
      'fasteners-round-wire-nails',
      'fasteners-staples',
      'fasteners-clout-nails',
      // 'fasteners-pliers',
    ],
  },
  'fasteners-hog-ring-pliers': {
    description:
      "<b>Essential Tool for Quick and Secure Hog Ring Installation</b>\n\n\nThe <b>EDMA Hog Ring Pliers</b> are the professional's choice for installing fencing hog rings quickly, efficiently, and securely. Specially designed for use with EDMA staples (hog rings), these pliers make it easy to fasten fencing wire, mesh, and netting to poles or other wire structures on-site.",
    layoutType: 'standard',
    images: [
      '/products/Fasteners/hog-ring-pliers/meshco-hogring-pliers-1.webp',
      '/products/Fasteners/hog-ring-pliers/meshco-hogring-pliers-2.webp',
      '/products/Fasteners/hog-ring-pliers/meshco-topgraf-hogring-plier-3.webp',
    ],
    specifications: [
      {
        label: 'AVAILABLE IN THE FOLLOWING TWO SIZES:',
        value: 'TOP GRAF PLIER\nBABY GRAF PLIER',
        format: 'list',
      },
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
          'Precision Engineering - Designed for easy loading and smooth operation when installing EDMA hog rings (Ref 415, Ref 416, Ref 420).',
          'Durable Construction - Made from high-quality steel for strength and long service life, even under tough site conditions.',
          'Ergonomic Grip - Non-slip handles ensure comfort and reduce hand fatigue during prolonged use.',
          'Spring-Loaded Mechanism - Automatically returns the pliers to the open position for faster, easier operation.',
          'Portable and Lightweight - Ideal for on-site fencing work — compact enough to carry, tough enough for demanding projects.',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Why Choose EDMA Hog Ring Pliers?',
          'Efficient Installation - Save time and effort on-site by installing hog rings faster and more securely.',
          'Reliable and Long-Lasting - Built tough for demanding fencing jobs in agricultural, security, and industrial settings.',
          'Designed for EDMA Hog Rings - Ensures a perfect fit and consistent performance with every staple.',
        ],
      },
      {
        id: 'application',
        label: 'Application',
        content: [
          'Why Choose EDMA Hog Ring Pliers?',
          'Livestock Fencing - Secure wires to mesh or other fencing materials in livestock enclosures.',
          'Garden Fencing - Quickly and securely fasten wire or mesh fencing for garden boundaries.',
          'Security Fencing - Ideal for high-tensile wire security fences or razor wire installations.',
          'Industrial and Commercial Fencing - Use for building strong, durable fences around commercial properties, construction sites, and agricultural facilities.',
          'General Wire Netting Projects - Fasten wire mesh or netting to various structures for a range of applications.',
        ],
      },
    ],
    relatedProductKeys: [
      'fasteners-hog-rings',
      // 'fasteners-pliers',
      'fasteners-cutting-nippers',
      'fasteners-round-wire-nails',
      'fasteners-clout-nails',
    ],
  },
  // 'fasteners-pliers': {
  //   description:
  //     "<b>Essential Tool for Quick and Secure Hog Ring Installation</b>\n\n\nThe <b>EDMA Pliers</b> are the professional's choice for installing fencing hog rings quickly, efficiently, and securely. Specially designed for use with EDMA staples (hog rings), these pliers make it easy to fasten fencing wire, mesh, and netting to poles or other wire structures on-site.",
  //   layoutType: 'standard',
  //   images: ['/products/Fasteners/pliers/meshco-pliers_1.webp'],
  //   specifications: [
  //     {
  //       label: 'AVAILABLE IN THE FOLLOWING TWO SIZES:',
  //       value: 'TOP GRAF PLIER\nBABY GRAF PLIER',
  //       format: 'list',
  //     },
  //   ],
  //   applications: [
  //     'Fence installation and maintenance',
  //     'Wire bending and tying',
  //     'General fabrication tasks',
  //     'Agricultural repairs',
  //     'Industrial assembly',
  //   ],
  //   technicalData: [
  //     { property: 'Hardened jaws for gripping and cutting', value: '', unit: '' },
  //     { property: 'Comfort grip handles', value: '', unit: '' },
  //     { property: 'Corrosion-resistant finish', value: '', unit: '' },
  //     { property: 'Multipurpose functionality', value: '', unit: '' },
  //     { property: 'Suitable for professional use', value: '', unit: '' },
  //   ],
  //   tabs: [
  //     {
  //       id: 'features',
  //       label: 'Features',
  //       content: [
  //         'Precision Engineering - Designed for easy loading and smooth operation when installing EDMA hog rings (Ref 415, Ref 416, Ref 420).',
  //         'Durable Construction - Made from high-quality steel for strength and long service life, even under tough site conditions.',
  //         'Ergonomic Grip - Non-slip handles ensure comfort and reduce hand fatigue during prolonged use.',
  //         'Spring-Loaded Mechanism - Automatically returns the pliers to the open position for faster, easier operation.',
  //         'Portable and Lightweight - Ideal for on-site fencing work — compact enough to carry, tough enough for demanding projects.',
  //       ],
  //     },
  //     {
  //       id: 'benefits',
  //       label: 'Benefits',
  //       content: [
  //         'Why Choose EDMA Hog Ring Pliers?',
  //         'Efficient Installation - Save time and effort on-site by installing hog rings faster and more securely.',
  //         'Reliable and Long-Lasting - Built tough for demanding fencing jobs in agricultural, security, and industrial settings.',
  //         'Designed for EDMA Hog Rings - Ensures a perfect fit and consistent performance with every staple.',
  //       ],
  //     },
  //     {
  //       id: 'application',
  //       label: 'Application',
  //       content: [
  //         'Why Choose EDMA Hog Ring Pliers?',
  //         'Livestock Fencing - Secure wires to mesh or other fencing materials in livestock enclosures.',
  //         'Garden Fencing - Quickly and securely fasten wire or mesh fencing for garden boundaries.',
  //         'Security Fencing - Ideal for high-tensile wire security fences or razor wire installations.',
  //         'Industrial and Commercial Fencing - Use for building strong, durable fences around commercial properties, construction sites, and agricultural facilities.',
  //         'General Wire Netting Projects - Fasten wire mesh or netting to various structures for a range of applications.',
  //       ],
  //     },
  //   ],
  //   relatedProductKeys: [
  //     'fasteners-cutting-nippers',
  //     'fasteners-hog-rings',
  //     'fasteners-round-wire-nails',
  //     'fasteners-clout-nails',
  //     'fasteners-hog-ring-pliers',
  //   ],
  // },
  'fasteners-cutting-nippers': {
    description:
      '<b>Heavy-Duty Wire and Fencing Cutter for Professional Use</b>\n\n\nThe <b>EDMA Cutting Nippers</b> are the go-to tool for cleanly and efficiently cutting wire, hog rings, and fencing materials. Built to withstand the rigours of fencing, construction, and agricultural work, these nippers deliver powerful cutting performance when you need it most.',
    layoutType: 'standard',
    images: ['/products/Fasteners/cutting-nippers/meshco-cutting-nippers.webp'],
    specifications: [
      {
        label: 'AVAILABLE IN THE FOLLOWING TWO SIZES:',
        value: 'CUTTING NIPPERS 220MM\nCUTTING NIPPERS 250MM',
        format: 'list',
      },
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
          'High-Strength Blades - Hardened steel cutting edges for long-lasting sharpness and durability.',
          'Ergonomic Handle Design - Comfortable, anti-slip grips for better control and reduced hand fatigue.',
          'Compact and Strong - Designed for use in tight spaces without compromising on cutting power.',
          'Precision Cutting - Clean, accurate cuts minimise fraying and damage to fencing wire and mesh.',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          'Why Choose EDMA Cutting Nippers?',
          'Powerful Cutting Action - Easily slice through tough fencing materials with minimal effort.',
          'Durable and Long-Lasting - Built to perform under heavy use on fencing and construction sites.',
          'Precision Cuts - Helps achieve a professional finish on every fence installation or repair.',
        ],
      },
      {
        id: 'application',
        label: 'Application',
        format: 'bullet',
        content: [
          'Cutting fencing wire, hog rings, barbed wire, and mesh',
          'Trimming excess wire during fencing installation',
          'Removing old hog rings or fencing materials during repairs or upgrades',
          'Suitable for garden, agricultural, security, and industrial fencing work',
        ],
      },
    ],
    relatedProductKeys: [
      // 'fasteners-pliers',
      'fasteners-hog-rings',
      'fasteners-hog-ring-pliers',
      'fasteners-clout-nails',
      'fasteners-round-wire-nails',
    ],
  },
  'mining-support-mining-mesh': {
    description:
      "<b>Reliable underground reinforcement. Built for harsh environments.</b>\n\n\nMeshco's <b>Mining Support Mesh</b> is a high-strength welded wire mesh designed to provide critical ground support in underground mining and tunnelling operations. Manufactured from heavy-duty steel wire and welded for maximum durability, it reinforces rock faces, tunnel roofs, and mine walls—minimising the risk of rock falls and ensuring safer working conditions.\n\nTried and trusted across South African, African, North American and Australian mining operations, our mesh is engineered to handle dynamic loads, corrosive environments, and the toughest underground conditions.",
    layoutType: 'standard',
    images: [
      '/products/Mining Support/mining-support-mesh/meshco-underground-mining-support-mesh.webp',
    ],
    specifications: [],
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
          'Heavy-duty welded construction - High tensile strength steel wires are welded for consistent performance under stress.',
          'Flush-cut ends - Panels are manufactured with flush cut edges, free of burring',
          'Corrosion protection options - Available in black, galvanised, or epoxy-coated finishes to suit various underground conditions.',
          'Designed for underground environments - Withstands deformation and absorbs energy from shifting strata or blast vibration.',
          'Quick installation - Compatible with standard rock bolts, plates, and installation tools for rapid deployment.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        image: '/products/Mining Support/mining-support-mesh/specifications.png',
        imageMaxWidth: '50%',
        content: [
          "(Meshco can customise to your mine's specifications)",
          'Wire Diameter:',
          '4.00mm and 5.6mm',
          'Aperture Size:',
          '100 x 100mm | 100 x 150mm | 150 x 150mm',
          'Sheet Size:',
          '2.4m x 1.2m | 2.4m x 1.5m | 3.0m x 1.5m (custom sizes available)',
          'Finish:',
          'Black (raw steel), Galvanised and Powder coated',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Underground mine roof and sidewall support',
          'Tunnels and shafts',
          'Open stopes and box cuts',
          'Ore passes and loading points',
          'Temporary and permanent rock reinforcement',
          'Slope stability in surface operations',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Mining Mesh?",
          "With over 60 years of experience in wire manufacturing, Meshco delivers support mesh you can trust—whether you're mining gold in Gauteng, platinum in Rustenburg, or coal in Mpumalanga. Our mining mesh is manufactured to strict tolerances, tested for durability, and backed by the technical support and supply reliability that mining operations demand.",
          'We reinforce more than ground.. we reinforce confidence.:',
        ],
      },
    ],
    relatedProductKeys: [
      'utility-specimesh-panels',
      'fencing-standards',
      'fencing-diamond-mesh',
      'utility-precision-welded-mesh',
      'wire-hard-drawn-wire',
    ],
  },
  'mining-support-backfill-mesh': {
    description:
      "<b>Reliable backfill reinforcement for mining operations</b>\n\n\nMeshco's <b>Backfill Mesh</b> is a high-strength welded mesh designed to provide reliable containment and reinforcement in backfilling operations. In underground mining, backfilling is critical to maintaining ground stability, preventing subsidence, and improving safety during ore extraction.\n\nManufactured from heavy-duty steel wire and precision-welded for strength, Backfill Mesh is engineered to withstand harsh underground conditions and dynamic loads. It ensures that backfill material is securely contained within stopes and voids, reducing the risk of collapse and improving long-term excavation stability.",
    layoutType: 'standard',
    specifications: [],
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
        format: 'bullet',
        content: [
          'Manufactured from high-strength, low-carbon steel wire.',
          'Precision welding ensures consistent strength and performance.',
          'Corrosion-resistant finishes available (galvanised or coated).',
          'High load-bearing capacity to contain cemented and uncemented backfill.',
          'Supplied in flat sheets for easy handling and installation underground.',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: [],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [],
      },
    ],
    relatedProductKeys: [
      'utility-specimesh-panels',
      'fencing-standards',
      'fencing-diamond-mesh',
      'utility-precision-welded-mesh',
      'wire-hard-drawn-wire',
    ],
  },
  'utility-precision-welded-mesh': {
    description:
      "<b>Engineered accuracy. Consistent performance.</b>\n\n\nMeshco's <b>Precision Welded Mesh</b> is a high-quality wire mesh manufactured with tight tolerances and precisely welded intersections for exceptional uniformity and strength. Designed for applications that demand reliability, repeatability, and structural integrity, this mesh is widely used in construction, manufacturing, mining, security, and agricultural industries.",
    layoutType: 'standard',
    images: [
      '/products/Utility/precision-welded-mesh/meshco-precision-welded-mesh_1.png',
      '/products/Utility/precision-welded-mesh/meshco-precision-weld-mesh-galvanised.webp',
    ],
    specifications: [],
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
          'Welded joints - Each intersection is precisely welded for consistent strength and shape retention.',
          'Tight tolerances - Precision manufacturing ensures uniform mesh openings.',
          'Anti-corrosive protection - Manufactured with galvanised wire as standard',
        ],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: [],
        image: '/products/Utility/precision-welded-mesh/specifications.png',
      },
      {
        id: 'applications',
        label: 'Applications',
        format: 'bullet',
        content: [
          'Machine guarding and partitioning',
          'Racking and shelving systems',
          'Security cages and barriers',
          'Livestock enclosures and pens',
          'Sieving, screening, and drying racks',
          'Architectural and design elements',
          'Industrial filters and screens',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: [
          "Why Choose Meshco's Precision Welded Mesh?",
          'At Meshco, we understand that in demanding environments, consistency is everything. Our precision welded mesh is manufactured under strict quality control, using premium wire and cutting-edge welding equipment to deliver uniform results; every time.',
          "With over 60 years of industry expertise, we're the trusted partner for engineered mesh solutions that are as dependable as they are versatile.",
        ],
      },
    ],
    relatedProductKeys: [
      'utility-specimesh-panels',
      'fasteners-staples',
      'wire-galvanised-wire',
      'wire-slab-wire',
      'wire-hard-drawn-wire',
    ],
  },
  'utility-growing-stakes': {
    description:
      "<b>Support Nature. Built to Last.</b>\n\n\nMeshco's <b>Steel Growing Stakes</b> offer long-lasting, reliable support for plants, vines, and saplings in agricultural, landscaping, and horticultural applications. Manufactured from durable steel and coated for weather resistance, these stakes are designed to withstand harsh outdoor conditions while promoting healthy, upright growth.",
    layoutType: 'standard',
    images: ['/products/Utility/growing-stakes/meshco-growing-stake-1.webp'],
    specifications: [],
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
        id: 'applications',
        label: 'Applications',
        image: '/products/Utility/growing-stakes/applications.png',
        content: [
          'Support for young trees and saplings',
          'Training of grapevines and fruit trees',
          'Staking of vegetable plants like tomatoes, beans, and chillies',
          'Ornamental garden support for climbers and shrubs',
          'Commercial vineyards, orchards, and nurseries',
          'Loved by:',
          'Wine estates and commercial vineyards\nLandscape contractors and nurseries\nSmall-scale farmers and home gardeners\nMunicipal parks and roadside planting teams',
          'Grow with confidence. Stake with Meshco.',
          "Whether you're cultivating crops, establishing an orchard, or maintaining decorative gardens, Meshco's steel growing stakes give your plants the strength to stand tall; season after season.",
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        imageMaxWidth: '70%',
        image: '/products/Utility/growing-stakes/benefits.png',
        content: [
          'Why Choose Meshco Growing Stakes?',
          'Durable steel core provides superior strength over bamboo or wooden stakes',
          'Weather-resistant coatings extend service life',
          'Available in multiple profiles and finishes to suit soil types and climate conditions',
          'Easy to install, handle, and reposition',
        ],
      },
    ],
    relatedProductKeys: [
      'utility-specimesh-panels',
      'fencing-standards',
      'fencing-droppers',
      'utility-precision-welded-mesh',
      'wire-hard-drawn-wire',
    ],
  },
  'utility-specimesh-panels': {
    description:
      "<b>Engineered Precision. Tailored Strength.</b>\n\n\n<b>SpeciMesh Panels</b> are Meshco's premium range of <b>customisable welded mesh panels</b>, manufactured to meet the exacting demands of contractors, fabricators, engineers, and OEMs. Whether you're reinforcing, enclosing, securing, or fabricating, SpeciMesh offers the flexibility and consistency your project needs.",
    layoutType: 'standard',
    images: [
      '/products/Utility/specimesh-panels/meshco-specimesh-panels_1.png',
      '/products/Utility/specimesh-panels/meshco-specimesh-panel-p4-1.webp',
      'public/products/Utility/specimesh-panels/meshco-specimesh-panel-padel-court-2.webp',
      'public/products/Utility/specimesh-panels/meshco-specimesh-panel-cage-3.webp',
    ],
    specifications: [],
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
        imageMaxWidth: '60%',
        image: '/products/Utility/specimesh-panels/features.png',
        content: [
          'Wire Diameter:',
          '2.0mm to 6.0mm',
          'Mesh Aperture Sizes:',
          '50mmx25mm, 50mmx50mm and 100mmx50mm (custom spacings available)',
          'Panel Sizes:',
          'Standard panels of 2.4m by 1.2m',
          'Material Options:',
          'Bright (bare) hard drawn wire\nGalvanised wire\nPlascoat thermoplastic coated',
          'Welded at every intersection for superior structural integrity',
        ],
      },
      {
        id: 'applications',
        label: 'Applications',
        image: '/products/Utility/specimesh-panels/applications.png',
        content: [
          'SpeciMesh is trusted across industries for its adaptability and structural reliability. Typical applications include:',
          'Machine and equipment guards',
          'Fabrication of cages, trolleys, and storage racks',
          'Agricultural pens and trellising systems',
          'Construction reinforcement panels',
          'Security barriers and screening',
          'Architectural and industrial enclosures',
          'OEM component manufacturing',
        ],
      },
      {
        id: 'customisation',
        label: 'Customisation',
        imageMaxWidth: '60%',
        image: '/products/Utility/specimesh-panels/customisation.png',
        content: [
          'Panel length, width, and wire spacing tailored to project requirements',
          'Edge trimming or overhangs available',
          'Coating and finish options to suit indoor or outdoor use',
        ],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        imageMaxWidth: '50%',
        image: '/products/Utility/specimesh-panels/benefits.png',
        content: [
          "Why Choose Meshco's SpeciMesh?",
          'Precision welding ensures strength and rigidity',
          'Locally manufactured - under strict quality controls',
          'Full control over material grade, aperture size, and dimensions',
          "Supported by Meshco's in-house technical and sales teams",
        ],
      },
      {
        id: 'packaging',
        label: 'Packaging',
        imageMaxWidth: '80%',
        image: '/products/Utility/specimesh-panels/packaging.png',
        content: [
          'Packaging & Delivery:',
          'Supplied flat or stacked in bulk',
          'Protective edge wrapping available for sensitive applications',
          'Delivered worldwide',
          'The panel that adapts to your purpose.:',
          "Whether you're building custom cages or reinforcing critical structures, SpeciMesh Panels are built to serve with precision. Speak to our team to specify your exact requirements and we'll manufacture to match.",
        ],
      },
    ],
    relatedProductKeys: [
      'utility-specimesh-panels',
      'fencing-standards',
      'fencing-droppers',
      'utility-precision-welded-mesh',
      'wire-hard-drawn-wire',
    ],
  },
}

export const productDetailConfigs: Record<string, ProductDetailConfig> = Object.fromEntries(
  Object.entries(productDetailData).map(([key, detail]) => [key, withProduct(key, detail)]),
)
