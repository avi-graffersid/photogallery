
var db = require('../models')
const bodyParser = require("body-parser");
const cors = require("cors");
const Users = db.users;
const Reviews = db.reviews;
const Review = db.Review;
const Book = db.Book;
const Company = db.Company;
const Register = db.Register;
const subs = db.subs;
const Comment = db.Comment;


const {Sequelize,Op,QueryTypes} = require('sequelize');
const {response} = require('express');
const { sequelize } = require('../models');
const reviews = require('../models/reviews');




var registerUser = async (req,resp) =>{
    console.log(req.body);
        let data = await Register.create({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            password:req.body.password,
        //    subscription:req.body.subscription


            //   comment:req.body.comment
        })
        resp.status(200).json(data);  
    };



    var queryData = async (req,resp) =>{
        let data = await Register.findOne({
            where :{
              //  name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }
        }).then((data)=>{
            if(!data){
                console.log("cannot login")
                res.send(err)
            }
            else{
                console.log("login")      
            }
        })
        let response = {
            data: data
        }
        resp.status(200).json(response);
        
        resp.send({response})
    }


    var fetch =  async (req,resp)=>{
        const users = await db.sequelize.query("select *from Registers ORDER BY id DESC LIMIT 1;",{
            type: QueryTypes.SELECT,
         //   model:Users,
         //   mpaToModel: true,
         //   raw:true ,
         //   replacements:{cid:'201'}
        });
        resp.status(200).json(users);
    }



    var fetchsubs =  async (req,resp)=>{
        let data = await subs.findOne({
            where: {
                sid: req.params.sid
              }
            });
        
        resp.status(200).json(data);
    }


var addUser = async (req,resp) =>{
    console.log(req.body);
        let data = await Company.create({
            cid:req.body.cid,
            name:req.body.name,
         //   comment:req.body.comment
        })
        resp.status(200).json(data);  
    };

    var addComment = async (req,resp) =>{
        console.log(req.body);
            let data = await Comment.create({
                name:req.body.name,
                comment:req.body.comment,
             //   comment:req.body.comment
            })
            resp.status(200).json(data);  
        };
    

        var forgot = (req, res) => {
            const email = req.body.email;
            const password = req.body.password;
            console.log(email)
            console.log(password)
            console.log(req.body)
            
                let result =  Register.update({
                    email:req.body.email,
                    password:req.body.password},
                    {where: {email: email}},
                    console.log(password)
                );
                
        res.status(200).json(result);
              //  console.log(result);
              //  return result;
            
        };


        var ProfileEdit = (req, res) => {

            const name = req.body.name;
            const email = req.body.email;
            const age = req.body.age;
            const password = req.body.password;
            console.log(name)
            console.log(email)
            console.log(age)
            console.log(password)
            console.log(req.body)
            
                let result =  Register.update({
                    name:req.body.name,
                    email:req.body.email,
                    age:req.body.age,
                    password:req.body.password},
                    {where: {email: email}}
                    
                );
                
        res.status(200).json(result);
              //  console.log(result);
              //  return result;
            
        };
  

var addReview = async (req,resp) =>{
        console.log(req.body);
        let data = await Review.create({
            coid:req.body.coid,
            rating:req.body.rating,
            comment:req.body.comment
        })
        resp.status(200).json(data);
    };





var findDataByID = async (req,resp) =>{
    let data = await Review.findAll({
        attributes:['reviews'],
        where: {
            coid: req.params.coid
          },
          attributes:['Comment']
        });
    
    resp.status(200).json(data);
}

var rawQuery =  async (req,resp)=>{
    const users = await db.sequelize.query("SELECT reviews.coid,companies.name,COUNT(reviews.rating) as count FROM nodemysql.companies LEFT JOIN reviews ON companies.cid=reviews.coid group by nodemysql.reviews.coid",{
        type: QueryTypes.SELECT,
     //   model:Users,
     //   mpaToModel: true,
     //   raw:true ,
     //   replacements:{cid:'201'}
    });
    resp.status(200).json(users);
}


var Reviews_Company_details = async (req,res)=>{
   
    let data = await Company.findAll({
        attributes:['cid','name'] ,
        include:[{
            model:Review,
            
        attributes:['rating','comment'],
        }],
    })
   res.status(200).json(data);
   // console.log(data);
}

var findAllReviews = async (req,res)=>{
   
    let data = await Reviews.findAll({
        attributes:['comment'] ,
        where:{
            coid:req.body.coid
        }
    })
   res.status(200).json(data);
   // console.log(data);
}

var FindCid_Comment = async (req,res)=>{
   
    let data = await Reviews.findAll({
        attributes:['coid','comment'] ,
     })
   res.status(200).json(data);
   // console.log(data);
}

var AllCompanyDetails = async (req,res)=>{
   
    let data = await Company.findAll({
    })
   res.status(200).json(data);
   // console.log(data);
}


var getComment = async (req,res)=>{
   
    let data = await Comment.findAll({
    })
   res.status(200).json(data);
   // console.log(data);
}



module.exports ={
    getComment,
    addUser,
    queryData,
    findDataByID,
    rawQuery,
    addReview,
    Reviews_Company_details,
    AllCompanyDetails,
    findAllReviews,
    FindCid_Comment,
    registerUser,
    fetch,
    fetchsubs,
    addComment,
    forgot,
    ProfileEdit
};