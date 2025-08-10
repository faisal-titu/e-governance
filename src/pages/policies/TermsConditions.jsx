// src/pages/policies/TermsConditions.jsx
import { useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Shield, Users, Globe } from 'lucide-react';

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const terms = [
    {
      title: 'সেবার ব্যবহার',
      description: 'আপনি আমাদের সেবা শুধুমাত্র আইনি উদ্দেশ্যে ব্যবহার করবেন। আপনি আমাদের সেবা ব্যবহার করে কোনো অবৈধ কার্যকলাপ করবেন না।',
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      title: 'অ্যাকাউন্টের দায়িত্ব',
      description: 'আপনার অ্যাকাউন্টের নিরাপত্তা এবং গোপনীয়তার জন্য আপনি দায়ী থাকবেন। আপনার অ্যাকাউন্টের সকল কার্যকলাপের জন্য আপনি দায়ী থাকবেন।',
      icon: <Shield className="text-green-600" size={24} />
    },
    {
      title: 'বুদ্ধিবৃত্তিক সম্পত্তি',
      description: 'আমাদের সেবা এবং কন্টেন্ট আমাদের বুদ্ধিবৃত্তিক সম্পত্তি। আপনি আমাদের অনুমতি ছাড়া এগুলো কপি, পরিবর্তন বা বিতরণ করতে পারবেন না।',
  icon: <Globe className="text-green-600" size={24} />
    },
    {
      title: 'দায়বদ্ধতার সীমা',
      description: 'আমাদের সেবা ব্যবহারের ফলে কোনো ক্ষতি হলে আমরা দায়ী থাকব না। আমাদের সেবা "যেমন আছে" ভিত্তিতে প্রদান করা হয়।',
      icon: <Users className="text-purple-600" size={24} />
    }
  ];

  const prohibitedActivities = [
    'অবৈধ কার্যকলাপ করা',
    'অন্যের অ্যাকাউন্টে অননুমোদিত প্রবেশ করা',
    'ভাইরাস, ম্যালওয়্যার বা অন্য ক্ষতিকর কোড প্রেরণ করা',
    'আমাদের সার্ভারের ক্ষতি করা বা ব্যাহত করা',
    'অন্য ব্যবহারকারীর তথ্য সংগ্রহ করা',
    'স্প্যাম বা অানাচিত বার্তা প্রেরণ করা'
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">শর্তাবলী</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            আমাদের সেবা ব্যবহারের শর্তাবলী জেনে নিন। আমাদের সেবা ব্যবহার করে আপনি এই শর্তাবলী মেনে চলতে সম্মত হন।
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-gray-200">
            {['overview', 'terms', 'prohibited'].map((tab) => (
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
                {tab === 'terms' && 'শর্তাবলী'}
                {tab === 'prohibited' && 'নিষিদ্ধ কার্যকলাপ'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">শর্তাবলী সম্পর্কে</h2>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  ই-গভর্নেন্স বিডি সেবা ব্যবহারের জন্য নিম্নলিখিত শর্তাবলী প্রযোজ্য। আমাদের সেবা ব্যবহার করে আপনি এই শর্তাবলী মেনে চলতে সম্মত হন।
                </p>
                <p className="text-gray-600 mb-4">
                  এই শর্তাবলী আমাদের সেবা ব্যবহারের নিয়ম এবং শর্তাবলী নির্ধারণ করে। আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার রাখি।
                </p>
                <p className="text-gray-600">
                  আমাদের সেবা ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী পড়েছেন, বুঝেছেন এবং এগুলো মেনে চলতে সম্মত হন। যদি আপনি এই শর্তাবলীর সাথে একমত না হন, তাহলে দয়া করে আমাদের সেবা ব্যবহার করবেন না।
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">গুরুত্বপূর্ণ নোটিশ</h3>
              <div className="bg-green-50 rounded-xl shadow-md p-6 mb-8">
                <div className="flex items-start">
                  <AlertCircle className="text-green-600 mr-3 mt-1" size={24} />
                  <div>
                    <p className="text-gray-600">
                      আমাদের সেবা ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী পড়েছেন, বুঝেছেন এবং এগুলো মেনে চলতে সম্মত হন। যদি আপনি এই শর্তাবলীর সাথে একমত না হন, তাহলে দয়া করে আমাদের সেবা ব্যবহার করবেন না।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">শর্তাবলী</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {terms.map((term, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {term.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{term.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{term.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'prohibited' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">নিষিদ্ধ কার্যকলাপ</h2>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <p className="text-gray-600 mb-6">
                  আমাদের সেবা ব্যবহার করার সময় নিম্নলিখিত কার্যকলাপগুলো কঠোরভাবে নিষিদ্ধ। এই নিয়ম লঙ্ঘন করলে আমরা আপনার অ্যাকাউন্ট স্থগিত বা বাতিল করার অধিকার রাখি।
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-red-600 mr-2 mt-1" size={16} />
                      <p className="text-gray-600">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 rounded-xl shadow-md p-6">
                <div className="flex items-start">
                  <AlertCircle className="text-red-600 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">গুরুত্বপূর্ণ নোটিশ</h3>
                    <p className="text-gray-600">
                      নিষিদ্ধ কার্যকলাপে জড়িত থাকলে আমরা আইনি ব্যবস্থা গ্রহণ করার অধিকার রাখি। আমাদের সেবা ব্যবহার করার সময় আপনাকে অবশ্যই সকল আইনি নিয়ম মেনে চলতে হবে।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">প্রশ্ন আছে?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            আমাদের শর্তাবলী সংক্রান্ত কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;