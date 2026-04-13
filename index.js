// 1. 引入 Express 框架
const express = require('express'); 
const app = express();

// 2. 定義路由 (Route) 與 邏輯
app.get('/', (req, res) => {
  res.status(200).send('Hello CI/CD!');
});

// 3. 匯出模組 (為了讓測試工具能抓到它)
module.exports = app;