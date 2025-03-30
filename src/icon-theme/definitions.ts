import type { IconDefinition } from './types';

export const iconDefinitions = {
  file: {
    iconPath: './icons/file.svg'
  },
  folder: {
    // iconPath: './icons/folder.svg'
    fontId: 'kardia-icons',
    fontCharacter: '\ue900'
  },
  folderExpanded: {
    // iconPath: './icons/folder-expanded.svg'
    fontId: 'kardia-icons',
    fontCharacter: '\ue901'
  },

  audio: {
    extensions: ['mp3', 'wav', 'ogg'],
    iconPath: './icons/audio.svg'
  },
  video: {
    extensions: ['mp4', 'webm', 'mkv', 'flv', 'avi', 'mov', 'wmv', 'mpg', 'mpeg', 'm4v'],
    iconPath: './icons/video.svg'
  },
  image: {
    extensions: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'icns', 'bmp', 'tiff', 'webp', 'avif', 'heif', 'heic'],
    iconPath: './icons/image.svg'
  },
  svg: {
    extensions: ['svg'],
    iconPath: './icons/svg.svg'
  },
  font: {
    extensions: ['otf', 'ttf', 'woff', 'woff2', 'eot', 'font'],
    iconPath: './icons/font.svg'
  },

  html: {
    extensions: ['html'],
    iconPath: './icons/html.svg'
  },
  css: {
    extensions: ['css'],
    iconPath: './icons/css.svg'
  },
  scss: {
    extensions: ['less', 'scss'],
    iconPath: './icons/scss.svg'
  },
  json: {
    extensions: ['json', 'jsonc'],
    iconPath: './icons/json.svg'
  },
  markdown: {
    extensions: ['md', 'mdx', 'markdown'],
    iconPath: './icons/markdown.svg'
  },
  txt: {
    names: ['LICENSE'],
    extensions: ['txt', 'rtf', 'pdf', 'doc', 'docx'],
    iconPath: './icons/txt.svg'
  },
  toml: {
    extensions: ['toml'],
    iconPath: './icons/toml.svg'
  },
  yaml: {
    extensions: ['yaml', 'yml'],
    iconPath: './icons/yaml.svg'
  },
  env: {
    names: ['.env', '.env.*'],
    iconPath: './icons/env.svg'
  },
  zip: {
    extensions: ['zip', 'tar', 'gz', '7z', 'rar', 'tgz', 'iso'],
    iconPath: './icons/zip.svg'
  },
  git: {
    extensions: ['gitignore', 'gitattributes', 'gitmodules', 'gitkeep', 'gitconfig', 'gitignore_global'],
    iconPath: './icons/git.svg'
  },

  javascript: {
    extensions: ['js', 'mjs', 'cjs'],
    iconPath: './icons/javascript.svg'
  },
  'javascript-test': {
    extensions: ['test.js', 'test.mjs', 'test.cjs', 'spec.js', 'spec.mjs', 'spec.cjs'],
    iconPath: './icons/javascript-test.svg'
  },
  jsx: {
    extensions: ['jsx'],
    iconPath: './icons/jsx.svg'
  },

  typescript: {
    extensions: ['ts', 'mts', 'cts'],
    iconPath: './icons/typescript.svg'
  },
  'typescript-test': {
    extensions: ['test.ts', 'test.mts', 'test.cts', 'spec.ts', 'spec.mts', 'spec.cts'],
    iconPath: './icons/typescript-test.svg'
  },
  'typescript-declaration': {
    extensions: ['d.ts', 'd.mts', 'd.cts'],
    iconPath: './icons/typescript-declaration.svg'
  },
  tsx: {
    extensions: ['tsx'],
    iconPath: './icons/tsx.svg'
  },

  config: {
    names: ['tsconfig.json'],
    iconPath: './icons/config.svg' 
  },
  'json-config': {
    names: ['tsconfig.json'],
    extensions: ['config.json', 'config.jsonc'],
    iconPath: './icons/json-config.svg'
  },
  'javascript-config': {
    extensions: ['config.js', 'config.mjs', 'config.cjs'],
    iconPath: './icons/javascript-config.svg'
  },
  'typescript-config': {
    extensions: ['config.ts', 'config.mts', 'config.cts'],
    iconPath: './icons/typescript-config.svg'
  },

  vue: {
    extensions: ['vue'],
    iconPath: './icons/vue.svg'
  },
  rust: {
    extensions: ['rs'],
    iconPath: './icons/rust.svg'
  },
  go: {
    extensions: ['go'],
    iconPath: './icons/go.svg'
  },
  script: {
    extensions: ['sh', 'bash', 'zsh', 'fish', 'bashrc', 'bash_profile', 'bash_aliases'],
    iconPath: './icons/script.svg'
  },

  npm: {
    names: ['package.json', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'],
    iconPath: './icons/npm.svg'
  },
  eslint: {
    names: ['.eslintrc.*', 'eslint.*', 'eslint.config.*'],
    iconPath: './icons/eslint.svg'
  },
  vite: {
    extensions: ['vite.*'],
    iconPath: './icons/vite.svg'
  },
  docker: {
    names: ['dockerfile', '.dockerignore', 'docker-compose.*', 'dockerfile.*'],
    iconPath: './icons/docker.svg'
  }
} satisfies Record<string, IconDefinition & {
  extensions?: string[]
  names?: string[]
}>

export type Definitions = keyof typeof iconDefinitions
