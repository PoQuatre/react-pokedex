import { resolve } from "path";

module.exports = {
  webpack: {
    alias: {
      $components: resolve(__dirname, "src/components/index.ts"),
    },
  },
};
