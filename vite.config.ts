import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'


export default defineConfig(({}) => {

    return {
        plugins: [
            vue(),
            dts({
                entryRoot: 'src',
                outDir: 'dist',
                tsconfigPath: resolve(__dirname, 'tsconfig.json'),
            }),
        ],
        build: {
            lib: {
                entry: resolve(__dirname, 'src/index.ts'),
                name: 'vuexyz',
                fileName: 'index',
                formats: ['es'],
            },
            rollupOptions: {
                external: ['vue'],
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
    }
})
