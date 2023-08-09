const app=require('./app');
const mongoose=require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO,{   useNewUrlParser: true,
useUnifiedTopology: true}).then(()=>{
    let port =process.env.PORT;
app.listen(port,()=>console.log('connected on http://localhost:'+port))}
) .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
