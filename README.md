# Универсальный стартер проекта на Nuxt 3

Репозиторий-стартер для разработки приложения любой сложности на [Nuxt](https://nuxt.com/).

## Архитектура и code-style

Линтер настроен на строгое соблюдение методологии [Feature-Sliced Design](https://feature-sliced.design/).
Также при конфигурации TSC и ESLint делался упор на максимальную строгость. За основу конфига для ESLint взят
[eslint-config-hardcore](https://github.com/EvgenyOrekhov/eslint-config-hardcore), правила которого переопределялись для
большего соответствия устоявшимся рабочим практикам.

## Запуск в режиме разработки

```bash
nuxt dev
```

Проект запускается по умолчанию на [http://localhost:3000](http://localhost:3000)

## Билд

Для сборки гибридного SSR-приложения:

```bash
nuxt build
```

Для статической сборки:

```bash
nuxt generate
```
