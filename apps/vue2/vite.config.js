import { resolve } from "node:path"
import vue2 from '@vitejs/plugin-vue2'
import legacy from "@vitejs/plugin-legacy"
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'

export default ({ mode }) => {
  const { VITE_PORT, VITE_BASE_URL, VITE_LEGACY } = loadEnv(mode, process.cwd());
  const isLegacy = VITE_LEGACY === 'true';

  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [
      vue2(),
      isLegacy && legacy({ targets: ['last 2 versions, not dead, > 0.3%', 'not IE 11'] }),
      splitVendorChunkPlugin()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'vue': 'vue2/dist/vue.runtime.esm.js',
        '@vue/compiler-sfc': 'vue2/dist/compiler-sfc.js',
        'vuex': 'vuex2/dist/vuex.esm.js',
        'vue-router': 'vue-router2/dist/vue-router.esm.js',
      },
    },
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: VITE_PORT,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: false,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          // dir: "dest",
          // preserveModulesRoot: 'src'
        }
      }
    },
  });
};
