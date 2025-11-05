import {defineConfig} from "eslint/config"
import tseslint from "typescript-eslint"

import quiEslintAngular from "@qualcomm-ui/eslint-config-angular"
import quiEslintMdx from "@qualcomm-ui/eslint-config-mdx"
import quiEslintReact from "@qualcomm-ui/eslint-config-react"
import quiEslintTs from "@qualcomm-ui/eslint-config-typescript"
import quiPathAlias from "@qualcomm-ui/eslint-plugin-path-alias"

const languageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    projectService: true,
  },
}

export default defineConfig(
  {
    ignores: [
      "**/.angular/",
      "**/.nx/",
      "**/.nyc-output/",
      "**/.react-router/",
      "**/.turbo/",
      "**/.sst/",
      "**/build/",
      "**/coverage/",
      "**/dist/",
      "**/node_modules/",
      "**/out/",
      "**/out-tsc/",
      "**/vite.config.ts.timestamp*",
      "./packages/docs/**/src/routes/changelogs.*",
      "./packages/docs/angular*/public/*.js",
      "./packages/common/codemod/src/**/__tests__/mocks/**/*.tsx",
    ],
  },