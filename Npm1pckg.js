const_=require('loadash');
const items=[1,[2,[3,[4]]]]
const new_Items=_.flattenDeep(items);
console.log(new_Items);