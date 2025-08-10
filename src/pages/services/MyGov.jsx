// src/pages/services/MyGov.jsx
import { useState } from 'react';
import { Download, Smartphone, Shield, Bell, BookOpen, Users, Star, ArrowRight } from 'lucide-react';

const MyGov = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  const features = [
    {
      title: 'একক প্ল্যাটফর্ম',
      description: '১৫০+ সরকারি সেবা একটি অ্যাপে পাওয়া যাচ্ছে',
      icon: <Smartphone className="text-blue-600" size={24} />
    },
    {
      title: 'নিরাপত্তা',
      description: 'উন্নত নিরাপত্তা ব্যবস্থা এবং ডাটা প্রাইভেসি সুরক্ষা',
      icon: <Shield className="text-green-600" size={24} />
    },
    {
      title: 'রিয়েল-টাইম নোটিফিকেশন',
      description: 'সরকারি আপডেট এবং সেবা সম্পর্কিত তথ্য তাৎক্ষণিক পাওয়া',
      icon: <Bell className="text-yellow-600" size={24} />
    },
    {
      title: 'অ্যাক্সেসিবিলিটি',
      description: 'টেক্সট-টু-স্পিচ, কাস্টমাইজেবল ফন্ট সাইজ সহ বিশেষ সুবিধা',
      icon: <BookOpen className="text-purple-600" size={24} />
    }
  ];

  const services = [
    {
      title: 'NID সেবা',
      description: 'NID রেজিস্ট্রেশন, সংশোধন এবং অন্যান্য সেবা'
    },
    {
      title: 'পাসপোর্ট সেবা',
      description: 'পাসপোর্ট আবেদন, নবায়ন এবং স্ট্যাটাস ট্র্যাকিং'
    },
    {
      title: 'ভূমি সেবা',
      description: 'ভূমি রেকর্ড, খতিয়ান, মিউটেশন সহ সকল ভূমি সংক্রান্ত সেবা'
    },
    {
      title: 'বিদ্যুৎ সেবা',
      description: 'নতুন সংযোগ, বিল পরিশোধ, অভিযোগ দাখিল সহ সকল বিদ্যুৎ সংক্রান্ত সেবা'
    },
    {
      title: 'শিক্ষা সেবা',
      description: 'শিক্ষা বোর্ডের ফলাফল, শিক্ষক নিবন্ধন, বৃত্তি সহ শিক্ষা সংক্রান্ত সেবা'
    },
    {
      title: 'স্বাস্থ্য সেবা',
      description: 'হাসপাতালের তথ্য, অ্যাপয়েন্টমেন্ট, স্বাস্থ্য কার্ড সহ স্বাস্থ্য সংক্রান্ত সেবা'
    }
  ];

  const testimonials = [
    {
      name: 'মোঃ রহিম উদ্দিন',
      role: 'ব্যবসায়ী',
      content: 'MyGov অ্যাপ ব্যবহার করে আমি মাত্র ১০ মিনিটে আমার পাসপোর্ট আবেদন করতে পেরেছি। এটি সত্যিই অসাধারণ।',
      rating: 5
    },
    {
      name: 'ফাতেমা বেগম',
      role: 'গৃহিণী',
      content: 'আমি অ্যাপের মাধ্যমে আমার ছেলের জন্ম নিবন্ধন করেছি। খুব সহজেই সব কাজ শেষ হয়েছে।',
      rating: 4
    },
    {
      name: 'আব্দুল করিম',
      role: 'কৃষক',
      content: 'কৃষি সংক্রান্ত সকল তথ্য এবং সেবা এখন আমার হাতের মুঠোয়। এটি আমাদের জীবনকে অনেক সহজ করেছে।',
      rating: 5
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">MyGov অ্যাপ</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            বাংলাদেশ সরকারের সকল সেবা এখন আপনার মোবাইলে। ১৫০+ সরকারি সেবা একটি অ্যাপে পাওয়া যাচ্ছে।
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">ডাউনলোড করুন MyGov অ্যাপ</h2>
              <p className="mb-6 max-w-lg">
                যেকোনো সময়, যেকোনো স্থান থেকে সরকারি সেবা গ্রহণ করুন। আমাদের অ্যাপটি ডাউনলোড করে সুবিধা নিন।
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
                  <Download className="mr-2" size={20} /> Google Play
                </button>
                <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
                  <Download className="mr-2" size={20} /> App Store
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-gray-800 rounded-3xl p-4 w-64">
                  <div className="h-6 w-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
                  <div className="h-96 bg-gray-900 rounded-2xl overflow-hidden">
                    <div className="h-8 bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">MyGov</span>
                    </div>
                    <div className="p-4">
                      <div className="h-6 bg-gray-700 rounded mb-2"></div>
                      <div className="h-6 bg-gray-700 rounded mb-2 w-3/4"></div>
                      <div className="h-6 bg-gray-700 rounded mb-4 w-1/2"></div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-16 bg-gray-700 rounded"></div>
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
            {['features', 'services', 'testimonials'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'features' && 'বৈশিষ্ট্যসমূহ'}
                {tab === 'services' && 'সেবাসমূহ'}
                {tab === 'testimonials' && 'ব্যবহারকারীদের মতামত'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === 'features' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">অ্যাপের বৈশিষ্ট্যসমূহ</h2>
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

          {activeTab === 'services' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">অ্যাপে পাওয়া সেবাসমূহ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ব্যবহারকারীদের মতামত</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Users className="text-gray-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          size={16}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-2">MyGov অ্যাপ কীভাবে ডাউনলোড করব?</h3>
              <p className="text-gray-600">
                আপনি Google Play Store বা Apple App Store থেকে "MyGov Bangladesh" সার্চ করে অ্যাপটি ডাউনলোড করতে পারেন।
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-2">অ্যাপটি ব্যবহার করতে কি কোনো ফি লাগবে?</h3>
              <p className="text-gray-600">
                না, MyGov অ্যাপটি সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়। তবে কিছু সেবার জন্য সরকার নির্ধারিত ফি প্রযোজ্য হতে পারে।
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-2">আমি কি অ্যাপের মাধ্যমে সকল সরকারি সেবা পাব?</h3>
              <p className="text-gray-600">
                বর্তমানে ১৫০+ সরকারি সেবা অ্যাপের মাধ্যমে পাওয়া যাচ্ছে। আমরা ধীরে ধীরে আরও সেবা যুক্ত করছি।
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">আজই ডাউনলোড করুন MyGov অ্যাপ</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            ডিজিটাল বাংলাদেশ গড়ার অংশীদার হিসেবে আমাদের অ্যাপটি ব্যবহার করুন এবং সুবিধা নিন।
          </p>
          <div className="flex justify-center space-x-4">
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
  );
};

export default MyGov;