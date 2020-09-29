import React, { useState } from 'react';
import Card from './components/Card';

import './globalStyles.css';

export default function Uploader() {
  const [image, setImage] = useState(undefined);

  return (
    <main>
      <Card setImage={setImage} />
    </main>
  );
}
