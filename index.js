const express = require('express')
const app = express()
const port = 3000
// route
app.get('/tin-tuc', (req, res) => {
    var a =1;
    var b =2;
    var c = a +b;
  return res.send('Hello World! haha')
})

// 127.0.0.1 -localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})