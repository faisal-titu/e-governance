import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/serviceData';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">সেবা পাওয়া যায়নি</h1>
            <p className="text-gray-600 mb-8">আপনি যে সেবাটি খুঁজছেন সেটি পাওয়া যায়নি।</p>
            <Link to="/services" className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition">
              সেবার তালিকায় ফিরে যান
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/services" className="text-red-600 hover:text-red-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            সেবার তালিকায় ফিরে যান
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8">
            <div className="flex items-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center text-4xl mr-6">
                {service.icon}
              </div>
              <h1 className="text-3xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl opacity-90">{service.description}</p>
          </div>
          
          <div className="p-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">সারসংক্ষেপ</h2>
              <p className="text-gray-700 leading-relaxed">{service.details.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">প্রক্রিয়া</h2>
                <ol className="space-y-3">
                  {service.details.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">প্রয়োজনীয় ডকুমেন্টস</h2>
                <ul className="space-y-2">
                  {service.details.requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">সুবিধা</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.benefits.map((benefit, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-4 flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;