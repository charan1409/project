const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    id:String,
    placeid:String,
    username:String,
    fromdate:String,
    todate:String,
    paymentDone: Boolean,
});
const book=mongoose.model('book',bookSchema);
module.exports=book;