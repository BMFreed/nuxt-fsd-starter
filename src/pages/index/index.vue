<script setup lang="ts">
const value = ref(new Date())
</script>

<template>
  <div>Главная страница</div>
  <ElButton type="primary">Нажми меня</ElButton>
  <ElDatePicker v-model="value" />
</template>
