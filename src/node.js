import fpt from './main.js'
import leveldown from 'leveldown'

export default (location, options) => fpt(location, options, leveldown)
