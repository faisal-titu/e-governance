import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-red-300 hover:shadow-lg h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 text-red-600 w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{service.description}</p>
      </div>
      <div className="px-6 pb-6">
        <Link 
          to={`/service/${service.id}`} 
          className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition"
        >
          বিস্তারিত জানুন
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;