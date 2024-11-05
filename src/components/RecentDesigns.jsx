// src/components/RecentDesigns.js
import React from 'react';
import Card from './Card';

const RecentDesigns = () => {
  // Example data for cards
  const designs = [
    { title: 'Design 1', description: 'This is the first design.' },
    { title: 'Design 2', description: 'This is the second design.' },
    { title: 'Design 3', description: 'This is the third design.' },
    { title: 'Design 3', description: 'This is the third design.' },
    { title: 'Design 3', description: 'This is the third design.' },


  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-5">
      {designs.map((design, index) => (
        <Card key={index} title={design.title} description={design.description} />
      ))}
    </div>
  );
};

export default RecentDesigns;
