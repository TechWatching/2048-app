// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default withNuxt({
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      sourceType: 'module',
    },
  },
  rules: {
    'no-undef': 'off', 
    'vue/no-unused-vars': 'error',
    'no-unused-vars': 'error'
  }
})