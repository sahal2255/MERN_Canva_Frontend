// src/components/TemplateList.js
import React from 'react';
import Card from '../components/Card';

const TemplateList = () => {
  const templates = [
    { id: 1, title: 'Social Media Post', image: '/images/social-media.jpg', description: 'Create stunning social media posts.' },
    { id: 2, title: 'Business Card', image: '/images/business-card.jpg', description: 'Professional business card templates.' },
    { id: 3, title: 'Presentation', image: '/images/presentation.jpg', description: 'Engaging presentation templates.' },
    // Add more templates as needed
  ];

  const handleTemplateClick = (template) => {
    console.log(`Template clicked: ${template.title}`);
    // You can navigate to a detailed editor or template view here
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {templates.map((template) => (
        <Card
          key={template.id}
          title={template.title}
          image={template.image}
          description={template.description}
          onClick={() => handleTemplateClick(template)}
        />
      ))}
    </div>
  );
};

export default TemplateList;
