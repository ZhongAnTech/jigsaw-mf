import ctrlApps, { globalEvent } from 'easy-mft'
import application_info from '../config/application.json';

export default new ctrlApps(application_info)
export {
    globalEvent
}