// src/pages/services/NationalPortal.jsx
import { useState } from 'react';
import { Search, Download, ExternalLink, FileText, Users, Globe, CheckCircle, AlertCircle } from 'lucide-react';

const NationalPortal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const services = [
    {
      id: 1,
      title: 'জাতীয় পরিচয়পত্র (NID) সেবা',
      description: 'NID রেজিস্ট্রেশন, সংশোধন এবং অন্যান্য সেবা',
      category: 'পরিচয়পত্র',
      icon: <Users className="text-blue-600" size={24} />,
      link: '/services/nid',
      status: 'active'
    },
    {
      id: 2,
      title: 'পাসপোর্ট সেবা',
      description: 'পাসপোর্ট আবেদন, নবায়ন এবং স্ট্যাটাস ট্র্যাকিং',
      category: 'পাসপোর্ট',
      icon: <FileText className="text-green-600" size={24} />,
      link: '/services/passport',
      status: 'active'
    },
    {
      id: 3,
      title: 'জন্ম ও মৃত্যু নিবন্ধন',
      description: 'অনলাইনে জন্ম ও মৃত্যু নিবন্ধন, সংশোধন এবং যাচাই',
      category: 'নিবন্ধন',
      icon: <CheckCircle className="text-red-600" size={24} />,
      link: '/services/birth-death',
      status: 'active'
    },
    {
      id: 4,
      title: 'ভূমি সেবা',
      description: 'ভূমি রেকর্ড, খতিয়ান, মিউটেশন সহ সকল ভূমি সংক্রান্ত সেবা',
      category: 'ভূমি',
      icon: <Globe className="text-yellow-600" size={24} />,
      link: '/services/land',
      status: 'active'
    },
    {
      id: 5,
      title: 'বিদ্যুৎ সেবা',
      description: 'নতুন সংযোগ, বিল পরিশোধ, অভিযোগ দাখিল সহ সকল বিদ্যুৎ সংক্রান্ত সেবা',
      category: 'ইউটিলিটি',
      icon: <AlertCircle className="text-purple-600" size={24} />,
      link: '/services/electricity',
      status: 'active'
    },
    {
      id: 6,
      title: 'শিক্ষা সেবা',
      description: 'শিক্ষা বোর্ডের ফলাফল, শিক্ষক নিবন্ধন, বৃত্তি সহ শিক্ষা সংক্রান্ত সেবা',
      category: 'শিক্ষা',
      icon: <FileText className="text-indigo-600" size={24} />,
      link: '/services/education',
      status: 'active'
    },
    {
      id: 7,
      title: 'স্বাস্থ্য সেবা',
      description: 'হাসপাতালের তথ্য, অ্যাপয়েন্টমেন্ট, স্বাস্থ্য কার্ড সহ স্বাস্থ্য সংক্রান্ত সেবা',
      category: 'স্বাস্থ্য',
      icon: <CheckCircle className="text-pink-600" size={24} />,
      link: '/services/health',
      status: 'active'
    },
    {
      id: 8,
      title: 'কর সেবা',
      description: 'আয়কর, ভ্যাট রিটার্ন, টিন সার্টিফিকেট সহ কর সংক্রান্ত সেবা',
      category: 'অর্থ',
      icon: <FileText className="text-teal-600" size={24} />,
      link: '/services/tax',
      status: 'active'
    }
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">জাতীয় পোর্টাল</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            বাংলাদেশ সরকারের সকল সেবা একক প্ল্যাটফর্মে। ৬৫০+ সরকারি সেবা যা আপনার জীবনকে সহজ করবে।
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="সেবা খুঁজুন..."
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">সেবা ক্যাটাগরি</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['সকল', 'পরিচয়পত্র', 'পাসপোর্ট', 'নিবন্ধন', 'ভূমি', 'ইউটিলিটি', 'শিক্ষা', 'স্বাস্থ্য', 'অর্থ'].map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-center transition ${
                  searchTerm === category.toLowerCase() || (searchTerm === '' && category === 'সকল')
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSearchTerm(category === 'সকল' ? '' : category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">সেবাসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-1">
                        {service.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      service.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.status === 'active' ? 'সচল' : 'আসন্ন'}
                    </span>
                    <a href={service.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                      বিস্তারিত <ExternalLink className="ml-1" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">জাতীয় পোর্টাল মোবাইল অ্যাপ</h3>
              <p className="text-gray-600 max-w-md">
                যেকোনো সময়, যেকোনো স্থান থেকে সরকারি সেবা গ্রহণ করুন। ডাউনলোড করুন আমাদের মোবাইল অ্যাপ।
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
                <Download className="mr-2" size={20} /> Google Play
              </button>
              <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
                <Download className="mr-2" size={20} /> App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalPortal;