# [2.2.0](https://github.com/vitejs/vite-plugin-vue2/compare/v2.1.0...v2.2.0) (2022-12-10)


### Features

* Update for Vite 4.x support ([[#71](https://github.com/vitejs/vite-plugin-vue2/issues/71)](https://github.com/vitejs/vite-plugin-vue2/issues/71)) ([#72](https://github.com/vitejs/vite-plugin-vue2/issues/72)) ([d2360be](https://github.com/vitejs/vite-plugin-vue2/commit/d2360be65b37cdf51a27843925d352866dff23d1))



# [2.1.0](https://github.com/vitejs/vite-plugin-vue2/compare/v2.0.1...v2.1.0) (2022-11-30)


### Bug Fixes

* **esbuild:** transpile with esnext in dev ([#60](https://github.com/vitejs/vite-plugin-vue2/issues/60)) ([bd87898](https://github.com/vitejs/vite-plugin-vue2/commit/bd87898be4d02bd52cc8af0072db9e59a5dbd8fa))
* invalidate script module cache when it changed in hot update ([#67](https://github.com/vitejs/vite-plugin-vue2/issues/67)) ([b8e6133](https://github.com/vitejs/vite-plugin-vue2/commit/b8e6133b54bce820d93d0e4f9a9982198cdd60ee))


### Features

* resolve complier from peer dep when unable to resolve from the root ([#68](https://github.com/vitejs/vite-plugin-vue2/issues/68)) ([0ea62d2](https://github.com/vitejs/vite-plugin-vue2/commit/0ea62d2b4f8a84e87b332f4f2749aeba7f8e3145))



## [2.0.1](https://github.com/vitejs/vite-plugin-vue2/compare/v2.0.0...v2.0.1) (2022-11-09)


### Bug Fixes

* allow overwriting template.transformAssetUrls.includeAbsolute ([#48](https://github.com/vitejs/vite-plugin-vue2/issues/48)) ([7db0767](https://github.com/vitejs/vite-plugin-vue2/commit/7db076705b79d383b84e13cb375a7aa9f9f1545c))



## [2.0.0](https://github.com/vitejs/vite-plugin-vue2/compare/v1.1.2...v2.0.0) (2022-09-13)


### Breaking Changes

* only support Vite 3 ([#28](https://github.com/vitejs/vite-plugin-vue2/pull/28))

### Bug Fixes

* handle undefined on import.meta.hot.accept ([b668430](https://github.com/vitejs/vite-plugin-vue2/commit/b66843045b16516fc91512c67c4f87b6d3f4d45e))


### Features

* add compiler option in Options ([#45](https://github.com/vitejs/vite-plugin-vue2/issues/45)) ([fb47586](https://github.com/vitejs/vite-plugin-vue2/commit/fb4758637c0506e9b0e7ea6883568287f60ae077))



## [1.1.2](https://github.com/vitejs/vite-plugin-vue2/compare/v1.1.1...v1.1.2) (2022-07-01)


### Bug Fixes

* force resolution of vue to deal with deps requiring vue ([9a78726](https://github.com/vitejs/vite-plugin-vue2/commit/9a78726d77ef9aadf3c07dacd4c27828fe8f4ac8)), closes [#16](https://github.com/vitejs/vite-plugin-vue2/issues/16)
* handle decorators in ts rewriteDefault fallback ([2d24d2a](https://github.com/vitejs/vite-plugin-vue2/commit/2d24d2a4a692e59b789efc9b34119cc3650bf89e)), closes [#17](https://github.com/vitejs/vite-plugin-vue2/issues/17)



## [1.1.1](https://github.com/vitejs/vite-plugin-vue2/compare/v1.1.0...v1.1.1) (2022-06-28)


### Bug Fixes

* handle no template code in .vue file ([#11](https://github.com/vitejs/vite-plugin-vue2/issues/11)) ([42b0851](https://github.com/vitejs/vite-plugin-vue2/commit/42b0851425e39d5e7138114f1cc3d431cadc52ab)), closes [#15](https://github.com/vitejs/vite-plugin-vue2/issues/15)



# [1.1.0](https://github.com/vitejs/vite-plugin-vue2/compare/v1.0.1...v1.1.0) (2022-06-20)


### Features

* support css v-bind ([5146fd8](https://github.com/vitejs/vite-plugin-vue2/commit/5146fd8d2b852c8aed07d081811e7b81894211eb))



## 1.0.1 (2022-06-17)


### Bug Fixes

* disable prettify by default ([cd80f72](https://github.com/vitejs/vite-plugin-vue2/commit/cd80f7231d50bbf04919852e7cc72623070d9f40))


### Features

* it is working ([6c387d8](https://github.com/vitejs/vite-plugin-vue2/commit/6c387d8172d76b17df3d13a37f87d0e203bc4523))



# 1.0.0 (2022-06-17)


### Features

* it is working ([6c387d8](https://github.com/vitejs/vite-plugin-vue2/commit/6c387d8172d76b17df3d13a37f87d0e203bc4523))
