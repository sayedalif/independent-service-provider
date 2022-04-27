import React from 'react';

import expert1 from '../../../images/albums/album-1.jpg';
import expert2 from '../../../images/albums/album-2.jpg';
import expert3 from '../../../images/albums/album-3.jpg';
import expert4 from '../../../images/albums/album-4.jpg';
import expert5 from '../../../images/albums/album-5.jpg';
import expert6 from '../../../images/albums/album-6.jpg';
import Expert from '../Expert/Expert';

const experts = [
  { id: 1, name: 'Eagle', img: expert1 },
  { id: 2, name: 'Turtle', img: expert2 },
  { id: 3, name: 'Kingfisher', img: expert3 },
  { id: 4, name: 'Cairns', img: expert4 },
  { id: 5, name: 'Fox', img: expert5 },
  { id: 6, name: 'Nemo', img: expert6 },
];

const Experts = () => {
  return (
    <div id="experts" className="container">
      <h2 className="text-primary text-center mt-5">Album</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
