# pnpm mono

Monorepo application based on pnpm, speed up by nx

## Project Setup

### Install dependencies

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
// single
npx | pnpm nx dev package-name

// run-many
npx | pnpm nx run-many --target=dev --projects=xxx,xxx,...
```

### Compile and Minify for Production

```sh
// single
npx | pnpm nx build package-name

// run-many
npx | pnpm nx run-many --target=build --projects=xxx,xxx,...
```

