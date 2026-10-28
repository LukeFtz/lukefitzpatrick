import localFont from "@next/font/local";

// Self-hosted copies of the Google fonts (latin subset) in src/fonts,
// so builds don't depend on fonts.googleapis.com.

export const plus_jakarta_sans = localFont({
  src: "../fonts/plus-jakarta-sans/plus-jakarta-sans-latin-200-normal.woff2",
  weight: "200",
});

// Frontend and Backend also use the 600 weight
export const plus_jakarta_sans_semibold = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-latin-200-normal.woff2",
      weight: "200",
    },
    {
      path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-latin-600-normal.woff2",
      weight: "600",
    },
  ],
});

export const staatliches = localFont({
  src: "../fonts/staatliches/staatliches-latin-400-normal.woff2",
  weight: "400",
});

export const orbitron = localFont({
  src: [
    {
      path: "../fonts/orbitron/orbitron-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../fonts/orbitron/orbitron-latin-700-normal.woff2",
      weight: "700",
    },
  ],
});

export const jetbrains_mono = localFont({
  src: "../fonts/jetbrains-mono/jetbrains-mono-latin-400-normal.woff2",
  weight: "400",
});
