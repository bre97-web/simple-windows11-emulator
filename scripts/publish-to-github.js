import { BaseName } from '../publish.config.js'
import { convert } from './publish.js'

convert('./publish.config.json', 'base', BaseName.githubBase)
