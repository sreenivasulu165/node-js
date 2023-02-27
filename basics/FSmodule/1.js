const fs=require('fs')
let content=fs.readFileSync('xyz.txt','utf-8')
console.log(content);
 fs.writeFileSync('abc.txt',content)
 console.log('write successfully');
