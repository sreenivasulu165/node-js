const fs = require('fs')
fs.readFile('xyz.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
    fs.writeFile('srinu.txt',data,'utf-8',(err)=>{
        if (err) throw err
        console.log('write successfully');
    })
})


// const fs = require('fs')


// fs.readFile('abc.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })