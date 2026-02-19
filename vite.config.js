import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
                technology: resolve(__dirname, 'technology.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
});
