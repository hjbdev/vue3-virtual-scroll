import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ["vue", "md"],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: "src/components.d.ts",
        }),
        AutoImport({
            imports: ["vue", "vue/macros", "@vueuse/core" /*"@vueuse/head", */],
            dts: "src/auto-imports.d.ts",
            dirs: ["src/composables"],
            vueTemplate: true,
        }),
    ],
});
