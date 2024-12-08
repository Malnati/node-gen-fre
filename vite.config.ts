/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        open: true, 
    },
    preview: {
        host: true,
        port: 3001
    },
    base: './',
    test: {
        globals: true,
        environment: 'jsdom'
    }
});
