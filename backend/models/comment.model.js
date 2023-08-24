const mongoose=require("mongoose")

const commentSchema = new mongoose.Schema({
  text: String,
  photoId: mongoose.Schema.Types.ObjectId,
});
const Comment = mongoose.model("Comment", commentSchema);

module.exports={Comment}