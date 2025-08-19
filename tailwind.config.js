

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(0 0% 100%)",
//         foreground: "hsl(222.2 47.4% 11.2%)",
//         primary: {
//           DEFAULT: "hsl(221.2 83.2% 53.3%)",
//           foreground: "hsl(210 40% 98%)",
//         },
//         muted: "hsl(210 40% 96.1%)",
//         card: "hsl(0 0% 100%)",
//       },
//       container: {
//         center: true,
//         padding: "1rem",
//       },
//       keyframes: {
//         'badge-glow': {
//           '0%, 100%': {
//             transform: 'translateY(0)',
//             boxShadow: '0 0 10px rgba(59,130,246,0.6)',
//           },
//           '50%': {
//             transform: 'translateY(-4px)',
//             boxShadow: '0 0 20px rgba(59,130,246,0.8)',
//           },
//         },
//         'spin-slow': {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//       },
//       animation: {
//         'badge-glow': 'badge-glow 3s ease-in-out infinite',
//         'spin-slow': 'spin-slow 6s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 47.4% 11.2%)",
        primary: {
          DEFAULT: "hsl(221.2 83.2% 53.3%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: "hsl(210 40% 96.1%)",
        card: "hsl(0 0% 100%)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      keyframes: {
        'badge-glow': {
          '0%, 100%': {
            transform: 'translateY(0)',
            boxShadow: '0 0 10px rgba(59,130,246,0.6)',
          },
          '50%': {
            transform: 'translateY(-4px)',
            boxShadow: '0 0 20px rgba(59,130,246,0.8)',
          },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'badge-glow': 'badge-glow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 6s linear infinite',
        'fadeIn': 'fadeIn 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
