/**
 * name: application name
 * entry: 'http://localhost:8009/'
 * contain: document.getElementById('root')
 * template: '<html>...</html>'
 */
class fragment {
    constructor (app) {
        const cloneApp = Object.assign({}, app)
        const { name, entry, contain, template, styles, module , baseUrl, free, sandbox} = cloneApp;
        const _self = this
        
        this.app = cloneApp
        this.mounted = false
        this.sandbox = sandbox
        this.name = name
        this.entry = entry
        this.style = []
        this.contain = contain
        this.template = template
        this.baseUrl = baseUrl
        this.__module = module
        this.__free = free
        if (styles) {
            styles.map((ele) => {
                _self.addStyle(ele)
            })
        }
    }
    // export async function bootstrap() {
    //     console.log('react app bootstraped')
    //   }
      
    //   export async function mount(props) {
    //     ReactDOM.render(<Router/>, document.getElementById('other'))
    //   }
      
    //   export async function unmount() {
    //     ReactDOM.unmountComponentAtNode(document.getElementById('other'))
    //   }
    unmount () {
        // this.__module.unmount(this.contain)
        if(this.mounted){
            this.__module.default.unmount(this.contain)
            this.mounted = false
        }
    }
    mount (props) {
        if(!this.mounted){
            if (!this.contain) {
                console.error(`Application name ${this.name} contain is null`)
            }
            this.__module.default.mount(this.contain, this.baseUrl, this.app)
            this.mounted = true;
        }
    }
    destroy(){
        // unmount的时候不能释放资源，因为还有可能mount
        // 所以增加 destroy 方法，彻底释放不会再次mount的应用
        this.unmount();
        this.__free()
    }
    addStyle (txt) {
        let link = document.createElement('style')
        link.innerHTML = txt
        let heads = document.getElementsByTagName('head')
        if(heads.length) {
            heads[0].appendChild(link)
        } else {
            document.documentElement.appendChild(link)
        }
        this.style.push(link)
    }
}
export default fragment