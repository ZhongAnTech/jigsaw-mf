import React from 'react';
import './index.scss';
import axios from 'axios';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ ]
        };
    }
    goto1 () {
    }
    buy () {
        alert('fadfasdf')
        this.props.history.push('/buy')
    }
    componentDidMount() {
        axios.get('http://localhost:9200/getData').then(res=>{
            console.log(res)
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        return (
                    <div className="cardList">
                        {
                            this.state.data.map((ele, idx) => {
                                return (
                                <div className="card" key={idx}>
                                <div className="card-header" onClick={() => this.buy()}>
                                <img src={ele.img}/> 
                                    <div className="t1">
                                        {ele.title}
                                        <span className="tags"> {ele.title2}</span>
                                    </div> 
                                    <div className="t2">
                                        <p>{ele.info1}</p> 
                                        <p>{ele.info2}</p> 
                                        <p>{ele.info3}</p>
                                    </div> 
                                    <div className="price">
                                        <i className="unit">￥</i>
                                        <strong className="money">{ele.price}</strong>
                                        <span className="txt green">/年</span>
                                        <span className="txt">起</span>
                                    </div> 
                                </div>
                                <div className="card-detail-wrap">
                                    <div className="card-detail-item">
                                        <div className="card-detail-item-title">{ele.price1}</div> 
                                        <div className="card-detail-item-desc">最高保额</div>
                                    </div> 
                                    <div className="card-detail-item">
                                        <div className="card-detail-item-title">{ele.age}</div> 
                                        <div className="card-detail-item-desc">投保年龄</div>
                                    </div> 
                                    <div className="card-detail-item">
                                        <div className="card-detail-item-title"> {ele.time}</div> 
                                        <div className="card-detail-item-desc">最长保障</div>
                                    </div>
                                </div>
                            </div>)
                            })
                        }
                        
                        
                    </div>
        )
    }
}