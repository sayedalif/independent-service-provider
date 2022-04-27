import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
      <div>
        <h2 className="text-success text-center">
          The page you are looking for is not available
        </h2>
        <img className="w-25 h-25 mx-auto d-block" src={sleeping} alt="" />
      </div>
    );
};

export default NotFound;