const app=require('./app');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/song',{   useNewUrlParser: true,
useUnifiedTopology: true}).then(()=>{
    let port =5050;
app.listen(port,()=>console.log('connected on http://localhost:'+port))}
)
