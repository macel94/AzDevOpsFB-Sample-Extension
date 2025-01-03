import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
		host: true, // same as "--host" flag
    https: {
      key: fs.readFileSync('./certificates/key.pem'),
      cert: fs.readFileSync('./certificates/cert.pem'),
    },
  }
})
