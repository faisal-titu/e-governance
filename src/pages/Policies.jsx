import React from 'react';
import PolicyCard from '../components/PolicyCard';
import { policiesData } from '../data/policiesData';

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ডিজিটাল নীতিমালা ও আইন</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            বাংলাদেশের ইন্টারনেট গভর্নেন্স ও ডিজিটাল পলিসি সম্পর্কিত গুরুত্বপূর্ণ নীতিমালা ও আইনের তালিকা নিচে দেওয়া হলো।
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policiesData.map(policy => (
            <PolicyCard key={policy.id} policy={policy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policies;