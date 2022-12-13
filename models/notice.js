const mongoose = require("mongoose");
const Joi = require("joi");

// new schema desiging
const NoticeSchema = new mongoose.Schema(
    {
        // user is a foreign key states that which user has entered this particular question
        // or this question is belong to which user
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
            maxlength: 500,
            // trim actually removes all the white spaces (e.g. "   hello  "  -> "hello") 
            trim: true,
        },
        body: {
            type: String,
            required: true,
            maxlength: 500,
        },
    },
    // mongoose automaticlly give "CreatedAt" and "UpdatedAt" functionality whenever a user adds the question
    { timestamps: true }
);

const Notice = mongoose.model("Notice", NoticeSchema);

function validateNotice(question) {
    const schema = Joi.object({
        user: Joi.objectId(),
        title: Joi.string().min(2).max(500).required(),
        body: Joi.string().min(2).max(500).required(),
    });
    const validation = schema.validate(question);
    return validation;
}

// exporting all functions and model
exports.Notice = Notice;
exports.validate = validateNotice;
