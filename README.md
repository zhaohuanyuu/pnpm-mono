# Pnpm Mono

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

### Application generate from template

```sh
npx | pnpm nx g tooling:app application-name tempalte-name
```

# Troubleshooting Record

## win os: nx Error Popup on every nx command

* [nx issues #10822](https://github.com/nrwl/nx/issues/10822)
* [nx issues #11247](https://github.com/nrwl/nx/issues/11247)

set nx.json > useDaemonProcess: false
```json
{
  "tasksRunnerOptions": {
    "default": {
      "options": {
        "useDaemonProcess": false
      }
    }
  }
}
```
