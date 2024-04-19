import { connect } from "./connect";
import { Song } from "./foodSchema";

connect();

export const GET = async (req, res) => {
  try {
    const songs = await Song.find();
    res.send({ songs });
  } catch (error) {
    console.log(error);
  }
  // res.send("Added to DB");
};
