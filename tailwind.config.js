import { Montserrat as montserrat,Macondo as mocando } from 'next/font/google';


import {nextui} from "@nextui-org/react";
import { config } from "next/dist/build/templates/pages";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        montserrat : ["var(--font-montserrat)"],
        macando : ["var(--font-macando)"]
      }
    },
  },
  plugins: [nextui()]
};

