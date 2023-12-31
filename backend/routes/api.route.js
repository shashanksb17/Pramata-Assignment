const express = require('express');
const router = express.Router();

//local modules
const Album = require('../models/album.model');
const Photo = require('../models/photo.model');
const Comment = require('../models/comment.model');
const verifyToken =require("../routes/token.verify")

// Create a new album
router.post('/albums', async (req, res) => {
    const { title, coverImage } = req.body;
    
    try {
      const album = await Album.create({
        title: title,
        coverImage: coverImage,
      });
      
      res.status(201).json(album);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Get all albums
router.get('/albums', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new photo
router.post('/photos', async (req, res) => {
    try {
      const { title, imageUrl, albumId } = req.body; // Destructure data from req.body
  
      // Create a new photo using the data
      const newPhoto = await Photo.create({
        title: title,
        imageUrl: imageUrl,
        albumId: albumId,
      });
  
      res.status(201).json(newPhoto); // Return the newly created photo
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Get all photos in an album
router.get('/albums/:albumId/photos', async (req, res) => {
  try {
    const photos = await Photo.find({ albumId: req.params.albumId });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a comment to a photo
router.post('/comments', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get comments for a photo
router.get('/photos/:photoId/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ photoId: req.params.photoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
