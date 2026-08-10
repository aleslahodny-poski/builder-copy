<script setup lang="ts">
/**
 * Značka Realitního projektu roku podle grafického manuálu, koncept 1.
 *
 * Geometrie odměřená ze dvou nezávislých vyobrazení v manuálu (str. 3 — hlavní
 * značka a lockup "Cena veřejnosti"); obě sedí na půl pixelu:
 *   obdélník  šířka 1, výška 1.238
 *   kruh      průměr 0.781, vodorovně na střed, střed přesně na dolní hraně obdélníku
 *   celkem    výška 1.627
 *
 * Výsek v horní půlce kruhu je průhledný, ne bílý — na navy tašce v manuálu
 * (str. 5) skrz něj prosvítá barva látky. Proto jedna cesta se dvěma podcestami
 * a fill-rule="evenodd": překryv vypadne sám a značka sedí na jakémkoli pozadí.
 */
withDefaults(
  defineProps<{
    /** Cena veřejnosti / odborné poroty / architektů — jinak se dědí currentColor. */
    category?: 'public' | 'jury' | 'architects'
  }>(),
  { category: undefined },
)

const categoryClass = {
  public: 'text-cat-public',
  jury: 'text-cat-jury',
  architects: 'text-cat-architects',
} as const
</script>

<template>
  <svg
    viewBox="0 0 100 162.9"
    fill="currentColor"
    fill-rule="evenodd"
    role="img"
    aria-label="Realitní projekt roku"
    :class="category ? categoryClass[category] : undefined"
  >
    <path d="M0,0 H100 V123.8 H0 Z M50,84.75 a39.05,39.05 0 1,0 0,78.1 a39.05,39.05 0 1,0 0,-78.1 Z" />
  </svg>
</template>
