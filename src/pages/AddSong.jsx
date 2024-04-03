import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import n from 'near-api-js'

import { genres } from "../assets/constants";
import axios from "axios";

import fs from "fs";

function AddSong() {
  const [image, setImage] = useState("");

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  function manipulate() {
    console.log(fs.readFileSync);
    axios
      .post("/data.json", {
        id: 5,
        name: "Item 5",
      })
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      });
  }

  function submitQuery() {
    console.log("Done");
  }

  return (
    <div className="flex flex-col">
      {/* <button
        className="align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={manipulate}
      >
        Click Here
      </button> */}
      <h1 className="font-bold text-3xl text-white text-left">Add Song</h1>
      <form className="pt-10 w-full max-w-lg" onSubmit={submitQuery}>
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-song-name"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" //  border-red-500
            id="grid-song-name"
            type="text"
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
            for="grid-subtitle"
          >
            Subtitle
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-subtitle"
            type="text"
            placeholder="Subtitle"
          />
        </div>

        <div class="flex flex-wrap -mx-3 mb-3 pt-5">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              for="grid-artist"
            >
              artist
            </label>
            <input
              required
              class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-artist"
              type="text"
              placeholder="Artist Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              for="grid-genre"
            >
              genre
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-genre"
              >
                {genres.map((genre) => (
                  <option key={genre.value} value={genre.value}>
                    {genre.title}
                  </option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-2xl mx-auto">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-image"
          >
            Image
          </label>
          <div className="flex items-center space-x-6 bg-gray-200 py-3 px-4 rounded my-3">
            <div class="shrink-0">
              <img
                class="h-16 w-16 object-cover rounded-full"
                src={image ? URL.createObjectURL(image) : "/images/default.png"}
                alt="song photo"
              />
            </div>
            <label class="block">
              <span class="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
            </label>
          </div>
        </div>

        <div class="max-w-2xl mx-auto">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-image"
          >
            Song
          </label>
          <div className="flex items-center space-x-6 bg-gray-200 py-3 px-4 rounded my-3">
            <label class="block">
              <span class="sr-only">Choose Song</span>
              <input
                type="file"
                required
                accept="audio/mp3, audio/wav, audio/aac"
                placeholder="Upload Song"
                class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          class="align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default AddSong;
