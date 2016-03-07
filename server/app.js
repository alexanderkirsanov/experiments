/**
 * Created by ndyumin on 06.03.2016.
 */
const Koa = require('koa');
const app = new Koa();
const send = require('koa-send');
const fs = require('fs');

const isDependency = path => path.indexOf('node_modules') !== -1 || path.indexOf('package.json') !== -1;
const isDirectory = file => fs.statSync(file).isDirectory();
const isFiddle = dir => fs.existsSync(dir + '/index.js');
const concatPath = path => file => path + '/'+ file;

const list = (path) => {
    const children = fs.readdirSync(path).map(concatPath(path)).filter(isDirectory);
    const fiddles = children.filter(isFiddle);
    return [].concat(fiddles, children.map(list).reduce((xs, x) => xs.concat(x), []));
};

const getFiddles = () => {
    const root = __dirname + '/../static';
    return list(root).map(l => l.substring(root.length + 1));
};

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.body = {message: err.message, stack: err.stack};
        ctx.status = err.status || 500
    }
});

app.use(async ctx => {
    if (isDependency(ctx.path)) {
        return await send(ctx, ctx.path, {root: __dirname + '/..'});
    } else if (ctx.path === '/' || ctx.path.startsWith('/list')) {
        return ctx.body = getFiddles()
            .map(name => `<li><a href="/index.html?folder=${name}">${name}</a>`)
            .join('');
    }
    await send(ctx, 'static' + ctx.path);
});

module.exports = app;