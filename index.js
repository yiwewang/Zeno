const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/', (req, res) => res.render('index'))
app.post('/', function (req, res) {
  console.log(req.body.item);
  res.render('index');  
})
app.listen(port, () => console.log(`Zeno listening on port ${port}!`))





