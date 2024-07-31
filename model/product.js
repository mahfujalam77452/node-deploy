const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema(
    {
      title:String,
      description:{type : String, require : true,unique:true},
      price:{type:Number,min:[0,'wrong price'],require:true},
      discountPercentage:{type:Number,min:[0,'wrong min discount'],max:[50,'wrong max discount']},
      rating:{type:Number,min:[0,'wrong min rating'],max:[5,'wrong max raing']},
      brand: {type : String, require : true},
      category: {type : String, require : true},
      thumbnail: {type : String, require : true},
      images:[String]
    }
  );
  
exports.Product = mongoose.model('product',productSchema);
  