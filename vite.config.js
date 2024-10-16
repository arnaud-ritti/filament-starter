import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

const port = 5173;
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`;

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/css/admin.css',
      ],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
      '@assets': '/resources/assets',
    },
  },
  server: {
    host: '0.0.0.0',
    port: port,
    strictPort: true,
    origin: origin
  }
})
