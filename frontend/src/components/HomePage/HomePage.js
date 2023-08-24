// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Fetch and map albums to generate album tiles
  // Each album tile should link to the respective album page
  return (
    <div>
      <h1>Albums</h1>
      {/* Map through albums */}
      <div>
        <Link to="/album/albumId1">
          <img src="albumCover1.jpg" alt="Album 1" />
          <h2>Album Title 1</h2>
        </Link>
      </div>
      {/* Repeat for other albums */}
    </div>
  );
}

export default HomePage;
