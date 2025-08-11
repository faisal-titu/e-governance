// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-8">
      <div className="max-w-8xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-500">E-Governance BD</h3>
            <p className="text-sm">
              বাংলাদেশ সরকারের ডিজিটাল সেবা প্ল্যাটফর্ম। নাগরিকদের জন্য সকল সেবা এক ঠিকানায়।
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-2">
              <li><Link to="/services/national-portal" className="text-sm hover:text-green-600">জাতীয় পোর্টাল</Link></li>
              <li><Link to="/services/mygov" className="text-sm hover:text-green-400">MyGov অ্যাপ</Link></li>
              <li><Link to="/services/land" className="text-sm hover:text-green-400">ভূমি ও রেজিস্ট্রি</Link></li>
              <li><Link to="/services/enothi" className="text-sm hover:text-green-400">ই-নথি</Link></li>
              <li><Link to="/services/electricity" className="text-sm hover:text-green-400">বিদ্যুৎ সেবা</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">নীতিমালা</h4>
            <ul className="space-y-2">
              <li><Link to="/policies/digital" className="text-sm hover:text-green-400">ডিজিটাল গভর্নেন্স</Link></li>
              <li><Link to="/policies/privacy" className="text-sm hover:text-green-400">গোপনীয়তা নীতি</Link></li>
              <li><Link to="/policies/terms" className="text-sm hover:text-green-400">শর্তাবলী</Link></li>
              <li> <a href="https://drive.google.com/file/d/1eejyRt0ZseCeP2l82oKP9fqCfIUYAdYa/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green-400">অন্যান্য</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm hover:text-green-400">যোগাযোগ করুন</Link></li>
              <li><a href="tel:999" className="text-sm hover:text-green-400">জরুরি সেবা: ৯৯৯</a></li>
              <li><a href="mailto:info@egovernance.gov.bd" className="text-sm hover:text-green-400">info@egovernance.gov.bd</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} E-Governance BD. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;