// Product type page configurations
export interface ProductTypeConfig {
  title: string
  backgroundImage: string
  hasFilter: boolean
  cardSize: 'large' | 'small'
  layoutType:
    | 'grid3x3'
    | 'grid3x3WithSpan'
    | 'grid3x1'
    | 'grid2x1'
    | 'grid3x2WithSpan'
    | 'grid4x3'
    | 'grid3x2'
  showTypesFilter?: boolean
  showIndustriesFilter?: boolean
  products: Array<{
    id: string
    name: string
    image: string
    slug: string
    type?: string
    industry?: string
  }>
  spanningProduct?: {
    id: string
    name: string
    image: string
    slug: string
    type?: string
    industry?: string
  }
}

// Reinforcing products configuration
export const reinforcingConfig: ProductTypeConfig = {
  title: 'Reinforcing',
  backgroundImage: '/reinforcing.png',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x2',
  products: [
    {
      id: '1',
      name: 'Brickforce',
      image: '/placeholder.svg',
      slug: 'brickforce',
      type: 'Reinforcing',
      industry: 'Construction',
    },
    {
      id: '2',
      name: 'Reinforcing Mesh',
      image: '/placeholder.svg',
      slug: 'reinforcing-mesh',
      type: 'Reinforcing',
      industry: 'Construction',
    },
    {
      id: '3',
      name: 'Hoop Iron',
      image: '/placeholder.svg',
      slug: 'hoop-iron',
      type: 'Reinforcing',
      industry: 'Construction',
    },
    {
      id: '4',
      name: 'Cavity Wall Ties',
      image: '/placeholder.svg',
      slug: 'cavity-wall-ties',
      type: 'Reinforcing',
      industry: 'Construction',
    },
    {
      id: '5',
      name: 'Reinforcing Steel',
      image: '/placeholder.svg',
      slug: 'reinforcing-steel',
      type: 'Reinforcing',
      industry: 'Construction',
    },
    {
      id: '6',
      name: 'Ceramic Door Anchors',
      image: '/placeholder.svg',
      slug: 'ceramic-door-anchors',
      type: 'Reinforcing',
      industry: 'Construction',
    },
  ],
}

// WireWall products configuration
export const wirewallConfig: ProductTypeConfig = {
  title: 'WireWall',
  backgroundImage: '/wirewallfencing.jpg', // Using existing image
  hasFilter: true,
  cardSize: 'small',
  layoutType: 'grid4x3',
  showTypesFilter: false,
  showIndustriesFilter: true,
  products: [
    {
      id: '1',
      name: 'DoubleWall (12.5mm x 12.5mm)',
      image: '/placeholder.svg',
      slug: 'doublewall',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '2',
      name: '355 (4mm on 5.6mm - 75mm x 12.7mm)',
      image: '/placeholder.svg',
      slug: '355',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '3',
      name: '358 (4mm on 4mm - 75mm x 12.7mm)',
      image: '/placeholder.svg',
      slug: '358',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '4',
      name: '3510 (3mm on 4mm - 75mm x 12.7mm)',
      image: '/placeholder.svg',
      slug: '3510',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '5',
      name: '3110 (3mm on 4mm - 75mm x 25mm)',
      image: '/placeholder.svg',
      slug: '3110',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '6',
      name: '3210 (3mm on 4mm - 75mm x 50mm)',
      image: '/placeholder.svg',
      slug: '3210',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '7',
      name: 'AF100 (4mm on 4mm - 50mm x 100mm)',
      image: '/placeholder.svg',
      slug: 'af100',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '8',
      name: 'Gates',
      image: '/placeholder.svg',
      slug: 'gates',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '9',
      name: 'Spikes',
      image: '/placeholder.svg',
      slug: 'spikes',
      type: 'WireWall',
      industry: 'Construction',
    },
    {
      id: '10',
      name: 'UnderDig Panel',
      image: '/placeholder.svg',
      slug: 'underdig-panel',
      type: 'WireWall',
      industry: 'Construction',
    },
  ],
}

// Wire products configuration
export const wireConfig: ProductTypeConfig = {
  title: 'Wire',
  backgroundImage: '/wire.jpg', // Using existing image
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x3WithSpan',
  products: [
    {
      id: '1',
      name: 'Hard Drawn Wire',
      image: '/placeholder.svg',
      slug: 'hard-drawn-wire',
      type: 'Wire',
      industry: 'Construction',
    },
    {
      id: '2',
      name: 'Black Annealed Wire',
      image: '/placeholder.svg',
      slug: 'black-annealed-wire',
      type: 'Wire',
      industry: 'Construction',
    },
    {
      id: '3',
      name: 'Galvanised Wire',
      image: '/placeholder.svg',
      slug: 'galvanised-wire',
      type: 'Wire',
      industry: 'Construction',
    },
    {
      id: '4',
      name: 'High Strain Wire',
      image: '/placeholder.svg',
      slug: 'high-strain-wire',
      type: 'Wire',
      industry: 'Construction',
    },
    {
      id: '5',
      name: 'PVC Coated Wire',
      image: '/placeholder.svg',
      slug: 'pvc-coated-wire',
      type: 'Wire',
      industry: 'Construction',
    },
    {
      id: '6',
      name: 'Straight & Cut Wire',
      image: '/placeholder.svg',
      slug: 'straight-cut-wire',
      type: 'Wire',
      industry: 'Construction',
    },
  ],
  spanningProduct: {
    id: '7',
    name: 'High Strain Wire',
    image: '/placeholder.svg',
    slug: 'high-strain-wire',
    type: 'Wire',
    industry: 'Construction',
  },
}

export const fencingConfig: ProductTypeConfig = {
  title: 'Fencing',
  backgroundImage: '/fencing.png',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x3WithSpan',
  products: [
    {
      id: '1',
      name: 'Weld Fence Mesh',
      image: '/placeholder.svg',
      slug: 'weld-fence-mesh',
      type: 'Fencing',
      industry: 'Property',
    },
    {
      id: '2',
      name: 'Weld Fence Mesh (PVC)',
      image: '/placeholder.svg',
      slug: 'weld-fence-mesh-pvc',
      type: 'Fencing',
      industry: 'Property',
    },
    {
      id: '3',
      name: 'Diamond Mesh',
      image: '/placeholder.svg',
      slug: 'diamond-mesh',
      type: 'Fencing',
      industry: 'Property',
    },
    {
      id: '4',
      name: 'Barbed Wire',
      image: '/placeholder.svg',
      slug: 'barbed-wire',
      type: 'Fencing',
      industry: 'Property',
    },
    {
      id: '5',
      name: 'Razor Wire - Flatwrap',
      image: '/placeholder.svg',
      slug: 'razor-wire-flatwrap',
      type: 'Fencing',
      industry: 'Property',
    },
    {
      id: '6',
      name: 'Razor Wire (BTC)',
      image: '/placeholder.svg',
      slug: 'razor-wire-btc',
      type: 'Fencing',
      industry: 'Property',
    },
    {
      id: '7',
      name: 'Field & Game Fence',
      image: '/placeholder.svg',
      slug: 'field-game-fence',
      type: 'Fencing',
      industry: 'Agricultural',
    },
    {
      id: '8',
      name: 'Hexagonal Wire Netting',
      image: '/placeholder.svg',
      slug: 'hexagonal-wire-netting',
      type: 'Fencing',
      industry: 'Property',
    },
    {
      id: '9',
      name: 'Standards',
      image: '/placeholder.svg',
      slug: 'standards',
      type: 'Fencing',
      industry: 'Property',
    },
  ],
  spanningProduct: {
    id: '10',
    name: 'Droppers',
    image: '/placeholder.svg',
    slug: 'droppers',
    type: 'Fencing',
    industry: 'Property',
  },
}

export const fastenersConfig: ProductTypeConfig = {
  title: 'Fasteners',
  backgroundImage: '/fasteners.png',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x2WithSpan',
  products: [
    {
      id: '1',
      name: 'Round Wire Nails',
      image: '/placeholder.svg',
      slug: 'round-wire-nails',
      type: 'Fasteners',
      industry: 'Manufacturing',
    },
    {
      id: '2',
      name: 'Staples',
      image: '/placeholder.svg',
      slug: 'staples',
      type: 'Fasteners',
      industry: 'Manufacturing',
    },
    {
      id: '3',
      name: 'Clout Nails',
      image: '/placeholder.svg',
      slug: 'clout-nails',
      type: 'Fasteners',
      industry: 'Manufacturing',
    },
    {
      id: '4',
      name: 'Hog Rings',
      image: '/placeholder.svg',
      slug: 'hog-rings',
      type: 'Fasteners',
      industry: 'Manufacturing',
    },
    {
      id: '5',
      name: 'Hog Ring Pliers',
      image: '/placeholder.svg',
      slug: 'hog-ring-pliers',
      type: 'Fasteners',
      industry: 'Manufacturing',
    },
    {
      id: '6',
      name: 'Cutting Nippers',
      image: '/placeholder.svg',
      slug: 'cutting-nippers',
      type: 'Fasteners',
      industry: 'Manufacturing',
    },
  ],
  spanningProduct: {
    id: '7',
    name: 'Droppers',
    image: '/placeholder.svg',
    slug: 'droppers',
    type: 'Fasteners',
    industry: 'Manufacturing',
  },
}

export const miningSupportConfig: ProductTypeConfig = {
  title: 'Mining Support',
  backgroundImage: '/placeholder.svg',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid2x1',
  products: [
    {
      id: '1',
      name: 'Mining Mesh',
      image: '/placeholder.svg',
      slug: 'mining-mesh',
      type: 'Mining Support',
      industry: 'Mining',
    },
    {
      id: '2',
      name: 'Backfill Mesh',
      image: '/placeholder.svg',
      slug: 'backfill-mesh',
      type: 'Mining Support',
      industry: 'Mining',
    },
  ],
}

export const utilityConfig: ProductTypeConfig = {
  title: 'Utility',
  backgroundImage: '/placeholder.svg',
  hasFilter: false,
  cardSize: 'large',
  layoutType: 'grid3x1',
  products: [
    {
      id: '1',
      name: 'Precision Welded Mesh',
      image: '/placeholder.svg',
      slug: 'precision-welded-mesh',
      type: 'Utility',
      industry: 'Construction',
    },
    {
      id: '2',
      name: 'Growing Stakes',
      image: '/placeholder.svg',
      slug: 'growing-stakes',
      type: 'Utility',
      industry: 'Agricultural',
    },
    {
      id: '3',
      name: 'SpeciMesh Panels',
      image: '/placeholder.svg',
      slug: 'specimesh-panels',
      type: 'Utility',
      industry: 'Construction',
    },
  ],
}

export const productTypeConfigs: Record<string, ProductTypeConfig> = {
  reinforcing: reinforcingConfig,
  wirewall: wirewallConfig,
  wire: wireConfig,
  fencing: fencingConfig,
  fasteners: fastenersConfig,
  'mining-support': miningSupportConfig,
  utility: utilityConfig,
}
