const mongoose = require("mongoose");
const Joi = require("joi");

// new schema desiging
const user_questionSchema = new mongoose.Schema(
    {
        // user is a foreign key states that which user has entered this particular question
        // or this question is belong to which user
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
        },
        counter: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

const UserQuestion = mongoose.model("UserQuestion", user_questionSchema);

// exporting all functions and model
exports.UserQuestion = UserQuestion;
