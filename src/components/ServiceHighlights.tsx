import React from 'react';

const ServiceHighlights = () => {
  const highlights = [
    {
      title: 'Affordable Pricing',
      description: 'We offer competitive and transparent pricing to suit every budget.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: 'Trusted Professionals',
      description: 'Our cleaners are thoroughly vetted and highly trained.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book one-off or recurring services at your convenience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4m-5 4h18" />
        </svg>
      ),
    },
    {
      title: 'Customer Support',
      description: 'Our team is always here to help with any inquiries.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 8v13H3V8M16 3v5M8 3v5M3 13h18" />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-bold mb-8">
        You are going to enjoy our services
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-[#fff4eb] border border-gray-200 rounded-lg shadow-sm w-full md:w-[48%] lg:w-[23%]"
          >
            <div>
              <h3 className="text-lg font-semibold">{highlight.title}</h3>
              <p className="text-gray-600 mt-1">{highlight.description}</p>
            </div>
            <div className="ml-4 text-gray-600">{highlight.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
