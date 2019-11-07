import React from "react";
import { globalEvent } from "easy-mft";
import "./index.scss";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img:
            "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
          title: "十一国庆节出行，不可缺少的汽车保养宝典！"
        },
        {
          img:
            "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
          title: "“现在几乎没有人订房”！“十一”黄金周台湾陆客“消失了”"
        },
        {
          img:
            "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
          title: "出游的亲们看这里，十一旅游注意事项，全都在这里了"
        },
        {
          img:
            "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
          title: "得了糖尿病、高血压不能买保险？这款产品说：我可以！"
        },
        {
          img:
            "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
          title: "良心推荐 | 十一7大必备保障清单，保人！保财！保安全！"
        },
        {
          img:
            "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
          title: "十一假期，家长最好别带孩子去这些地方，看似好玩，处处是隐患"
        },
        {
          img:
            "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
          title: "出游的亲们看这里，十一旅游注意事项，全都在这里了"
        }
      ]
    };
  }
  goto1() {}
  componentDidMount() {
    globalEvent.on("father-type-click", data => {
      console.log("data from father-type-click", data);
      this.setState({
        data: [
          {
            img:
              "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
            title: "【优选推荐】母亲，我为您骄傲！"
          },
          {
            img:
              "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
            title: "【优选推荐】讲好回归前后故事 传承好爱国爱澳精神"
          },
          {
            img:
              "https://pics7.baidu.com/feed/838ba61ea8d3fd1fcfd0ab0f7d00b91a94ca5ff9.jpeg",
            title: "【优选推荐】在魅力乡村“望山见水留乡韵”"
          }
        ]
      });
    });
  }
  render() {
    return (
      <div className="newsList">
        {this.state.data.map((ele, idx) => {
          return (
            <div className="news-item" key={idx}>
              <div className="news-item-img">{/* <img src={ele.img} /> */}</div>
              <div className="news-item-info">
                <h3 className="news-item-title">{ele.title}</h3>
                <div className="tags-list">
                  <span className="tags-item">少儿</span>
                  <span className="tags-item">发布</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
