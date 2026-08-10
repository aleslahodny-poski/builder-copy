# Realitní projekt roku — client feedback round 1

**Date:** 2026-08-10
**Repo:** `C:\claude-code\projektroku.cz` → `github.com/aleslahodny-poski/builder-copy`
**Live:** https://aleslahodny-poski.github.io/builder-copy/

Client reviewed the Builder.io-generated site and sent a batch of notes covering visual
direction, homepage structure, the region map and the footer. This spec records what each
note actually means, what we decided, and what we are deliberately not doing yet.

## Source material

| File | What it is |
|---|---|
| `C:\Users\nb\Downloads\projektroku.pdf` | Brand manual, 16 pages. Pages 1–6 are "Koncept 1" — the one being adopted. |
| `C:\Users\nb\Downloads\projektroku-footer.png` | Screenshot of the **adresa.cz** footer, used as a visual reference only. |
| `C:\Users\nb\Downloads\projektroku.mov` | Gala aftermovie, 3840×2160, H.264, 124 s, 780 MB. |
| https://www.projektroku.cz/ | The client's current production site — source of real news, partners and contacts. |

## Decisions

| Client note | Decision |
|---|---|
| "minimalistický" | No change. The site already is. |
| "Font Gellix" | Gellix is commercial (Displaay Type Foundry). Ship **Jost** as a stand-in behind a `'Gellix', 'Jost'` font stack so the swap is a one-line change later. |
| "max pár úrovní velikostí, dva řezy" | Collapse ~12 size steps to 6; restrict to weights **400** and **500**. |
| "postaveno na typografii, méně obrázků" | Mostly already true. Remove the two stock Unsplash photos on the Projects page. |
| "koncept č. 1" | Adopt its palette and rebuild the logo as SVG. |
| HP structure | Reorder per client, keeping Harmonogram directly under the hero. |
| "hlavní video na HP" | Use a single desaturated still frame. No video file ships. |
| "předsedové poroty" | New section, placeholder people — no names exist publicly. |
| "mapka s rozdělením na kraje + Praha" | **Deferred** — already implemented; awaiting clarification from the client. |
| Footer | Take the structure from the screenshot, fill it with competition content. |

## 1 — Visual foundation

### 1.1 Colour

The manual defines six flat colours. Six flat colours cannot express a UI (hover states,
subtle surfaces, borders), so two light tints are derived — both within the navy hue, so no
new colour is introduced.

Tokens in `src/assets/base.css`, consumed via `hsl(var(--x))` as today:

| Token | HSL | Hex | Role |
|---|---|---|---|
| `--foreground` (ink) | `215 21% 27%` | `#364253` | primary dark, body text |
| `--accent` | `27 36% 65%` | `#c7a487` | accent surfaces, CTAs |
| `--secondary` | `202 10% 61%` | `#939fa6` | secondary text, captions |
| `--line` | `0 0% 84%` | `#d6d6d6` | borders, rules |
| `--paper` | `0 0% 100%` | `#ffffff` | cards, raised surfaces |
| `--black` | `0 0% 0%` | `#000000` | maximum contrast only |
| `--background` (canvas) | `215 20% 97%` | derived | page background |
| `--muted` | `215 16% 94%` | derived | recessed surfaces |

Category colours, per the manual's award structure:

| Category | Token | Hex |
|---|---|---|
| Cena veřejnosti | `--cat-public` | `#939fa6` |
| Cena odborné poroty | `--cat-jury` | `#364253` |
| Cena architektů | `--cat-architects` | `#c7a487` |

**Contrast constraint.** `#c7a487` on white measures 2.2:1 — it fails WCAG AA for text and
must never be used for small type on a light background. It is a *surface* colour: navy on
tan measures 4.5:1 and is the approved pairing. Tailwind exposes it as `bg-accent`
with `text-ink`, never as `text-accent` on `bg-paper`.

Restraint rule so the result still reads minimalist: navy carries structure, greys carry
hierarchy, and tan appears as the single accent — not all six colours competing per screen.

### 1.2 Typography

- Stack: `'Gellix', 'Jost', sans-serif`. Jost is loaded from Google Fonts (variable).
  Gellix is listed first so dropping in a licensed webfont later needs no other edit.
- Weights: **400** and **500** only. Every current `font-bold` / `font-semibold` /
  `font-extrabold` collapses to 500. This also fixes a real defect: Questrial ships a single
  weight, so all present bold text is browser-synthesised faux bold.
- Size scale, six steps, replacing the current sprawl:

| Step | Size | Use |
|---|---|---|
| `display` | `clamp(2.75rem, 6vw, 5.75rem)` | hero H1 |
| `h1` | `clamp(2rem, 4vw, 3rem)` | section headings |
| `h2` | `clamp(1.5rem, 2.5vw, 2rem)` | sub-headings |
| `body` | `1rem` / `1.125rem` lead | paragraphs |
| `small` | `0.875rem` | secondary copy |
| `label` | `0.75rem`, uppercase, tracked | eyebrow labels |

### 1.3 Logo

Geometry measured from two independent complete instances in the manual (page 3 mark and
the "Cena veřejnosti" category lockup); the two agree to within 0.5 px.

Normalised to rectangle width = 1:

- rectangle: width `1`, height `1.238`
- circle: diameter `0.781`, horizontally centred on the rectangle, centre point lying
  exactly **on the rectangle's bottom edge**
- total mark height: `1.627` (= 1.238 + 0.781/2, internally consistent)

The knockout is **transparent**, not white — confirmed by the navy tote bag on manual
page 5, where the bag colour shows through the circle's upper half. Construction is therefore
a single path with `fill-rule="evenodd"`: rectangle and circle as two subpaths, so the
overlap drops out and the mark composites correctly on any background.

```
viewBox="0 0 100 162.9"
M0,0 H100 V123.8 H0 Z
M50,84.75 a39.05,39.05 0 1,0 0,78.1 a39.05,39.05 0 1,0 0,-78.1 Z
```

Uses `fill="currentColor"` so the three category variants are a text-colour change.
Deliverable: `src/components/BrandMark.vue`, replacing the stock house icon currently in
the header and footer.

## 2 — Homepage

Order (client's, with Harmonogram kept high because dates are what developers look for):

1. Hero — desaturated still + CTA
2. Harmonogram
3. Nominované projekty
4. Pro developery / Pro partnery
5. **Aktuality** — new
6. O soutěži
7. **Předsedové poroty** — new

### 2.1 Hero still

Pick a representative frame from `projektroku.mov` — **not** frame 1, which is a dark
fade-in on a building entrance. The footage is lit in heavy magenta/purple which fights the
palette, so the still is desaturated before use. Output `src/assets/hero-still.jpg`, ~1920 px
wide. The existing 32 MB `video.mp4` (unrelated conference footage) stops being referenced.

CTAs stay as they are: `HLASOVAT` and `PŘIHLÁSIT PROJEKT`.

### 2.2 Aktuality

Three newest articles from projektroku.cz, as `newsItems` in `src/data/site.ts`, each linking
to the live article:

| Date | Title |
|---|---|
| 1. 2. 2026 | Registrace projektů do ročníku 2026 právě zahájena |
| 25. 1. 2026 | Realitní projekt roku 2025 již zná své vítěze |
| 13. 12. 2025 | Očekávané finále – vyhlášení vítězů za rok 2025 se uskuteční 22. ledna 2026 |

### 2.3 Předsedové poroty

No jury names are published anywhere on projektroku.cz, and `/m` returns 404. The section
renders an arbitrary-length list from `site.ts` and is seeded with **two** placeholders —
chair of the expert jury and chair of the architects' jury. Not three: *Cena veřejnosti* is a
public vote and has no jury. Placeholder entries are marked in the data so they are obvious.

## 3 — Footer

Structure from the reference screenshot, content from the competition. The screenshot is
adresa.cz's own footer — copying its `Kategorie` / `Naše aktivity` navigation verbatim would
put the parent group's site map on the competition site, so only the layout is borrowed.

Top to bottom:

1. **Partneři** — tiers Zlatý / Stříbrný / Bronzový / Mediální. Logos monochrome, square
   format. Defined as a tier array in `site.ts` so they stay editable.
2. rule
3. **Termín konání akce** and **Kontakt**, as two visually separated blocks.
4. rule
5. Logo row, right-aligned: bonafide, adresa, tvize, Czech Workspace, plus the Projekt roku
   mark.
6. Copyright bar — © 2026, Poski.com credit, legal links.

Real data pulled from production:

- Slavnostní vyhlášení: **leden 2027**
- Mgr. Dana Hradecká, +420 605 292 801, hradecka@projektroku.cz
- Port7, budova E1, Partyzánská 23, Praha 7 Holešovice, IČ 883 25 067
- Zlatý: Adresa · Stříbrný: Developers Club, Města budoucnosti, Upvest, Newton University ·
  Bronzový: Ronda Invest · Mediální: Reality Idnes

**Known limitation.** The group logos (bonafide, adresa, tvize, Czech Workspace) exist only
inside the reference screenshot. They will be cropped from it — white on black, so keying the
background out is feasible — but at screenshot resolution. Good enough for a client preview;
originals must be requested before production.

## 4 — Cleanup

- Remove the two Unsplash stock photos on `ProjectsPage.vue` (hero mountain shot, CTA block).
  They directly contradict the client's "méně obrázků".
- Fix the fabricated contact address in `site.ts`: *"Kancelář soutěže, Na Příkopě 12,
  110 00 Praha 1"* does not exist — Builder.io invented it. Replace with the Port7 address.

## Out of scope

- **Region map / Prague districts.** The map is already the first element on the Projects
  page and Prague already expands to clickable tiles for Praha 1–10. What the client wants
  beyond this is unknown; he is being asked. Possible outcomes: nothing, extending tiles to
  Praha 1–22, or a real clickable Prague SVG.
  *Structurally untouched, but its colours had to be fixed — see Deviations.*
- **Gellix licence.** Typography ships on Jost until webfonts are supplied.
- **Jury identities.** Placeholders until the client provides names and photos.
- **Production group logos.** Screenshot crops until originals arrive.

## Execution

Batching is constrained by file contention, not by appetite for parallelism. The visual
foundation touches every file, and three of the batch-2 tasks all edit `HomePage.vue` and
`site.ts`. Parallel agents would overwrite each other. The main axis is therefore sequential.

**Batch 1 — foundation.** Colour tokens, typography, size scale, `BrandMark.vue`, then sweep
every page onto the new tokens. Runs alone. Ends with a build and a deploy.

**Batch 2 — content and structure.** Two branches that touch disjoint files:
- Homepage: reorder, Aktuality, Předsedové poroty, hero still
- Footer: full rebuild, partner tiers, contacts

Asset preparation (hero still extraction, logo cropping) is independent of both and can run
alongside. Ends with a build and a deploy.

**Batch 3 — cleanup.** Unsplash removal, address fix, plus whatever the client answers about
the map.

## Deviations from this spec, as built

Recorded after implementation so the spec matches what actually shipped.

1. **Region map colours.** The map was meant to stay untouched, but the palette change
   exposed a pre-existing legibility problem: inactive regions were `fill-ink/5` at
   `opacity-60` and active ones plain white, which on the new light canvas rendered the map
   nearly invisible. Restyled to `fill-muted` (inactive) / `fill-paper` with a
   `stroke-ink/45` outline (active) / `fill-accent` on hover. Structure and behaviour
   unchanged — this is a colour fix, not the client's requested map change.

2. **Type scale is seven steps, not six.** `display`, `h1`, `h2`, `lead`, `body`, `small`,
   `label`. Collapsing `lead` into `body` would have forced uppercase tracked sub-headings
   to jump a full tier. Seven still satisfies "maximálně pár úrovní" and is down from the
   twelve steps the site started with.

3. **Muted text opacities consolidated.** Not in the original spec. The site used twelve
   different `text-ink/NN` values; these collapsed to three (`/45`, `/70`, `/80`) plus
   `text-secondary` for eyebrow labels — the same "too many levels" problem expressed in
   colour rather than size.

4. **Two Unsplash photos remain.** Only the Projects page was in scope. `ForDevelopersPage`
   and `ForPartnersPage` still hot-link hero photos from `images.unsplash.com`. Removing
   them means redesigning both heroes, which is beyond this round — flagged to the user
   instead. Note the hot-linking is a live dependency on a third-party CDN.

5. **Partner logos are text tiles.** No partner logo files exist; only `adresa` was
   recoverable (from the footer screenshot). The other partners render as monochrome square
   tiles with the name set in type, which satisfies "monochrom / základní formát čtverec"
   and is trivially swapped for real logos later.

## Verification

Each batch ends with:

1. `npm run build` completing without type errors.
2. Dev server rendering `/`, `/projekty`, `/projekty/:slug`, `/pro-developery`,
   `/pro-partnery` without console errors, checked at 1920 px and 430 px.
3. `npx gh-pages -d dist` to publish, since pushing `main` does **not** update the live site.
