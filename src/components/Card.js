import React, { useRef, useState } from 'react';

import Picture from '../images/picture.svg';
import { handleFile } from '../utilities/image';

export default function Card({ setImage }) {
  const [error, setError] = useState(undefined);
  const [classDrag, setClassDrag] = useState('drag');
  const [imagePreview, setImagePreview] = useState(undefined);

  const inputFile = useRef();

  const handleClick = () => {
    inputFile.current.click();
  };

  const handleInputFile = (event) => {
    const { files } = event.target;

    if (files[0].type !== 'image/png' && files[0].type !== 'image/jpeg') {
      setError(
        'Just images with jpg, jpeg and png extensions are able to upload'
      );
      setImage(undefined);
    } else {
      setError('');
      handleFile(files[0], setImage, setImagePreview);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setClassDrag('drag');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setClassDrag('drag active');
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setClassDrag('drag');

    let files = e.dataTransfer.files[0];

    if (files.type !== 'image/png' && files.type !== 'image/jpeg') {
      setError(
        'Just images with jpg, jpeg and png extensions are able to upload'
      );
      setImage(undefined);
    } else {
      setError('');
      handleFile(files, setImage, setImagePreview);
    }
  };

  return (
    <div className='card'>
      <h1>Upload your image</h1>
      <h2>File should be JPG or PNG</h2>

      <div
        className={classDrag}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <img className='image-preview' src={imagePreview} alt='Preview' />
        ) : (
          <>
            <img src={Picture} alt='Background' className='drag-background' />
            <span>Drag & Drop your image here</span>
          </>
        )}
      </div>

      <span className='or'>Or</span>

      <button className='button' onClick={handleClick}>
        Choose a file
      </button>

      {error && <span className='error-message'>{error}</span>}

      <input
        type='file'
        name='image'
        className='input-file'
        ref={inputFile}
        onChange={handleInputFile}
      />
    </div>
  );
}
