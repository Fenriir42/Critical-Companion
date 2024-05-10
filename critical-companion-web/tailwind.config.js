/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wwwdndbeyondcom-black": "#000",
        "wwwdndbeyondcom-hit-gray": "#a2acb2",
        "wwwdndbeyondcom-shark": "#242527",
        "wwwdndbeyondcom-nero": "#fff",
        "wwwdndbeyondcom-bunker": "#12181c",
        "wwwdndbeyondcom-outer-space-25": "rgba(55, 64, 69, 0.25)",
        "wwwdndbeyondcom-alto": "#dedede",
        "wwwdndbeyondcom-clementine": "#ed6c02",
        "wwwdndbeyondcom-outer-space": "#374045",
        "wwwdndbeyondcom-silver": "#bdbdbd",
        "wwwdndbeyondcom-black-60": "rgba(0, 0, 0, 0.6)",
        "wwwdndbeyondcom-porcelain": "#ecedee",
        "wwwdndbeyondcom-submarine": "#c4cbce",
        "wwwdndbeyondcom-rolling-stone": "#75838b",
        "wwwdndbeyondcom-boulder": "#757575",
        cornflowerblue: "#2196f3",
        dimgray: "#5e666b",
        "wwwdndbeyondcom-hit-gray1": "#a5afba",
        "wwwdndbeyondcom-shark1": "#26282a",
        "wwwdndbeyondcom-diamond-nevada-black": "#616f7f",
        "wwwdndbeyondcom-cod-gray": "#090809",
        "wwwdndbeyondcom-monza": "#e40712",
        darkslategray: "#202b33",
        "wwwdndbeyondcom-manatee": "#979aa4",
      },
      spacing: {},
      fontFamily: {
        "wwwdndbeyondcom-roboto-regular-13": "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "2xs": "11px",
      },
    },
    fontSize: {
      xs: "12px",
      mini: "15px",
      "2xl": "21px",
      mid: "17px",
      smi: "13px",
      "7xl": "26px",
      base: "16px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
