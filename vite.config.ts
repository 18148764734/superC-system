import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  server:{
    proxy:{
      '/api':{
        target:"http://chino.vipgz4.91tunnel.com/api",
        changeOrigin:true,
        rewrite:(path) => path.replace(/^\/api/,'')
      }
    }
  },
  plugins: [vue()],
 

})
