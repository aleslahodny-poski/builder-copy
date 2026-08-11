<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="min-h-screen -mt-24 bg-canvas pt-24 md:-mt-28 md:pt-28">
    <!-- Hero bez fotky — klient chce web postavený na typografii, ne na obrázcích. -->
    <section class="mx-auto max-w-[1600px] px-5 pb-16 pt-6 md:px-8 lg:px-10">
      <div class="relative w-full overflow-hidden rounded-shell border border-line bg-ink p-8 md:p-12 lg:p-16">
        <nav
          v-reveal="50"
          class="flex items-center gap-2 text-label font-bold uppercase tracking-[0.2em] text-paper/60"
        >
          <RouterLink to="/" class="transition-colors hover:text-paper">Domů</RouterLink>
          <span class="text-paper/45">/</span>
          <span class="text-paper">Pro partnery</span>
        </nav>

        <div class="relative z-10 mt-10 max-w-4xl">
          <p v-reveal class="text-label uppercase tracking-[0.32em] text-paper/60 font-bold">
            Spolupráce se soutěží
          </p>
          <h1 v-reveal="100" class="mt-4 text-display font-medium tracking-[-0.04em] text-paper">
            Pro partnery
          </h1>
          <p v-reveal="200" class="mt-5 max-w-2xl text-body leading-relaxed text-paper/70 md:text-lead">
            Spojte svou značku se soutěží, kterou sledují developeři, odborná veřejnost i lidé
            hledající nové bydlení — od mediálního až po generální partnerství.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 1: VALUE PROPOSITION (Strategic Gateway) -->
    <section class="border-b border-line bg-paper px-5 py-24 md:px-8 lg:px-10 lg:py-32">
      <div v-reveal class="mx-auto max-w-5xl text-center">
        <p class="mb-6 text-label font-bold uppercase tracking-[0.32em] text-ink/70">Proč být partnerem?</p>
        <p class="text-lead leading-[1.8] text-ink/80">
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
        <div v-reveal class="mb-16 text-center">
          <p class="text-label font-bold uppercase tracking-[0.32em] text-paper/50 mb-4">Možnosti zapojení</p>
          <h2 class="text-h1 font-bold tracking-tight text-paper">Nabízíme aktivní zapojení v podobě:</h2>
        </div>

        <!--
          Úrovně partnerství se odlišují jasem v rámci palety, ne zlatou/stříbrnou.
          Sestupně: accent (nejvyšší) → paper → line → secondary.
        -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <!-- Monolith 1: Generalni -->
          <article v-reveal="100" class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-accent/50 hover:bg-accent/10">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-label font-bold uppercase tracking-widest text-accent">Generální</span>
              <h3 class="mb-3 text-h2 font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-small leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Exkluzivní zastoupení, plná asociace se značkou přes všechny mediální výstupy a maximální viditelnost.</p>
            </div>
            <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>
          
          <!-- Monolith 2: Zlatý -->
          <article v-reveal="200" class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-paper/50 hover:bg-paper/10">
            <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-label font-bold uppercase tracking-widest text-paper">Zlaté</span>
              <h3 class="mb-3 text-h2 font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-small leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Silná přítomnost na hlavních formátech, masivní vizibilita u odborné i laické veřejnosti.</p>
            </div>
            <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-paper/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>

          <!-- Monolith 3: Stříbrný -->
          <article v-reveal="300" class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-line/50 hover:bg-line/10">
             <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-label font-bold uppercase tracking-widest text-line">Stříbrné</span>
              <h3 class="mb-3 text-h2 font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-small leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Základní partnerské pokrytí v tiskových i digitálních celostátních kanálech soutěže.</p>
            </div>
             <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-line/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>

          <!-- Monolith 4: Mediální -->
          <article v-reveal="400" class="group relative flex min-h-[450px] flex-col justify-end overflow-hidden border border-paper/10 bg-paper/[0.02] p-8 transition-colors duration-700 hover:border-secondary/50 hover:bg-secondary/10">
             <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div class="relative z-20">
              <span class="mb-4 inline-block text-label font-bold uppercase tracking-widest text-secondary">Mediální</span>
              <h3 class="mb-3 text-h2 font-bold uppercase tracking-widest text-paper">Partnerství</h3>
              <p class="text-small leading-relaxed text-paper/70 transition-colors group-hover:text-paper">Vzájemná podpora prémiového obsahu, PR synergii a budování masového dosahu.</p>
            </div>
            <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-secondary/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 3: BENEFITS GRID -->
    <section class="border-y border-line bg-paper px-5 py-24 md:px-8 lg:px-10 lg:py-32">
      <div class="mx-auto max-w-[1600px]">
        <div v-reveal class="mb-16 md:mb-24">
          <p class="text-label font-bold uppercase tracking-[0.32em] text-ink/70 mb-4">Benefity</p>
          <h2 class="text-h1 font-bold tracking-tight text-ink">Hlavní benefity partnerství</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div v-reveal="100" class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lead">01</div>
             <div>
               <h3 class="text-lead font-bold uppercase tracking-widest text-ink mb-3">Nové obchodní kontakty</h3>
               <p class="text-ink/80 leading-relaxed text-small">Získáte přímou vazbu s účastníky, developery a odborníky na realitním trhu napříč Českou republikou i v případě zájmu o spolupráci do budoucna.</p>
             </div>
          </div>
          <div v-reveal="200" class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lead">02</div>
             <div>
               <h3 class="text-lead font-bold uppercase tracking-widest text-ink mb-3">Mediální podporu značky</h3>
               <p class="text-ink/80 leading-relaxed text-small">Široké PR zviditelnění směrem k laické společnosti v regionech, i silná prezence mezi odbornou obcí a potenciálními klienty.</p>
             </div>
          </div>
          <div v-reveal="300" class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lead">03</div>
             <div>
               <h3 class="text-lead font-bold uppercase tracking-widest text-ink mb-3">Účast na slavnostním večeru</h3>
               <p class="text-ink/80 leading-relaxed text-small">Zajistěte si prémiová místa v centru dění pro své zástupce při oficiálním moderovaném vyhlašování výsledků prestižní soutěže.</p>
             </div>
          </div>
          <div v-reveal="400" class="flex items-start gap-6 group">
             <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-paper font-bold text-lead">04</div>
             <div>
               <h3 class="text-lead font-bold uppercase tracking-widest text-ink mb-3">Distribuce materiálů na místě</h3>
               <p class="text-ink/80 leading-relaxed text-small">Jedinečná příležitost přímé propagace a fyzické distribuce vašich propagačních nebo edukačních materiálů elitním hostům na galavečeru.</p>
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
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">OBCHODNÍ KONTAKTY</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">PODÍL NA TRHU</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">GALAVEČER</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">MEDIÁLNÍ PODPORA</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">PRESTIŽ</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
        </div>
        <div class="flex items-center gap-12 px-6">
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">OBCHODNÍ KONTAKTY</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">PODÍL NA TRHU</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">GALAVEČER</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">MEDIÁLNÍ PODPORA</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">PRESTIŽ</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
        </div>
        <div class="flex items-center gap-12 px-6">
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">OBCHODNÍ KONTAKTY</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">PODÍL NA TRHU</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">GALAVEČER</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">MEDIÁLNÍ PODPORA</span>
          <div class="h-1.5 w-1.5 rounded-full bg-ink/20"></div>
          <span class="text-label font-bold uppercase tracking-[0.2em] text-ink/45">PRESTIŽ</span>
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
