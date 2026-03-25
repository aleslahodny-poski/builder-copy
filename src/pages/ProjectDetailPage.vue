<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { projects } from '@/data/site'

const route = useRoute()
const email = ref('')
const voteSubmitted = ref(false)

const project = computed(() => projects.find((entry) => entry.slug === route.params.slug))

const submitVote = () => {
  if (!email.value) {
    return
  }

  voteSubmitted.value = true
}
</script>

<template>
  <div v-if="project">
    <section class="mx-auto max-w-[1600px] px-5 pt-6 md:px-8 lg:px-10">
      <div class="overflow-hidden rounded-shell border border-line bg-paper">
        <div class="aspect-[16/7] min-h-[320px] overflow-hidden border-b border-line bg-muted">
          <img :src="project.image" :alt="project.name" class="h-full w-full object-cover" />
        </div>

        <div class="grid gap-10 px-6 py-8 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10">
          <div>
            <p class="text-xs uppercase tracking-[0.3em] text-ink/45">Detail projektu</p>
            <h1 class="mt-5 max-w-3xl text-5xl font-medium tracking-[-0.05em] text-ink md:text-7xl">
              {{ project.name }}
            </h1>
            <div class="mt-6 flex flex-wrap gap-3 text-sm uppercase tracking-[0.18em] text-ink/55">
              <span class="rounded-full border border-line px-3 py-2">{{ project.region }}</span>
              <span class="rounded-full border border-line px-3 py-2">{{ project.district ?? 'Regionální finalista' }}</span>
              <span class="rounded-full border border-line px-3 py-2">{{ project.developer }}</span>
            </div>
            <p class="mt-8 max-w-2xl text-lg leading-8 text-ink/70">
              {{ project.description }}
            </p>

            <div class="mt-12 rounded-card border border-line bg-canvas p-6">
              <p class="text-xs uppercase tracking-[0.3em] text-ink/45">Developer</p>
              <div class="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div class="rounded-soft border border-line px-4 py-3 text-xs uppercase tracking-[0.34em] text-ink/55">
                    [LOGO]
                  </div>
                  <h2 class="mt-4 text-2xl font-medium tracking-[-0.03em] text-ink">{{ project.developer }}</h2>
                </div>
                <a
                  :href="project.website"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-soft border border-line px-5 py-3 text-sm tracking-[0.16em] text-ink transition hover:border-ink"
                >
                  Navštívit web developera
                </a>
              </div>
            </div>
          </div>

          <aside class="lg:pt-20">
            <div class="rounded-card border border-ink bg-ink p-6 text-paper md:p-8 lg:sticky lg:top-32">
              <p class="text-xs uppercase tracking-[0.3em] text-paper/50">Hlasovat</p>
              <h2 class="mt-4 text-3xl font-medium tracking-[-0.04em]">Dejte svůj hlas tomuto projektu.</h2>
              <p class="mt-4 text-base leading-7 text-paper/72">
                Níže zadejte svou e-mailovou adresu. Zašleme vám potvrzovací odkaz k ověření vašeho hlasu.
              </p>

              <form class="mt-8 space-y-4" @submit.prevent="submitVote">
                <label class="block text-sm uppercase tracking-[0.18em] text-paper/60" for="vote-email">
                  E-mailová adresa
                </label>
                <input
                  id="vote-email"
                  v-model="email"
                  type="email"
                  placeholder="jmeno@priklad.cz"
                  class="w-full rounded-soft border border-paper/20 bg-paper/10 px-4 py-3 text-base text-paper outline-none transition placeholder:text-paper/35 focus:border-paper"
                  required
                />
                <button
                  type="submit"
                  class="w-full rounded-soft border border-paper bg-paper px-5 py-3 text-sm tracking-[0.18em] text-ink transition hover:bg-transparent hover:text-paper"
                >
                  Potvrdit hlas e-mailem
                </button>
              </form>

              <p v-if="voteSubmitted" class="mt-5 rounded-soft border border-paper/20 bg-paper/10 px-4 py-3 text-sm leading-6 text-paper/78">
                Demo potvrzení: odkaz pro ověření hlasu by nyní byl odeslán na {{ email }}.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>

  <section v-else class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-28">
    <div class="rounded-card border border-line bg-paper p-10">
      <p class="text-xs uppercase tracking-[0.3em] text-ink/45">Detail projektu</p>
      <h1 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink">Tento projekt nebyl nalezen.</h1>
      <p class="mt-5 max-w-2xl text-base leading-7 text-ink/68">
        Cesta sice existuje, ale tento záznam chybí v aktuálních datech užšího výběru.
      </p>
      <RouterLink
        to="/projekty"
        class="mt-8 inline-flex rounded-soft border border-ink bg-ink px-6 py-3 text-sm tracking-[0.16em] text-paper transition hover:bg-paper hover:text-ink"
      >
        Zpět na projekty
      </RouterLink>
    </div>
  </section>
</template>
