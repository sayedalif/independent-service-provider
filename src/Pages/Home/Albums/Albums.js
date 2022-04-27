import React from 'react';

import album1 from '../../../images/albums/album-1.jpg';
import album2 from '../../../images/albums/album-2.jpg';
import album3 from '../../../images/albums/album-3.jpg';
import album4 from '../../../images/albums/album-4.jpg';
import album5 from '../../../images/albums/album-5.jpg';
import album6 from '../../../images/albums/album-6.jpg';
import album from '../album/album';

const albums = [
  { id: 1, name: 'Eagle', img: album1 },
  { id: 2, name: 'Turtle', img: album2 },
  { id: 3, name: 'Kingfisher', img: album3 },
  { id: 4, name: 'Cairns', img: album4 },
  { id: 5, name: 'Fox', img: album5 },
  { id: 6, name: 'Nemo', img: album6 },
];

const Albums = () => {
  return (
    <div id="album" className="container">
      <h2 className="text-success text-center mt-5">Album</h2>
      <div className="row">
        {albums.map((album) => (
          <album key={album.id} album={album}></album>
        ))}
      </div>
    </div>
  );
};

export default albums;
