import React from 'react';

import Picture from '../images/picture.svg';

export default function Card() {
  return (
    <div className='card'>
      <h1>Upload your image</h1>
      <h2>File should be JPG or PNG</h2>

      <div class='drag'>
        <img src={Picture} alt='Background' />
        <span>Drag & Drop your image here</span>
      </div>

      <span className='or'>Or</span>

      <button className='button'>Choose a file</button>
    </div>
  );
}
