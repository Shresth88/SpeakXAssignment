const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

//schema and model
const questionSchema = new mongoose.Schema({
  type: String,
  anagramType: String,
  blocks: [{ text: String, showInOption: Boolean, isAnswer: Boolean }],
  siblingId: mongoose.Schema.Types.ObjectId,
  solution: String,
  title: String,
  options: [{ text: String, isCorrectAnswer: Boolean }],
});
const Question = mongoose.model("Question", questionSchema);

// MongoDB connection URI
const uri =
  "mongodb+srv://Shresth01:9450345192s@cluster0.92vjzi7.mongodb.net/QuestionDB?retryWrites=true&w=majority";

// Read and prepare JSON data
const questionsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "questions.json"), "utf-8")
).map((q) => ({
  ...q,
  _id: q._id?.["$oid"] ? new mongoose.Types.ObjectId(q._id["$oid"]) : undefined,
  siblingId: q.siblingId?.["$oid"]
    ? new mongoose.Types.ObjectId(q.siblingId["$oid"])
    : undefined,
  options: q.options?.map((o) => ({ ...o, isCorrectAnswer: !!o.isCorrectAnswer })),
  blocks: q.blocks?.map((b) => ({
    ...b,
    showInOption: !!b.showInOption,
    isAnswer: !!b.isAnswer,
  })),
}));

// Connect to MongoDB and insert data
mongoose
  .connect(uri)
  .then(async () => {
    console.log("MongoDB connected");
    await Question.insertMany(questionsData);
    console.log("Data successfully inserted");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error:", err);
    mongoose.connection.close();
  });
