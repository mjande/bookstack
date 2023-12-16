import { Schema, model } from "mongoose";

const RecordSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  dateRead: { type: Date },
});

export default model("Record", RecordSchema);
