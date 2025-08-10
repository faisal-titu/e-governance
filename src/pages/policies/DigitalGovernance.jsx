// src/pages/policies/DigitalGovernance.jsx
import { useState } from 'react';
import { FileText, Shield, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const DigitalGovernance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const principles = [
    {
      title: 'স্বচ্ছতা',
      description: 'সরকারি কার্যক্রমের স্বচ্ছতা নিশ্চিত করা এবং নাগরিকদের তথ্য প্রাপ্তির অধিকার সুরক্ষিত করা।',
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      title: 'জবাবদিহিতা',
      description: 'সরকারি কর্মকর্তা-কর্মচারীদের কার্যক্রমের জন্য জবাবদিহিতা নিশ্চিত করা।',
      icon: <Shield className="text-green-600" size={24} />
    },
    {
      title: 'অংশগ্রহণ',
      description: 'নাগরিকদের সরকারি সিদ্ধান্ত প্রক্রিয়ায় অংশগ্রহণের সুযোগ প্রদান করা।',
  icon: <Users className="text-green-600" size={24} />
    },
    {
      title: 'দক্ষতা',
      description: 'ডিজিটাল প্রযুক্তি ব্যবহার করে সরকারি সেবা প্রদান প্রক্রিয়াকে আরও দক্ষ করে তোলা।',
      icon: <Globe className="text-purple-600" size={24} />
    }
  ];

  const initiatives = [
    {
      title: 'জাতীয় পোর্টাল',
      description: 'সকল সরকারি সেবা একক প্ল্যাটফর্মে প্রদান করা।',
      status: 'সম্পন্ন'
    },
    {
      title: 'ই-নথি',
      description: 'ডিজিটাল নথি ব্যবস্থাপনা ব্যবস্থা চালু করা।',
      status: 'সম্পন্ন'
    },
    {
      title: 'ই-টেন্ডার',
      description: 'সরকারি ক্রয় প্রক্রিয়া ডিজিটালাইজ করা।',
      status: 'চলমান'
    },
    {
      title: 'ই-পেমেন্ট',
      description: 'সরকারি সেবার ফি অনলাইনে পরিশোধের ব্যবস্থা করা।',
      status: 'চলমান'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ডিজিটাল গভর্নেন্স নীতি</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            বাংলাদেশ সরকারের ডিজিটাল গভর্নেন্স নীতি যা সরকারি সেবা প্রদানকে আরও দক্ষ, স্বচ্ছ এবং জবাবদিহিতামূলক করে তুলছে।
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-gray-200">
            {['overview', 'principles', 'initiatives'].map((tab) => (
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
                {tab === 'initiatives' && 'উদ্যোগসমূহ'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ডিজিটাল গভর্নেন্স সম্পর্কে</h2>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  ডিজিটাল গভর্নেন্স হলো তথ্য ও যোগাযোগ প্রযুক্তি ব্যবহার করে সরকারি সেবা প্রদান, সিদ্ধান্ত গ্রহণ এবং নাগরিকদের সাথে যোগাযোগের প্রক্রিয়াকে আরও দক্ষ ও কার্যকর করার একটি পদ্ধতি।
                </p>
                <p className="text-gray-600 mb-4">
                  বাংলাদেশ সরকার ডিজিটাল বাংলাদেশ গড়ার লক্ষ্যে ডিজিটাল গভর্নেন্স নীতি প্রণয়ন করেছে যা সরকারি সেবা প্রদানকে আরও দক্ষ, স্বচ্ছ এবং জবাবদিহিতামূলক করে তুলছে।
                </p>
                <p className="text-gray-600">
                  এই নীতির অধীনে বিভিন্ন ডিজিটাল উদ্যোগ গ্রহণ করা হয়েছে যা নাগরিকদের জীবনকে সহজ করেছে এবং সরকারি কার্যক্রমকে আরও দক্ষ করেছে।
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">লক্ষ্যসমূহ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">স্বচ্ছতা বৃদ্ধি</h4>
                  </div>
                  <p className="text-gray-600">সরকারি কার্যক্রমের স্বচ্ছতা বৃদ্ধি করা এবং নাগরিকদের তথ্য প্রাপ্তির অধিকার সুরক্ষিত করা।</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">দক্ষতা বৃদ্ধি</h4>
                  </div>
                  <p className="text-gray-600">ডিজিটাল প্রযুক্তি ব্যবহার করে সরকারি সেবা প্রদান প্রক্রিয়াকে আরও দক্ষ করে তোলা।</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">জবাবদিহিতা</h4>
                  </div>
                  <p className="text-gray-600">সরকারি কর্মকর্তা-কর্মচারীদের কার্যক্রমের জন্য জবাবদিহিতা নিশ্চিত করা।</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <h4 className="font-bold text-gray-800">অংশগ্রহণ</h4>
                  </div>
                  <p className="text-gray-600">নাগরিকদের সরকারি সিদ্ধান্ত প্রক্রিয়ায় অংশগ্রহণের সুযোগ প্রদান করা।</p>
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

          {activeTab === 'initiatives' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">উদ্যোগসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initiatives.map((initiative, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-800">{initiative.title}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        initiative.status === 'সম্পন্ন' ? 'bg-green-100 text-green-800' : 'bg-green-50 text-green-700'
                      }`}>
                        {initiative.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      বিস্তারিত জানুন <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">ডিজিটাল বাংলাদেশ গড়ার অংশীদার হন</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            ডিজিটাল গভর্নেন্স নীতি বাস্তবায়নে আমাদের সাথে যোগ দিন এবং ডিজিটাল বাংলাদেশ গড়ার অংশীদার হন।
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            আরও জানুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalGovernance;