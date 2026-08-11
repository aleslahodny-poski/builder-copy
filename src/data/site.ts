import danaImage from '@/assets/dana-hradecka.png'
import reneImage from '@/assets/rene-hradecky.png'
import adresaLogo from '@/assets/logos/adresa.png'
import bonafideLogo from '@/assets/logos/bonafide.png'
import adresaPartnerLogo from '@/assets/logos/partners/adresa.png'
import developersClubLogo from '@/assets/logos/partners/developers-club.png'
import mestaBudoucnostiLogo from '@/assets/logos/partners/mesta-budoucnosti.png'
import newtonLogo from '@/assets/logos/partners/newton.png'
import realityIdnesLogo from '@/assets/logos/partners/reality-idnes.png'
import rondaLogo from '@/assets/logos/partners/ronda.png'
import upvestLogo from '@/assets/logos/partners/upvest.png'
import czechWorkspaceLogo from '@/assets/logos/czech-workspace.png'
import reLogo from '@/assets/logos/re.png'
import tvizeLogo from '@/assets/logos/tvize.png'

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

export interface ParamAmenities {
  bus: string;
  train: string;
  hospital: string;
  school: string;
  park: string;
}

export interface ParamFeatures {
  garage: boolean;
  parking: boolean;
  cellar: boolean;
  playground: boolean;
  reception: boolean;
  elevator: boolean;
}

export interface ProjectParameters {
  flatsCount: number;
  flatSizes: string;
  amenities: ParamAmenities;
  features: ParamFeatures;
}

export interface ProjectDeveloper {
  name: string;
  logo: string;
  about: string;
  address: string;
  phone: string;
  email: string;
  web: string;
}

export interface Project {
  slug: string
  name: string
  developer: ProjectDeveloper
  region: string
  district?: string
  image: string
  gallery: string[]
  summary: string
  description: string
  descriptionHtml?: string
  parameters: ProjectParameters
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
    image: danaImage,
  },
  {
    name: 'Mgr. René Hradecký',
    role: 'Organizátor soutěže',
    image: reneImage,
  },
]

export const projects: Project[] = [
  {
    slug: 'vltava-residence',
    name: 'Rezidence Vltava',
    developer: {
      name: 'Atria Development',
      logo: 'AT',
      about: 'Rezidence Vltava je naším stěžejním projektem v Praze 7. Společnost Atria Development vznikla s cílem revitalizovat brownfieldy a přeměňovat nevyužité postindustriální zóny na živá městská centra. Dbáme na trvalou udržitelnost a funkční symbiózu rezidentů s okolní čtvrtí.',
      address: 'Bubenské nábřeží 13, Praha 7, 17000',
      phone: '+420 777 123 456',
      email: 'info@atriadev.cz',
      web: 'https://atriadev.cz'
    },
    region: 'Praha',
    district: 'Praha 7',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    gallery: Array(15).fill('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'),
    summary: 'Promyšlený projekt bydlení na nábřeží s velkorysými terasami a veřejnosti přístupným přízemím.',
    description: 'Klidný městský blok s velkolepým nádvořím a komunitním centrem.',
    descriptionHtml: `
      <p>Rezidence Vltava transformuje bývalý průmyslový pozemek na hustý, ale klidný městský blok. Návrh vyvažuje byty, sdílené vybavení a upravený vnitřní dvůr, zatímco přízemí otevírá zástavbu okolní čtvrti.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Urbanistický koncept</h3>
      <p>Kladli jsme zásadní důraz na návrat života k vodě. Součástí projektu jsou:</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li>Nová náplavka s bezbariérovým přístupem.</li>
        <li>Boutique kavárny a řemeslné prodejny v parteru.</li>
        <li>Vyhřívané komunitní dvory se zelení.</li>
        <li>Sdílená střešní zahrada pro všechny rezidenty s výhledem na panorama města.</li>
      </ul>
      <h3 class="text-2xl font-bold mt-8 mb-4">Udržitelnost a technologie</h3>
      <p>Projekt aspiruje na nejvyšší stupeň certifikace BREEAM. Je vybaven rekuperací, šedým vodním okruhem a inteligentní stínící technikou.</p>
    `,
    parameters: {
      flatsCount: 142,
      flatSizes: '45 - 210 m2',
      amenities: { bus: '0.2 km', train: '1.2 km', hospital: '2.5 km', school: '0.8 km', park: '0.1 km' },
      features: { garage: true, parking: true, cellar: true, playground: true, reception: true, elevator: true }
    },
    featured: true,
  },
  {
    slug: 'brno-yard',
    name: 'Brněnský Dvůr',
    developer: {
      name: 'Urban Nest',
      logo: 'UN',
      about: 'Naší prioritou v Urban Nest je propojování obytné zástavby se sousedským životem. Brněnský Dvůr představuje inovativní způsob kompaktního smíšeného bydlení pro mladé rodiny a kreativní profesionály.',
      address: 'Masarykova 10, Brno, 60200',
      phone: '+420 603 999 888',
      email: 'ahoj@urbannest.cz',
      web: 'https://urbannest.cz'
    },
    region: 'Jihomoravský',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    gallery: Array(10).fill('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'),
    summary: 'Kompaktní smíšený projekt, který spojuje nájemní bydlení s přizpůsobitelnými pracovními prostory.',
    description: 'Nová zástavba pro kreativní profesionály v srdci Brna.',
    descriptionHtml: `
      <p>Brněnský Dvůr kombinuje malometrážní byty, dílny a maloobchodní jednotky v monochromatickém architektonickém jazyce. Budova je navržena tak, aby dobře stárla, s robustními materiály a flexibilními dispozicemi pro měnící se využití.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Sdílené hodnoty</h3>
      <ol class="list-decimal pl-6 space-y-2 mt-4">
        <li>Podpora malých lokálních značek v obchodech v přízemí.</li>
        <li>Klubovna pro rezidenty s rychlou Wi-Fi a kávovarem.</li>
        <li>Společná prádelna v suterénu navržená v moderním industriálním duchu.</li>
      </ol>
      <p class="mt-4">Jde o revoluci v tom, jak vnímáme sousedství ve stísněném městském prostředí.</p>
    `,
    parameters: {
      flatsCount: 64,
      flatSizes: '28 - 75 m2',
      amenities: { bus: '0.1 km', train: '0.5 km', hospital: '1.5 km', school: '0.4 km', park: '0.3 km' },
      features: { garage: false, parking: true, cellar: true, playground: false, reception: false, elevator: true }
    },
    featured: true,
  },
  {
    slug: 'central-lofts',
    name: 'Centrální Lofty',
    developer: {
      name: 'Crestline Group',
      logo: 'CG',
      about: 'Jsme experti na transformaci industriálních prostor. Pečlivě analyzujeme genius loci každého brownfieldu a dáváme zašlým budovám novou tvář.',
      address: 'Tyršova 44, Praha 2, 12000',
      phone: '+420 800 111 222',
      email: 'sales@crestline.cz',
      web: 'https://crestline.cz'
    },
    region: 'Středočeský',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    gallery: Array(15).fill('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'),
    summary: 'Přestavba skladu na loftové bydlení, ateliéry a novou občanskou pasáž.',
    description: 'Ohromující loftový zážitek plný surového betonu a cihlových stěn.',
    descriptionHtml: `
      <p>Centrální Lofty zachovávají strukturu bývalé skladové haly a zavádějí na místo velkorysou veřejnou pasáž. Návrh se zaměřuje na denní světlo, pěší dostupnost a jednoduchou paletu, která staví do popředí proporce a řemeslo.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Interiéry</h3>
      <p>Standardy dokončení reflektují historii místa:</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li>Přiznaný architektonický beton.</li>
        <li>Ocelová repasovaná okna v antracitovém odstínu.</li>
        <li>Dubové podlahy skládané do vzoru stromečku pro zateplení industriálního zážitku.</li>
      </ul>
    `,
    parameters: {
      flatsCount: 38,
      flatSizes: '80 - 150 m2',
      amenities: { bus: '0.4 km', train: '2.0 km', hospital: '3.0 km', school: '1.2 km', park: '0.8 km' },
      features: { garage: true, parking: true, cellar: true, playground: false, reception: true, elevator: true }
    },
    featured: true,
  },
  {
    slug: 'harbor-quarter',
    name: 'Přístavní Čtvrť',
    developer: {
      name: 'Northline Estates',
      logo: 'NE',
      about: 'Naším posláním je velkoplošná obnova celých městských zón. Přístavní čtvrť je doposud největším masterplanem na území Ostravska v tomto tisíciletí.',
      address: '28. října 33, Ostrava, 70200',
      phone: '+420 596 333 444',
      email: 'development@northline.cz',
      web: 'https://northline.cz'
    },
    region: 'Moravskoslezský',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    gallery: Array(10).fill('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'),
    summary: 'Fázovaný plán rozvoje čtvrti s bydlením, službami a nábřežní promenádou.',
    description: 'Ostravská revoluce bydlení. Stovky rodin, desetitisíce metrů volnočasových zón.',
    descriptionHtml: `
      <p>Přístavní Čtvrť mění postindustriální nábřeží na propustnou čtvrť s bydlením, školkou a sekvencí veřejných nádvoří. Koncept klade důraz na trvanlivost, opětovné využití a silný zážitek pro chodce.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Město ve městě</h3>
      <p>Nemusíte vytáhnout paty, abyste měli plnohodnotný den:</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li>Vlastní bulvár s cyklostezkou a okruhem pro bruslení.</li>
        <li>Několik vyhlídek přímo nad hladinou řeky.</li>
        <li>Vzrostlé stromy, speciálně transplantované pro okamžitý efekt lesa.</li>
      </ul>
    `,
    parameters: {
      flatsCount: 350,
      flatSizes: '40 - 130 m2',
      amenities: { bus: '0.1 km', train: '1.0 km', hospital: '4.0 km', school: '0.0 km', park: '0.0 km' },
      features: { garage: true, parking: true, cellar: true, playground: true, reception: true, elevator: true }
    },
    featured: true,
  },
  {
    slug: 'atelier-gardens',
    name: 'Ateliérové Zahrady',
    developer: {
      name: 'Forma Living',
      logo: 'FL',
      about: 'Rezidence Bílá Růže je druhým projektem developera v Kašperských Horách, kde již v roce 2019 otevíral penzion Grantl (www.pension-grantl.cz). Bývalý hotel Bílá Růže byl poslední zchátralý objekt na zdejším náměstí. Rekonstrukci tohoto objektu vrátil developer ztracené hodnoty nejen samotnému domu, ale i jeho širšímu okolí.',
      address: 'Náměstí 173, Kašperské Hory, 34192',
      phone: '+420 736 534 016',
      email: 'mirka.smetalova@gmail.com',
      web: 'https://rezidencebilaruze.cz'
    },
    region: 'Jihočeský',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    gallery: Array(15).fill('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'),
    summary: 'Nízkopodlažní obytný soubor postavený kolem sdílených zahrad a ateliérových prostor.',
    description: 'Projekt odrážející krásu jižních Čech v minimalistickém detailu.',
    descriptionHtml: `
      <p>Ateliérové Zahrady jsou koncipovány jako klidný shluk bytových domů uspořádaných kolem ústřední zahrady. Sdílené ateliéry a flexibilní komunitní prostory dělají projekt využitelným i nad rámec běžných hodin bydlení.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Návrat k přírodě</h3>
      <ol class="list-decimal pl-6 space-y-2 mt-4">
        <li>Aktivní participace na pěstování zeleniny ve sklenících komunity.</li>
        <li>Maximální propad světla díky dřevěným atriím.</li>
        <li>Vyloučení automobilové dopravy ze samotného centra areálu.</li>
      </ol>
      <p class="mt-4">Připravte se na život, kde ráno slyšíte jen šumění stromů.</p>
    `,
    parameters: {
      flatsCount: 18,
      flatSizes: '36 - 119 m2',
      amenities: { bus: '0.5 km', train: '15 km', hospital: '15 km', school: '0.5 km', park: '0.5 km' },
      features: { garage: true, parking: true, cellar: true, playground: true, reception: false, elevator: true }
    },
    featured: true,
  },
  {
    slug: 'embassy-court',
    name: 'Rezidence Velvyslanectví',
    developer: {
      name: 'Metropolitan Works',
      logo: 'MW',
      about: 'Jsme experti na luxusní pražský trh. Pečlivě rekonstruujeme chráněné kulturní památky, protože věříme, že nejlepší architektura již byla postavena - my jí pouze dáváme dech 21. století.',
      address: 'Letecká 12, Praha 1, 11000',
      phone: '+420 222 333 555',
      email: 'exkluziv@mw.cz',
      web: 'https://mw.cz'
    },
    region: 'Praha',
    district: 'Praha 1',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    gallery: Array(10).fill('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'),
    summary: 'Projekt kombinující pohostinství a bydlení v historickém centru.',
    description: 'Nejvyšší standard života na prestižní adrese v historickém centru.',
    descriptionHtml: `
      <p>Rezidence Velvyslanectví zachovává historický plášť a zároveň zavádí do prostoru moderní bydlení a služby. Návrh používá nenápadné materiály a pečlivé detaily, aby vynikla původní struktura.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Služby šestihvězdičkového hotelu</h3>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li>Nonstop concierge servis pro všechny Vaše klientské požadavky.</li>
        <li>Privátní spa a fitness pouze pro rezidenty domu.</li>
        <li>Valet parking v rámci hlubinných garáží.</li>
      </ul>
      <p class="mt-4">Dokonalý útěk před pražským shonem za robustními zdmi bývalé ambasády.</p>
    `,
    parameters: {
      flatsCount: 12,
      flatSizes: '120 - 450 m2',
      amenities: { bus: '0.1 km', train: '0.8 km', hospital: '1.2 km', school: '0.3 km', park: '0.1 km' },
      features: { garage: true, parking: false, cellar: true, playground: false, reception: true, elevator: true }
    },
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

// Skutečné údaje z projektroku.cz. Původní adresa "Na Příkopě 12" byla vymyšlená.
export const contactDetails = {
  address: ['Port7, budova E1', 'Partyzánská 23', 'Praha 7 Holešovice'],
  person: 'Mgr. Dana Hradecká',
  phone: '+420 605 292 801',
  email: 'hradecka@projektroku.cz',
  ic: '883 25 067',
}

export const eventTerm = {
  label: 'Termín konání akce',
  title: 'Slavnostní vyhlášení',
  value: 'leden 2027',
  note: 'Vyhlášení výsledků a předání ocenění ve všech kategoriích v rámci galavečera.',
}

export interface NewsItem {
  date: string
  title: string
  perex: string
  href: string
}

// Tři nejnovější aktuality z projektroku.cz/aktuality/.
export const newsItems: NewsItem[] = [
  {
    date: '1. 2. 2026',
    title: 'Registrace projektů do ročníku 2026 právě zahájena',
    perex:
      'Od 1. února je otevřena registrace rezidenčních projektů do osmnáctého ročníku soutěže.',
    href: 'https://www.projektroku.cz/aktuality/registrace-projektu-do-rocniku-2026-prave-zahajena-17/',
  },
  {
    date: '25. 1. 2026',
    title: 'Realitní projekt roku 2025 již zná své vítěze',
    perex: '17. ročník soutěže Realitní projekt roku přinesl rekordní účast.',
    href: 'https://www.projektroku.cz/aktuality/realitni-projekt-roku-2025-jiz-zna-sve-viteze-16/',
  },
  {
    date: '13. 12. 2025',
    title: 'Očekávané finále – vyhlášení vítězů za rok 2025 se uskuteční 22. ledna 2026',
    perex:
      'Vyhlášení vítězů sedmnáctého ročníku soutěže Realitní projekt roku za rok 2025.',
    href: 'https://www.projektroku.cz/aktuality/ocekavane-finale-vyhlaseni-vitezu-za-rok-2025-se-uskutecni-22-ledna-2026-15/',
  },
]

export interface JuryChair {
  name: string
  role: string
  category: 'jury' | 'architects'
  bio: string
}

// Jména jsou zatím pracovní, klient je nahradí skutečnými předsedy porot.
// Cena veřejnosti záměrně chybí — je to hlasování veřejnosti, porotu nemá.
export const juryChairs: JuryChair[] = [
  {
    name: 'Jan Novák',
    role: 'Předseda odborné poroty',
    category: 'jury',
    bio: 'Odborná porota hodnotí architektonickou kvalitu, koncepci a přínos projektu pro lokalitu.',
  },
  {
    name: 'Jana Nováková',
    role: 'Předsedkyně poroty architektů',
    category: 'architects',
    bio: 'Porota architektů posuzuje projekty z pohledu urbanismu, materiálového řešení a detailu.',
  },
]

export interface PartnerTier {
  tier: string
  partners: {
    name: string
    logo?: string
    /** Každé logo má jiný poměr stran, tahle třída je opticky srovná v dlaždici. */
    size?: string
  }[]
}

// Hierarchie i loga převzatá z projektroku.cz. Loga jsou odbarvená na bílou
// siluetu s průhledným pozadím, aby v tmavém zápatí držela jednotný monochrom.
export const partnerTiers: PartnerTier[] = [
  {
    tier: 'Zlatý partner',
    partners: [{ name: 'Adresa', logo: adresaPartnerLogo, size: 'h-14 w-auto' }],
  },
  {
    tier: 'Stříbrný partner',
    partners: [
      { name: 'Developers Club', logo: developersClubLogo, size: 'w-full h-auto' },
      { name: 'Města budoucnosti', logo: mestaBudoucnostiLogo, size: 'w-full h-auto' },
      { name: 'Upvest', logo: upvestLogo, size: 'w-[88%] h-auto' },
      { name: 'Newton University', logo: newtonLogo, size: 'h-16 w-auto' },
    ],
  },
  {
    tier: 'Bronzový partner',
    partners: [{ name: 'Ronda Invest', logo: rondaLogo, size: 'w-[80%] h-auto' }],
  },
  {
    tier: 'Mediální partner',
    partners: [{ name: 'Reality Idnes', logo: realityIdnesLogo, size: 'w-[78%] h-auto' }],
  },
]

// Loga mediální skupiny do zápatí. Vyříznuto ze screenshotu zápatí adresa.cz —
// před ostrým nasazením nahradit originály od klienta.
export const groupLogos = [
  { name: 'bonafide', src: bonafideLogo, href: 'https://www.bonafide.cz/', width: 'w-32' },
  { name: 'RE', src: reLogo, href: null, width: 'w-8' },
  { name: 'adresa', src: adresaLogo, href: 'https://adresa.cz', width: 'w-24' },
  { name: 'tvize', src: tvizeLogo, href: 'https://tvize.cz', width: 'w-20' },
  { name: 'Czech Workspace', src: czechWorkspaceLogo, href: null, width: 'w-28' },
]
