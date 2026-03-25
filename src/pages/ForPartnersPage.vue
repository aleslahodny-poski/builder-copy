<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="min-h-screen bg-canvas pt-[72px]">
    <!-- HEADER: The "Horizon" Style -->
    <header class="relative flex h-[300px] w-full items-center justify-center overflow-hidden border-b border-line bg-ink perspective-[1000px]">
      <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80" alt="Architecture Horizon" class="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
      <h1 class="relative z-10 text-4xl md:text-6xl uppercase tracking-[0.2em] text-paper font-bold drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-[2000ms] hover:scale-105" style="transform: translateZ(20px);">
        Pro partnery
      </h1>
    </header>

    <!-- SECTION 1: VALUE PROPOSITION (Strategic Gateway) -->
    <section class="border-b border-line bg-paper px-5 py-24 md:px-8 lg:px-10 lg:py-32">
      <div class="mx-auto max-w-5xl text-center">
        <p class="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-ink/60">Proč být partnerem?</p>
        <p class="text-lg leading-[1.8] text-ink/80 md:text-xl">
          Partnerství na tomto projektu přináší mnoho výhod a popředí zájmu Čechů, ale i cizinců, kteří hledají vhodné nemovitosti. 
          Odborníci, podnikatelé, veřejnost – všechny cílové skupiny obracejí svou pozornost k developerským projektům. 
          <span class="relative inline-block font-bold text-ink drop-shadow-[0_0_12px_rgba(0,0,0,0.15)]">Strategická spolupráce</span> se soutěží dá partnerovi 
          <span class="relative inline-block font-bold text-ink drop-shadow-[0_0_12px_rgba(0,0,0,0.15)]">silnou pozici</span> v této oblasti, kterou může obchodně velmi dobře zkapitalizovat a to jak v rámci medializace u veřejnosti, tak přímo v kontaktu se zúčastněnými developery.
        </p>
      </div>
    </section>

    <!-- SECTION 2: THE PARTNERSHIP TIERS (Monoliths) -->
    <section class="bg-ink px-5 py-24 text-paper md:px-8 lg:px-10 lg:py-32">
      <div class="mx-auto max-w-[1600px]">
        <div class="mb-16 text-center">
          <p class="text-xs font-bold uppercase tracking-[0.32em] text-paper/50 mb-4">Možnosti zapojení</p>
          <h2 class="text-3xl font-bold tracking-tight text-paper md:text-5xl">Nabízíme aktivní zapojení v podobě:</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <!-- Monolith 1: Generalni -->
          <article class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Generální</span>
              <h3 class="mb-3 text-3xl font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-sm leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Exkluzivní zastoupení, plná asociace se značkou přes všechny mediální výstupy a maximální viditelnost.</p>
            </div>
            <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>
          
          <!-- Monolith 2: Zlatý -->
          <article class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#FFD700]">Zlaté</span>
              <h3 class="mb-3 text-3xl font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-sm leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Silná přítomnost na hlavních formátech, masivní vizibilita u odborné i laické veřejnosti.</p>
            </div>
            <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#FFD700]/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>

          <!-- Monolith 3: Stříbrný -->
          <article class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/10">
             <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#C0C0C0]">Stříbrné</span>
              <h3 class="mb-3 text-3xl font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-sm leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Základní partnerské pokrytí v tiskových i digitálních celostátních kanálech soutěže.</p>
            </div>
             <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#C0C0C0]/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>

          <!-- Monolith 4: Mediální -->
          <article class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-[#4A90E2]/50 hover:bg-[#4A90E2]/10">
             <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#4A90E2]">Mediální</span>
              <h3 class="mb-3 text-3xl font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-sm leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Vzájemná podpora prémiového obsahu, PR synergii a budování masového dosahu.</p>
            </div>
            <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#4A90E2]/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 3: BENEFITS GRID -->
    <section class="border-y border-line bg-paper px-5 py-24 md:px-8 lg:px-10 lg:py-32">
      <div class="mx-auto max-w-[1600px]">
        <div class="mb-16 md:mb-24">
          <h2 class="text-3xl font-bold tracking-tight text-ink md:text-5xl max-w-full">
            Staňte se partnerem soutěže a získáte:
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lg">01</div>
             <div>
               <h3 class="text-xl font-bold uppercase tracking-widest text-ink mb-3">Nové obchodní kontakty</h3>
               <p class="text-ink/75 leading-relaxed text-sm">Získáte přímou vazbu s účastníky, developery a odborníky na realitním trhu napříč Českou republikou i v případě zájmu o spolupráci do budoucna.</p>
             </div>
          </div>
          <div class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lg">02</div>
             <div>
               <h3 class="text-xl font-bold uppercase tracking-widest text-ink mb-3">Mediální podporu značky</h3>
               <p class="text-ink/75 leading-relaxed text-sm">Široké PR zviditelnění směrem k laické společnosti v regionech, i silná prezence mezi odbornou obcí a potenciálními klienty.</p>
             </div>
          </div>
          <div class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lg">03</div>
             <div>
               <h3 class="text-xl font-bold uppercase tracking-widest text-ink mb-3">Účast na slavnostním večeru</h3>
               <p class="text-ink/75 leading-relaxed text-sm">Zajistěte si prémiová místa v centru dění pro své zástupce při oficiálním moderovaném vyhlašování výsledků prestižní soutěže.</p>
             </div>
          </div>
          <div class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lg">04</div>
             <div>
               <h3 class="text-xl font-bold uppercase tracking-widest text-ink mb-3">Distribuce materiálů na místě</h3>
               <p class="text-ink/75 leading-relaxed text-sm">Jedinečná příležitost přímé propagace a fyzické distribuce vašich propagačních nebo edukačních materiálů elitním hostům na galavečeru.</p>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: DIGITAL TICKER -->
    <section class="relative flex items-center overflow-hidden border-b border-line bg-paper py-8">
      <div class="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-paper to-transparent"></div>
      <div class="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-paper to-transparent"></div>

      <div class="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap">
        <div class="flex items-center gap-12 px-6">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">OBCHODNÍ KONTAKTY</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">PODÍL NA TRHU</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">GALAVEČER</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">MEDIÁLNÍ PODPORA</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">PRESTIŽ</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
        </div>
        <div class="flex items-center gap-12 px-6">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">OBCHODNÍ KONTAKTY</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">PODÍL NA TRHU</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">GALAVEČER</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">MEDIÁLNÍ PODPORA</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">PRESTIŽ</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
        </div>
        <div class="flex items-center gap-12 px-6">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">OBCHODNÍ KONTAKTY</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">PODÍL NA TRHU</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">GALAVEČER</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">MEDIÁLNÍ PODPORA</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">PRESTIŽ</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
.animate-\[ticker_30s_linear_infinite\] {
  animation: ticker 25s linear infinite;
}
</style>
