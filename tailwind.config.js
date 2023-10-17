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

        /**
         * Fluent Default Font Family
         */
        fontFamily: {
            sans: ["Segoe UI Variable", "Segoe UI", "sans-serif"],
        },
        fontSize: {
            'rm-2': 'var(--type-ramp-minus-2-font-size)',
            'rm-1': 'var(--type-ramp-minus-1-font-size)',
            'rb': 'var(--type-ramp-base-font-size)',
            'rp-1': 'var(--type-ramp-plus-1-font-size)',
            'rp-2': 'var(--type-ramp-plus-2-font-size)',
            'rp-3': 'var(--type-ramp-plus-3-font-size)',
            'rp-4': 'var(--type-ramp-plus-4-font-size)',
            'rp-5': 'var(--type-ramp-plus-5-font-size)',
            'rp-6': 'var(--type-ramp-plus-6-font-size)',
        },
        lineHeight: {
            'rm-2': 'var(--type-ramp-minus-2-line-height)',
            'rm-1': 'var(--type-ramp-minus-1-line-height)',
            'rb': 'var(--type-ramp-base-line-height)',
            'rp-1': 'var(--type-ramp-plus-1-line-height)',
            'rp-2': 'var(--type-ramp-plus-2-line-height)',
            'rp-3': 'var(--type-ramp-plus-3-line-height)',
            'rp-4': 'var(--type-ramp-plus-4-line-height)',
            'rp-5': 'var(--type-ramp-plus-5-line-height)',
            'rp-6': 'var(--type-ramp-plus-6-line-height)',
        },

        backgroundColor: {
            'neutral-base': 'var(--neutral-base-color)',
            'accent-base': 'var(--accent-base-color)',
            'fill': 'var(--fill-color)',
            black: colors.black,
            white: colors.white
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

        /**
         * Fluent Radius
         */
        borderRadius: {
            control: 'calc(var(--design-unit) * 1px)',
            layer: 'calc(var(--design-unit) * 2px)',
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
