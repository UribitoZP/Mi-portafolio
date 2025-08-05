tailwind.config = {
    theme: {
        extend: {
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'fadeInUp': 'fadeInUp 1s ease forwards',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    }
                }
            }
        }
    }
}