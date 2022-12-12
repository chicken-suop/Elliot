import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        text: "#fafdfe",
        primary: "#fbe3f4",
        background: "#171819",
      },
      backgroundSize: {
        "hero-pattern": "50px 50px, 50px 50px, 25px 25px, 25px 25px",
      },
    },
  },
} as Options;
