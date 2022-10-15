import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue"
// import css from 'vite-css-plugin';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resource/sass/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        // vue({
        //     template: {
        //         transformAssetUrls: {
        //             base: null,
        //             includeAbsolute: false,
        //         }
        //     }
        // })
        vue(),
        // css({
        //     name: 'ant-design-vue',
        //     tranfrom(component) {
        //       let name = component;
        //       if (/Row|Col/.test(component)) name = 'grid';
        //       return `lib/${name.toLowerCase()}/style/index.css`;
        //     }
        // })
    ],
});
