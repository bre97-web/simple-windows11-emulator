import { Package } from '../publish.config.js'
import { convert } from './publish.js'

convert('./package.json', 'name', Package.gpr)
