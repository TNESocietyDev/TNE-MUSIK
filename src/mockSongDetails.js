// mockSongDetails.js
export const mockSongDetails = {
  sections: [
    {
      type: 'ARTIST_BIO',
      title: 'Artist Biography',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        // Add more lines as needed
      ],
    },
    {
      type: 'LYRICS',
      title: 'Song Lyrics',
      text: [
        'Oh, the weather outside is frightful,',
        'But the fire is so delightful.',
        'And since we\'ve no place to go,',
        'Let it snow, let it snow, let it snow!',
        // Add more lines as needed
      ],
    },
    // Add more sections as needed
  ],
  title: 'Let It Snow',
  artists: ['Frank Sinatra'],
  genre: 'Jazz',
  releaseDate: '1959-11-01',
  image: '/images/img3.jpg'
  // Add more song details properties
};
