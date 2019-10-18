import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
import Chaoxi, {globalEvent} from './global'

function App({baseUrl}) {
        // var evtSource = new EventSource("http://localhost:5020/event");
        // evtSource.onmessage = function(e) {
        //     console.log('onmsg: ' + e.data);
        // }
        // evtSource.onerror = function(e) {
        //     console.log('error', e);
        //     evtSource.close();
        // }
  return (
    <Router basename={baseUrl}>
      <div className={`App ${Chaoxi.classNamespace}`}>
        {/* <h2>Tasdfasdf {baseUrl}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/reactchild">child</Link>
            </li>
            <li>
              <Link to="/index">index</Link>
            </li>
          </ul>
        </nav> */}
        <Route path="/" component={Index} />
        <Route path="/reactchild" component={Home} />
      </div>
    </Router>
  );
}

export default App;
