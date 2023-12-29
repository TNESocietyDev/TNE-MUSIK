import React from 'react';

import { ArtistCard, Error, Loader } from '../components';
// Import the mockArtists data
import { mockArtists } from '../mockArtists';

const TopArtists = () => {
  // Replace the OpenAI query with the mockArtists data
  const data = mockArtists;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((artist) => <ArtistCard key={artist.key} artist={artist} />)}
      </div>
    </div>
  );
};

export default TopArtists;
