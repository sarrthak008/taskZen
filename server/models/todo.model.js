
import { Schema ,model } from "mongoose";

const todosSchema = new Schema({
    toDotitle:{
        type:String,
        required:true
    },
    toDodosdecription:{
        type:String
    },
    status:{
        type:String,
        default:"incomplete",
        enum:["incomplete","complete"]
    },
    isPrive:{
        type:Boolean,
        default:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

const Todos = model("Todos",todosSchema)

export default Todos;