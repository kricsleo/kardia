import { IconDefinition, IconTheme } from "./types";

export const iconDefinitions = {
  file: {
    iconPath: './icons/file.svg'
  },
  folder: {
    iconPath: './icons/folder.svg'
  },
  folderOpened: {
    iconPath: './icons/folder-opened.svg'
  },
} satisfies Record<string, IconDefinition>

export const iconTheme = {
  iconDefinitions: iconDefinitions,
} satisfies IconTheme