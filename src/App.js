import React, { useState, useEffect } from 'react';
import UploadNovelForm from './UploadNovelForm';
import './App.css';
function App() {
  const [novels, setNovels] = useState([]);
  const [view, setView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedNovels = JSON.parse(localStorage.getItem('novels')) || [];
    setNovels(savedNovels);
  }, []);

  // Add a new novel
  const addNovel = (novel) => {
    const updatedNovels = [...novels, novel];
    setNovels(updatedNovels);
    localStorage.setItem('novels', JSON.stringify(updatedNovels));
    setView('home');
  };

  // Remove a novel by index
  const removeNovel = (indexToRemove) => {
    const updatedNovels = novels.filter((_, index) => index !== indexToRemove);
    setNovels(updatedNovels);
    localStorage.setItem('novels', JSON.stringify(updatedNovels));
  };


  const filteredNovels = novels.filter((novel) =>
    novel.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 id="title">  StoryMosaic</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a novel..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </nav>

      {/* Main Container */}
      <div className="container">
        {/* Show Home or Upload Form based on view */}
        {view === 'home' && (
          <>
            <div className="novel-grid">
              {filteredNovels.length > 0 ? (
                filteredNovels.map((novel, index) => (
                  <div key={index} className="novel-card">
                    <img src={novel.imageUrl} alt={novel.title} className="novel-img" />
                    <div className="novel-info">
                      <h2>{novel.title}</h2>
                      <p><strong>Author:</strong> {novel.author}</p>
                      <p><strong>Genre:</strong> {novel.genre}</p>
                    </div>
                    {/* Delete Button */}
                    <button onClick={() => removeNovel(index)} className="delete-button">
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No novels found</p>
              )}
              <br></br>
            </div>

            <br></br>
            <br></br>
            <button className="upload-button" onClick={() => setView('upload')}>
              Upload a Novel
            </button>
          </>
        )}

      

        {/* Show Upload Form */}
        {view === 'upload' && (
          <div className="upload-form-container">
            <UploadNovelForm addNovel={addNovel} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
