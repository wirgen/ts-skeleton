// noinspection SpellCheckingInspection

import eslint from '@eslint/js'
import eslintParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    files: [
      'src/**/*.ts',
    ],
    ignores: [
      'node_modules/*',
      'dist/*',
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: eslintParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
    },
  },
)