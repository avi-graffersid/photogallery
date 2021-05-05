const express = require("express");
const app = express();
var userCtrl= require('./controllers/userController')
require('./models/index'); 

const bodyparser = require('body-parser')
const cors = require("cors");
const Reviews = require('./models/reviews');

const db = require('./models/index');
const port = 8080;

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


app.use(cors())





app.get('/',(req,resp)=>{
    resp.send("Home page");
});




app.get('/fetch',userCtrl.fetch);
app.put('/forgot',userCtrl.forgot)
app.post('/register',userCtrl.registerUser);
app.post('/login',userCtrl.queryData);
app.put('/pedit',userCtrl.ProfileEdit)

app.post('/comment',userCtrl.addComment);
app.post('/add-company ',userCtrl.addUser);
app.post('/add-review',userCtrl.addReview);
app.post('/add-company',userCtrl.addUser);
app.get('/list/:coid',userCtrl.findDataByID);
app.get('/rawQuery',userCtrl.rawQuery);
app.get('/Reviews_Company_details',userCtrl.Reviews_Company_details);
app.get('/AllCompanyDetails',userCtrl.AllCompanyDetails);
app.post('/findAllReviews',userCtrl.findAllReviews);
app.get('/FindCid_Comment',userCtrl.FindCid_Comment);
app.get('/fetchsubs',userCtrl.fetchsubs);
app.get('/get-comment',userCtrl.getComment);


app.listen(port, ()=>{
    console.log(`Listening at  http://localhost:${port}`);
});

module.exports = app;