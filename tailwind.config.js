/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary palette from your images
                primary: {
                    50: '#F5EFE6',    // Lightest cream
                    100: '#E8DFCA',   // Light warm beige
                    200: '#D4C5A8',   // Medium beige
                    300: '#C0AB86',   // Darker beige
                    400: '#A08F6B',   // Brown beige
                    500: '#6D94C5',   // Medium blue (main brand color)
                    600: '#5B7BA8',   // Darker blue
                    700: '#465C88',   // Dark blue
                    800: '#34466B',   // Darker blue
                    900: '#2A3B5C',   // Darkest blue
                    950: '#1E2A42',   // Almost black blue
                },

                // Secondary palette
                secondary: {
                    50: '#F0F4F8',    // Very light blue
                    100: '#CBD6EB',   // Light blue from palette
                    200: '#A8BDDB',   // Medium light blue
                    300: '#85A4CB',   // Medium blue
                    400: '#6D94C5',   // Your main blue
                    500: '#5B7BA8',   // Darker blue
                    600: '#4A6B91',   // Even darker
                    700: '#3A5474',   // Dark blue
                    800: '#2B3F57',   // Very dark blue
                    900: '#1C2A3A',   // Almost black
                },

                // Accent colors
                accent: {
                    green: {
                        50: '#E6F2EF',
                        100: '#CCE5DF',
                        200: '#99CBBF',
                        300: '#66B19F',
                        400: '#33977F',
                        500: '#0F4A3C',   // Your dark green
                        600: '#0D3F32',
                        700: '#0A3428',
                        800: '#08291E',
                        900: '#051E14',
                    },
                    teal: {
                        50: '#E8F2F0',
                        100: '#D1E5E1',
                        200: '#A3CBC3',
                        300: '#75B1A5',
                        400: '#479787',
                        500: '#2A6B5C',   // Your teal
                        600: '#22564A',
                        700: '#1B4138',
                        800: '#132C26',
                        900: '#0C1714',
                    },
                },

                // Neutral grays (enhanced)
                neutral: {
                    50: '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#D4D4D4',
                    400: '#A3A3A3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0A0A0A',
                },

                // Semantic colors
                success: {
                    50: '#F0FDF4',
                    100: '#DCFCE7',
                    500: '#22C55E',
                    600: '#16A34A',
                    700: '#15803D',
                },
                warning: {
                    50: '#FFFBEB',
                    100: '#FEF3C7',
                    500: '#F59E0B',
                    600: '#D97706',
                    700: '#B45309',
                },
                error: {
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                },
                info: {
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                },
            },

            // Custom gradients using your palette
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #0F4A3C 0%, #2A6B5C 50%, #6D94C5 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #2A3B5C 0%, #465C88 50%, #6D94C5 100%)',
                'gradient-accent': 'linear-gradient(135deg, #6D94C5 0%, #CBD6EB 50%, #E8DFCA 100%)',
                'gradient-warm': 'linear-gradient(135deg, #F5EFE6 0%, #E8DFCA 50%, #6D94C5 100%)',
                'gradient-cool': 'linear-gradient(135deg, #CBD6EB 0%, #6D94C5 50%, #465C88 100%)',
                'gradient-hero': 'linear-gradient(135deg, #0F4A3C 0%, #2A6B5C 30%, #6D94C5 70%, #CBD6EB 100%)',
            },

            // Custom box shadows
            boxShadow: {
                'primary': '0 4px 14px 0 rgba(109, 148, 197, 0.15)',
                'primary-lg': '0 10px 40px 0 rgba(109, 148, 197, 0.2)',
                'accent': '0 4px 14px 0 rgba(15, 74, 60, 0.15)',
                'soft': '0 2px 8px 0 rgba(0, 0, 0, 0.06)',
                'card': '0 4px 20px 0 rgba(0, 0, 0, 0.08)',
                'card-hover': '0 8px 30px 0 rgba(0, 0, 0, 0.12)',
            },

            // Typography extensions
            fontFamily: {
                'display': ['Inter', 'system-ui', 'sans-serif'],
                'body': ['Inter', 'system-ui', 'sans-serif'],
            },

            // Animation extensions
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'pulse-soft': 'pulseSoft 2s infinite',
                'float': 'float 6s ease-in-out infinite',
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },

            // Spacing extensions
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '100': '25rem',
                '112': '28rem',
                '128': '32rem',
            },

            // Border radius extensions
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
                '4xl': '3rem',
            },
        },
    },
    plugins: [
        // You can add plugins here like @tailwindcss/forms, @tailwindcss/typography, etc.
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/aspect-ratio'),
    ],
}