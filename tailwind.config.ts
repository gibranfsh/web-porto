import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#18181B',
          elevated: '#27272A',
          muted: '#3F3F46',
        },
        accent: {
          DEFAULT: '#DC2626',
          hover: '#B91C1C',
          bright: '#EF4444',
          muted: 'rgba(220,38,38,0.18)',
          border: 'rgba(220,38,38,0.55)',
          'border-subtle': 'rgba(220,38,38,0.35)',
        },
        border: {
          DEFAULT: 'rgba(63,63,70,0.6)',
          hover: 'rgba(220,38,38,0.4)',
        },
      },
      borderRadius: {
        card: '1rem',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.3)',
        'elevation-2': '0 4px 12px rgba(0,0,0,0.4)',
        'elevation-3': '0 12px 24px rgba(0,0,0,0.5)',
        'glow-red': '0 0 20px rgba(220,38,38,0.15), 0 0 40px rgba(220,38,38,0.08)',
        'glow-red-strong':
          '0 0 24px rgba(220,38,38,0.25), 0 4px 24px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        heading: ['var(--font-archivo)', 'sans-serif'],
        body: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
