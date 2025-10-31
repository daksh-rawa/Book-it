
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_DB: process.env.MONGO_DB,
  JWT_SECRET: process.env.JWT_SECRET
};


// config.js 
// can add for other env variables here without exposing them directly

// const userSchema = new mongoose.Schema({

//     username: String,
//     //{
//     //     type: String,
//     //     required: true,
//     //     unique: true,
//     //     trim: true
//     // },

//     email:{
//         type: String,
//         required:true,
//         unique:true
//     },

//     password:{
//         type: String,
//         required:true,
//         minlength:6
//     },

// })

// const account_Schema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true
//     },
//     balance: {
//         type: Number,
//         default: 0,
//         required: true
//     }

// })

// const user = mongoose.model("User", userSchema)
// const account=mongoose.model("Account", account_Schema)

// module.exports = {
//     user,
//     account
// }