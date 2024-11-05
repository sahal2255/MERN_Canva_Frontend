// src/components/Card.js
import React from 'react';

const Card = ({ title, image, description, onClick }) => {
  return (
    <div className="bg-gray-700 w-[30vh] h-[20vh] p-4 rounded-lg shadow-md">
      <h1 className="text-white text-lg font-semibold mb-2">{title}</h1>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
