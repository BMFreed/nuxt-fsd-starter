<script setup lang="ts">
defineProps<{
  /**
   * Цвет текста
   */
  textColor: string
}>()
</script>

<template>
  <main :class="$style.main">Текст имеет цвет {{ textColor }}</main>
</template>

<style module>
.main {
  color: v-bind(textColor);
}
</style>
