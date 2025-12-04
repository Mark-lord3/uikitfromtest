import path from "path";
import { createRequire } from "module";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import cleaner from "rollup-plugin-cleaner";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      cleaner({
        targets: [
          './dist/'
        ]
      }),
      peerDepsExternal(),
      resolve({ extensions: [".js", ".jsx"] }),
      // typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".jsx"],
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
      commonjs(),
      terser(),
      json(),
      postcss({
        extensions: [".scss"],
        extract: true,
        minimize: true,
      }),
      image(),
    ],
    external: Object.keys(packageJson.peerDependencies),
  },
];
