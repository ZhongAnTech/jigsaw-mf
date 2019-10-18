import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'

import Chaoxi, {globalEvent} from './global'

function App({baseUrl}) {
        
  return (
    <Router basename={baseUrl}>
      <div className={`App ${Chaoxi.classNamespace}`}>
        <div className={'index'}>
            <div className={'header'}>----</div>
            <div className={'body'}>
              <Route path="/" exact component={BodyTop} />
              <Route path="/" component={Index} />
              <Route path="/reactchild" component={Home} />
          </div>
          <Route path="/" exact component={Footer} />
        </div>
      </div>
    </Router>
  );
}

function BodyTop(){

  function handleTypeClick(e) {
      globalEvent.emit('father-type-click', e.currentTarget.dataset.type)
  }
  return (
    <React.Fragment>
      <div>
          <div className={'banner'}>
              <img src="http://img.1ppt.com/uploads/allimg/1305/1-130502101143311-lp.jpg" alt="" />
          </div>
          <div className={"za-list "}>
              <div className="za-list-item">
                  <div>
                      <h3 className="za-title f28 b">保单</h3>
                      <p className="za-desc f20">一键看保单</p>
                      <img className="img-itm" src="http://img.1ppt.com/uploads/allimg/1305/1-130502101143311-lp.jpg" alt="" />
                  </div>
              </div>
              <div className="za-list-item" data-type="recommend" onClick={handleTypeClick}>
                  <div>
                      <h3 className="za-title f28 b">优选</h3><p className="za-desc f20"> 性价比推荐</p>
                      <img className="img-itm" src="http://img.1ppt.com/uploads/allimg/1305/1-130502101143311-lp.jpg" alt="" />
                  </div>
              </div>
              <div className="za-list-item">
                  <div onClick={() => this.goto1()} >
                      <h3 className="za-title f28 b">马上金</h3><p className="za-desc f20"> 5万承保额</p>
                      <img className="img-itm" src="http://img.1ppt.com/uploads/allimg/1305/1-130502101143311-lp.jpg" alt="" />
                  </div>
              </div>
              <div className="za-list-item">
                  <div>
                      <h3 className="za-title f28 b">邀请好友</h3>
                      <p className="za-desc f20">赢现金奖励</p>
                      <img className="img-itm" src="http://img.1ppt.com/uploads/allimg/1305/1-130502101143311-lp.jpg" alt="" />
                  </div>
              </div>
          </div>
      </div>
      <div className="consultant-entry-list">
          <img width="100%" src="http://img.1ppt.com/uploads/allimg/1305/1-130502101143311-lp.jpg" alt="" />
      </div>
    </React.Fragment>
  )
}

function Footer(){
  return (
    <React.Fragment>
        <div className={'footer'}>
            <div>
                <img src="" alt="首页" />
                <div>首页</div>
            </div>
            <div>
                <img src="" alt="头条" />
                <div>头条</div>
            </div>
            <div>
                <img src="" alt="发现" />
                <div>发现</div>
            </div>
            <div>
                <img src="" alt="我的" />
                <div>我的</div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default App;
