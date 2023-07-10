const moongose=require('mongoose')

const taskSchema=new moongose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[20,'name cannot be more than 20 letters'],
    },
    completed:{
        type:Boolean,
        default:false,
        
    },
});

module.exports=moongose.model('task',taskSchema);
