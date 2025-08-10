// src/pages/policies/PrivacyPolicy.jsx
import { useState } from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const principles = [
    {
      title: 'স্বচ্ছতা',
      description: 'আমরা আপনার তথ্য কীভাবে সংগ্রহ, ব্যবহার এবং ভাগাভাগি করা হয় তা স্পষ্টভাবে জানাই।',
      icon: <Eye className="text-blue-600" size={24} />
    },
    {
      title: 'সীমাবদ্ধতা',
      description: 'আমরা শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করি এবং সেগুলো সীমিত উদ্দেশ্যে ব্যবহার করি।',
      icon: <Lock className="text-green-600" size={24} />
    },
    {
      title: 'নিরাপত্তা',
      description: 'আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে যথেষ্ট নিরাপত্তা ব্যবস্থা গ্রহণ করেছি।',
      icon: <Shield className="text-yellow-600" size={24} />
    },
    {
      title: 'সম্মতি',
      description: 'আমরা আপনার তথ্য ব্যবহারের জন্য আপনার সম্মতি নিই।',
      icon: <FileText className="text-purple-600" size={24} />
    }
  ];

  const dataCollection = [
    {
      title: 'ব্যক্তিগত তথ্য',
      description: 'নাম, ঠিকানা, ফোন নম্বর, ইমেইল ইত্যাদি ব্যক্তিগত তথ্য।',
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      title: 'ব্যবহারের তথ্য',
      description: 'আপনি কীভাবে আমাদের সেবা ব্যবহার করেন তার তথ্য।',
      icon: <Eye className="text-green-600" size={24} />
    },
    {
      title: 'ডিভাইসের তথ্য',
      description: 'আপনার ডিভাইসের ধরন, অপারেটিং সিস্টেম, আইপি ঠিকানা ইত্যাদি।',
      icon: <Shield className="text-yellow-600" size={24} />
    },
    {
      title: 'কুকিজ',
      description: 'আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করা হয়।',
      icon: <Lock className="text-purple-600" size={24} />
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">গোপনীয়তা নীতি</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। আমাদের গোপনীয়তা নীতি জেনে নিন যা আপনার তথ্য কীভাবে সংগ্রহ, ব্যবহার এবং সুরক্ষিত করা হয় তা ব্যাখ্যা করে।
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-gray-200">
            {['overview', 'principles', 'data-collection'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'overview' && 'ওভারভিউ'}
                {tab === 'principles' && 'মূলনীতিসমূহ'}
                {tab === 'data-collection' && 'তথ্য সংগ্রহ'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">গোপনীয়তা নীতি সম্পর্কে</h2>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  ই-গভর্নেন্স বিডি আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। আমরা আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষার ক্ষেত্রে সর্বোচ্চ মান বজায় রাখি।
                </p>
                <p className="text-gray-600 mb-4">
                  এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আমরা কীভাবে আপনার তথ্য সংগ্রহ করি, ব্যবহার করি, ভাগাভাগি করি এবং সুরক্ষিত রাখি। এই নীতি আমাদের সকল সেবা এবং প্ল্যাটফর্মের ক্ষেত্রে প্রযোজ্য।
                </p>
                <p className="text-gray-600">
                  আমাদের সেবা ব্যবহার করে আপনি এই গোপনীয়তা নীতি মেনে চলতে সম্মত হন। আপনি যদি এই নীতির সাথে একমত না হন, তাহলে দয়া করে আমাদের সেবা ব্যবহার করবেন না।
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">আপনার অধিকারসমূহ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">তথ্য অ্যাক্সেস</h4>
                  </div>
                  <p className="text-gray-600">আপনি আপনার ব্যক্তিগত তথ্য অ্যাক্সেস করার অধিকার রাখেন।</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">তথ্য সংশোধন</h4>
                  </div>
                  <p className="text-gray-600">আপনি আপনার ভুল তথ্য সংশোধন করার অধিকার রাখেন।</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">তথ্য মুছে ফেলা</h4>
                  </div>
                  <p className="text-gray-600">আপনি আপনার তথ্য মুছে ফেলার অধিকার রাখেন।</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">অভিযোগ দাখিল</h4>
                  </div>
                  <p className="text-gray-600">আপনি আপনার তথ্য লঙ্ঘনের বিরুদ্ধে অভিযোগ দাখিল করার অধিকার রাখেন।</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'principles' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">মূলনীতিসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {principle.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{principle.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'data-collection' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">তথ্য সংগ্রহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dataCollection.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 rounded-xl shadow-md p-6 mt-8">
                <div className="flex items-start">
                  <AlertCircle className="text-yellow-600 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">গুরুত্বপূর্ণ নোটিশ</h3>
                    <p className="text-gray-600">
                      আমরা আপনার তথ্য শুধুমাত্র আইনি উদ্দেশ্যে এবং আমাদের সেবা উন্নত করার জন্য ব্যবহার করি। আমরা আপনার তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">প্রশ্ন আছে?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            আপনার গোপনীয়তা সংক্রান্ত কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;