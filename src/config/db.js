const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://luckybrownandrew_db_user:123@chat.khvzzqd.mongodb.net/chat-app?retryWrites=true&w=majority&appName=Chat",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB failed to connect:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
