import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    short: {
        type: String,
        unique: true,
        required: true
    },
    link: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const urlModel = model('urls', urlSchema)
export default urlModel