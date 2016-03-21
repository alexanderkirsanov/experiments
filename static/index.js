const qs = require('qs');
const su = require('./playground/source');
const result = qs.parse(document.location.search.substring(1));

const pathProcessing = (folder) => {
    if (folder) {
        const result = folder.endsWith('.js') ? folder.substring(0, folder.length - 3) : folder;
        if (!result.endsWith('/index')) {
            return result.endsWith('/') ? result + 'index' : result + '/index';
        }
        return result
    }
    return null;
};

const path = pathProcessing(result.folder);
System.import(path).catch((errorMessage) => {
    console.error(errorMessage);
});
const source = './source?project=' + path;
const realPath = path.replace('/index', '');
const sourceEl = document.getElementById('source');
sourceEl.innerHTML = '';
const renderSource = su.compose(su.render(sourceEl), su.block, su.record(realPath));
fetch(source).then(x=>x.json()).then(result => result.forEach(renderSource));