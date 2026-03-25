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
  { label: 'Nominované projekty', href: '/projekty' },
  { label: 'Pro developery', href: '/pro-developery' },
  { label: 'Pro partnery', href: '/pro-partnery' },
]

export const timelineItems: TimelineItem[] = [
  {
    date: '1. února 2026',
    title: 'Zahájení registrací',
    description: 'Developeři mohou začít přihlašovat své rezidenční projekty do aktuálního ročníku soutěže.',
  },
  {
    date: '31. října 2026',
    title: 'Uzávěrka přihlášek',
    description: 'Nejzazší termín pro přihlášení projektů, uhrazení registračních poplatků a dodání veškerých podkladů.',
  },
  {
    date: '31. prosince 2026',
    title: 'Konec hlasování veřejnosti',
    description: 'Ukončení online hlasování veřejnosti pro nominované projekty a následné sečtení všech ověřených hlasů.',
  },
  {
    date: 'Leden 2027',
    title: 'Slavnostní vyhlášení',
    description: 'Vyhlášení výsledků a předání diplomů vítězům ve všech kategoriích v rámci slavnostního galavečera.',
  },
]

export const organizers: Organizer[] = [
  {
    name: 'Mgr. Dana Hradecká',
    role: 'Organizátorka soutěže',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Jan Hradecký',
    role: 'Organizátor soutěže',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
]

export const projects: Project[] = [
  {
    slug: 'vltava-residence',
    name: 'Rezidence Vltava',
    developer: 'Atria Development',
    region: 'Praha',
    district: 'Praha 7',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    summary: 'Promyšlený projekt bydlení na nábřeží s velkorysými terasami a veřejnosti přístupným přízemím.',
    description:
      'Rezidence Vltava transformuje bývalý průmyslový pozemek na hustý, ale klidný městský blok. Návrh vyvažuje byty, sdílené vybavení a upravený vnitřní dvůr, zatímco přízemí otevírá zástavbu okolní čtvrti.',
    website: 'https://example.com/vltava-residence',
    featured: true,
  },
  {
    slug: 'brno-yard',
    name: 'Brněnský Dvůr',
    developer: 'Urban Nest',
    region: 'Jihomoravský',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    summary: 'Kompaktní smíšený projekt, který spojuje nájemní bydlení s přizpůsobitelnými pracovními prostory.',
    description:
      'Brněnský Dvůr kombinuje malometrážní byty, dílny a maloobchodní jednotky v monochromatickém architektonickém jazyce. Budova je navržena tak, aby dobře stárla, s robustními materiály a flexibilními dispozicemi pro měnící se využití.',
    website: 'https://example.com/brno-yard',
    featured: true,
  },
  {
    slug: 'central-lofts',
    name: 'Centrální Lofty',
    developer: 'Crestline Group',
    region: 'Středočeský',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    summary: 'Přestavba skladu na loftové bydlení, ateliéry a novou občanskou pasáž.',
    description:
      'Centrální Lofty zachovávají strukturu bývalé skladové haly a zavádějí na místo velkorysou veřejnou pasáž. Návrh se zaměřuje na denní světlo, pěší dostupnost a jednoduchou paletu, která staví do popředí proporce a řemeslo.',
    website: 'https://example.com/central-lofts',
    featured: true,
  },
  {
    slug: 'harbor-quarter',
    name: 'Přístavní Čtvrť',
    developer: 'Northline Estates',
    region: 'Moravskoslezský',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    summary: 'Fázovaný plán rozvoje čtvrti s bydlením, službami a nábřežní promenádou.',
    description:
      'Přístavní Čtvrť mění postindustriální nábřeží na propustnou čtvrť s bydlením, školkou a sekvencí veřejných nádvoří. Koncept klade důraz na trvanlivost, opětovné využití a silný zážitek pro chodce.',
    website: 'https://example.com/harbor-quarter',
    featured: true,
  },
  {
    slug: 'atelier-gardens',
    name: 'Ateliérové Zahrady',
    developer: 'Forma Living',
    region: 'Jihočeský',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    summary: 'Nízkopodlažní obytný soubor postavený kolem sdílených zahrad a ateliérových prostor.',
    description:
      'Ateliérové Zahrady jsou koncipovány jako klidný shluk bytových domů uspořádaných kolem ústřední zahrady. Sdílené ateliéry a flexibilní komunitní prostory dělají projekt využitelným i nad rámec běžných hodin bydlení.',
    website: 'https://example.com/atelier-gardens',
    featured: true,
  },
  {
    slug: 'embassy-court',
    name: 'Rezidence Velvyslanectví',
    developer: 'Metropolitan Works',
    region: 'Praha',
    district: 'Praha 1',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    summary: 'Projekt kombinující pohostinství a bydlení v historickém centru.',
    description:
      'Rezidence Velvyslanectví zachovává historický plášť a zároveň zavádí do prostoru moderní bydlení a služby. Návrh používá nenápadné materiály a pečlivé detaily, aby vynikla původní struktura.',
    website: 'https://example.com/embassy-court',
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const contactDetails = {
  address: ['Kancelář soutěže', 'Na Příkopě 12', '110 00 Praha 1'],
  person: 'Mgr. Dana Hradecká',
  email: 'hradecka@projektroku.cz',
}
