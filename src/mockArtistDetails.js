// mockArtistDetails.js
export const mockArtistDetails = {
    data: [
      {
        id: '1',
        name: 'Artist 1',
        // ... other artist details properties
        views: {
          'top-songs': {
            data: [
              {
                key: '1',
                title: 'Song 1',
                // ... other top song properties
              },
              {
                key: '2',
                title: 'Song 2',
                // ... other top song properties
              },
              // Add more top songs as needed
            ],
          },
        },
        id: '2',
        name: 'Artist 2',
        // ... other artist details properties
        views: {
          'top-songs': {
            data: [
              {
                key: '1',
                title: 'Song 1',
                // ... other top song properties
              },
              {
                key: '2',
                title: 'Song 2',
                // ... other top song properties
              },
              // Add more top songs as needed
            ],
          },
        },
      },
    ],
  };
  