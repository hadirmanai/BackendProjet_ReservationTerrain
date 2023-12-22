const { default: mongoose } = require("mongoose");
const mpongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Hadirmanai:14017269@cluster0.7yqw2.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("mongo db connected ");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
