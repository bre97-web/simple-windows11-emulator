import { firebase } from '../publish.config.js'
import { convert } from './publish.js'

convert('./publish.json', 'base', firebase)