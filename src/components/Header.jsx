import { NavLink, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// বাইরে ক্লিক শনাক্ত করার কাস্টম হুক
const useOutsideClick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);
  return ref;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // ড্রপডাউন টগল করার ফাংশন
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // বাইরে ক্লিক হলে ড্রপডাউন বন্ধ করার কলব্যাক
  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  // বাইরে ক্লিক শনাক্ত করার হুক ব্যবহার
  const dropdownRef = useOutsideClick(closeDropdowns);
  
  // রাউট পরিবর্তনের সময় মোবাইল মেনু বন্ধ করা
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);
  
  const navItems = [
    { 
      label: 'হোম', 
      path: '/' 
    },
    {
      label: 'সেবা',
      path: '/services',
      dropdown: [
        { label: 'জাতীয় পোর্টাল', path: '/services/national-portal' },
        { label: 'MyGov অ্যাপ', path: '/services/mygov' }, // সংশোধিত: /service থেকে /services
        { label: 'ভূমি ও রেজিস্ট্রি', path: '/services/land' }, // সংশোধিত: /service থেকে /services
        { label: 'ই-নথি', path: '/services/enothi' }, // সংশোধিত: /service থেকে /services
        { label: 'বিদ্যুৎ সেবা', path: '/services/electricity' }, // সংশোধিত: /service থেকে /services
      ],
    },
    {
      label: 'নীতিমালা',
      path: '/policies',
      dropdown: [
        { label: 'ডিজিটাল গভর্নেন্স', path: '/policies/digital' },
        { label: 'গোপনীয়তা নীতি', path: '/policies/privacy' },
        { label: 'শর্তাবলী', path: '/policies/terms' },
      ],
    },
    { 
      label: 'যোগাযোগ', 
      path: '/contact' 
    },
  ];

  // চেক করা যে কোনো পাথ বর্তমান পাথের সাথে মেলে কিনা
  const isPathActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-[#1e293b] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto py-3 flex justify-between items-center px-2 lg:px-12">
        {/* Logo */}
        <NavLink to="/" className="flex items-center hover:opacity-90 transition">
          <span className="text-2xl md:text-3xl font-bold tracking-wide">
            <span className="text-green-500">E-</span>Governance <span className="hidden sm:inline">BD</span>
          </span>
        </NavLink>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base font-medium" ref={dropdownRef}>
          {navItems.map(({ label, path, dropdown }) => (
            <div
              key={label}
              className="relative"
            >
              {dropdown ? (
                <>
                  <button
                    type="button"
                    className={`flex items-center transition focus:outline-none ${
                      isPathActive(path) 
                        ? 'text-green-500' 
                        : 'hover:text-green-300'
                    }`}
                    onClick={() => toggleDropdown(label)}
                  >
                    {label}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform ${openDropdown === label ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {/* Dropdown Menu */}
                  {openDropdown === label && (
                    <ul className="absolute left-0 mt-2 bg-[#1e293b] shadow-lg rounded-md w-56 z-50 pointer-events-auto">
                      {dropdown.map((item) => (
                        <li key={item.label}>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 transition ${
                                isActive 
                                  ? 'bg-green-500 text-white' 
                                  : 'hover:bg-green-500 hover:text-white'
                              }`
                            }
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-green-500 border-b-2 border-green-500 pb-1'
                      : 'hover:text-green-300 transition'
                  }
                >
                  {label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div 
          className="md:hidden bg-[#1e293b] px-4 pb-4"
          ref={dropdownRef}
        >
          <ul className="flex flex-col space-y-3 text-sm font-medium">
            {navItems.map(({ label, path, dropdown }) => (
              <li key={label}>
                {dropdown ? (
                  <div>
                    <button
                      className={`flex justify-between items-center w-full py-1 ${
                        isPathActive(path) ? 'text-green-500' : 'hover:text-green-300'
                      }`}
                      onClick={() => toggleDropdown(label)}
                    >
                      <span>{label}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${openDropdown === label ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {openDropdown === label && (
                      <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-600">
                        {dropdown.map((item) => (
                          <li key={item.label}>
                            <NavLink
                              to={item.path}
                              onClick={() => {
                                setMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={({ isActive }) =>
                                `block py-1 transition ${
                                  isActive 
                                    ? 'text-green-500' 
                                    : 'hover:text-green-300'
                                }`
                              }
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 transition ${
                        isActive 
                          ? 'text-green-500' 
                          : 'hover:text-green-300'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;