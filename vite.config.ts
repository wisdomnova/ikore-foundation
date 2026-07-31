import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.PAYSTACK_PUBLIC_KEY': JSON.stringify(env.PAYSTACK_PUBLIC_KEY || process.env.PAYSTACK_PUBLIC_KEY || '')
    }
  }
})
