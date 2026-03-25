<script setup lang="ts">
const props = defineProps<{
  selectedRegion: string
  selectedDistrict: string
}>()

const emit = defineEmits<{
  (event: 'update:region', value: string): void
  (event: 'update:district', value: string): void
}>()

interface MapRegion {
  name: string
  path: string
}

interface PragueDistrict {
  name: string
  path: string
}

const regions: MapRegion[] = [
  { name: 'Karlovarský', path: 'M34 188 L104 146 L148 168 L136 232 L66 246 L26 224 Z' },
  { name: 'Ústecký', path: 'M96 118 L188 90 L226 134 L180 176 L104 146 Z' },
  { name: 'Liberecký', path: 'M228 72 L296 66 L318 116 L254 128 Z' },
  { name: 'Královéhradecký', path: 'M316 92 L404 94 L430 152 L346 166 L318 116 Z' },
  { name: 'Pardubický', path: 'M286 152 L358 148 L380 210 L316 232 L258 196 Z' },
  { name: 'Plzeňský', path: 'M72 240 L152 208 L214 240 L184 310 L92 314 L46 276 Z' },
  { name: 'Praha', path: 'M252 202 L276 194 L294 212 L272 232 L246 222 Z' },
  { name: 'Středočeský', path: 'M174 190 L248 164 L330 176 L350 246 L302 292 L212 284 L156 240 Z' },
  { name: 'Vysočina', path: 'M320 222 L394 208 L436 246 L404 308 L330 302 L302 292 Z' },
  { name: 'Olomoucký', path: 'M430 150 L504 144 L540 196 L484 238 L438 222 Z' },
  { name: 'Moravskoslezský', path: 'M506 118 L618 130 L644 206 L568 224 L540 196 Z' },
  { name: 'Jihočeský', path: 'M150 302 L248 294 L292 340 L248 392 L132 386 L106 334 Z' },
  { name: 'Jihomoravský', path: 'M292 316 L412 314 L498 344 L458 392 L332 392 L274 358 Z' },
  { name: 'Zlínský', path: 'M470 248 L552 228 L610 258 L596 338 L498 344 L430 308 Z' },
]

const pragueDistricts: PragueDistrict[] = [
  { name: 'Praha 1', path: 'M26 76 L90 76 L90 138 L26 138 Z' },
  { name: 'Praha 2', path: 'M92 76 L156 76 L156 138 L92 138 Z' },
  { name: 'Praha 3', path: 'M158 76 L224 76 L224 138 L158 138 Z' },
  { name: 'Praha 6', path: 'M26 140 L104 140 L104 212 L26 212 Z' },
  { name: 'Praha 7', path: 'M106 140 L166 140 L166 212 L106 212 Z' },
  { name: 'Praha 8', path: 'M168 140 L224 140 L224 212 L168 212 Z' },
  { name: 'Praha 4', path: 'M26 214 L120 214 L120 286 L26 286 Z' },
  { name: 'Praha 5', path: 'M122 214 L224 214 L224 286 L122 286 Z' },
]

const regionClass = (name: string) =>
  props.selectedRegion === name
    ? 'fill-ink text-paper stroke-paper'
    : 'fill-paper text-ink stroke-line hover:fill-muted'

const districtClass = (name: string) =>
  props.selectedDistrict === name
    ? 'fill-ink text-paper stroke-paper'
    : 'fill-paper text-ink stroke-line hover:fill-muted'

const selectRegion = (name: string) => {
  emit('update:region', props.selectedRegion === name ? 'All regions' : name)
  emit('update:district', '')
}

const selectDistrict = (name: string) => {
  emit('update:district', props.selectedDistrict === name ? '' : name)
}
</script>

<template>
  <div class="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
    <div class="rounded-card border border-line bg-paper p-5 md:p-6">
      <div class="flex items-start justify-between gap-4 border-b border-line pb-5">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-ink/45">Czech Republic</p>
          <p class="mt-2 text-sm leading-6 text-ink/65">Click a region to filter the shortlist.</p>
        </div>
        <button
          type="button"
          class="rounded-soft border border-line px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink transition hover:border-ink"
          @click="selectRegion('All regions')"
        >
          Reset
        </button>
      </div>

      <svg viewBox="0 0 680 430" class="mt-6 w-full">
        <g v-for="region in regions" :key="region.name">
          <path
            :d="region.path"
            :class="regionClass(region.name)"
            class="cursor-pointer stroke-[2] transition-colors duration-200"
            @click="selectRegion(region.name)"
          />
        </g>
      </svg>

      <div class="mt-6 flex flex-wrap gap-2">
        <button
          v-for="region in regions"
          :key="region.name"
          type="button"
          class="rounded-full border px-3 py-2 text-xs uppercase tracking-[0.16em] transition"
          :class="selectedRegion === region.name ? 'border-ink bg-ink text-paper' : 'border-line text-ink/70 hover:border-ink hover:text-ink'"
          @click="selectRegion(region.name)"
        >
          {{ region.name }}
        </button>
      </div>
    </div>

    <div class="rounded-card border border-line bg-paper p-5 md:p-6">
      <div class="border-b border-line pb-5">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/45">Prague districts</p>
        <p class="mt-2 text-sm leading-6 text-ink/65">
          Detailed district filtering appears when Praha is active.
        </p>
      </div>

      <div v-if="selectedRegion === 'Praha'" class="mt-6 space-y-6">
        <svg viewBox="0 0 250 310" class="mx-auto w-full max-w-[280px]">
          <g v-for="district in pragueDistricts" :key="district.name">
            <path
              :d="district.path"
              :class="districtClass(district.name)"
              class="cursor-pointer stroke-[2] transition-colors duration-200"
              @click="selectDistrict(district.name)"
            />
          </g>
        </svg>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="district in pragueDistricts"
            :key="district.name"
            type="button"
            class="rounded-full border px-3 py-2 text-xs uppercase tracking-[0.16em] transition"
            :class="selectedDistrict === district.name ? 'border-ink bg-ink text-paper' : 'border-line text-ink/70 hover:border-ink hover:text-ink'"
            @click="selectDistrict(district.name)"
          >
            {{ district.name }}
          </button>
        </div>
      </div>

      <div v-else class="mt-6 rounded-soft border border-dashed border-line px-5 py-8 text-sm leading-7 text-ink/60">
        Select <span class="font-medium text-ink">Praha</span> on the main map to refine the shortlist by district.
      </div>
    </div>
  </div>
</template>
