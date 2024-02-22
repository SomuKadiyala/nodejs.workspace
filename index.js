import express from "express";
const app = express();
import fs from 'fs'; 
import path from 'path';
import { fileURLToPath } from 'url';

//global object locally
const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

//rest api implementation
//to get all users
app.get("/rest/getALLUsers",(req,res) => {
   fs.readFile(__dirname+"/"+"users.json",
   (err,data) => {
        res.end(data);
   })

})

//to get specific user
app.get("/rest/getUserById/:id",(req,res) => {
  fs.readFile(__dirname+"/"+"users.json",
  (err,data) =>{
    const users = JSON.parser(data);
    const user = users["user"+user.id];
    res.end(JSON.stringify(user));
  })
})

  //how to insert user into file
   app.post("/rest/addUser",(req,res) =>{
      fs.readFile(__dirname+"/"+"users.json",
      (err,data) =>{
          const users = JSON.parse(data);
          const user = req.body.user4;
          users["user"+user.id] = user;
          res.end(JSON.stringify(users));
          
        })
  })
  //create server
  app.listen(5004,() => {
    console.log(" server is running on 5004");
  
  })
