const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  imageUrl: String,
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

})

module.exports = mongoose.model("Product", productSchema)