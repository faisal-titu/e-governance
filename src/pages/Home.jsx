// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, Globe, Zap, Smartphone, Shield, Clock, MapPin, Star, Download, ExternalLink, TrendingUp } from 'lucide-react';

const Home = () => {
  // বৈশিষ্ট্য তালিকা
  const features = [
    {
      title: 'একক প্ল্যাটফর্ম',
      description: 'সকল সরকারি সেবা একটি প্ল্যাটফর্মে পাওয়া যাচ্ছে',
      icon: <Globe className="text-blue-600" size={24} />
    },
    {
      title: 'নিরাপত্তা',
      description: 'উন্নত নিরাপত্তা ব্যবস্থা এবং ডাটা প্রাইভেসি সুরক্ষা',
      icon: <Shield className="text-green-600" size={24} />
    },
    {
      title: 'রিয়েল-টাইম নোটিফিকেশন',
      description: 'সরকারি আপডেট এবং সেবা সম্পর্কিত তথ্য তাৎক্ষণিক পাওয়া',
  icon: <Clock className="text-green-600" size={24} />
    },
    {
      title: 'অ্যাক্সেসিবিলিটি',
      description: 'টেক্সট-টু-স্পিচ, কাস্টমাইজেবল ফন্ট সাইজ সহ বিশেষ সুবিধা',
      icon: <Users className="text-purple-600" size={24} />
    }
  ];

  // সর্বশেষ আপডেট
  const latestUpdates = [
    {
      title: 'জাতীয় পরিচয়পত্র (NID) সেবা চালু',
      description: 'এখন অনলাইনে NID সংশোধন করা যাবে',
      date: '১৫ মে, ২০২৩',
      link: '/services/nid'
    },
    {
      title: 'ভূমি রেকর্ড অনলাইনে পাওয়া যাচ্ছে',
      description: 'খতিয়ান ও মিউটেশন অনলাইনে আবেদন করুন',
      date: '১০ মে, ২০২৩',
      link: '/services/land'
    },
    {
      title: 'বিদ্যুৎ বিল পরিশোধ সহজ হয়েছে',
      description: 'মোবাইল ব্যাংকিংয়ের মাধ্যমে বিল পরিশোধ করুন',
      date: '৫ মে, ২০২৩',
      link: '/services/electricity'
    }
  ];

  // জনপ্রিয় সেবা
  const popularServices = [
    {
      title: 'জাতীয় পরিচয়পত্র (NID)',
      description: 'NID রেজিস্ট্রেশন, সংশোধন এবং অন্যান্য সেবা',
      icon: <FileText className="text-blue-600" size={24} />,
      link: '/services/nid'
    },
    {
      title: 'পাসপোর্ট সেবা',
      description: 'পাসপোর্ট আবেদন, নবায়ন এবং স্ট্যাটাস ট্র্যাকিং',
      icon: <FileText className="text-green-600" size={24} />,
      link: '/services/passport'
    },
    {
      title: 'ভূমি সেবা',
      description: 'ভূমি রেকর্ড, খতিয়ান, মিউটেশন সহ সকল ভূমি সংক্রান্ত সেবা',
  icon: <MapPin className="text-green-600" size={24} />,
      link: '/services/land'
    },
    {
      title: 'বিদ্যুৎ সেবা',
      description: 'নতুন সংযোগ, বিল পরিশোধ, অভিযোগ দাখিল সহ সকল বিদ্যুৎ সংক্রান্ত সেবা',
      icon: <Zap className="text-red-600" size={24} />,
      link: '/services/electricity'
    }
  ];

  // মোবাইল অ্যাপ ডাউনলোড
  const mobileApps = [
    {
      name: 'MyGov অ্যাপ',
      description: 'সকল সরকারি সেবা একটি অ্যাপে',
      icon: <Smartphone className="text-blue-600" size={24} />,
      downloadLink: '#'
    },
    {
      name: 'ই-নথি অ্যাপ',
      description: 'ডিজিটাল নথি ব্যবস্থাপনা',
      icon: <FileText className="text-green-600" size={24} />,
      downloadLink: '#'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
  <section className="relative min-h-[90vh] flex items-center justify-center text-center text-white py-24 md:py-32 overflow-hidden">
        {/* Background image only (no heavy overlays) */}
        <div className="absolute inset-0 bg-[url('/image/slider.jpg')] bg-cover bg-center"></div>
        {/* Optional very light gradient just for text readability (adjust opacity or remove if not needed) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/30"></div>
        <div className="relative max-w-5xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight ">
            <span className="text-green-700">সহজ সেবা </span>
            <span className="text-green-700">সবার জন্য</span> 
            
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-green-800 ">
            সরকারি সকল সেবা এখন আপনার হাতের মুঠোয়। ডিজিটাল প্ল্যাটফর্মের মাধ্যমে সহজেই পান নাগরিক সেবা।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="bg-green-500/95 hover:bg-green-400 text-black font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center shadow-lg shadow-black/30">
              সকল সেবা দেখুন <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/about" className="border border-green-600 hover:border-white text-black font-semibold py-3 px-8 rounded-lg transition duration-300 backdrop-blur-[1px] bg-white/0 hover:bg-white/10">
              আরও জানুন
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">কেন আমাদের বেছে নেবেন?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আমরা নাগরিকদের জন্য সবচেয়ে সহজ এবং নির্ভরযোগ্য ডিজিটাল সেবা প্রদান করি।
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">আমাদের সেবাসমূহ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              বাংলাদেশ সরকার কর্তৃক প্রদত্ত বিভিন্ন ডিজিটাল সেবা যা নাগরিকদের জীবনকে সহজ করে তুলেছে।
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">জাতীয় পোর্টাল</h3>
                <p className="text-gray-600 mb-4">
                  ৬৫০+ সরকারি সেবা একক প্ল্যাটফর্মে। ভূমি, শিক্ষা, অর্থ, কৃষি সহ বিভিন্ন খাতের সেবা।
                </p>
                <Link to="/services/national-portal" className="text-blue-600 font-medium flex items-center">
                  বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">MyGov অ্যাপ</h3>
                <p className="text-gray-600 mb-4">
                  ১৫০+ সরকারি সেবা একটি অ্যাপে। রিয়েল-টাইম নোটিফিকেশন, টেক্সট-টু-স্পিচ সহ বিশেষ সুবিধা।
                </p>
                <Link to="/services/mygov" className="text-blue-600 font-medium flex items-center">
                  বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">ভূমি ও রেজিস্ট্রি</h3>
                <p className="text-gray-600 mb-4">
                  অনলাইনে ভূমি রেকর্ড, মিউটেশন, খতিয়ান সহ সকল ভূমি সংক্রান্ত সেবা।
                </p>
                <Link to="/services/land" className="text-blue-600 font-medium flex items-center">
                  বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
            {/* Service Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FileText className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">ই-নথি</h3>
                <p className="text-gray-600 mb-4">
                  ডিজিটাল নথি ব্যবস্থাপনা। ১৯,০০০+ অফিসে স্বচ্ছতা ও কাগজবিহীন কার্যক্রম।
                </p>
                <Link to="/services/enothi" className="text-blue-600 font-medium flex items-center">
                  বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
            {/* Service Card 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">জন্ম ও মৃত্যু নিবন্ধন</h3>
                <p className="text-gray-600 mb-4">
                  অনলাইন আবেদন, স্ট্যাটাস ট্র্যাকিং, যাচাইকরণ সহ সকল সেবা।
                </p>
                <Link to="/services/birth-death" className="text-blue-600 font-medium flex items-center">
                  বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
            {/* Service Card 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">বিদ্যুৎ সেবা</h3>
                <p className="text-gray-600 mb-4">
                  নতুন সংযোগ, বিল পরিশোধ, অভিযোগ দাখিল সহ সকল বিদ্যুৎ সংক্রান্ত সেবা।
                </p>
                <Link to="/services/electricity" className="text-blue-600 font-medium flex items-center">
                  বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">জনপ্রিয় সেবাসমূহ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              সবচেয়ে বেশি ব্যবহৃত সরকারি সেবাগুলো এক নজরে দেখুন
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-blue-600 font-medium flex items-center">
                  বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">সর্বশেষ আপডেট</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              সরকারি সেবা সম্পর্কিত সর্বশেষ খবর এবং আপডেট জানুন
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestUpdates.map((update, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{update.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {update.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{update.description}</p>
                  <Link to={update.link} className="text-blue-600 font-medium flex items-center">
                    বিস্তারিত দেখুন <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">মোবাইল অ্যাপ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              যেকোনো সময়, যেকোনো স্থান থেকে সরকারি সেবা গ্রহণ করুন
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileApps.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{app.name}</h3>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-8xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">650+</div>
              <div className="text-gray-600">সরকারি সেবা</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">19,000+</div>
              <div className="text-gray-600">ডিজিটাল অফিস</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">150+</div>
              <div className="text-gray-600">মোবাইল সেবা</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">৯৯%</div>
              <div className="text-gray-600">সন্তুষ্টি</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ব্যবহারকারীদের মতামত</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আমাদের সেবা ব্যবহারকারীদের অভিজ্ঞতা জানুন
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">মোঃ রহিম উদ্দিন</h3>
                  <p className="text-sm text-gray-600">ব্যবসায়ী</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-green-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "MyGov অ্যাপ ব্যবহার করে আমি মাত্র ১০ মিনিটে আমার পাসপোর্ট আবেদন করতে পেরেছি। এটি সত্যিই অসাধারণ।"
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">ফাতেমা বেগম</h3>
                  <p className="text-sm text-gray-600">গৃহিণী</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-green-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "আমি অ্যাপের মাধ্যমে আমার ছেলের জন্ম নিবন্ধন করেছি। খুব সহজেই সব কাজ শেষ হয়েছে।"
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">আব্দুল করিম</h3>
                  <p className="text-sm text-gray-600">কৃষক</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-green-500 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "কৃষি সংক্রান্ত সকল তথ্য এবং সেবা এখন আমার হাতের মুঠোয়। এটি আমাদের জীবনকে অনেক সহজ করেছে।"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-8xl mx-auto px-4 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">আজই শুরু করুন</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            ডিজিটাল বাংলাদেশ গড়ার অংশীদার হিসেবে আমাদের সাথে যোগ দিন এবং সহজেই সরকারি সেবা গ্রহণ করুন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
              সকল সেবা দেখুন <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/register" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              রেজিস্ট্রেশন করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;