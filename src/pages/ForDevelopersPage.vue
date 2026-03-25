<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="min-h-screen bg-canvas pt-[72px]">
    <!-- HEADER: The "Horizon" Style -->
    <header class="relative flex h-[300px] w-full items-center justify-center overflow-hidden border-b border-line bg-ink perspective-[1000px]">
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" alt="Architecture Horizon" class="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
      <h1 class="relative z-10 text-4xl md:text-6xl uppercase tracking-[0.2em] text-paper font-bold drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-[2000ms] hover:scale-105" style="transform: translateZ(20px);">
        Pro developery
      </h1>
    </header>

    <!-- SECTION 1: PROČ NOMINOVAT (Validation Deck) -->
    <section class="mx-auto max-w-[1600px] px-5 py-24 md:px-8 lg:px-10 lg:py-32">
      <div class="mb-16 md:text-center max-w-4xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-[0.32em] text-ink/80">Proč nominovat svůj developerský projekt</p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Srovnání vůči konkurenci a plnohodnotná podpora na elitní úrovni.
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <!-- REF. 01 -->
        <article class="group relative flex flex-col justify-between overflow-hidden rounded-card border border-line bg-paper/60 p-8 pt-16 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-ink hover:bg-paper hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
          <span class="absolute left-8 top-6 text-xs font-bold uppercase tracking-widest text-ink/30 transition-colors group-hover:text-ink/60">REF. 01</span>
          <div>
            <h3 class="mb-4 text-xl font-bold uppercase tracking-widest text-ink">Srovnání</h3>
            <p class="text-sm leading-relaxed text-ink/75 group-hover:text-ink/90">
              Umožníme vám přímé srovnání vašich projektů s tvrdou konkurencí.
            </p>
          </div>
        </article>

        <!-- REF. 02 -->
        <article class="group relative flex flex-col justify-between overflow-hidden rounded-card border border-line bg-paper/60 p-8 pt-16 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-ink hover:bg-paper hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
          <span class="absolute left-8 top-6 text-xs font-bold uppercase tracking-widest text-ink/30 transition-colors group-hover:text-ink/60">REF. 02</span>
          <div>
            <h3 class="mb-4 text-xl font-bold uppercase tracking-widest text-ink">Validace</h3>
            <p class="text-sm leading-relaxed text-ink/75 group-hover:text-ink/90">
              Přesné třístupňové hodnocení jednotlivých projektů odbornou porotou, širokou veřejností a nezávislými architekty.
            </p>
          </div>
        </article>

        <!-- REF. 03 -->
        <article class="group relative flex flex-col justify-between overflow-hidden rounded-card border border-line bg-paper/60 p-8 pt-16 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-ink hover:bg-paper hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
          <span class="absolute left-8 top-6 text-xs font-bold uppercase tracking-widest text-ink/30 transition-colors group-hover:text-ink/60">REF. 03</span>
          <div>
             <h3 class="mb-4 text-xl font-bold uppercase tracking-widest text-ink">Media</h3>
            <p class="text-sm leading-relaxed text-ink/75 group-hover:text-ink/90">
              Každá soutěž je masivně mediálně podpořena po celé ČR.
            </p>
          </div>
        </article>

        <!-- REF. 04 -->
        <article class="group relative flex flex-col justify-between overflow-hidden rounded-card border border-line bg-paper/60 p-8 pt-16 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-ink hover:bg-paper hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
          <span class="absolute left-8 top-6 text-xs font-bold uppercase tracking-widest text-ink/30 transition-colors group-hover:text-ink/60">REF. 04</span>
          <div>
            <h3 class="mb-4 text-xl font-bold uppercase tracking-widest text-ink">Regiony</h3>
            <p class="text-sm leading-relaxed text-ink/75 group-hover:text-ink/90">
              Vítězné projekty jsou exkluzivně ohodnoceny v každém kraji a podrobně pro Prahu 1–10.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- SECTION 2: CENY (The Awards Singularity) -->
    <section class="border-t border-line bg-ink px-5 py-24 text-paper md:px-8 md:py-32 lg:px-10">
      <div class="mx-auto max-w-[1600px]">
        <div class="mb-20 grid gap-10 md:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <h2 class="mt-4 text-4xl font-bold md:text-5xl lg:text-7xl">Ceny</h2>
            <p class="mt-8 max-w-2xl text-lg leading-8 text-paper/80">
              Výherci jsou vybráni ze všech krajů České republiky a Prahy 1 až 10. Hlasuje jak veřejnost, tak exkluzivní odborná porota z řad realitních odborníků a architektů. Dojde tak k předání několika desítek ocenění!
            </p>
          </div>
          <div class="md:text-right">
            <RouterLink to="/" class="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-paper backdrop-blur-md transition hover:bg-paper hover:text-ink">
              Přihlásit projekt
            </RouterLink>
          </div>
        </div>

        <div class="relative mt-20 flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-shell border border-paper/10 bg-gradient-to-b from-paper/[0.03] to-transparent p-10 md:min-h-[800px]">
          <!-- Satellite ORBIT RINGS -->
          <div class="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-paper/20 opacity-50 md:h-[500px] md:w-[500px]"></div>
          <div class="pointer-events-none absolute h-[450px] w-[450px] rounded-full border border-paper/10 opacity-30 md:h-[750px] md:w-[750px]"></div>
          
          <!-- CORE: Absolutní vítěz -->
          <div class="relative z-20 flex h-48 w-48 flex-col items-center justify-center rounded-full bg-paper text-center text-ink shadow-[0_0_100px_rgba(255,255,255,0.2)] md:h-72 md:w-72">
            <span class="mb-2 max-w-[140px] text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60 md:max-w-xs">Vyhlášení v každé kategorii</span>
            <h3 class="text-xl font-bold uppercase tracking-widest md:text-3xl">Absolutní<br>Vítěz</h3>
          </div>

          <!-- SATELLITE 1: Porota -->
          <div class="absolute left-1/2 top-8 z-10 flex -translate-x-1/2 flex-col items-center text-center md:top-16">
            <div class="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-paper/20 bg-ink/80 backdrop-blur-sm md:h-20 md:w-20">
              <span class="text-xs font-bold tracking-widest text-paper/50">C.01</span>
            </div>
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-paper/90">Cena odborné poroty</p>
          </div>

          <!-- SATELLITE 2: Architekti -->
          <div class="absolute bottom-20 left-4 z-10 flex flex-col items-center text-center md:bottom-32 md:left-24 lg:left-48">
            <div class="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-paper/20 bg-ink/80 backdrop-blur-sm md:h-20 md:w-20">
              <span class="text-xs font-bold tracking-widest text-paper/50">C.02</span>
            </div>
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-paper/90">Cena architektů</p>
          </div>

          <!-- SATELLITE 3: Veřejnost -->
          <div class="absolute bottom-20 right-4 z-10 flex flex-col items-center text-center md:bottom-32 md:right-24 lg:right-48">
            <div class="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-paper/20 bg-ink/80 backdrop-blur-sm md:h-20 md:w-20">
              <span class="text-xs font-bold tracking-widest text-paper/50">C.03</span>
            </div>
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-paper/90">Cena veřejnosti</p>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>
