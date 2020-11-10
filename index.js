const express = require('express');
const app = express();
const mg=require('mongoose');

let mongodbUrl="mongodb+srv://test:test@test.3qxcs.mongodb.net/react?retryWrites=true&w=majority";
mg.connect(mongodbUrl, { useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{console.log("mongoDBconnect....")}).catch(()=>{console.log("mongodbError")})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(3000,(err)=>{
    if(err)console.log(err)
    console.log("server2000 listen")
})