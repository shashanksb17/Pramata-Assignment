import React, { useState } from 'react';
import './AddAlbumPage.css'; // Import your CSS file
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function CreateAlbumPage() {
    const [albumTitle, setAlbumTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [albums, setAlbums] = useState([]); // State to store albums
  
    const handleAlbumTitleChange = (e) => {
      setAlbumTitle(e.target.value);
    };
  
    const handleImgUrlChange = (e) => {
      setImgUrl(e.target.value);
    };
  
    const handleImageSelect = () => {
      setSelectedImages([...selectedImages, imgUrl]);
      setImgUrl('');
    };
  
    const handleCreateAlbum = async () => {
      try {
        const response = await fetch('https://album-app.onrender.com/album/albums', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: albumTitle,
            coverImage: selectedImages[0], // Assuming the first selected image is the cover image
          }),
        });
  
        if (!response.ok) {
          const responseData = await response.json();
          throw new Error(responseData.error || 'Failed to create album');
        }
  
        // If the response is successful, update the albums state with the newly created album
        const newAlbum = await response.json();
        setAlbums([...albums, newAlbum]);
        MySwal.fire(
            'Album added Successfully',
            'Please click the button!',
            'success'
          )
        // Clear the form fields
        setAlbumTitle('');
        setSelectedImages([]);
      } catch (error) {
        console.error('Create album error:', error);
  
        // Display error message using SweetAlert2
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message || 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    };

  // JSX component rendering
  return (
    <div className="create-album-container">
      <h1>Create Album</h1>
      <input
        type="text"
        placeholder="Album Title"
        value={albumTitle}
        onChange={handleAlbumTitleChange}
      />
      <div className="img-input-container">
        <input
          type="url"
          placeholder="Image URL"
          value={imgUrl}
          onChange={handleImgUrlChange}
        />
        <button className="add-img-button" onClick={handleImageSelect}>
          Add Image
        </button>
      </div>
      <div className="selected-images">
        {selectedImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
      </div>
      <button className="create-album-button" onClick={handleCreateAlbum}>
        Create Album
      </button>
    </div>
  );
}

export default CreateAlbumPage;
