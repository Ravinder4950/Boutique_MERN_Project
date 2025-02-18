const express= require ('express')
const app=express()
const PORT=5000
app.listen(PORT,(err)=>{
    if(err){
        console.log("Error occured",err);
        
    }
    else{ 
         console.log("Server is Runing");

    }
  
    
})