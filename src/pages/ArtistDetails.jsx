import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
// Import the mockArtistDetails data
import { mockArtistDetails } from '../mockArtistDetails';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  
  // Replace the OpenAI query with the mockArtistDetails data
  const artistData = mockArtistDetails;

  if (!artistData) {
    // Show loader if mockArtistDetails is not available
    return <Loader title="Loading artist details..." />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData?.data[0]}
      />

      <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
