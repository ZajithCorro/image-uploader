import React, { useState } from 'react';

import './styles.css';

function App() {
  const [image, setImage] = useState({});

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    let files = e.dataTransfer.files[0];
    handleFile(files);
  };

  const handleFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage({ src: reader.result });
    };
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <span>Texto</span>
      {image && <img src={image.src}></img>}
    </div>
  );
}

export default App;
