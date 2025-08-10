import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${i <= rating ? 'text-green-500' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex mb-4">
        {renderStars(testimonial.rating)}
      </div>
      <p className="text-gray-600 mb-6 flex-grow">"{testimonial.content}"</p>
      <div className="flex items-center">
        <div className="bg-indigo-100 text-indigo-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
          <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;