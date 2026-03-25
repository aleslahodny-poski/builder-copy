export interface TimelineItem {
  date: string
  title: string
  description: string
}

export interface Organizer {
  name: string
  role: string
  image: string
}

export interface Project {
  slug: string
  name: string
  developer: string
  region: string
  district?: string
  image: string
  summary: string
  description: string
  website: string
  featured?: boolean
}

export const navigationLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'For Developers', href: '/for-developers' },
  { label: 'For Partners', href: '/for-partners' },
]

export const timelineItems: TimelineItem[] = [
  {
    date: '31 March 2026',
    title: 'Registration deadline',
    description: 'Developers submit completed and upcoming projects for the 2026 edition.',
  },
  {
    date: '1 May – 30 November 2026',
    title: 'Public voting',
    description: 'The public explores shortlisted developments and confirms votes by email.',
  },
  {
    date: 'January 2027',
    title: 'Award ceremony',
    description: 'The competition culminates in a live announcement of the winning projects.',
  },
]

export const organizers: Organizer[] = [
  {
    name: 'Klára Novotná',
    role: 'Programme Director',
    image: 'https://images.pexels.com/photos/6615222/pexels-photo-6615222.jpeg',
  },
  {
    name: 'Marek Dvořák',
    role: 'Competition Curator',
    image: 'https://images.pexels.com/photos/6474449/pexels-photo-6474449.jpeg',
  },
]

export const projects: Project[] = [
  {
    slug: 'vltava-residence',
    name: 'Vltava Residence',
    developer: 'Atria Development',
    region: 'Praha',
    district: 'Praha 7',
    image: 'https://images.pexels.com/photos/3872487/pexels-photo-3872487.jpeg',
    summary: 'A refined riverfront housing project with generous terraces and public-facing ground floor spaces.',
    description:
      'Vltava Residence rethinks a former industrial parcel into a dense but calm urban block. The proposal balances apartments, shared amenities, and a landscaped inner court, while the ground floor opens the development to the surrounding neighbourhood.',
    website: 'https://example.com/vltava-residence',
    featured: true,
  },
  {
    slug: 'brno-yard',
    name: 'Brno Yard',
    developer: 'Urban Nest',
    region: 'Jihomoravský',
    image: 'https://images.pexels.com/photos/4393850/pexels-photo-4393850.jpeg',
    summary: 'A compact mixed-use scheme that pairs rental living with adaptable workspaces.',
    description:
      'Brno Yard combines small-footprint homes, workshops, and retail units in a monochrome architectural language. The building is designed to age well, with robust materials and flexible layouts for changing uses.',
    website: 'https://example.com/brno-yard',
    featured: true,
  },
  {
    slug: 'central-lofts',
    name: 'Central Lofts',
    developer: 'Crestline Group',
    region: 'Středočeský',
    image: 'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg',
    summary: 'Warehouse conversion with loft housing, studios, and a new civic passage.',
    description:
      'Central Lofts preserves the structure of a former warehouse hall and introduces a generous public passage through the site. The proposal focuses on daylight, walkability, and a simple palette that foregrounds proportion and craft.',
    website: 'https://example.com/central-lofts',
    featured: true,
  },
  {
    slug: 'harbor-quarter',
    name: 'Harbor Quarter',
    developer: 'Northline Estates',
    region: 'Moravskoslezský',
    image: 'https://images.pexels.com/photos/3872487/pexels-photo-3872487.jpeg',
    summary: 'A phased neighbourhood plan with housing, services, and a public waterfront edge.',
    description:
      'Harbor Quarter turns a post-industrial waterfront into a permeable district with housing, childcare, and a sequence of public courtyards. The concept emphasises durability, reuse, and a strong pedestrian experience.',
    website: 'https://example.com/harbor-quarter',
    featured: true,
  },
  {
    slug: 'atelier-gardens',
    name: 'Atelier Gardens',
    developer: 'Forma Living',
    region: 'Jihočeský',
    image: 'https://images.pexels.com/photos/4393850/pexels-photo-4393850.jpeg',
    summary: 'A low-rise residential ensemble built around shared gardens and atelier spaces.',
    description:
      'Atelier Gardens is conceived as a quiet cluster of apartment houses arranged around a central garden. Shared atelier rooms and flexible community spaces make the project usable well beyond standard housing hours.',
    website: 'https://example.com/atelier-gardens',
    featured: true,
  },
  {
    slug: 'embassy-court',
    name: 'Embassy Court',
    developer: 'Metropolitan Works',
    region: 'Praha',
    district: 'Praha 1',
    image: 'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg',
    summary: 'A restoration-led hospitality and housing project in the historic centre.',
    description:
      'Embassy Court preserves a heritage shell while introducing contemporary living and hospitality spaces. The design uses understated materials, controlled openings, and careful detailing to let the original structure lead.',
    website: 'https://example.com/embassy-court',
    featured: true,
  },
  {
    slug: 'district-eighteen',
    name: 'District Eighteen',
    developer: 'Civic Habitat',
    region: 'Praha',
    district: 'Praha 8',
    image: 'https://images.pexels.com/photos/3872487/pexels-photo-3872487.jpeg',
    summary: 'Transit-oriented housing with co-working and a new local square.',
    description:
      'District Eighteen places a fine-grained block structure above active ground-floor uses, establishing a strong neighbourhood centre near public transport. The project is calibrated for density, access, and long-term flexibility.',
    website: 'https://example.com/district-eighteen',
  },
  {
    slug: 'northern-terraces',
    name: 'Northern Terraces',
    developer: 'Scale Studio',
    region: 'Liberecký',
    image: 'https://images.pexels.com/photos/4393850/pexels-photo-4393850.jpeg',
    summary: 'Stepped housing on a hillside site with shared winter gardens.',
    description:
      'Northern Terraces adapts to a steep site through stepped floor plates and protected shared gardens. The building massing creates views, sunlight, and a precise relation between private and collective space.',
    website: 'https://example.com/northern-terraces',
  },
  {
    slug: 'stone-line-campus',
    name: 'Stone Line Campus',
    developer: 'Vertex Properties',
    region: 'Plzeňský',
    image: 'https://images.pexels.com/photos/2468056/pexels-photo-2468056.jpeg',
    summary: 'A business and residential campus stitched together by new public routes.',
    description:
      'Stone Line Campus introduces a crisp urban order to a fragmented site, combining apartments, offices, and retail in a walkable composition. Material restraint and strong proportions define the identity of the project.',
    website: 'https://example.com/stone-line-campus',
  },
  {
    slug: 'park-slab',
    name: 'Park Slab',
    developer: 'Contour Collective',
    region: 'Královéhradecký',
    image: 'https://images.pexels.com/photos/3872487/pexels-photo-3872487.jpeg',
    summary: 'An elongated residential block framed by a new public park.',
    description:
      'Park Slab turns a mono-functional edge into a mixed residential address with a strong park frontage. Circulation, balconies, and common spaces are treated as part of the public character of the building.',
    website: 'https://example.com/park-slab',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const contactDetails = {
  address: ['Competition Office', 'Na Příkopě 12', '110 00 Praha 1'],
  person: 'Klára Novotná',
  email: 'hello@competition-office.cz',
}
