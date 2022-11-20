import mongoose from 'mongoose';
const schema = mongoose.Schema({
   topic: String,
   userName: String,
   handle:String,
   title: String,
   time: String,
   image: String,
   avator: String,
   content: String,
   likes: Number,
   liked: Boolean,
   comment: Number,
   transfer: Number
}, {collection: 'tuits'});
export default schema;