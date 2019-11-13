const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const serve = require("koa-static");
const cors = require("@koa/cors");
const Koa = require("koa");
const views = require("koa-views");
const compress = require("koa-compress");
const koaSse = require("koa-sse-stream");
const app = new Koa();
const config = require("./config/application.json");
const PORT = config.port;

app.use(cors());
const options = { threshold: 2048 };
app.use(compress(options));

app.use(serve("build"));
app.use(views(path.resolve(__dirname, "./build")));
app.use(async function(ctx, next) {
  console.log(ctx.req.url);
  if (ctx.req.url === "/event") {
    let n = 0;
    let interval = setInterval(() => {
      let date = new Date().toString();
      ctx.sse.send(date);
      console.log("send Date : " + date);
      n++;
      if (n >= 10) {
        console.log("send manual close");
        ctx.sse.sendEnd();
      }
    }, 1000);
    ctx.sse.on("close", (...args) => {
      console.log("clear interval");
      clearInterval(interval);
    });
  } else if (ctx.req.url === "/getData") {
    ctx.body = [
      {
        img: config.publicPath + "/images/pic.jpg",
        title: "复星康乐一生2019",
        title2: "长期重疾险",
        info1: "108种重疾+25种中症+40种轻症",
        info2: "肿瘤二次赔付可选",
        info3: "前十年重疾保额提升30",
        price: "156.5",
        price1: "50",
        age: "30天-50周岁",
        time: "终身"
      },
      {
        img: config.publicPath + "/images/1849890864.jpg",
        title: "安邦北极星",
        title2: "长期重疾险",
        info1: "108种重疾+25种中症+40种轻症",
        info2: "肿瘤二次赔付可选",
        info3: "前十年重疾保额提升30",
        price: "156.5",
        price1: "30",
        age: "20天-50周岁",
        time: "终身"
      },
      {
        img: config.publicPath + "/images/pic.jpg",
        title: "复星保德信星悦",
        title2: "长期重疾险",
        info1: "108种重疾+25种中症+40种轻症",
        info2: "肿瘤二次赔付可选",
        info3: "前十年重疾保额提升30",
        price: "156.5",
        price1: "140",
        age: "20天-80周岁",
        time: "终身"
      }
    ];
    return;
  } else {
    if (ctx.req.url === "/app") {
      return await ctx.render("app");
    } else {
      return await ctx.render("index");
    }
  }
  next();
});
app.use(koaSse());

app.listen(PORT, () => {
  console.log(`SPA Fragment Server started at ${PORT}`);
});
