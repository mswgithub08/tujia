var express = require('express');
var router = express.Router();
const db=require('../model/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    
    var json=new Array(4);
	db.find('tujia','banner','',(err,result)=>{
  	 	
  		json[0]=result; 		
  		db.find('tujia','swiper','',(err,result)=>{
  			 json[1]=result;
  			 db.find('tujia','room','',(err,result)=>{
	  			 json[2]=result;
           db.find('tujia','enter','',(err,result)=>{
              json[3]=result;
              res.render('index', {data:json});
           })	  			 
	  	 	})
  	 	})

	})

   
});

module.exports = router;
