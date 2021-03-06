var mongoose=require('mongoose');
var Todo =mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:null
    },
    createdAt:{
        type:Number,
        default:null
    }
});

module.exports={Todo};
