const express=require('express');
const router=express.Router();
var base64ToImage = require('base64-to-image');
const path=require('path')
var answers=[]


router.get('/',function(req,res){
   return res.render('index',{params:"",title:""})
})
router.post('/image',function(req,res){
   var base64Str = req.body.data;
   var p = path.join(__dirname,'../incoming/i')
   // p=p.toString();
   console.log(p);
   var optionalObj = {'fileName': "1", 'type':'jpg'};
   var imageInfo =base64ToImage(base64Str,p,optionalObj); 
   console.log(imageInfo);

   // console.log(base64Str);
})
router.post('/alert',function(req,res){
   console.log('Suspicious activity detected', req.body)
   return res.render("index",{params:"suspicious activity detected",title:"LOLLL"})
})
router.post('/answers',function(req,res){
  answers=req.body;
  console.log(answers);
  return res.redirect('/display');
   
})
router.get('/display',function(req,res){
   return res.render('answer',{answers:answers})
})
module.exports=router;