import fs from 'node:fs/promises';
import { iconDefinitions } from './definitions';
import type { Definitions } from './definitions';
import type { IconTheme } from './types';

const themeJson = './kardia-icons-theme.json'

main()

async function main() {
  const iconTheme = buildIconTheme()
  await fs.writeFile(themeJson, JSON.stringify(iconTheme, null, 2), 'utf-8');
}

function buildIconTheme() {
  const iconTheme = {
    file: 'file',
    folder: 'folder',
    folderExpanded: 'folderExpanded',
    
    fileExtensions: {} as any,
    fileNames: {} as any,

    iconDefinitions: {} as any,

    fonts: [
      {
        id: 'kardia-icons',
        src: [
          { path: './icons/kardia-icons.woff2', format: 'woff2' }
        ],
        weight: 'normal',
        style: 'normal',
        size: '120%'
      }
    ],
  
    hidesExplorerArrows: true,
  } satisfies IconTheme<Definitions>

  for (const [definition, config] of Object.entries(iconDefinitions)) {
    if('iconPath' in config) {
      iconTheme.iconDefinitions[definition] = { iconPath: config.iconPath }
    }

    if('fontId' in config) {
      iconTheme.iconDefinitions[definition] = { 
        fontId: config.fontId, 
        fontCharacter: config.fontCharacter 
      }
    }

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
