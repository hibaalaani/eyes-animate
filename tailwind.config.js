module.exports = {
  mode: "jit", // Just-in-time mode for faster builds
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind scans all component files
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B5B95",
        secondary: "#B8A9C9",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fromLeft: {
          "0%": { transform: "translateX(-300px)", opacity: "0" }, // Larger movement to the left
          "100%": { transform: "translateX(0)", opacity: "1" }, // Set to visible at the end
        },
        fromRight: {
          "0%": { transform: "translateX(300px)", opacity: "0" }, // Larger movement from the right
          "100%": { transform: "translateX(0)", opacity: "1" }, // End state
        },
        fromTop: {
          "0%": { transform: "translateY(-300px)", opacity: "0" }, // Larger movement from top
          "100%": { transform: "translateY(0)", opacity: "1" }, // End state
        },
        fromBottom: {
          "0%": { transform: "translateY(300px)", opacity: "0" }, // Larger movement from bottom
          "100%": { transform: "translateY(0)", opacity: "1" }, // End state
        },
         wiggleSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(50px)" }, // Increased to 50px
        },
        wiggleMedium: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(70px)" }, // Increased to 70px
        },
        wiggleFast: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(90px)" }, // Increased to 90px
        },
      },
      animation: {
        "from-left": "fromLeft 1.5s ease-out 0.5", // Slower animation (1.5 seconds)
        "from-right": "fromRight 1.5s ease-out 0.5", // Slower animation
        "from-top": "fromTop 1.5s ease-out 0.5", // Slower animation
        "from-bottom": "fromBottom 1.5s ease-out 0.5", // Slower animation
        // Wiggly animations
        "wiggle-slow": "wiggleSlow 8s ease-in-out infinite",
        "wiggle-medium": "wiggleMedium 6s ease-in-out infinite",
        "wiggle-fast": "wiggleFast 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
