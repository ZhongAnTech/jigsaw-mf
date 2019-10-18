import chaoxi, { globalEvent } from 'chaoxi'
import application_info from '../config/application.json';

export default new chaoxi(application_info)
export {
    globalEvent
}