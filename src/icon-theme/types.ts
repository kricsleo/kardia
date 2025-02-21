/**
 * https://code.visualstudio.com/api/extension-guides/file-icon-theme#file-association
 */
export interface IconTheme<T> extends BaseIconTheme<T> {
  iconDefinitions?: Record<string, IconDefinition>
  fonts?: Array<FontDefinition>

  light?: BaseIconTheme<T>,
  highContrast?: BaseIconTheme<T>
}

interface BaseIconTheme<T> {
  file?: T
  fileExtensions?: Record<string, T>
  fileNames?: Record<string, T>

  folder?: T
  folderExpanded?: T
  folderNames?: Record<string, T>
  folderNamesExpanded?: Record<string, T>

  rootFolder?: T
  rootFolderExpanded?: T
  rootFolderNames?: Record<string, T>
  rootFolderNamesExpanded?: Record<string, T>

  languageIds?: Record<string, T>
  hidesExplorerArrows?: boolean
}


/**
 * https://code.visualstudio.com/api/extension-guides/file-icon-theme#icon-definitions
 */
export type IconDefinition = SvgIconDefinition | FontIconDefinition

interface SvgIconDefinition {
  iconPath: string
}

interface FontIconDefinition {
  fontCharacter: string
  fontId?: string
  fontColor?: string
  fontSize?: string
}

/**
 * https://code.visualstudio.com/api/extension-guides/file-icon-theme#font-definitions
 */
interface FontDefinition {
  id: string
  src: Array<{
    path: string
    format: string
  }>
  weight: string
  style: string
  size: string
}
