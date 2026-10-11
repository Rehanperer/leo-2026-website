import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.eicleos.org',
  output: 'static',
  integrations: [react()],
  build: {
    inlineStylesheets: 'auto'
  },
  image: {
    responsiveStyles: true,
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  compressHTML: true
});
