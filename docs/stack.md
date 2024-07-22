# Стек
Здесь описан основной стек проекта.

## Инфраструктура
Проект построен на [Vue](https://vuejs.org/) и [Nuxt](https://nuxt.com).

## Статический анализ кода
Написан на TypeScript с использованием ESLint.
Линтер настроен на строгое соблюдение методологии [Feature-Sliced Design](https://feature-sliced.design/).
Также при конфигурации TSC и ESLint делался упор на максимальную строгость. 
За основу конфига для ESLint взят [eslint-config-hardcore](https://github.com/EvgenyOrekhov/eslint-config-hardcore), правила которого переопределялись 
для большего соответствия устоявшимся рабочим практикам.

## UI
В качестве ui-фреймворка используется [PrimeVue](https://primevue.org/).
