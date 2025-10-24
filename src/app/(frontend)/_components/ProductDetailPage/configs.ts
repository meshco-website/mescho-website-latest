interface Specification {
  label: string
  value: string
}

interface TechnicalData {
  property: string
  value: string
  unit?: string
}

interface RelatedProduct {
  id: string
  name: string
  image: string
  slug: string
  category: string
}

interface ProductDetailConfig {
  title: string
  category: string
  heroImage: string
  description: string
  specifications: Specification[]
  applications: string[]
  technicalData: TechnicalData[]
  relatedProducts: RelatedProduct[]
}

// Hard Drawn Wire
export const hardDrawnWireConfig: ProductDetailConfig = {
  title: 'Hard Drawn Wire',
  category: 'Wire',
  heroImage: '/product.png',
  description:
    'High-quality hard drawn wire manufactured to meet the most demanding industrial and construction requirements. Our wire is produced using premium steel and advanced drawing processes to ensure superior strength, durability, and consistent performance.',
  specifications: [
    { label: 'Material', value: 'High Carbon Steel' },
    { label: 'Diameter Range', value: '1.0mm - 6.0mm' },
    { label: 'Tensile Strength', value: '1400-1800 N/mm²' },
    { label: 'Surface Finish', value: 'Bright' },
    { label: 'Standards', value: 'SANS 1026, BS 1052' },
  ],
  applications: [
    'Reinforcement',
    'Crack Prevention',
    'Durability',
    'Installation',
    'Applications',
    'High-Grade Steel',
    'Galvanisation',
    'High tensile strength',
    'Strong welds at every intersection',
    'Consistent spacing',
    'Tightly wound rolls',
    'Flexible but not flimsy',
  ],
  technicalData: [
    { property: 'Increases tensile strength', value: '', unit: '' },
    { property: 'Minimizes cracking', value: '', unit: '' },
    { property: 'Increases masonry structure lifespan', value: '', unit: '' },
    { property: 'Placed between brick layers during construction', value: '', unit: '' },
    {
      property:
        'Used in residential and commercial projects, high wind load areas, seismic risks, unstable soil conditions',
      value: '',
      unit: '',
    },
    { property: 'Made from high-quality, low-carbon steel', value: '', unit: '' },
    { property: 'Thicker zinc coating prevents rust', value: '', unit: '' },
    { property: 'Resists bending and breaking', value: '', unit: '' },
    { property: 'Prevents breaking during handling', value: '', unit: '' },
    { property: 'Ensures even load distribution', value: '', unit: '' },
    { property: 'For easier transport and handling', value: '', unit: '' },
    { property: 'Rolls uncoil smoothly', value: '', unit: '' },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'Galvanised Wire',
      image: '/product.png',
      slug: 'galvanised-wire',
      category: 'wire',
    },
    {
      id: '2',
      name: 'High Strain Wire',
      image: '/product.png',
      slug: 'high-strain-wire',
      category: 'wire',
    },
    {
      id: '3',
      name: 'PVC Coated Wire',
      image: '/product.png',
      slug: 'pvc-coated-wire',
      category: 'wire',
    },
    {
      id: '4',
      name: 'Black Annealed Wire',
      image: '/product.png',
      slug: 'black-annealed-wire',
      category: 'wire',
    },
    {
      id: '5',
      name: 'Straight Cut Wire',
      image: '/product.png',
      slug: 'straight-cut-wire',
      category: 'wire',
    },
  ],
}

// Brickforce
export const brickforceConfig: ProductDetailConfig = {
  title: 'Brickforce',
  category: 'Reinforcing',
  heroImage: '/product.png',
  description:
    'Premium brickforce reinforcement mesh designed to enhance the structural integrity of brickwork and masonry. Our brickforce provides superior bonding and crack resistance, ensuring long-lasting construction quality.',
  specifications: [
    { label: 'Material', value: 'High Tensile Steel' },
    { label: 'Wire Diameter', value: '3.0mm - 4.0mm' },
    { label: 'Mesh Size', value: '100mm x 100mm' },
    { label: 'Coating', value: 'Galvanised or Uncoated' },
    { label: 'Standards', value: 'SANS 1026, BS 4483' },
  ],
  applications: [
    'Brick wall reinforcement',
    'Masonry construction',
    'Cavity wall construction',
    'Retaining walls',
    'Structural brickwork',
  ],
  technicalData: [
    { property: 'Tensile Strength', value: '500-550', unit: 'N/mm²' },
    { property: 'Yield Strength', value: '450-500', unit: 'N/mm²' },
    { property: 'Elongation', value: '12-15', unit: '%' },
    { property: 'Weight per m²', value: '1.2-2.0', unit: 'kg' },
  ],
  relatedProducts: [
    {
      id: '4',
      name: 'Reinforcing Mesh',
      image: '/product.png',
      slug: 'reinforcing-mesh',
      category: 'reinforcing',
    },
    {
      id: '5',
      name: 'Hoop Iron',
      image: '/product.png',
      slug: 'hoop-iron',
      category: 'reinforcing',
    },
    {
      id: '6',
      name: 'Cavity Wall Ties',
      image: '/product.png',
      slug: 'cavity-wall-ties',
      category: 'reinforcing',
    },
  ],
}

// Welded Fence Mesh
export const weldedFenceMeshConfig: ProductDetailConfig = {
  title: 'Welded Fence Mesh',
  category: 'Fencing',
  heroImage: '/product.png',
  description:
    'Durable welded fence mesh providing excellent security and visibility. Manufactured using precision welding techniques to ensure consistent quality and long-lasting performance in various environmental conditions.',
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
  relatedProducts: [
    {
      id: '7',
      name: 'Diamond Mesh',
      image: '/product.png',
      slug: 'diamond-mesh',
      category: 'fencing',
    },
    {
      id: '8',
      name: 'Barbed Wire',
      image: '/product.png',
      slug: 'barbed-wire',
      category: 'fencing',
    },
    {
      id: '9',
      name: 'Razor Wire',
      image: '/product.png',
      slug: 'razor-wire',
      category: 'fencing',
    },
  ],
}

// Configuration mapping
export const productDetailConfigs: Record<string, ProductDetailConfig> = {
  'wire-hard-drawn-wire': hardDrawnWireConfig,
  'reinforcing-brickforce': brickforceConfig,
  'fencing-welded-fence-mesh': weldedFenceMeshConfig,
  // Add more product configurations as needed
  'wire-galvanised-wire': hardDrawnWireConfig, // Using same config for now
  'wire-high-strain-wire': hardDrawnWireConfig, // Using same config for now
  'reinforcing-reinforcing-mesh': brickforceConfig, // Using same config for now
  'fencing-diamond-mesh': weldedFenceMeshConfig, // Using same config for now
}
