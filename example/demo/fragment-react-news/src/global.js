import chaoxi, { globalEvent } from 'chaoxi'
import appConfig from '../config/application.json'

export default new chaoxi(appConfig)
export {
    globalEvent
}