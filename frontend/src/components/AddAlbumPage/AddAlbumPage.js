// AddAlbumPage.js
import React, { useState } from 'react';

function AddAlbumPage() {
  const [albumTitle, setAlbumTitle] = useState('');

  const handleAddAlbum = () => {
    // Handle adding album logic
  };

  return (
    <div>
      <h1>Add Album</h1>
      <input
        type="text"
        placeholder="Album Title"
        value={albumTitle}
        onChange={(e) => setAlbumTitle(e.target.value)}
      />
      <button onClick={handleAddAlbum}>Add Album</button>
    </div>
  );
}

export default AddAlbumPage;
