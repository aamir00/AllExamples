const url = require('url');

const myUrl = new URL('https://www.google.com:7888?id=1&name=Erc');

console.log(myUrl.searchParams);
myUrl.searchParams.append('dept', 'science');

console.log(myUrl);
