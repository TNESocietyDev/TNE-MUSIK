import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
// Import the mockSongsAroundYou data
import { mockSongsAroundYou } from '../mockSongsAroundYou';

const CountryTracks = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // Replace the external API call with mock data
  const data = mockSongsAroundYou;

  useEffect(() => {
    // Mocking the asynchronous behavior of fetching user's country
    setTimeout(() => {
      setCountry('Your Country'); // Set a default country or provide mock data
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader title="Loading Songs around you..." />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{country}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
