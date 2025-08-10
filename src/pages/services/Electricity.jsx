// src/pages/services/Electricity.jsx
import { useState } from 'react';
import { Zap, FileText, CreditCard, AlertCircle, CheckCircle, Clock, MapPin, Phone, Download, ExternalLink } from 'lucide-react';

const Electricity = () => {
  const [activeTab, setActiveTab] = useState('services');
  
  const services = [
    {
      id: 1,
      title: 'নতুন সংযোগের আবেদন',
      description: 'বাসা, ব্যবসা প্রতিষ্ঠান বা শিল্প কারখানার জন্য নতুন বিদ্যুৎ সংযোগের আবেদন',
      icon: <Zap className="text-blue-600" size={24} />,
      link: '/services/new-connection',
      status: 'active'
    },
    {
      id: 2,
      title: 'বিদ্যুৎ বিল পরিশোধ',
      description: 'অনলাইনে বিদ্যুৎ বিল পরিশোধ করুন মোবাইল ব্যাংকিং, ক্রেডিট/ডেবিট কার্ডের মাধ্যমে',
      icon: <CreditCard className="text-green-600" size={24} />,
      link: '/services/bill-payment',
      status: 'active'
    },
    {
      id: 3,
      title: 'বিল হিসাব দেখুন',
      description: 'আপনার বিদ্যুৎ বিলের হিসাব দেখুন এবং ডাউনলোড করুন',
      icon: <FileText className="text-yellow-600" size={24} />,
      link: '/services/bill-history',
      status: 'active'
    },
    {
      id: 4,
      title: 'অভিযোগ দাখিল',
      description: 'বিদ্যুৎ সংক্রান্ত যেকোনো সমস্যার জন্য অভিযোগ দাখিল করুন',
      icon: <AlertCircle className="text-red-600" size={24} />,
      link: '/services/complaint',
      status: 'active'
    },
    {
      id: 5,
      title: 'লোড পরিবর্তন',
      description: 'আপনার বিদ্যুৎ সংযোগের লোড পরিবর্তনের জন্য আবেদন করুন',
      icon: <Zap className="text-purple-600" size={24} />,
      link: '/services/load-change',
      status: 'active'
    },
    {
      id: 6,
      title: 'মিটার পরিবর্তন',
      description: 'ডিজিটাল মিটার স্থাপন বা মিটার পরিবর্তনের জন্য আবেদন করুন',
      icon: <FileText className="text-indigo-600" size={24} />,
      link: '/services/meter-change',
      status: 'active'
    }
  ];

  const providers = [
    {
      name: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (REB)',
      description: 'গ্রামীণ এলাকায় বিদ্যুৎ সরবরাহকারী প্রতিষ্ঠান',
      services: ['নতুন সংযোগ', 'বিল পরিশোধ', 'অভিযোগ দাখিল'],
      website: 'https://reb.gov.bd',
      contact: '০৯৬১২-২২২২২২'
    },
    {
      name: 'ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (DPDC)',
      description: 'ঢাকা মহানগরী এলাকায় বিদ্যুৎ সরবরাহকারী প্রতিষ্ঠান',
      services: ['নতুন সংযোগ', 'বিল পরিশোধ', 'অভিযোগ দাখিল'],
      website: 'https://dpdc.gov.bd',
      contact: '০৯৬১২-১২১২১২'
    },
    {
      name: 'পল্লী বিদ্যুৎ সমিতি (PBS)',
      description: 'দেশের বিভিন্ন পল্লী বিদ্যুৎ সমিতি',
      services: ['নতুন সংযোগ', 'বিল পরিশোধ', 'অভিযোগ দাখিল'],
      website: 'https://reb.gov.bd/pbs-list',
      contact: '০৯৬১২-২২২২২২'
    },
    {
      name: 'ডেসকো',
      description: 'ঢাকা ইলেকট্রিক সাপ্লাই কোম্পানি লিমিটেড',
      services: ['নতুন সংযোগ', 'বিল পরিশোধ', 'অভিযোগ দাখিল'],
      website: 'https://desco.gov.bd',
      contact: '০৯৬১২-০৯১০৯১'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'নিবন্ধন/লগইন',
      description: 'বিদ্যুৎ সেবা পোর্টালে নিবন্ধন করুন বা লগইন করুন'
    },
    {
      step: 2,
      title: 'সেবা নির্বাচন',
      description: 'আপনার প্রয়োজনীয় সেবা নির্বাচন করুন'
    },
    {
      step: 3,
      title: 'আবেদন ফরম পূরণ',
      description: 'প্রয়োজনীয় তথ্য দিয়ে আবেদন ফরম পূরণ করুন'
    },
    {
      step: 4,
      title: 'ডকুমেন্ট আপলোড',
      description: 'প্রয়োজনীয় ডকুমেন্ট আপলোড করুন'
    },
    {
      step: 5,
      title: 'ফি পরিশোধ',
      description: 'অনলাইনে বা মোবাইল ব্যাংকিংয়ের মাধ্যমে ফি পরিশোধ করুন'
    },
    {
      step: 6,
      title: 'আবেদন জমা দিন',
      description: 'সবকিছু সঠিক থাকলে আবেদন জমা দিন'
    }
  ];

  const faqs = [
    {
      question: 'নতুন বিদ্যুৎ সংযোগের জন্য কি কি ডকুমেন্ট লাগবে?',
      answer: 'নতুন বিদ্যুৎ সংযোগের জন্য আপনার লাগবে: জাতীয় পরিচয়পত্রের ফটোকপি, মালিকানার প্রমাণক (খতিয়ান/দলিল), পাসপোর্ট সাইজ ছবি, এবং আবেদন ফরম।'
    },
    {
      question: 'বিদ্যুৎ বিল অনলাইনে কিভাবে পরিশোধ করব?',
      answer: 'বিদ্যুৎ বিল পরিশোধের জন্য আপনাকে প্রথমে আপনার বিদ্যুৎ বিলিং অ্যাকাউন্টে লগইন করতে হবে। তারপর পেমেন্ট অপশনে গিয়ে মোবাইল ব্যাংকিং, ক্রেডিট কার্ড বা ডেবিট কার্ডের মাধ্যমে পরিশোধ করতে পারবেন।'
    },
    {
      question: 'বিদ্যুৎ সংযোগ বিচ্ছিন্ন হলে কি করব?',
      answer: 'বিদ্যুৎ সংযোগ বিচ্ছিন্ন হলে আপনি বিদ্যুৎ অফিসে যোগাযোগ করতে পারেন বা অনলাইনে অভিযোগ দাখিল করতে পারেন। জরুরি প্রয়োজনে আপনি বিদ্যুৎ অফিসের হটলাইন নম্বরে কল করতে পারেন।'
    },
    {
      question: 'বিদ্যুৎ বিলে ভুল থাকলে কি করব?',
      answer: 'বিদ্যুৎ বিলে ভুল থাকলে আপনি বিদ্যুৎ অফিসে যোগাযোগ করে বিষয়টি জানাতে পারেন। আপনি অনলাইনে অভিযোগ দাখিল করে বা সরাসরি বিদ্যুৎ অফিসে গিয়ে সমস্যাটি সমাধান করতে পারেন।'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">বিদ্যুৎ সেবা</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            নতুন সংযোগ, বিল পরিশোধ, অভিযোগ দাখিল সহ সকল বিদ্যুৎ সংক্রান্ত সেবা অনলাইনে পান।
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">সহজেই বিদ্যুৎ সেবা নিন</h2>
              <p className="mb-6 max-w-lg">
                আর লাইনে দাঁড়াতে হবে না। অনলাইনে বিদ্যুৎ বিল পরিশোধ, নতুন সংযোগের আবেদন, অভিযোগ দাখিল সহ সকল সেবা পান ঘরে বসে।
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition duration-300">
                  বিল পরিশোধ করুন
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                  নতুন সংযোগের আবেদন
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
                      <span className="text-white font-bold">বিদ্যুৎ সেবা</span>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Zap className="text-blue-600" size={16} />
                        </div>
                        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CreditCard className="text-green-600" size={16} />
                        </div>
                        <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <FileText className="text-yellow-600" size={16} />
                        </div>
                        <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                          <AlertCircle className="text-red-600" size={16} />
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
            {['services', 'providers', 'process', 'faqs'].map((tab) => (
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
                {tab === 'providers' && 'সেবা প্রদানকারী'}
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">বিদ্যুৎ সংক্রান্ত সেবাসমূহ</h2>
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

          {activeTab === 'providers' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">বিদ্যুৎ সেবা প্রদানকারী প্রতিষ্ঠান</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {providers.map((provider, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{provider.name}</h3>
                    <p className="text-gray-600 mb-4">{provider.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">সেবাসমূহ:</h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.services.map((service, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <a href={provider.website} className="text-blue-600 hover:text-blue-800 flex items-center">
                        ওয়েবসাইট <ExternalLink className="ml-1" size={16} />
                      </a>
                      <div className="flex items-center text-gray-600">
                        <Phone className="mr-1" size={16} />
                        {provider.contact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">বিদ্যুৎ সেবা প্রাপ্তির প্রক্রিয়া</h2>
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">আজই বিদ্যুৎ সেবা নিন</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            অনলাইনে বিদ্যুৎ বিল পরিশোধ, নতুন সংযোগের আবেদন করুন এবং আপনার সময় বাঁচান।
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              বিল পরিশোধ করুন
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              নতুন সংযোগের আবেদন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electricity;