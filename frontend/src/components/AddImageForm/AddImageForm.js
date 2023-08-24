// AddImageForm.js
import React, { useState } from 'react';

function AddImageForm({ albumId }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddImage = () => {
    // Handle adding image logic here
  };

  return (
    <div>
      <h2>Add Image to Album</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleAddImage}>Add Image</button>
    </div>
  );
}

export default AddImageForm;
