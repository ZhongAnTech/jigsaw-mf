import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CtrlApps, {globalEvent} from './global'

export default {
  bootstrap: async function bootstrap(parent) {
    console.log('react app bootstraped');
    CtrlApps.parent = parent
  },
  mount: async function mount(contain, baseUrl, appinfo, parent) {
    CtrlApps.parent = parent
    CtrlApps.baseUrl = baseUrl;
    console.log('prosuct parent:', parent);
    console.log('this is product mount')
    console.log(contain)
    ReactDOM.render(<App baseUrl={baseUrl}  appinfo={appinfo}/>, contain)
  },
  unmount: async function unmount(contain) {
    CtrlApps.unregisterApps()
    ReactDOM.unmountComponentAtNode(contain)
  }
}
serviceWorker.unregister();
