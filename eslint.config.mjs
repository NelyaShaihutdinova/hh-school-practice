import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default {
  ...pluginJs.configs.recommended,

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },

  ignores: ["**/node_modules/**", "**/yarn.lock"],
};
