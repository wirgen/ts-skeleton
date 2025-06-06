// noinspection SpellCheckingInspection

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: [
      'eslint.config.js',
      'node_modules/*',
      'dist/*',
    ],
  },
  {
    files: [
      'src/**/*.ts',
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)