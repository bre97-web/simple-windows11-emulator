import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
    important: true,
    content: ['./**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: 'class',
    variants: {},
    plugins: [],
    theme: {
        screens: {
            xs: '360px',
            sm: '480px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            sans: ['roboto']
        },
        colors: {
            transpaernt: 'transparent',
            primary: colors.blue,
            secondary: colors.emerald,
            tertiary: colors.lime,
            warning: colors.yellow,
            error: colors.red,
            white: '#ffffff',
            black: '#000000',
        },
        borderRadius: {
            DEFAULT: '4px',
            container: '8px',
            full: '9999px',
        },
        zIndex: {
            highest: '9999',
            high: '10',
            "1": '1',
            '0': '0',
        },
        blur: {
            'md': '8px',
            DEFAULT: '16px',
            'lg': '28px',
        },
        backdropBlur: {
            'md': '8px',
            DEFAULT: '16px',
            'lg': '28px',
        },
        borderColor: {
            DEFAULT: 'rgba(0, 0, 0, 0.25)',
        },
        borderWidth: {
            DEFAULT: '1.5px',
        }
    }
}
