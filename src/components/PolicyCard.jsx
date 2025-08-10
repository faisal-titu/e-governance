import React from 'react';
import { Link } from 'react-router-dom';

const PolicyCard = ({ policy }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-red-300 hover:shadow-lg h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{policy.title}</h3>
          <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
            {policy.date}
          </span>
        </div>
        <p className="text-gray-600">{policy.description}</p>
      </div>
      <div className="px-6 pb-6">
        <Link 
          to={`/policy/${policy.id}`} 
          className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition"
        >
          আরও পড়ুন
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PolicyCard;