import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "../src/components/Navigation/Navigation";
import HomePage from '../src/components/HomePage/HomePage';
import AddAlbumPage from '../src/components/AddAlbumPage/AddAlbumPage'; 

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-album" element={<AddAlbumPage />} />
          {/* Define other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
