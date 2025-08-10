import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/serviceData';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">আমাদের সেবাসমূহ</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            বাংলাদেশ সরকার কর্তৃক প্রদত্ত বিভিন্ন ই-সেবার তালিকা নিচে দেওয়া হলো। এই সেবাগুলো অনলাইনে গ্রহণ করা যায়।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;