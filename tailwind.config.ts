import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      dark:'#171233',
      purple:'#271f4f',
      lightPurple:'#3b3170',
      yellow:'#f5df60',
      beige:'#cdcbc0',
      white:'#fff'
    }
  },
  plugins: [],
}
export default config
