import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    uri: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Song = mongoose.models.Song || mongoose.model("Song", songSchema);
