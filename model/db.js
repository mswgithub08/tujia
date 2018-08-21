const url=require('./url.js');
const MongoClient=require('mongodb').MongoClient;

function _connect(callback){
	MongoClient.connect(url.url, function(err, db) {
	  if (err) return;
	  callback(err,db);
	  db.close();
	});
}

exports.insert=function(dbase,collectionName,json,callback){
	_connect(function(err,db){
		db.db(dbase).collection(collectionName).insertOne(json, function(err, result) {
	        if (err) return;
	        callback(err,result);
	        db.close();
    	});
	})
}

exports.find=function(dbase,collectionName,json,callback){
	_connect((err,db)=>{
		db.db(dbase).collection(collectionName).find(json).toArray((err,result)=>{
			if(err) return;
			callback(err,result);
			db.close();
		})
	})
}

exports.del=function(dbase,collectionName,json,callback){
	_connect((err,db)=>{
		 db.db(dbase).collection(collectionName).deleteOne(json, function(err, result) {
	        if (err) return;
	        callback(err,result);
	        db.close();
	    });
	})
}

exports.update=function(dbase,collectionName,json,updatejson,callback){
	_connect((err,db)=>{
		db.db(dbase).collection(collectionName).updateOne(json, updatejson, function(err, result) {
        if (err) return;
        callback(err,result);
        db.close();
    });
	})
}
