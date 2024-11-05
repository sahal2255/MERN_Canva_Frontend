import React from 'react';
import { FiPlus } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';
const HomeBar = () => {
    const navigate=useNavigate()
    const handleCreateDesign=()=>{
        console.log('clicking the create design button')
        navigate('/editor')

    }
  return (
    <div className="bg-gray-800 h-[20vh] py-4 px-6 rounded-lg">
      <div className="flex items-center justify-center h-full">
        
        <button
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none transition-colors duration-300"
          onClick={handleCreateDesign}
        >
          <FiPlus className="mr-2" size={20} /> 
          Create New Design
        </button>
      </div>
    </div>
  );
};

export default HomeBar;
