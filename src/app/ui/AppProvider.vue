<script setup lang="ts">
import './globalStyles.css'

import { ru } from 'element-plus/es/locale'
</script>

<template>
  <ElConfigProvider :locale="ru">
    <NuxtPage />
  </ElConfigProvider>
</template>
