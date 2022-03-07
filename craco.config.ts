import { resolve } from "path";

module.exports = {
  webpack: {
    alias: {
      $components: resolve(__dirname, "src/components/index.ts"),
      $types: resolve(__dirname, "src/types.ts"),
    },
  },
};
