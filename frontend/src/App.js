import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import AddAlbumPage from './components/AddAlbumPage/AddAlbumPage';
import LoginPage from './components/LoginPage/LoginPage'; 
import SignupPage from './components/SignupPage/SignupPage'; 
import AlbumPage from './components/AlbumPage/AlbumPage'; 
import CommentFormPage from './components/CommentFormPage/CommentFormPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-album" element={<AddAlbumPage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/album/:albumId" element={<AlbumPage/>} />
          <Route path="/comments/:photoId" element={<CommentFormPage/>} />
          
          {/* Define other routes */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
