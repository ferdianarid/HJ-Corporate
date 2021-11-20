import Vue from 'vue'
import { createClientDirective } from '@chakra-ui/vue/src/directives'

const theme = {
  "breakpoints": [
    "30em",
    "48em",
    "62em",
    "80em"
  ],
  "zIndices": {
    "hide": -1,
    "auto": "auto",
    "base": 0,
    "docked": 10,
    "dropdown": 1000,
    "sticky": 1100,
    "banner": 1200,
    "overlay": 1300,
    "modal": 1400,
    "popover": 1500,
    "skipLink": 1600,
    "toast": 1700,
    "tooltip": 1800
  },
  "radii": {
    "none": "0",
    "sm": "0.125rem",
    "md": "0.25rem",
    "lg": "0.5rem",
    "full": "9999px"
  },
  "opacity": {
    "0": "0",
    "20%": "0.2",
    "40%": "0.4",
    "60%": "0.6",
    "80%": "0.8",
    "100%": "1"
  },
  "borders": {
    "none": 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid"
  },
  "colors": {
    "transparent": "transparent",
    "current": "currentColor",
    "black": "#000",
    "white": "#fff",
    "primary": "#00006e",
    "secondary": "#4d4d5a",
    "tertiary": "#fe9e4d",
    "success": "#3ea76a",
    "warning": "#ffc61a",
    "error": "#dd3b4b",
    "whiteAlpha": {
      "50": "rgba(255, 255, 255, 0.04)",
      "100": "rgba(255, 255, 255, 0.06)",
      "200": "rgba(255, 255, 255, 0.08)",
      "300": "rgba(255, 255, 255, 0.16)",
      "400": "rgba(255, 255, 255, 0.24)",
      "500": "rgba(255, 255, 255, 0.36)",
      "600": "rgba(255, 255, 255, 0.48)",
      "700": "rgba(255, 255, 255, 0.64)",
      "800": "rgba(255, 255, 255, 0.80)",
      "900": "rgba(255, 255, 255, 0.92)"
    },
    "blackAlpha": {
      "50": "rgba(0, 0, 0, 0.04)",
      "100": "rgba(0, 0, 0, 0.06)",
      "200": "rgba(0, 0, 0, 0.08)",
      "300": "rgba(0, 0, 0, 0.16)",
      "400": "rgba(0, 0, 0, 0.24)",
      "500": "rgba(0, 0, 0, 0.36)",
      "600": "rgba(0, 0, 0, 0.48)",
      "700": "rgba(0, 0, 0, 0.64)",
      "800": "rgba(0, 0, 0, 0.80)",
      "900": "rgba(0, 0, 0, 0.92)"
    },
    "gray": {
      "50": "#F7FAFC",
      "100": "#EDF2F7",
      "200": "#E2E8F0",
      "300": "#CBD5E0",
      "400": "#A0AEC0",
      "500": "#718096",
      "600": "#4A5568",
      "700": "#2D3748",
      "800": "#1A202C",
      "900": "#171923"
    },
    "cyan": {
      "50": "#EDFDFD",
      "100": "#C4F1F9",
      "200": "#9DECF9",
      "300": "#76E4F7",
      "400": "#0BC5EA",
      "500": "#00B5D8",
      "600": "#00A3C4",
      "700": "#0987A0",
      "800": "#086F83",
      "900": "#065666"
    },
    "vue": {
      "50": "#e1fbf0",
      "100": "#c0ecda",
      "200": "#9edfc2",
      "300": "#79d0aa",
      "400": "#55c392",
      "500": "#3caa79",
      "600": "#2d845e",
      "700": "#1d5e42",
      "800": "#0c3a26",
      "900": "#001508"
    },
    "green": {
      "50": "#e2fbed",
      "100": "#c2ebd4",
      "200": "#9fddb9",
      "300": "#7ccf9e",
      "400": "#58c184",
      "500": "#3ea76a",
      "600": "#2e8251",
      "700": "#1f5d3a",
      "800": "#0f3921",
      "900": "#001506"
    },
    "orange": {
      "50": "#ffefdc",
      "100": "#ffd4ae",
      "200": "#ffba7f",
      "300": "#fe9e4d",
      "400": "#fd821b",
      "500": "#e46902",
      "600": "#b25100",
      "700": "#7f3900",
      "800": "#4e2200",
      "900": "#1f0900"
    },
    "red": {
      "50": "#ffe5e9",
      "100": "#f9bcc2",
      "200": "#ee919a",
      "300": "#e66673",
      "400": "#dd3b4b",
      "500": "#c42231",
      "600": "#991826",
      "700": "#6e101a",
      "800": "#44070e",
      "900": "#1e0001"
    },
    "yellow": {
      "50": "#fff9da",
      "100": "#ffecad",
      "200": "#ffdf7d",
      "300": "#ffd24b",
      "400": "#ffc61a",
      "500": "#e6ac00",
      "600": "#b38600",
      "700": "#806000",
      "800": "#4e3900",
      "900": "#1d1300"
    },
    "indigo": {
      "50": "#f2e5ff",
      "100": "#d2b5ff",
      "200": "#b285fa",
      "300": "#9356f7",
      "400": "#7425f3",
      "500": "#5a0cda",
      "600": "#4608aa",
      "700": "#32057b",
      "800": "#1e024c",
      "900": "#0c001e"
    },
    "pink": {
      "50": "#fff5f7",
      "100": "#fed7e2",
      "200": "#fbb6ce",
      "300": "#f687b3",
      "400": "#ed64a6",
      "500": "#d53f8c",
      "600": "#b83280",
      "700": "#97266d",
      "800": "#702459",
      "900": "#521B41"
    },
    "blue": {
      "50": "#def0ff",
      "100": "#afd0ff",
      "200": "#7db1ff",
      "300": "#4b91ff",
      "400": "#1a72ff",
      "500": "#0058e6",
      "600": "#0045b4",
      "700": "#003182",
      "800": "#001d51",
      "900": "#000a21"
    }
  },
  "letterSpacings": {
    "tighter": "-0.05em",
    "tight": "-0.025em",
    "normal": "0",
    "wide": "0.025em",
    "wider": "0.05em",
    "widest": "0.1em"
  },
  "lineHeights": {
    "normal": "normal",
    "none": "1",
    "shorter": "1.25",
    "short": "1.375",
    "base": "1.5",
    "tall": "1.625",
    "taller": "2"
  },
  "fontWeights": {
    "hairline": 100,
    "thin": 200,
    "light": 300,
    "normal": 400,
    "medium": 500,
    "semibold": 600,
    "bold": 700,
    "extrabold": 800,
    "black": 900
  },
  "fonts": {
    "heading": "\"Poppins\", sans-serif",
    "body": "\"Poppins\", sans-serif",
    "mono": "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
  },
  "fontSizes": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "md": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  "borderWidths": {
    "sm": "1px",
    "md": "2px",
    "lg": "4px"
  },
  "sizes": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    "px": "1px",
    "full": "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    "xs": "20rem",
    "sm": "24rem",
    "md": "28rem",
    "lg": "32rem",
    "xl": "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "containers": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    }
  },
  "shadows": {
    "sm": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "outline": "0 0 0 3px rgba(66, 153, 225, 0.6)",
    "inner": "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    "none": "none"
  },
  "space": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    "px": "1px"
  },
  "fontweight": {
    "heading": "800",
    "subheading": "600",
    "body": "400"
  },
  "fontsize": {
    "heading": "48px",
    "body": "16px"
  }
}

Vue.prototype.$chakra = {
  theme,
  icons: {
  "star": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z\"\n      />\n    "
  },
  "email": {
    "path": "\n    <g fill=\"currentColor\">\n      <path d=\"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z\" />\n      <path d=\"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z\" />\n    </g>\n    "
  },
  "phone": {
    "viewBox": "0 0 14 14",
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z\"\n    />\n    "
  },
  "info": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z\"\n    />\n    "
  },
  "warning-alt": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z\"\n      />"
  },
  "check": {
    "path": "\n      <g fill=\"currentColor\">\n        <polygon points=\"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039\" />\n      </g>\n    ",
    "viewBox": "0 0 14 14"
  },
  "check-circle": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z\"\n      />"
  },
  "exclamation": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z\"\n      />"
  },
  "question-outline": {
    "viewBox": "0 0 24 24",
    "path": "\n    <g stroke=\"currentColor\" strokeWidth=\"1.5\">\n      <path\n        strokeLinecap=\"full\"\n        fill=\"none\"\n        d=\"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25\"\n      />\n      <path\n        fill=\"none\"\n        strokeLinecap=\"full\"\n        d=\"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0\"\n      />\n      <circle fill=\"none\" strokeMiterlimit=\"10\" cx=\"12\" cy=\"12\" r=\"11.25\" />\n    </g>\n    "
  },
  "close": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z\"\n      />"
  },
  "chevron-right": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"\n    />"
  },
  "chevron-left": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"\n      />"
  },
  "chevron-down": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"\n    />"
  },
  "chevron-up": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z\"\n    />"
  },
  "arrow-forward": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"\n    />"
  },
  "arrow-up": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z\"\n    />"
  },
  "arrow-down": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z\"\n      />"
  },
  "add": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z\"\n    />\n    "
  },
  "minus": {
    "path": "\n      <g fill=\"currentColor\">\n        <rect height=\"4\" width=\"20\" x=\"2\" y=\"10\" />\n      </g>\n    "
  },
  "moon": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z\"\n      />\n    "
  },
  "sun": {
    "path": "\n      <g\n        strokeLinejoin=\"full\"\n        strokeLinecap=\"full\"\n        strokeWidth=\"2\"\n        fill=\"none\"\n        stroke=\"currentColor\"\n      >\n        <circle cx=\"12\" cy=\"12\" r=\"5\" />\n        <path d=\"M12 1v2\" />\n        <path d=\"M12 21v2\" />\n        <path d=\"M4.22 4.22l1.42 1.42\" />\n        <path d=\"M18.36 18.36l1.42 1.42\" />\n        <path d=\"M1 12h2\" />\n        <path d=\"M21 12h2\" />\n        <path d=\"M4.22 19.78l1.42-1.42\" />\n        <path d=\"M18.36 5.64l1.42-1.42\" />\n      </g>\n    "
  },
  "warning": {
    "path": "\n    <path\n      fill=\"currentColor\"\n      d=\"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z\"\n    />"
  },
  "small-close": {
    "path": "\n      <path\n        d=\"M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z\"\n        fillRule=\"evenodd\"\n        fill=\"currentColor\"\n      />\n    ",
    "viewBox": "0 0 16 16"
  },
  "triangle-up": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z\"\n      />\n    "
  },
  "triangle-down": {
    "path": "\n      <path\n        fill=\"currentColor\"\n        d=\"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z\"\n      />\n    "
  }
}
}

Vue.directive('chakra', createClientDirective(theme))

if (process.client) {
  // Toast
  const useToast = require('@chakra-ui/vue/src/CToast').default
  Vue.prototype.$toast = useToast()

  // VScrollLock
  const VScrollLock = require('v-scroll-lock').default
  Vue.use(VScrollLock)
}