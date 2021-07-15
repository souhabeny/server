const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
    foodName:{
        type:String,
       required:true,
    },
    daySinceate:{
        type:Number,
       required:true,
    },

});
const Food=mongoose.model("FoodDate",foodSchema)
module.exports=Food;