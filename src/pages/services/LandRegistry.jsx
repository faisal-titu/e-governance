// src/pages/services/LandRegistry.jsx
import { useState } from 'react';
import { Search, FileText, MapPin, Home, Calendar, Download, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

const LandRegistry = () => {
  const [activeTab, setActiveTab] = useState('services');
  
  const services = [
    {
      id: 1,
      title: 'ভূমি রেকর্ড অনুসন্ধান',
      description: 'অনলাইনে ভূমির রেকর্ড খুঁজুন এবং ডাউনলোড করুন',
      icon: <Search className="text-blue-600" size={24} />,
      link: '/services/land-record-search',
      status: 'active'
    },
    {
      id: 2,
      title: 'ই-মিউটেশন',
      description: 'ভূমির মালিকানা পরিবর্তনের আবেদন অনলাইনে করুন',
      icon: <FileText className="text-green-600" size={24} />,
      link: '/services/e-mutation',
      status: 'active'
    },
    {
      id: 3,
      title: 'খতিয়ান ডাউনলোড',
      description: 'আপনার জমির খতিয়ান অনলাইনে ডাউনলোড করুন',
      icon: <Download className="text-yellow-600" size={24} />,
      link: '/services/khatian-download',
      status: 'active'
    },
    {
      id: 4,
      title: 'ডিজিটাল ম্যাপ',
      description: 'ভূমির ডিজিটাল ম্যাপ দেখুন এবং সীমানা যাচাই করুন',
      icon: <MapPin className="text-purple-600" size={24} />,
      link: '/services/digital-map',
      status: 'active'
    },
    {
      id: 5,
      title: 'জমির মূল্যায়ন',
      description: 'আপনার জমির বর্তমান বাজার মূল্য জানুন',
      icon: <Home className="text-red-600" size={24} />,
      link: '/services/land-valuation',
      status: 'active'
    },
    {
      id: 6,
      title: 'ভূমি উন্নয়ন কর',
      description: 'ভূমি উন্নয়ন কর অনলাইনে পরিশোধ করুন',
      icon: <Calendar className="text-indigo-600" size={24} />,
      link: '/services/land-development-tax',
      status: 'active'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'নিবন্ধন/লগইন',
      description: 'প্রথমে আপনাকে পোর্টালে নিবন্ধন করতে হবে বা লগইন করতে হবে'
    },
    {
      step: 2,
      title: 'আবেদন ফরম পূরণ',
      description: 'প্রয়োজনীয় তথ্য দিয়ে আবেদন ফরম পূরণ করুন'
    },
    {
      step: 3,
      title: 'ডকুমেন্ট আপলোড',
      description: 'প্রয়োজনীয় ডকুমেন্ট স্ক্যান করে আপলোড করুন'
    },
    {
      step: 4,
      title: 'ফি পরিশোধ',
      description: 'অনলাইনে বা মোবাইল ব্যাংকিংয়ের মাধ্যমে ফি পরিশোধ করুন'
    },
    {
      step: 5,
      title: 'আবেদন জমা দিন',
      description: 'সবকিছু সঠিক থাকলে আবেদন জমা দিন'
    },
    {
      step: 6,
      title: 'স্ট্যাটাস ট্র্যাকিং',
      description: 'আপনার আবেদনের স্ট্যাটাস ট্র্যাক করুন'
    }
  ];

  const faqs = [
    {
      question: 'ভূমি রেকর্ড অনলাইনে কিভাবে খুঁজব?',
      answer: 'আপনাকে প্রথমে ভূমি সেবা পোর্টালে রেজিস্ট্রেশন করতে হবে। তারপর আপনার জেলা, উপজেলা, মৌজা, খতিয়ান নম্বর এবং দাগ নম্বর দিয়ে সার্চ করলে ভূমির রেকর্ড পাবেন।'
    },
    {
      question: 'ই-মিউটেশনের জন্য কি কি ডকুমেন্ট লাগবে?',
      answer: 'ই-মিউটেশনের জন্য আপনার লাগবে: জমির দলিল, নাগরিকত্বের সনদ, পাসপোর্ট সাইজ ছবি, জাতীয় পরিচয়পত্রের ফটোকপি, এবং হাল নাগাদ খাজনা পরিশোধের রশিদ।'
    },
    {
      question: 'ভূমি উন্নয়ন কর অনলাইনে কিভাবে পরিশোধ করব?',
      answer: 'ভূমি উন্নয়ন কর পরিশোধের জন্য আপনাকে প্রথমে আপনার হোল্ডিং নম্বর দিয়ে লগইন করতে হবে। তারপর পেমেন্ট অপশনে গিয়ে মোবাইল ব্যাংকিং, ক্রেডিট কার্ড বা ডেবিট কার্ডের মাধ্যমে পরিশোধ করতে পারবেন।'
    },
    {
      question: 'খতিয়ান ডাউনলোড করতে কি কোনো ফি লাগবে?',
      answer: 'না, খতিয়ান ডাউনলোড করা সম্পূর্ণ বিনামূল্যে। আপনি যতবার ইচ্ছা খতিয়ান ডাউনলোড করতে পারবেন।'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ভূমি ও রেজিস্ট্রি সেবা</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            অনলাইনে ভূমি রেকর্ড, মিউটেশন, খতিয়ান সহ সকল ভূমি সংক্রান্ত সেবা পান।
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-gray-200">
            {['services', 'process', 'faqs'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'services' && 'সেবাসমূহ'}
                {tab === 'process' && 'প্রক্রিয়া'}
                {tab === 'faqs' && 'প্রশ্নাবলী'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'services' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ভূমি সংক্রান্ত সেবাসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            service.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {service.status === 'active' ? 'সচল' : 'আসন্ন'}
                          </span>
                          <h3 className="text-lg font-bold text-gray-800 mt-1">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <a href={service.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                        বিস্তারিত <ExternalLink className="ml-1" size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ভূমি সেবা প্রাপ্তির প্রক্রিয়া</h2>
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

          {activeTab === 'faqs' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">১০০%</div>
              <div className="text-sm">অনলাইন সেবা</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">২৪/৭</div>
              <div className="text-sm">সেবা প্রাপ্যতা</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">৯৮%</div>
              <div className="text-sm">সন্তুষ্টি</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">৩ দিন</div>
              <div className="text-sm">গড় সময়</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">আজই শুরু করুন</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            ভূমি সংক্রান্ত সকল সেবা এখন অনলাইনে। আপনার সময় এবং খরচ বাঁচান।
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              নিবন্ধন করুন
            </button>
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300">
              লগইন করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandRegistry;