interface Specification {
  label: string
  value: string
}

// For WireWall products with complex table specifications
interface WireWallSpecification {
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

interface TechnicalData {
  property: string
  value: string
  unit?: string
}

interface TabData {
  id: string
  label: string
  content: string[]
}

interface RelatedProduct {
  id: string
  name: string
  image: string
  slug: string
  category: string
}

// Layout types for different product page structures
type LayoutType = 'standard' | 'wirewall' | 'simple'

interface ProductDetailConfig {
  title: string
  category: string
  heroImage: string
  description: string
  layoutType: LayoutType
  specifications: Specification[]
  wireWallSpecifications?: WireWallSpecification // Only for WireWall layout
  applications: string[]
  technicalData: TechnicalData[]
  tabs?: TabData[]
  relatedProducts: RelatedProduct[]
}

// Hard Drawn Wire
export const hardDrawnWireConfig: ProductDetailConfig = {
  title: 'Hard Drawn Wire',
  category: 'Wire',
  heroImage: '/product.png',
  layoutType: 'standard',
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
  relatedProducts: [
    {
      id: '1',
      name: 'Galvanised Wire',
      image: '/placeholder.svg',
      slug: 'galvanised-wire',
      category: 'wire',
    },
    {
      id: '2',
      name: 'High Strain Wire',
      image: '/placeholder.svg',
      slug: 'high-strain-wire',
      category: 'wire',
    },
    {
      id: '3',
      name: 'PVC Coated Wire',
      image: '/placeholder.svg',
      slug: 'pvc-coated-wire',
      category: 'wire',
    },
    {
      id: '4',
      name: 'Black Annealed Wire',
      image: '/placeholder.svg',
      slug: 'black-annealed-wire',
      category: 'wire',
    },
    {
      id: '5',
      name: 'Straight Cut Wire',
      image: '/placeholder.svg',
      slug: 'straight-cut-wire',
      category: 'wire',
    },
  ],
}

// Brickforce
export const brickforceConfig: ProductDetailConfig = {
  title: 'Galvanised Brickforce NHBRC and STANDARD',
  category: 'Reinforcing',
  heroImage: '/product.png',
  layoutType: 'standard',
  description:
    "Brickforce is a welded steel mesh used as horizontal reinforcement in masonry construction. It is laid in the mortar joints of brick or block walls to improve stability and reduce cracking.\n\nMeshco's Brickforce is manufactured from high-strength galvanised steel wire that is welded into a ladder-like mesh.",
  specifications: [
    { label: 'Standard', value: 'SANS 10400-A:2022' },
    { label: 'Length of Roll', value: '20m' },
    { label: 'Available Sizes', value: '57MM, 75MM, 100MM, 150MM, 230MM' },
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
    {
      property:
        'It increases the tensile strength of the wall by adding reinforcement between the mortar layers or rows of bricks.',
      value: '',
      unit: '',
    },
    {
      property:
        'Brickforce minimises the risk of cracking due to thermal expansion, contraction and structural settlement.',
      value: '',
      unit: '',
    },
    {
      property:
        'Increases the durability of masonry structures, making them last longer and maintaining their structural integrity.',
      value: '',
      unit: '',
    },
    {
      property:
        'Generally installed during masonry installation, steel strengthening being placed between brick lessons during the construction of the wall.',
      value: '',
      unit: '',
    },
    {
      property:
        'Common in residential and commercial construction projects, in particular in high wind load areas, seismic risks or unstable soil conditions. This form of reinforcement is often used in combination with other building practices to improve overall structural performance.',
      value: '',
      unit: '',
    },
    {
      property:
        'The best Brickforce is made from high-quality, low-carbon steel, which ensures strength without brittleness.',
      value: '',
      unit: '',
    },
    {
      property:
        'A thicker zinc coating (e.g., minimum 80g/m²) prevents rust and extends lifespan, especially in coastal or humid areas.',
      value: '',
      unit: '',
    },
    {
      property: 'Ensures the mesh resists bending and breaking under pressure.',
      value: '',
      unit: '',
    },
    {
      property: 'Prevent the mesh from breaking during handling or installation.',
      value: '',
      unit: '',
    },
    {
      property: 'Ensures even load distribution, reducing weak points in the wall.',
      value: '',
      unit: '',
    },
    { property: 'With uniform layers make transport and handling easier.', value: '', unit: '' },
    {
      property: 'Rolls uncoil smoothly without excessive bending or kinking.',
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
        'Thicker zinc coating (minimum 80g/m²) prevents rust and extends lifespan',
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
      id: 'benefits',
      label: 'Benefits',
      content: [
        'Increases tensile strength of masonry walls',
        'Minimises cracking from thermal expansion and contraction',
        'Reduces structural settlement issues',
        'Extends lifespan of masonry structures',
        'Improves overall structural performance',
        'Meets SANS 10400-A:2022 standards',
      ],
    },
    {
      id: 'installation',
      label: 'Installation',
      content: [
        'Installed during masonry construction',
        'Placed between brick layers in mortar joints',
        'Available in 20m rolls for easy handling',
        'Multiple sizes: 57MM, 75MM, 100MM, 150MM, 230MM',
        'Compatible with standard masonry practices',
        'Professional installation recommended',
      ],
    },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'Reinforcing Mesh',
      image: '/placeholder.svg',
      slug: 'reinforcing-mesh',
      category: 'reinforcing',
    },
    {
      id: '2',
      name: 'Hoop Iron',
      image: '/placeholder.svg',
      slug: 'hoop-iron',
      category: 'reinforcing',
    },
    {
      id: '3',
      name: 'Cavity Wall Ties',
      image: '/placeholder.svg',
      slug: 'cavity-wall-ties',
      category: 'reinforcing',
    },
    {
      id: '4',
      name: 'Reinforcing Steel',
      image: '/placeholder.svg',
      slug: 'reinforcing-steel',
      category: 'reinforcing',
    },
    {
      id: '5',
      name: 'Ceramic Door Anchors',
      image: '/placeholder.svg',
      slug: 'ceramic-door-anchors',
      category: 'reinforcing',
    },
  ],
}

// Welded Fence Mesh
export const weldedFenceMeshConfig: ProductDetailConfig = {
  title: 'Welded Fence Mesh',
  category: 'Fencing',
  heroImage: '/product.png',
  layoutType: 'simple',
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
  tabs: [
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
  relatedProducts: [
    {
      id: '7',
      name: 'Diamond Mesh',
      image: '/placeholder.svg',
      slug: 'diamond-mesh',
      category: 'fencing',
    },
    {
      id: '8',
      name: 'Barbed Wire',
      image: '/placeholder.svg',
      slug: 'barbed-wire',
      category: 'fencing',
    },
    {
      id: '9',
      name: 'Razor Wire',
      image: '/placeholder.svg',
      slug: 'razor-wire',
      category: 'fencing',
    },
  ],
}

// WireWall 355 Panel (75x12.7mm) - Complex specifications table
export const wireWall355Config: ProductDetailConfig = {
  title: '355 Panel (75x12.7mm)',
  category: 'WireWall',
  heroImage: '/product.png',
  layoutType: 'wirewall',
  description:
    'Extreme perimeter protection for the highest security sites. The WireWall 355 Supermax panel is engineered for the most demanding security environments, including supermax prisons, defence facilities, and high-risk government installations.\n\nHistorically government specifications called for a double 4mm vertical wire panel. However the weld strength between the three wires was found to be inadequate, with welds coming apart on site either by themselves or through the application of minimal force. This led to requests for a new, superior specification. Enter the WireWall 355 Supermax. The weight per meter of the SuperMax panel is the same as the double 4mm wire option, but with superior weld strength and an increased difficulty to cut. The SuperMax design also allows the same security across the full height of panels while still allowing the top of the panel to be bowed.\n\nWith its 5.6mm vertical wires combined with 4.0mm horizontal wires, the 355 Supermax provides unparalleled rigidity and resistance to impact, forcing, and cutting.',
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
  relatedProducts: [
    {
      id: '1',
      name: 'WireWall 3110',
      image: '/placeholder.svg',
      slug: '3110',
      category: 'wirewall',
    },
    {
      id: '2',
      name: 'WireWall 3510',
      image: '/placeholder.svg',
      slug: '3510',
      category: 'wirewall',
    },
    {
      id: '3',
      name: 'WireWall AF100',
      image: '/placeholder.svg',
      slug: 'af100',
      category: 'wirewall',
    },
    {
      id: '4',
      name: 'WireWall Spike',
      image: '/placeholder.svg',
      slug: 'spikes',
      category: 'wirewall',
    },
    {
      id: '5',
      name: 'WireWall 3410',
      image: '/placeholder.svg',
      slug: '3410',
      category: 'wirewall',
    },
  ],
}

// WireWall Underdig Panel - Simple features list
export const wireWallUnderdigConfig: ProductDetailConfig = {
  title: 'Underdig Panel',
  category: 'WireWall',
  heroImage: '/product.png',
  layoutType: 'wirewall',
  description:
    "Prevent intrusions from below. Meshco's Underdig (Anti-burrow) panels are designed to prevent unauthorised entry by stopping attempts to dig underneath perimeter fences. Manufactured from high-strength welded mesh, these panels are buried below ground level and securely fixed to the main fence line, creating an effective underground barrier against intrusion.\n\nUsed in combination with above ground fencing systems such as WireWall, underdig panels ensure that perimeter security extends below ground as well as above it.",
  specifications: [
    { label: 'Material', value: 'High-strength welded mesh' },
    { label: 'Installation', value: 'Below ground level' },
    { label: 'Compatibility', value: 'WireWall and other perimeter fencing systems' },
  ],
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
    {
      id: 'specifications',
      label: 'Specifications',
      content: ['No data'],
    },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'WireWall 3110',
      image: '/placeholder.svg',
      slug: '3110',
      category: 'wirewall',
    },
    {
      id: '2',
      name: 'WireWall 3510',
      image: '/placeholder.svg',
      slug: '3510',
      category: 'wirewall',
    },
    {
      id: '3',
      name: 'WireWall AF100',
      image: '/placeholder.svg',
      slug: 'af100',
      category: 'wirewall',
    },
    {
      id: '4',
      name: 'WireWall Spike',
      image: '/placeholder.svg',
      slug: 'spikes',
      category: 'wirewall',
    },
    {
      id: '5',
      name: 'WireWall 3410',
      image: '/placeholder.svg',
      slug: '3410',
      category: 'wirewall',
    },
  ],
}

// WireWall Spikes - Types of spike strips
export const wireWallSpikesConfig: ProductDetailConfig = {
  title: 'Spikes',
  category: 'WireWall',
  heroImage: '/product.png',
  layoutType: 'wirewall',
  description:
    "Meshco's Spike Strips are designed for maximum deterrence, to enhance perimeter protection by preventing climbing or tampering on WireWall and other fencing systems. Manufactured from heavy-duty steel and engineered for durability, our spike strips provide a sharp, visible, and highly effective deterrent to intrusion.\n\nAvailable in four profiles — Standard Spike, Heavy Spike, Raptor Tooth, and Assegai — Meshco spike strips deliver a layered security solution for any site, from commercial to high-security infrastructure.",
  specifications: [
    { label: 'Material', value: 'Heavy-duty steel' },
    { label: 'Profiles Available', value: '4 different types' },
    { label: 'Application', value: 'WireWall and other fencing systems' },
  ],
  applications: [
    'Standard Spike - Traditional deterrent profile. Economical and effective for general perimeter protection. Applications: Commercial, residential, light industrial.',
    'Heavy Spike - Larger, reinforced spike profile for maximum physical deterrence. Designed for high-risk perimeters requiring extra strength. Applications: Industrial sites, logistics hubs, substations.',
    'Raptor Tooth - Aggressive design with angled teeth for maximum bite. Creates a more intimidating visual deterrent. Applications: High-security zones, correctional facilities, restricted government areas.',
    'Assegai - Long, tapered spear-point design inspired by traditional assegai blades. Provides extreme anti-climb resistance with striking visual presence. Applications: Military, airports, critical infrastructure.',
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
        'Standard Spike - Traditional deterrent profile for general perimeter protection',
        'Heavy Spike - Larger, reinforced profile for maximum physical deterrence',
        'Raptor Tooth - Aggressive design with angled teeth for maximum bite',
        'Assegai - Long, tapered spear-point design for extreme anti-climb resistance',
      ],
    },
    {
      id: 'specifications',
      label: 'Specifications',
      content: ['No data'],
    },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'WireWall 3110',
      image: '/placeholder.svg',
      slug: '3110',
      category: 'wirewall',
    },
    {
      id: '2',
      name: 'WireWall 3510',
      image: '/placeholder.svg',
      slug: '3510',
      category: 'wirewall',
    },
    {
      id: '3',
      name: 'WireWall AF100',
      image: '/placeholder.svg',
      slug: 'af100',
      category: 'wirewall',
    },
    {
      id: '4',
      name: 'WireWall 355 Panel',
      image: '/placeholder.svg',
      slug: '355',
      category: 'wirewall',
    },
    {
      id: '5',
      name: 'WireWall 3410',
      image: '/placeholder.svg',
      slug: '3410',
      category: 'wirewall',
    },
  ],
}

// WireWall 3510 Panel - Standard WireWall layout
export const wireWall3510Config: ProductDetailConfig = {
  title: '3510 Panel',
  category: 'WireWall',
  heroImage: '/product.png',
  layoutType: 'wirewall',
  description:
    'The WireWall 3510 panel provides excellent security and durability for perimeter protection. Manufactured with precision welding and high-quality materials, this panel offers reliable protection for various security applications.',
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
  relatedProducts: [
    {
      id: '1',
      name: 'WireWall 355 Panel',
      image: '/placeholder.svg',
      slug: '355',
      category: 'wirewall',
    },
    {
      id: '2',
      name: 'WireWall 3110',
      image: '/placeholder.svg',
      slug: '3110',
      category: 'wirewall',
    },
    {
      id: '3',
      name: 'WireWall AF100',
      image: '/placeholder.svg',
      slug: 'af100',
      category: 'wirewall',
    },
    {
      id: '4',
      name: 'WireWall Spikes',
      image: '/placeholder.svg',
      slug: 'spikes',
      category: 'wirewall',
    },
    {
      id: '5',
      name: 'WireWall 3410',
      image: '/placeholder.svg',
      slug: '3410',
      category: 'wirewall',
    },
  ],
}

// WireWall AF100 Panel - Anti-climb features
export const wireWallAF100Config: ProductDetailConfig = {
  title: 'AF100 Panel',
  category: 'WireWall',
  heroImage: '/product.png',
  layoutType: 'wirewall',
  description:
    'The WireWall AF100 panel features advanced anti-climb design elements that make it extremely difficult for intruders to scale. This panel combines traditional security with modern anti-climb technology for maximum perimeter protection.',
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
      id: 'download',
      label: 'Download',
      content: ['No data'],
    },
    {
      id: 'specifications',
      label: 'Specifications',
      content: ['No data'],
    },
    {
      id: 'gallery',
      label: 'Gallery',
      content: ['No data'],
    },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'WireWall 355 Panel',
      image: '/placeholder.svg',
      slug: '355',
      category: 'wirewall',
    },
    {
      id: '2',
      name: 'WireWall 3510',
      image: '/placeholder.svg',
      slug: '3510',
      category: 'wirewall',
    },
    {
      id: '3',
      name: 'WireWall Spikes',
      image: '/placeholder.svg',
      slug: 'spikes',
      category: 'wirewall',
    },
    {
      id: '4',
      name: 'WireWall Underdig Panel',
      image: '/placeholder.svg',
      slug: 'underdig-panel',
      category: 'wirewall',
    },
    {
      id: '5',
      name: 'WireWall 3410',
      image: '/placeholder.svg',
      slug: '3410',
      category: 'wirewall',
    },
  ],
}

// Diamond Mesh Fencing - Simple layout with features list
export const diamondMeshConfig: ProductDetailConfig = {
  title: 'Diamond Mesh',
  category: 'Fencing',
  heroImage: '/product.png',
  layoutType: 'simple',
  description:
    'Diamond mesh fencing provides excellent security and visibility for various applications. The diamond-shaped openings offer superior strength and durability while maintaining clear sight lines for security purposes.',
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
  relatedProducts: [
    {
      id: '1',
      name: 'Welded Fence Mesh',
      image: '/placeholder.svg',
      slug: 'welded-fence-mesh',
      category: 'fencing',
    },
    {
      id: '2',
      name: 'Barbed Wire',
      image: '/placeholder.svg',
      slug: 'barbed-wire',
      category: 'fencing',
    },
    {
      id: '3',
      name: 'Razor Wire',
      image: '/placeholder.svg',
      slug: 'razor-wire',
      category: 'fencing',
    },
    {
      id: '4',
      name: 'Field Game Fence',
      image: '/placeholder.svg',
      slug: 'field-game-fence',
      category: 'fencing',
    },
    {
      id: '5',
      name: 'Hexagonal Netting',
      image: '/placeholder.svg',
      slug: 'hexagonal-netting',
      category: 'fencing',
    },
  ],
}

// Barbed Wire - Security fencing
export const barbedWireConfig: ProductDetailConfig = {
  title: 'Barbed Wire',
  category: 'Fencing',
  heroImage: '/product.png',
  layoutType: 'simple',
  description:
    'High-quality barbed wire designed for maximum security and deterrence. Our barbed wire is manufactured using premium steel and advanced coating processes to ensure long-lasting performance in harsh environmental conditions.',
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
      id: 'applications',
      label: 'Applications',
      content: [
        'Perimeter security fencing',
        'Agricultural boundary protection',
        'Industrial facility security',
        'Military and defence installations',
        'Correctional facility fencing',
        'High-security area protection',
        'Livestock containment',
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
  relatedProducts: [
    {
      id: '1',
      name: 'Razor Wire',
      image: '/placeholder.svg',
      slug: 'razor-wire',
      category: 'fencing',
    },
    {
      id: '2',
      name: 'Diamond Mesh',
      image: '/placeholder.svg',
      slug: 'diamond-mesh',
      category: 'fencing',
    },
    {
      id: '3',
      name: 'Welded Fence Mesh',
      image: '/placeholder.svg',
      slug: 'welded-fence-mesh',
      category: 'fencing',
    },
    {
      id: '4',
      name: 'RazorWall',
      image: '/placeholder.svg',
      slug: 'razorwall',
      category: 'fencing',
    },
    {
      id: '5',
      name: 'Field Game Fence',
      image: '/placeholder.svg',
      slug: 'field-game-fence',
      category: 'fencing',
    },
  ],
}

// Razor Wire - High-security fencing
export const razorWireConfig: ProductDetailConfig = {
  title: 'Razor Wire',
  category: 'Fencing',
  heroImage: '/product.png',
  layoutType: 'simple',
  description:
    'Professional-grade razor wire providing the highest level of security protection. Manufactured with precision-cut razor blades and high-tensile steel core, this wire offers maximum deterrence against intrusion attempts.',
  specifications: [
    { label: 'Material', value: 'High-tensile steel core' },
    { label: 'Razor Blades', value: 'Precision-cut stainless steel' },
    { label: 'Core Diameter', value: '2.5mm - 3.0mm' },
    { label: 'Coating', value: 'Galvanised or stainless steel' },
    { label: 'Length', value: '50m - 100m per coil' },
  ],
  applications: [
    'Maximum security perimeters',
    'Military installations',
    'Correctional facilities',
    'Government buildings',
    'Critical infrastructure',
    'High-value asset protection',
    'Border security',
  ],
  technicalData: [
    { property: 'Maximum security protection', value: '', unit: '' },
    { property: 'Precision-cut razor blades', value: '', unit: '' },
    { property: 'High-tensile steel construction', value: '', unit: '' },
    { property: 'Corrosion-resistant materials', value: '', unit: '' },
    { property: 'Professional installation required', value: '', unit: '' },
  ],
  tabs: [
    {
      id: 'features',
      label: 'Features',
      content: [
        'High-tensile steel core construction',
        'Precision-cut stainless steel razor blades',
        'Core diameter options (2.5mm - 3.0mm)',
        'Galvanised or stainless steel coating',
        'Available in 50m - 100m coils',
      ],
    },
    {
      id: 'applications',
      label: 'Applications',
      content: [
        'Maximum security perimeters',
        'Military installations',
        'Correctional facilities',
        'Government buildings',
        'Critical infrastructure',
        'High-value asset protection',
        'Border security',
      ],
    },
    {
      id: 'benefits',
      label: 'Benefits',
      content: [
        'Maximum security protection',
        'Precision-cut razor blades',
        'High-tensile steel construction',
        'Corrosion-resistant materials',
        'Professional-grade security solution',
      ],
    },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'Barbed Wire',
      image: '/placeholder.svg',
      slug: 'barbed-wire',
      category: 'fencing',
    },
    {
      id: '2',
      name: 'RazorWall',
      image: '/placeholder.svg',
      slug: 'razorwall',
      category: 'fencing',
    },
    {
      id: '3',
      name: 'WireWall 355 Panel',
      image: '/placeholder.svg',
      slug: '355',
      category: 'wirewall',
    },
    {
      id: '4',
      name: 'Diamond Mesh',
      image: '/placeholder.svg',
      slug: 'diamond-mesh',
      category: 'fencing',
    },
    {
      id: '5',
      name: 'Welded Fence Mesh',
      image: '/placeholder.svg',
      slug: 'welded-fence-mesh',
      category: 'fencing',
    },
  ],
}

// Field Game Fence - Agricultural fencing
export const fieldGameFenceConfig: ProductDetailConfig = {
  title: 'Field Game Fence',
  category: 'Fencing',
  heroImage: '/product.png',
  layoutType: 'simple',
  description:
    'Specialized fencing designed for agricultural and wildlife management applications. Our field game fence provides effective containment for livestock while allowing natural movement of wildlife.',
  specifications: [
    { label: 'Material', value: 'Galvanised steel wire' },
    { label: 'Wire Diameter', value: '2.0mm - 3.0mm' },
    { label: 'Mesh Size', value: '100mm x 100mm' },
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
      id: 'features',
      label: 'Features',
      content: [
        'Galvanised steel wire construction',
        'Wire diameter options (2.0mm - 3.0mm)',
        '100mm x 100mm mesh size',
        'Height options from 1.2m - 2.4m',
        'Galvanised or PVC coating options',
      ],
    },
    {
      id: 'applications',
      label: 'Applications',
      content: [
        'Livestock containment',
        'Wildlife management',
        'Agricultural boundaries',
        'Game reserve fencing',
        'Farm perimeter protection',
        'Pasture management',
        'Wildlife corridor protection',
      ],
    },
    {
      id: 'benefits',
      label: 'Benefits',
      content: [
        'Effective livestock containment',
        'Wildlife-friendly design',
        'Durable agricultural construction',
        'Easy installation in rural areas',
        'Cost-effective for large areas',
      ],
    },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'Diamond Mesh',
      image: '/placeholder.svg',
      slug: 'diamond-mesh',
      category: 'fencing',
    },
    {
      id: '2',
      name: 'Hexagonal Netting',
      image: '/placeholder.svg',
      slug: 'hexagonal-netting',
      category: 'fencing',
    },
    {
      id: '3',
      name: 'Welded Fence Mesh',
      image: '/placeholder.svg',
      slug: 'welded-fence-mesh',
      category: 'fencing',
    },
    {
      id: '4',
      name: 'Barbed Wire',
      image: '/placeholder.svg',
      slug: 'barbed-wire',
      category: 'fencing',
    },
    {
      id: '5',
      name: 'Standards',
      image: '/placeholder.svg',
      slug: 'standards',
      category: 'fencing',
    },
  ],
}

// Round Wire Nails - Standard layout
export const roundWireNailsConfig: ProductDetailConfig = {
  title: 'Round Wire Nails',
  category: 'Fasteners',
  heroImage: '/product.png',
  layoutType: 'standard',
  description:
    'High-quality round wire nails manufactured from premium steel for superior holding power and durability. Our round wire nails are designed for various construction and manufacturing applications requiring reliable fastening solutions.',
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
    { property: 'Easy installation and removal', value: '', unit: '' },
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
      id: 'pro-tips',
      label: 'Pro Tips',
      content: ['No data'],
    },
  ],
  relatedProducts: [
    {
      id: '1',
      name: 'Staples',
      image: '/placeholder.svg',
      slug: 'staples',
      category: 'fasteners',
    },
    {
      id: '2',
      name: 'Clout Nails',
      image: '/placeholder.svg',
      slug: 'clout-nails',
      category: 'fasteners',
    },
    {
      id: '3',
      name: 'Hog Rings',
      image: '/placeholder.svg',
      slug: 'hog-rings',
      category: 'fasteners',
    },
    {
      id: '4',
      name: 'Pliers',
      image: '/placeholder.svg',
      slug: 'pliers',
      category: 'fasteners',
    },
    {
      id: '5',
      name: 'Cutting Nippers',
      image: '/placeholder.svg',
      slug: 'cutting-nippers',
      category: 'fasteners',
    },
  ],
}

// Staples - Standard layout
export const staplesConfig: ProductDetailConfig = {
  title: 'Staples',
  category: 'Fasteners',
  heroImage: '/product.png',
  layoutType: 'standard',
  description:
    'Professional-grade staples designed for secure fastening in various applications. Our staples are manufactured from high-quality steel and are available in different sizes and configurations to meet specific fastening requirements.',
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
    { property: 'Easy installation with staple guns', value: '', unit: '' },
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
  relatedProducts: [
    {
      id: '1',
      name: 'Round Wire Nails',
      image: '/placeholder.svg',
      slug: 'round-wire-nails',
      category: 'fasteners',
    },
    {
      id: '2',
      name: 'Hog Rings',
      image: '/placeholder.svg',
      slug: 'hog-rings',
      category: 'fasteners',
    },
    {
      id: '3',
      name: 'Hog Ring Pliers',
      image: '/placeholder.svg',
      slug: 'hog-ring-pliers',
      category: 'fasteners',
    },
    {
      id: '4',
      name: 'Clout Nails',
      image: '/placeholder.svg',
      slug: 'clout-nails',
      category: 'fasteners',
    },
    {
      id: '5',
      name: 'Pliers',
      image: '/placeholder.svg',
      slug: 'pliers',
      category: 'fasteners',
    },
  ],
}

// Hog Rings - Standard layout
export const hogRingsConfig: ProductDetailConfig = {
  title: 'Hog Rings',
  category: 'Fasteners',
  heroImage: '/product.png',
  layoutType: 'standard',
  description:
    'Heavy-duty hog rings designed for secure fastening of wire mesh, fencing, and other applications requiring strong, reliable connections. Our hog rings are manufactured from high-quality steel for maximum durability and performance.',
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
    { property: 'Consistent quality and dimensions', value: '', unit: '' },
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
  relatedProducts: [
    {
      id: '1',
      name: 'Hog Ring Pliers',
      image: '/placeholder.svg',
      slug: 'hog-ring-pliers',
      category: 'fasteners',
    },
    {
      id: '2',
      name: 'Staples',
      image: '/placeholder.svg',
      slug: 'staples',
      category: 'fasteners',
    },
    {
      id: '3',
      name: 'Round Wire Nails',
      image: '/placeholder.svg',
      slug: 'round-wire-nails',
      category: 'fasteners',
    },
    {
      id: '4',
      name: 'Pliers',
      image: '/placeholder.svg',
      slug: 'pliers',
      category: 'fasteners',
    },
    {
      id: '5',
      name: 'Cutting Nippers',
      image: '/placeholder.svg',
      slug: 'cutting-nippers',
      category: 'fasteners',
    },
  ],
}

// Helper function to create product config with correct title and category
function createProductConfig(
  category: string,
  productSlug: string,
  baseConfig: ProductDetailConfig,
): ProductDetailConfig {
  // Convert slug to proper title
  const title = productSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    ...baseConfig,
    title,
    category: category.charAt(0).toUpperCase() + category.slice(1),
    tabs: baseConfig.tabs, // Pass through tabs from base config
  }
}

// Configuration mapping
export const productDetailConfigs: Record<string, ProductDetailConfig> = {
  'wire-hard-drawn-wire': hardDrawnWireConfig,
  'reinforcing-brickforce': brickforceConfig,
  'fencing-welded-fence-mesh': {
    ...weldedFenceMeshConfig,
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel construction',
          'Welded mesh design for maximum strength',
          'Corrosion-resistant finish',
          'Consistent wire spacing and dimensions',
          'Easy installation and maintenance',
          'Meets industry standards',
        ],
      },
    ],
  },

  // WireWall products with specific configurations
  'wirewall-355': {
    ...wireWall355Config,
    tabs: [
      {
        id: 'download',
        label: 'Download',
        content: ['No data'],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: ['No data'],
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: ['No data'],
      },
    ],
  },
  'wirewall-underdig-panel': wireWallUnderdigConfig,
  'wirewall-spikes': wireWallSpikesConfig,
  'wirewall-3510': {
    ...wireWall3510Config,
    tabs: [
      {
        id: 'download',
        label: 'Download',
        content: ['No data'],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: ['No data'],
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: ['No data'],
      },
    ],
  },
  'wirewall-af100': wireWallAF100Config,

  // Fencing products with specific configurations
  'fencing-diamond-mesh': {
    ...diamondMeshConfig,
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Diamond mesh pattern for flexibility',
          'High-tensile steel construction',
          'Galvanised coating for corrosion resistance',
          'Various mesh sizes available',
          'Easy to cut and shape',
          'Durable and long-lasting',
        ],
      },
    ],
  },
  'fencing-barbed-wire': {
    ...barbedWireConfig,
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel core construction',
          'Sharp barbed points for security',
          'Galvanised coating for corrosion resistance',
          'Available in various gauges',
          'Easy installation and maintenance',
          'Effective perimeter protection',
        ],
      },
    ],
  },
  'fencing-razor-wire': {
    ...razorWireConfig,
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel core construction',
          'Precision-cut stainless steel razor blades',
          'Core diameter options (2.5mm - 3.0mm)',
          'Galvanised or stainless steel coating',
          'Available in 50m - 100m coils',
        ],
      },
    ],
  },
  'fencing-field-game-fence': {
    ...fieldGameFenceConfig,
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Designed for agricultural and game applications',
          'High-tensile steel construction',
          'Corrosion-resistant coating',
          'Various heights and mesh sizes',
          'Easy installation and maintenance',
          'Durable in outdoor conditions',
        ],
      },
    ],
  },

  // Fasteners products with specific configurations
  'fasteners-round-wire-nails': roundWireNailsConfig,
  'fasteners-staples': staplesConfig,
  'fasteners-hog-rings': hogRingsConfig,

  // Wire products
  'wire-galvanised-wire': {
    ...createProductConfig('wire', 'galvanised-wire', hardDrawnWireConfig),
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
    ],
  },
  'wire-high-strain-wire': {
    ...createProductConfig('wire', 'high-strain-wire', hardDrawnWireConfig),
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
    ],
  },
  'wire-black-annealed-wire': {
    ...createProductConfig('wire', 'black-annealed-wire', hardDrawnWireConfig),
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
    ],
  },
  'wire-pvc-coated-wire': {
    ...createProductConfig('wire', 'pvc-coated-wire', hardDrawnWireConfig),
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
    ],
  },
  'wire-straight-cut-wire': {
    ...createProductConfig('wire', 'straight-cut-wire', hardDrawnWireConfig),
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
    ],
  },
  'wire-slab-wire': {
    ...createProductConfig('wire', 'slab-wire', hardDrawnWireConfig),
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
    ],
  },

  // Reinforcing products
  'reinforcing-reinforcing-mesh': {
    ...createProductConfig('reinforcing', 'reinforcing-mesh', brickforceConfig),
    tabs: [
      {
        id: 'specifications',
        label: 'Specifications',
        content: ['No data'],
      },
    ],
  },
  'reinforcing-hoop-iron': {
    ...createProductConfig('reinforcing', 'hoop-iron', brickforceConfig),
    tabs: [
      {
        id: 'applications',
        label: 'Applications',
        content: [
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
      },
    ],
  },
  'reinforcing-cavity-wall-ties': {
    ...createProductConfig('reinforcing', 'cavity-wall-ties', brickforceConfig),
    tabs: [
      {
        id: 'types-of-wall-ties',
        label: 'Types of Wall Ties',
        content: ['No data'],
      },
      {
        id: 'pro-tips',
        label: 'Pro Tips',
        content: ['No data'],
      },
    ],
  },
  'reinforcing-reinforcing-steel': {
    ...createProductConfig('reinforcing', 'reinforcing-steel', brickforceConfig),
    tabs: [
      {
        id: 'types-of-rebar',
        label: 'Types of Rebar',
        content: ['No data'],
      },
    ],
  },
  'reinforcing-ceramic-door-anchors': {
    ...createProductConfig('reinforcing', 'ceramic-door-anchors', brickforceConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Made from high-quality, low-carbon steel for strength without brittleness',
          'Thicker zinc coating (minimum 80g/m²) prevents rust and extends lifespan',
          'Strong welds at every intersection resist bending and breaking',
          'Consistent spacing ensures even load distribution',
          'Tightly wound rolls for easier transport and handling',
          'Flexible but not flimsy - rolls uncoil smoothly',
        ],
      },
    ],
  },

  // Fencing products - using appropriate base configs
  'fencing-welded-fence-mesh-pvc': {
    ...createProductConfig('fencing', 'welded-fence-mesh-pvc', weldedFenceMeshConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel construction',
          'Welded mesh design for maximum strength',
          'PVC coating for enhanced durability',
          'Corrosion-resistant finish',
          'Consistent wire spacing and dimensions',
          'Easy installation and maintenance',
        ],
      },
    ],
  },
  'fencing-razorwall': {
    ...createProductConfig('fencing', 'razorwall', razorWireConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel core construction',
          'Precision-cut stainless steel razor blades',
          'Core diameter options (2.5mm - 3.0mm)',
          'Galvanised or stainless steel coating',
          'Available in 50m - 100m coils',
        ],
      },
    ],
  },
  'fencing-hexagonal-netting': {
    ...createProductConfig('fencing', 'hexagonal-netting', diamondMeshConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Hexagonal mesh pattern for flexibility',
          'High-tensile steel construction',
          'Galvanised coating for corrosion resistance',
          'Various mesh sizes available',
          'Easy to cut and shape',
          'Durable and long-lasting',
        ],
      },
    ],
  },
  'fencing-standards': {
    ...createProductConfig('fencing', 'standards', weldedFenceMeshConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel construction',
          'Welded mesh design for maximum strength',
          'Corrosion-resistant finish',
          'Consistent wire spacing and dimensions',
          'Easy installation and maintenance',
          'Meets industry standards',
        ],
      },
    ],
  },
  'fencing-droppers': {
    ...createProductConfig('fencing', 'droppers', weldedFenceMeshConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-tensile steel construction',
          'Welded mesh design for maximum strength',
          'Corrosion-resistant finish',
          'Consistent wire spacing and dimensions',
          'Easy installation and maintenance',
          'Meets industry standards',
        ],
      },
    ],
  },

  // WireWall products - using appropriate base configs
  'wirewall-doublewall': {
    ...createProductConfig('wirewall', 'doublewall', wireWall355Config),
    tabs: [
      {
        id: 'download',
        label: 'Download',
        content: ['No data'],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: ['No data'],
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: ['No data'],
      },
    ],
  },
  'wirewall-358': {
    ...createProductConfig('wirewall', '358', wireWall355Config),
    tabs: [
      {
        id: 'download',
        label: 'Download',
        content: ['No data'],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: ['No data'],
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: ['No data'],
      },
    ],
  },
  'wirewall-3110': {
    ...createProductConfig('wirewall', '3110', wireWall355Config),
    tabs: [
      {
        id: 'download',
        label: 'Download',
        content: ['No data'],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: ['No data'],
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: ['No data'],
      },
    ],
  },
  'wirewall-3210': {
    ...createProductConfig('wirewall', '3210', wireWall355Config),
    tabs: [
      {
        id: 'download',
        label: 'Download',
        content: ['No data'],
      },
      {
        id: 'specifications',
        label: 'Specifications',
        content: ['No data'],
      },
      {
        id: 'gallery',
        label: 'Gallery',
        content: ['No data'],
      },
    ],
  },
  'wirewall-gates': {
    ...createProductConfig('wirewall', 'gates', wireWall355Config),
    tabs: [
      {
        id: 'types-of-wirewall-gates',
        label: 'Types of WireWall Gates',
        content: ['No data'],
      },
    ],
  },

  // Utility products
  'utility-precision-welded-mesh': {
    ...createProductConfig('utility', 'precision-welded-mesh', hardDrawnWireConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Precision-welded mesh construction',
          'High-tensile steel wire',
          'Consistent mesh spacing',
          'Corrosion-resistant coating',
          'Easy to cut and shape',
          'Durable and long-lasting',
        ],
      },
    ],
  },
  'utility-growing-stakes': {
    ...createProductConfig('utility', 'growing-stakes', hardDrawnWireConfig),
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
  },
  'utility-specimesh-panels': {
    ...createProductConfig('utility', 'specimesh-panels', hardDrawnWireConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Specialized mesh panel design',
          'High-tensile steel construction',
          'Precision welding for strength',
          'Corrosion-resistant finish',
          'Easy installation and handling',
          'Versatile applications',
        ],
      },
    ],
  },

  // Mining Support products
  'mining-support-mining-mesh': {
    ...createProductConfig('mining-support', 'mining-mesh', hardDrawnWireConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Heavy-duty mesh construction',
          'High-tensile steel wire',
          'Designed for mining applications',
          'Corrosion-resistant coating',
          'Excellent load-bearing capacity',
          'Durable in harsh environments',
        ],
      },
    ],
  },
  'mining-support-backfill-mesh': {
    ...createProductConfig('mining-support', 'backfill-mesh', hardDrawnWireConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'Specialized backfill mesh design',
          'High-tensile steel construction',
          'Corrosion-resistant coating',
          'Suitable for mining backfill applications',
          'Excellent structural integrity',
          'Durable in underground conditions',
        ],
      },
    ],
  },

  // Fasteners products - using appropriate base configs
  'fasteners-clout-nails': {
    ...createProductConfig('fasteners', 'clout-nails', roundWireNailsConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-carbon steel construction',
          'Bright or galvanised finish options',
          'Length range from 25mm - 150mm',
          'Diameter range from 2.0mm - 6.0mm',
          'Meets SANS 1026, BS 1202 standards',
        ],
      },
    ],
  },
  'fasteners-hog-ring-pliers': {
    ...createProductConfig('fasteners', 'hog-ring-pliers', hogRingsConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: ['No data'],
      },
      {
        id: 'benefits',
        label: 'Benefits',
        content: ['No data'],
      },
      {
        id: 'applications',
        label: 'Applications',
        content: ['No data'],
      },
    ],
  },
  'fasteners-pliers': {
    ...createProductConfig('fasteners', 'pliers', roundWireNailsConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-carbon steel construction',
          'Bright or galvanised finish options',
          'Length range from 25mm - 150mm',
          'Diameter range from 2.0mm - 6.0mm',
          'Meets SANS 1026, BS 1202 standards',
        ],
      },
    ],
  },
  'fasteners-cutting-nippers': {
    ...createProductConfig('fasteners', 'cutting-nippers', roundWireNailsConfig),
    tabs: [
      {
        id: 'features',
        label: 'Features',
        content: [
          'High-carbon steel construction',
          'Bright or galvanised finish options',
          'Length range from 25mm - 150mm',
          'Diameter range from 2.0mm - 6.0mm',
          'Meets SANS 1026, BS 1202 standards',
        ],
      },
    ],
  },
}
