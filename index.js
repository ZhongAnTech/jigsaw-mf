import { importEntry } from 'html-entry'
import clearTemplate from './utils/clearTemplate'
import fragment from './utils/fragment'
import { getSandbox } from './utils/sandbox'
class ctrlApps {
    constructor () {
        this.sonApplication = []
        this.__baseUrl = '';
        this.agentPopState();
    }
    get baseUrl() {
        return this.__baseUrl
    }
    set baseUrl(val) {
        this.__baseUrl = val
    }
    findApp (name) {
        return this.sonApplication.find(function (app) {
            return name === app.name
        })
    }
    unregisterApps (name) {
        const result = this.findApp(name)
        result.unmount()
    }
    registerApps (applist) {
        const _self = this
        applist.forEach(
            async app => {
                    if(!app.canActive){
                        app.canActive = () => true
                    }
                    const { template, execScripts, getExternalScripts, getExternalStyleSheets } = await importEntry(app.entry)
                    const sandbox = getSandbox()
                    // const sandbox = window
                    console.log(sandbox)
                    const script  = await execScripts(sandbox)
                    const extScript = await getExternalScripts(sandbox)
                    const styles = await getExternalStyleSheets()
                    app.template = template
                    app.styles = styles
                    app.module = sandbox[app.application_name]
                    app.free = sandbox.__tailor_free;
                    app.baseUrl = _self.baseUrl + (app.baseUrl||'')
                    const sonApplication = new fragment(app)
                    // delete window[app.name]
                    // window[app.name] = null
                    if (app.canActive()) {
                        sonApplication.mount()
                    }
                    this.sonApplication.push(sonApplication)
                }
            // }
        )
    }
    agentPopState () {
        let _self = this
        window.addEventListener('popstate', function (e) {
            _self.sonApplication.forEach(item=>{
                if(item.app.canActive()) {
                    item.mount()
                } else{
                    item.unmount()
                }
            })
        })
    }
}

// const instanceApp = new ctrlApps()

const init = function () {
    window.addEventListener('load', function(e) {
        clearTemplate()
    })
}
init ()
const App = new ctrlApps()
export default App
// exports.app = ctrlApps
// export const app = ctrlApps

