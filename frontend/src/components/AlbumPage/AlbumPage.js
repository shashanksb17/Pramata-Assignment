import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './AlbumPage.css'; 
import { Carousel } from 'react-responsive-carousel';


function AlbumPage() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(`https://album-app.onrender.com/album/albums/${albumId}/photos`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, [albumId]);

  const handleAddImage = async () => {
    try {
      const response = await fetch('https://album-app.onrender.com/album/photos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          imageUrl: imageUrl,
          albumId: albumId,
        }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to add image');
      }

      const newPhoto = await response.json();
      setPhotos([...photos, newPhoto]);
      setTitle('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding photo:', error);
    }
  };

  return (
    <div className="album-page-container">
      <h2>Add Image to Album</h2>
      <div className="add-image-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>

      <div className="image-grid">
        {photos.map(photo => (
          <div key={photo._id} className="image-card">
            <Link to={`/comments/${photo._id}`}>
              <img src={photo.imageUrl} alt={photo.title} />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AlbumPage;
