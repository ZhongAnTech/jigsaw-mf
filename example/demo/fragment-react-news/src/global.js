import ctrlApps, { globalEvent } from 'chaoxi'
import appConfig from '../config/application.json'

export default new ctrlApps(appConfig)
export {
    globalEvent
}