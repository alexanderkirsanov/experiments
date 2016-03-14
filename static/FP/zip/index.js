const zipWith = (func, ...args) => Array.from({length: Math.min.apply(null,args.map(x=>x.length))}, (item,i) => func.apply(null, args.map( x => x[i])));
const zip =  (...args) => zipWith(((...arg) => arg), ...args);

console.log(zipWith((x, y, z) => x + y + z, [1, 2, 3], [4, 5, 6], [7, 8, 9,10]));
console.log(zip([1, 2, 3], [4, 5, 6, 10], [7, 8, 9]));
console.log(zip([3, 2], [4, 5, 6, 10], [7, 8]));
