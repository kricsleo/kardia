
/**
 * https://code.visualstudio.com/api/extension-guides/file-icon-theme#file-association
 */
interface BaseIconTheme {
  file?: string
  fileExtensions?: Record<string, string>
  fileNames?: Record<string, string>

  folder?: string
  folderExpanded?: string
  folderNames?: Record<string, string>
  folderNamesExpanded?: Record<string, string>

  rootFolder?: string
  rootFolderExpanded?: string
  rootFolderNames?: Record<string, string>
  rootFolderNamesExpanded?: Record<string, string>

  languageIds?: Record<string, string>
  hidesExplorerArrows?: boolean
}

export interface IconTheme extends BaseIconTheme {
  iconDefinitions?: Record<string, IconDefinition>
  fonts?: Array<FontDefinition>

  light?: BaseIconTheme,
  highContrast?: BaseIconTheme
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
