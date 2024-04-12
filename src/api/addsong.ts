import { connect } from "./connect";
import { Song } from "./foodSchema";

connect();

export const GET = async (req, res, next) => {
  const uri = req.url.split("uri=")[1];
  console.log(uri);
  try {
    const newSong = await Song.create({
      uri,
    });
    res.send("Added to DB");
  } catch (error) {
    console.log(error);
  }
  // res.send("Added to DB");
};
