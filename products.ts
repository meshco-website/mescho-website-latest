// Single source of truth for all products

export interface Product {
  id: string
  name: string
  title?: string
  image: string
  slug: string
  type: string
  industry: string
  category: string
}

// All products organized by category
export const products: Product[] = [
  // Wire Products
  {
    id: '1',
    name: 'Hard Drawn Wire',
    title: 'Hard Drawn Wire',
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
    image: '/products/Wire/galvanised-wire/meshco-galvanised-wire.webp',
    slug: 'galvanised-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '3',
    name: 'High Strain Wire',
    title: 'High Strain Wire',
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
    image: '/products/Wire/black-annealed-wire/meshco-black-annealed-wire.webp',
    slug: 'black-annealed-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '5',
    name: 'PVC Coated Wire',
    title: 'PVC Coated Wire',
    image: '/products/Wire/pvc-coated-wire/meshco-pvc-coated-wire.webp',
    slug: 'pvc-coated-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '6',
    name: 'Straight & Cut Wire',
    title: 'Straight & Cut Wire',
    image: '/products/Wire/straight-and-cut-wire/meshco-straight-cut-wire.webp',
    slug: 'straight-cut-wire',
    type: 'Wire',
    industry: 'Construction',
    category: 'wire',
  },
  {
    id: '7',
    name: 'Slab Wire',
    title: 'Slab Wire (Straight & Cut Wire for Precast Concrete)',
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
    image: '/products/WireWall/meshco-wirewall-post-baseplate.webp',
    slug: 'doublewall',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '9',
    name: '355 (75 x 12.7mm)',
    title: '355 Panel (75x12.7mm)',
    image: '/products/WireWall/355-panel/meshco-wirewall-355.webp',
    slug: '355',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '10',
    name: '358 (75x 8.9mm)',
    title: '358 Panel (75x12.7mm)',
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
    image: '/products/WireWall/3510/meshco-wirewall-3510.webp',
    slug: '3510',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '12',
    name: '3110 Panel (75 x 25mm)',
    title: '3110 Medium Panel (75mm x 25mm)',
    image: '/products/WireWall/3110/meshco-wirewall-3110.webp',
    slug: '3110',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '13',
    name: '3210 Panel (75x50mm)',
    title: '3210 Light Panel (75mm x 50mm)',
    image: '/products/WireWall/3210/meshco-wirewall-3210.webp',
    slug: '3210',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '14',
    name: 'AF100 Panel (50 x 100mm)',
    title: 'AF100 Panel (50 x 100mm)',
    image: '/products/WireWall/af-100/meshco-wirewall-af100.webp',
    slug: 'af100',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '15',
    name: 'Gates',
    title: 'Gates',
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
    image: '/products/WireWall/spikes/meshco-wirewall-spikes.webp',
    slug: 'spikes',
    type: 'WireWall',
    industry: 'Property',
    category: 'wirewall',
  },
  {
    id: '17',
    name: 'UnderDigs',
    title: 'WireWall UnderDig Panel',
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
    image: '/products/Reinforcing/cavity-wall-ties/meshco-zpattern-cavity-wall-tie-4.webp',
    slug: 'cavity-wall-ties',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '22',
    name: 'Reinforcing Steel Bars (Rebar)',
    title: 'Reinforcing Steel Bars (Rebar)',
    image: '/products/Reinforcing/reinforcing-steel-bars/meshco-reinforcing-bar-rebar-1.webp',
    slug: 'reinforcing-steel',
    type: 'Reinforcing',
    industry: 'Construction',
    category: 'reinforcing',
  },
  {
    id: '23',
    name: 'Ceramic Door Anchors',
    title: 'Ceramic Door Anchors',
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
    image: '/products/Fencing/barbed-wire/meshco-barbed-wire-1.webp',
    slug: 'barbed-wire',
    type: 'Fencing',
    industry: 'Property',
    category: 'fencing',
  },
  {
    id: '28',
    name: 'Razor Wire - Flatwrap',
    title: 'Razor Wire - Flatwrap',
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
    image: '/products/Fasteners/fencing-staples/meshco-fence-staple-plain-2.webp',
    slug: 'staples',
    type: 'Fasteners',
    industry: 'Manufacturing',
    category: 'fasteners',
  },
  {
    id: '37',
    name: 'Clout Nails',
    title: 'Clout Nails',
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
    image: '/products/Utility/specimesh-panels/meshco-specimesh-panel-p4-1.webp',
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
