const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
const app=express();
app.use(express.json())
app.use(cors());
const FoodModel=require("./models/Food");
mongoose.connect("mongodb+srv://userSouha:0000@crud.fmxcl.mongodb.net/food?retryWrites=true&w=majority",{
    useUnifiedTopology: true, useNewUrlParser: true
   
})
app.post('/insert',async(req,res)=>{
    const foodName=req.body.FoodName
    const days=req.body.days
    console.log(req.body)
const food=new FoodModel({foodName:foodName,daySinceate:days})
try{
await food.save();
res.send(req.body)
}
catch(err){
    console.log(err)
}
});
app.get('/read',async(req,res)=>{
    
FoodModel.find({},(err,result)=>{
    if(err)
    {
        res.send(err)
    }
    res.send(result)
})
});


app.put('/update',async(req,res)=>{
    const newfoodName=req.body.newFoodname
    const id=req.body.id
    

try{
await FoodModel.findById(id,(err,updatedFood)=>{
    updatedFood.foodName=newfoodName
    updatedFood.save();
    res.send("updated")
})
}
catch(err){
    console.log(err)
}
});
app.delete("/delete/:id",async(req,res)=>{
const id=req.params.id;
await FoodModel.findByIdAndRemove(id).exec();
res.send("deletd")
})
app.listen(3001,()=>{
    console.log('server runnign port 3001');
});