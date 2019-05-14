const _ = require('lodash');
const arr1 = [99, 0, 33, [101, 202, [303]], 1, 2]; 
//flatten脱掉里面的括号 lattenDeep脱掉最里面的括号
const flattenArr1 = _.flattenDeep(arr1);
const arr2 = [2, 1, 2]
//除掉重复数字
const uniqArr2 = _.uniq(arr2);

const users = [
    {user: 'fred', age: 48},
    {user: 'barney', age: 36},
    {user: 'fred', age: 40},
    {user: 'barney', age: 34},
]
const sortedUser = _.sortBy(users, ['user', 'age']);
console.log(flattenArr1);
console.log(sortedUser);
console.log(uniqArr2);




