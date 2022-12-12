import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        beige: "#e5e3c5",
        primary: "#17140f",
      },
      backgroundSize: {
        "hero-pattern": "50px 50px, 50px 50px, 25px 25px, 25px 25px",
      },
    },
  },
} as Options;
