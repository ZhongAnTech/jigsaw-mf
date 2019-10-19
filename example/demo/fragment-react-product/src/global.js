import ctrlApps, { globalEvent } from 'easy-mft'
import appConfig from '../config/application.json'

export default new ctrlApps(appConfig)
export {
    globalEvent
}