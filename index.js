
//4UXW48MyKnav@*!
require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRouter = require(path.resolve(__dirname,'routes','product.js'))
path.resolve(__dirname,'routes','user.js')
const userRouter = require(path.resolve(__dirname,'routes','user.js'))
const server = express();
const {Schema} = mongoose;


//Schema



//body parser

//db connection
main().catch(err => console.log(err));

async function main() {
 
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server.use(express.json());
server.use(morgan('default'));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
console.log(process.env.DB_PASSWORD)
// server.use( (req,res,next) => {
//     console.log(req.get('User-Agent'),req.method,req.ip,req.hostname)
//     next();
// } )


// const auth = (req,res,next) => {
//     //console.log(req.query)
    
//     //  if(req.body.password === '123'){
//     //     next();
//     //  }
//     //  else{
//     //     res.sendStatus(401);
//     //  } 
//     next();
// }

// MVC - Model View Controler 

server.use('/products',productRouter.productRouter)
server.use('/users',userRouter.userRouter)
server.use('*',(req,res) => {
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})
//Create POST / products C R U D



server.get('/demo',(req,res) => {
   // res.status(201).send('<h1>hello</h1>')
   // res.sendStatus(404)
   // res.json(products)
    //res.send('hello');
    //res.sendFile('C:/Users/DELL/node/index.html')
})










server.listen(process.env.PORT,() => {
    console.log('server started')
});
















































// const server = http.createServer(
//     (req,res) => {
//         console.log(req.url,req.method)
//         if(req.url.startsWith('/product')){
//           const id = req.url.split('/')[2]
//           const product = products.find(p => p.id ===(+id))

//           res.setHeader('Content-Type','text/html');
//                 let modifiedIndex = index.replace('**title**',product.title)
//                 .replace('**url**',product.thumbnail)
//                 .replace('**price**',product.price)
//                 .replace('**rating**',product.rating);

//                 res.end(modifiedIndex);
//         }
//         // switch(req.url){
//         //     case '/':
//         //         res.setHeader('Content-Type','text/html');
//         //         res.end(index);
//         //         break;
//         //     case '/api':
//         //         res.setHeader('Content-Type','application/json')
//         //         res.end(JSON.stringify(data));
//         //         break;
//         //     case '/product':
                
//         //         break;

//         //     default:
//         //         res.writeHead(404,'NT FOUND');
//         //         res.end();
//         // }
//         console.log('server started')

//     }
// )

// server.listen(8080);