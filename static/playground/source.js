const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

const escapeHtml = (string) => {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
};
const block = (arg) => `<div class = 'block'> ${arg}</div>`;
const record = (realPath) => (json) => `<div class ='filename'> ${json.file.replace(realPath, '')} </div>
     <textarea cols="30" rows="30" class = 'record'>${escapeHtml(json.data)}</textarea>`;

const render = (el) => (data) => el.innerHTML += data;

const compose = (...funcs) => {
    funcs.reverse();
    return (...args)=> funcs.reduce((acc, cur) => {
        if (!(acc instanceof Array)) {
            return cur.apply(null, [acc]);
        }
        return cur.apply(null, acc);
    }, args);
};

module.exports = {
    compose,
    render,
    record,
    block
};