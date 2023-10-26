import { github } from './publish.config.js'
import { convert } from './publish.js'

convert('./scripts/publish.json', 'base', github)