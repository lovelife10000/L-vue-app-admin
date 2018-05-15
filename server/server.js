const Koa = require('koa');

const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const serve = require('koa-static');
render(app, {
    root: path.join(__dirname, '../app'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: true
});


const config = require('../webpack/dev-client.js');
const compiler = require('webpack')(config);
const devMiddleware = require('koa-webpack-dev-middleware')(compiler, {


    inline: true,
    hot: true,




});
const hotMiddleware = require('koa-webpack-hot-middleware')(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);

app.use(serve(path.join(__dirname, '../dist')));


app.use(async function (ctx) {
    await ctx.render('assets/index');
});

app.on('error', err => {
    log.error('服务器启动失败，错误如下：', err)
});

app.listen(3003);
