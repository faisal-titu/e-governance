import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { policiesData } from '../data/policiesData';

const PolicyDetails = () => {
  const { id } = useParams();
  const policy = policiesData.find(p => p.id === parseInt(id));
  
  if (!policy) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">নীতিমালা পাওয়া যায়নি</h1>
            <p className="text-gray-600 mb-8">আপনি যে নীতিমালাটি খুঁজছেন সেটি পাওয়া যায়নি।</p>
            <Link to="/policies" className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition">
              নীতিমালার তালিকায় ফিরে যান
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
          <Link to="/policies" className="text-red-600 hover:text-red-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            নীতিমালার তালিকায় ফিরে যান
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{policy.title}</h1>
              <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                {policy.date}
              </span>
            </div>
            <p className="mt-4 text-xl opacity-90">{policy.description}</p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">সারসংক্ষেপ</h2>
              <p className="text-gray-700 leading-relaxed">{policy.details.overview}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">উদ্দেশ্য</h2>
                <ul className="space-y-2">
                  {policy.details.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {policy.details.keyProvisions && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">মূল বিধানসমূহ</h2>
                  <ul className="space-y-2">
                    {policy.details.keyProvisions.map((provision, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{provision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {policy.details.penalties && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">শাস্তির বিধান</h2>
                <ul className="space-y-2">
                  {policy.details.penalties.map((penalty, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{penalty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {policy.details.implementation && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">বাস্তবায়ন</h2>
                <ul className="space-y-2">
                  {policy.details.implementation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;