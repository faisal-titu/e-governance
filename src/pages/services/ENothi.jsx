// src/pages/services/ENothi.jsx
import { useState } from 'react';
import { FileText, Upload, Download, Search, CheckCircle, Clock, Users, BarChart, Shield } from 'lucide-react';

const ENothi = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const features = [
    {
      title: 'ডিজিটাল নথি ব্যবস্থাপনা',
      description: 'কাগজবিহীন নথি ব্যবস্থাপনা ব্যবস্থা যা দপ্তরগুলোকে আরও দক্ষ করে তোলে',
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      title: 'স্বচ্ছতা ও জবাবদিহিতা',
      description: 'নথির অবস্থা ট্র্যাকিং এবং সঠিক সময়ে কাজ সম্পন্ন করার নিশ্চয়তা',
      icon: <Shield className="text-green-600" size={24} />
    },
    {
      title: 'দ্রুত ডিসিশন মেকিং',
      description: 'ডিজিটাল অনুমোদন প্রক্রিয়া যা সিদ্ধান্ত গ্রহণকে ত্বরান্বিত করে',
      icon: <CheckCircle className="text-yellow-600" size={24} />
    },
    {
      title: 'সহজ অ্যাক্সেস',
      description: 'যেকোনো সময়, যেকোনো স্থান থেকে নথি অ্যাক্সেস এবং কাজ করার সুবিধা',
      icon: <Users className="text-purple-600" size={24} />
    }
  ];

  const benefits = [
    {
      title: 'সময় সাশ্রয়',
      description: 'ফাইল আদান-প্রদানের সময় কমিয়ে দ্রুত সেবা প্রদান',
      icon: <Clock className="text-blue-600" size={24} />
    },
    {
      title: 'খরচ হ্রাস',
      description: 'কাগজ, কালি, মুদ্রণ এবং সংরক্ষণ ব্যয় হ্রাস',
      icon: <BarChart className="text-green-600" size={24} />
    },
    {
      title: 'নিরাপত্তা',
      description: 'ডিজিটাল স্বাক্ষর এবং এনক্রিপশনের মাধ্যমে নথির নিরাপত্তা নিশ্চিত',
      icon: <Shield className="text-red-600" size={24} />
    },
    {
      title: 'দক্ষতা বৃদ্ধি',
      description: 'স্বয়ংক্রিয় প্রক্রিয়ার মাধ্যমে কর্মীদের কার্যকারিতা বৃদ্ধি',
      icon: <Users className="text-indigo-600" size={24} />
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'নিবন্ধন',
      description: 'ই-নথি পোর্টালে নিবন্ধন করুন'
    },
    {
      step: 2,
      title: 'ড্যাশবোর্ড',
      description: 'আপনার ড্যাশবোর্ড থেকে নতুন নথি তৈরি করুন'
    },
    {
      step: 3,
      title: 'নথি আপলোড',
      description: 'প্রয়োজনীয় ডকুমেন্ট আপলোড করুন'
    },
    {
      step: 4,
      title: 'প্রেরণ',
      description: 'সঠিক বিভাগে নথি প্রেরণ করুন'
    },
    {
      step: 5,
      title: 'অনুমোদন',
      description: 'ডিজিটাল অনুমোদন প্রক্রিয়া অনুসরণ করুন'
    },
    {
      step: 6,
      title: 'সম্পন্ন',
      description: 'নথি সম্পন্ন হলে ডাউনলোড করুন'
    }
  ];

  const stats = [
    { value: '১৯,০০০+', label: 'ডিজিটাল অফিস' },
    { value: '৯৫%', label: 'কাগজবিহীন কার্যক্রম' },
    { value: '৭০%', label: 'সময় সাশ্রয়' },
    { value: '৯৮%', label: 'ব্যবহারকারী সন্তুষ্টি' }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ই-নথি (ই-ফাইলিং)</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ডিজিটাল নথি ব্যবস্থাপনা ব্যবস্থা যা ১৯,০০০+ অফিসে স্বচ্ছতা ও কাগজবিহীন কার্যক্রম নিশ্চিত করছে।
          </p>
        </div>

        {/* Hero Image */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">ডিজিটাল বাংলাদেশের অগ্রগতি</h2>
              <p className="mb-6 max-w-lg">
                ই-নথি বাংলাদেশ সরকারের ডিজিটাল নথি ব্যবস্থাপনা সিস্টেম যা সরকারি কার্যক্রমকে আরও দক্ষ, স্বচ্ছ এবং জবাবদিহিতামূলক করে তুলেছে।
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition duration-300">
                  বিস্তারিত জানুন
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                  ডেমো দেখুন
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-4 w-64">
                  <div className="h-6 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="h-96 bg-gray-100 rounded-2xl overflow-hidden">
                    <div className="h-8 bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">ই-নথি</span>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FileText className="text-blue-600" size={16} />
                        </div>
                        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Upload className="text-green-600" size={16} />
                        </div>
                        <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Download className="text-yellow-600" size={16} />
                        </div>
                        <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Search className="text-purple-600" size={16} />
                        </div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
                      <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
                      <div className="space-y-2 mb-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-10 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                      <div className="h-10 bg-blue-600 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-gray-200">
            {['overview', 'features', 'benefits', 'process'].map((tab) => (
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
                {tab === 'features' && 'বৈশিষ্ট্যসমূহ'}
                {tab === 'benefits' && 'সুবিধাসমূহ'}
                {tab === 'process' && 'প্রক্রিয়া'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ই-নথি সম্পর্কে</h2>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  ই-নথি হলো বাংলাদেশ সরকারের ডিজিটাল নথি ব্যবস্থাপনা সিস্টেম যা সরকারি কার্যক্রমকে আরও দক্ষ, স্বচ্ছ এবং জবাবদিহিতামূলক করে তুলেছে। এটি কাগজবিহীন কার্যক্রম নিশ্চিত করে এবং নাগরিকদের সেবা প্রদানে গতি আনে।
                </p>
                <p className="text-gray-600 mb-4">
                  বর্তমানে ১৯,০০০+ সরকারি অফিস ই-নথি ব্যবহার করছে যা দেশের প্রায় ৯৫% কাগজবিহীন কার্যক্রম নিশ্চিত করেছে। এর ফলে সরকারি কাজে ৭০% সময় সাশ্রয় হচ্ছে এবং ৯৮% ব্যবহারকারী সন্তুষ্টি অর্জিত হয়েছে।
                </p>
                <p className="text-gray-600">
                  ই-নথি ব্যবহারের মাধ্যমে কর্মকর্তা-কর্মচারীরা যেকোনো সময়, যেকোনো স্থান থেকে নথি অ্যাক্সেস করতে পারেন, যা কাজের গতি বাড়ায় এবং সিদ্ধান্ত গ্রহণ প্রক্রিয়া ত্বরান্বিত করে।
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">ই-নথির পরিসংখ্যান</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ই-নথির বৈশিষ্ট্যসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ই-নথির সুবিধাসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ই-নথি ব্যবহারের প্রক্রিয়া</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step) => (
                  <div key={step.step} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">ই-নথি ব্যবহার শুরু করুন</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            সরকারি কর্মকর্তা হিসেবে আপনিও ই-নথি ব্যবহার করে আপনার কাজকে আরও দক্ষ করে তুলুন।
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              লগইন করুন
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              ট্রেনিং নিন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENothi;