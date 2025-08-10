// src/pages/Contact.jsx
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // ফর্ম সাবমিট লজিক এখানে যোগ করুন
    console.log(formData);
    alert('আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: 'ঠিকানা',
      details: 'ই-গভর্নেন্স সেন্টার, প্লট # ১, সেগুনবাগিচা, ঢাকা-১০০০'
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: 'ফোন',
      details: '০২-৫৫১২৩৪৫৬'
    },
    {
      icon: <Mail className="text-red-600" size={24} />,
      title: 'ইমেইল',
      details: 'info@egovernance.gov.bd'
    },
    {
      icon: <Clock className="text-yellow-600" size={24} />,
      title: 'অফিস সময়',
      details: 'রবিবার থেকে বৃহস্পতিবার: সকাল ৯টা - বিকাল ৫টা'
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <Youtube size={20} />, url: '#', label: 'YouTube' },
    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">যোগাযোগ</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন। আপনার মতামত, পরামর্শ বা অভিযোগ থাকলে আমরা শুনতে চাই।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">আমাদের বার্তা পাঠান</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">নাম *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ইমেইল *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">ফোন</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">বিষয় *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">বার্তা *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
                >
                  বার্তা পাঠান <Send className="ml-2" size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">যোগাযোগের তথ্য</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">সামাজিক যোগাযোগ</h2>
              <p className="text-gray-600 mb-6">
                আমাদের সাথে সামাজিক যোগাযোগ মাধ্যমে যুক্ত থাকুন এবং সর্বশেষ আপডেট পান।
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-gray-100 hover:bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">অবস্থান</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-gray-400 mb-2" size={48} />
                <p className="text-gray-600">মানচিত্র এখানে প্রদর্শিত হবে</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;