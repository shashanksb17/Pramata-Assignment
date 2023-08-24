const mongoose=require("mongoose")

const photoSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  albumId: mongoose.Schema.Types.ObjectId,
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports={Photo}