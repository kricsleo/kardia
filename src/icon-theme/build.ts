import fs from 'node:fs/promises';
import { iconTheme } from './definitions';

const themeJson = './kardia-icons-theme.json'

main()

async function main() {
  await fs.writeFile(themeJson, JSON.stringify(iconTheme, null, 2), 'utf-8');
}