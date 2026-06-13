/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                accent: {
                    light: {
                        DEFAULT: '#22C55E',
                        hover: '#4ADE80',
                        active: '#15803D',
                        subtle: '#DCFCE7',
                        secondary: '#16A34A',
                    },
                    dark: {
                        DEFAULT: '#50C878',
                        hover: '#6BEA9B',
                        active: '#267E48',
                        subtle: '#123222',
                        secondary: '#97FFBD',
                    },
                },
                emerald: {
                    50: '#00BC90',
                    100: '#00674F',
                    200: '#005C46',
                    300: '#00503D',
                    400: '#004535',
                    500: '#00392C',
                    600: '#002E23',
                    700: '#00221A',
                    800: '#001712',
                },
                success: '#4ADE80',
                warning: '#FFD34D',
                error: '#EF4444',
                neutral: {
                    50: '#F8F8F8',
                    100: '#E4E4E4',
                    200: '#CFCFCF',
                    300: '#BBBBBB',
                    400: '#A6A6A6',
                    500: '#929292',
                    600: '#7E7E7E',
                    700: '#696969',
                    800: '#4F4F4F',
                    900: '#2C2C2C',
                },
                // LIGHT MODE BACKGROUND
                light: {
                    1: '#FAFAFB', // primary background (app)
                    2: '#FFFFFF', // secondary background (card)
                    3: '#F2F2F5', // tertiary / hover / subtle surface
                },
                // DARK MODE BACKGROUND
                dark: {
                    1: '#0E0E11', // primary background
                    2: '#16161A', // secondary background
                    3: '#1E1E24', // tertiary / hover
                },
                tier: {
                    bronze: '#b96d2f',
                    silver: '#7d95a5',
                    gold: '#c98b19',
                    platinum: '#00a4a6',
                    diamond: '#672bd1',
                    master: '#c12d4c',
                    grandmaster: '#397dc2',
                    legend: '#cf390c',
                },
                text: {
                    light: {
                        primary: '#1C1C1E',
                        secondary: '#3A3A3C',
                        muted: '#8E8E93',
                    },
                    dark: {
                        primary: '#F5F5F7',
                        secondary: '#A5A5AB',
                        muted: '#6E6E73',
                    },
                },
            },
            fontSize: {
                'title-xxl': ['72px', '88px'], // Hero / landing
                'title-xl': ['48px', '72px'], // Page hero
                'title-lg': ['42px', '60px'], // Page title
                'title-md': ['36px', '44px'], // Section title
                'title-sm': ['30px', '38px'], // Card title
                'title-xs': ['24px', '34px'], // Sub card title
                'title-xsm': ['22px', '30px'], // Small heading
                'text-xxl': ['20px', '30px'], // Large paragraph
                'text-xl': ['18px', '28px'], // Intro text
                'text-lg': ['15px', '26px'], // Default body
                'text-md': ['14px', '22px'], // Secondary
                'text-sm': ['12px', '20px'], // Caption
                'text-xs': ['10px', '18px'], // Helper
            },
            fontWeight: {
                regular: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            lineHeight: {
                tight: '1.15', // headings besar
                snug: '1.3', // headings normal
                normal: '1.5', // body
                relaxed: '1.65', // paragraph panjang
            },
            zIndex: {
                999999: '999999',
                99999: '99999',
                9999: '9999',
                999: '999',
                99: '99',
                9: '9',
                1: '1',
            },
            dropShadow: {
                dark: '2px 2px 3px rgba(0, 0, 0, 0.1)',
                light: '2px 2px 3px rgba(0, 103, 79, 0.2)',
            },
        },
    },
    plugins: [],
};
