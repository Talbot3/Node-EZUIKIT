const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');

// app.use(static(path.join(__dirname, "./demo")));
app.use(static(path.join(__dirname)));
app.listen(8000);