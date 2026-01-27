import vue from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'

export default [
  {
    ignores: [
      '.nuxt/**',
      '.output/**',
      'node_modules/**',
      'dist/**',
      'publish/**',
      'coverage/**'
    ]
  },
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },
      globals: globals.browser
    },
    plugins: {
      vue,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      ...vue.configs['flat/recommended'].rules,
      ...tsPlugin.configs.recommended.rules
    }
  }
]
