import type { IconDefinition, IconTheme } from "./types";

const iconDefinitions = {
  file: {
    iconPath: './icons/file.svg'
  },
  folder: {
    iconPath: './icons/folder.svg'
  },
  folderExpanded: {
    iconPath: './icons/folder-expanded.svg'
  },
  config: {
    names: ['tsconfig.json'],
    "iconPath": "./icons/1.config.svg" 
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

  javascript: {
    extensions: ['js', 'mjs', 'cjs'],
    iconPath: './icons/javascript.svg'
  },
  'javascript-test': {
    extensions: ['test.js', 'test.mjs', 'test.cjs', 'spec.js', 'spec.mjs', 'spec.cjs'],
    iconPath: './icons/javascript-test.svg'
  },
  'javascript-config': {
    extensions: ['config.js', 'config.mjs', 'config.cjs'],
    iconPath: './icons/javascript-config.svg'
  },

  typescript: {
    extensions: ['ts', 'mts', 'cts'],
    iconPath: './icons/typescript.svg'
  },
  'typescript-definition': {
    extensions: ['d.ts', 'd.mts', 'd.cts'],
    iconPath: './icons/typescript.svg'
  },
  'typescript-test': {
    extensions: ['test.ts', 'test.mts', 'test.cts', 'spec.ts', 'spec.mts', 'spec.cts'],
    iconPath: './icons/typescript-test.svg'
  },
  'typescript-config': {
    extensions: ['config.ts', 'config.mts', 'config.cts'],
    iconPath: './icons/typescript-config.svg'
  },

  jsx: {
    extensions: ['jsx'],
    iconPath: './icons/jsx.svg'
  },
  'jsx-typescript': {
    extensions: ['tsx'],
    iconPath: './icons/jsx-typescript.svg'
  },

  vue: {
    extensions: ['vue'],
    iconPath: './icons/vue.svg'
  },
  html: {
    extensions: ['html'],
    iconPath: './icons/html.svg'
  },
  css: {
    extensions: ['css', 'less', 'scss'],
    iconPath: './icons/css.svg'
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
  rust: {
    extensions: ['rs'],
    iconPath: './icons/rust.svg'
  },
  php: {
    extensions: ['php'],
    iconPath: './icons/php.svg'
  },
  python: {
    extensions: ['py'],
    iconPath: './icons/python.svg'
  },
  zig: {
    extensions: ['zig'],
    iconPath: './icons/zig.svg'
  },
  shell: {
    extensions: ['sh', 'bash', 'zsh', 'fish', 'bashrc', 'bash_profile', 'bash_aliases'],
    iconPath: './icons/shell.svg'
  },

  npm: {
    names: ['package.json', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'],
    iconPath: './icons/npm.svg'
  },
  eslint: {
    names: ['.eslintrc.*', 'eslint.*'],
    iconPath: './icons/eslint.svg'
  },
  vite: {
    extensions: ['vite.*'],
    iconPath: './icons/vite.svg'
  },
  env: {
    names: ['.env', '.env.*'],
    iconPath: './icons/env.svg'
  },
  binary: {
    extensions: ['bin', 'dat', 'exe', 'wasm'],
    iconPath: './icons/binary.svg'
  },
  zip: {
    extensions: ['zip', 'tar', 'gz', '7z', 'rar', 'tgz', 'iso'],
    iconPath: './icons/zip.svg'
  },
  git: {
    extensions: ['gitignore', 'gitattributes', 'gitmodules', 'gitkeep', 'gitconfig', 'gitignore_global'],
    iconPath: './icons/git.svg'
  },
  docker: {
    names: ['dockerfile', ".dockerignore", 'docker-compose.*', 'dockerfile.*'],
    iconPath: './icons/docker.svg'
  }
} satisfies Record<string, IconDefinition & {
  extensions?: string[]
  names?: string[]
}>

type Definitions = keyof typeof iconDefinitions

export const iconTheme = buildIconTheme()

function buildIconTheme() {
  const iconTheme = {
    file: 'file',
    folder: 'folder',
    folderExpanded: 'folderExpanded',
    
    fileExtensions: {} as any,
    fileNames: {} as any,

    iconDefinitions: {} as any,
  
    hidesExplorerArrows: true,
  } satisfies IconTheme<Definitions>

  for (const [definition, config] of Object.entries(iconDefinitions)) {
    iconTheme.iconDefinitions[definition] = { iconPath: config.iconPath }

    if('extensions' in config) {
      for(const extension of config.extensions) {
        iconTheme.fileExtensions[extension] = definition
      }
    }

    if('names' in config) {
      for(const name of config.names) {
        iconTheme.fileNames[name] = definition
      }
    }
  }

  return iconTheme
}
