import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { genres } from "../assets/constants";
import axios from "axios";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

function AddSong() {
  const [image, setImage] = useState("");

  const [items, setItems] = useState();
  const [loading, setloading] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    setItems((items) => ({
      ...items,
      [name]: type == "file" ? e.target.files[0] : value,
    }));
  };

  const submitQuery = async () => {
    setloading(true);
    try {
      const storage = new ThirdwebStorage({
        clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
      });
      const metadata = {
        ...items,
        image,
      };

      console.log(metadata);
      const uri = await storage.upload(metadata);
      console.log(uri);
      await fetch("/api/addsong?uri=" + uri);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  // saveURI("uri");

  return (
    <div className="flex flex-col">
      {/* <button
        className="align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={manipulate}
      >
        Click Here
      </button> */}
      <h1 className="font-bold text-3xl text-white text-left">Add Song</h1>
      <form className="pt-10 w-full max-w-lg">
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-song-name"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" //  border-red-500
            id="grid-song-name"
            type="text"
            name="title"
            onChange={handleInput}
            placeholder="Song Title"
            required
          />
          {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
        </div>

        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-subtitle"
          >
            Subtitle
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-subtitle"
            name="subtitle"
            onChange={handleInput}
            type="text"
            placeholder="Subtitle"
          />
        </div>

        <div className="flex flex-wrap -mx-3 mb-3 pt-5">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-artist"
            >
              artist
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-artist"
              name="artist"
              onChange={handleInput}
              type="text"
              placeholder="Artist Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-genre"
            >
              genre
            </label>
            <div className="relative">
              <select
                name="genre"
                onChange={handleInput}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-genre"
              >
                {genres.map((genre) => (
                  <option key={genre.value} value={genre.value}>
                    {genre.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-image"
          >
            Image
          </label>
          <div className="flex items-center space-x-6 bg-gray-200 py-3 px-4 rounded my-3">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src={image ? URL.createObjectURL(image) : "/images/default.png"}
                alt="song photo"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                name="audio"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  handleInput(e);
                }}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
            </label>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-image"
          >
            Song
          </label>
          <div className="flex items-center space-x-6 bg-gray-200 py-3 px-4 rounded my-3">
            <label className="block">
              <span className="sr-only">Choose Song</span>
              <input
                type="file"
                required
                name="audio"
                onChange={handleInput}
                accept="audio/mp3, audio/wav, audio/aac"
                placeholder="Upload Song"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
            </label>
          </div>
        </div>

        <div>
          {loading ? (
            <div
              className="align-center w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              role="status"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <input
              type="button"
              onClick={submitQuery}
              className="align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Submit"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default AddSong;
