import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file

function HomePage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Make a GET request to the API to fetch albums
    fetch('https://album-app.onrender.com/album/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.error('Error fetching albums:', error));
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <div className="album-grid">
        {albums.map(album => (
          <div key={album._id} className="album-card">
            <Link to={`/album/${album._id}`} className="card-link">
              <div className="card-content">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${album.coverImage})` }}
                />
                <h2 className="card-title">{album.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
