import { resolve } from "path";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
export const entry = "./src/index.js";
export const output = {
  filename: "bundle.js",
  path: resolve(__dirname, "dist"),
};
export const mode = "development";
