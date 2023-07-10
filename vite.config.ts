import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://chino.vipgz4.91tunnel.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: true,
      imports: ["vue", "vue-router", "pinia"],
    }),
	Components({
		dts: true,
		dirs: ['src/components'],
		extensions: ['vue', 'jsx', 'tsx', 'ts', 'js'],
		resolvers: [
		]
	})
  ],
});
