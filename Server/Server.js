const express = require('express');
const app = express()
const bodyParser  = require('body-parser'); 
var cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use( cors({  origin: 'http://localhost:3000', credentials: true, }));  
const http = require('http') 
const server = http.createServer(app); 
const filejson=require('./product_hits.json')

server.listen(3003);
  
 
app.get('/',function(req,res, next){ 
    let param1 = req.query.param1; 
    if(req.query.param1 > 0 && filejson.hits.length >= param1){
        var products=[];
        for(let i=0;i<param1 ;i++){ 
            products.push(filejson.hits[i])  
        }
        res.json({products});
    }
    else{
        res.json(filejson); 
    }
    
});  