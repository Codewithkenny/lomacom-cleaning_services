import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Heroicons for arrows

const HomeServicesCards: React.FC = () => {
  const cards = [
    {
      title: 'Housekeeping',
      description: 'Professional housekeeping services for your home.',
      imageUrl: 'https://res.cloudinary.com/pojuagbomeji/image/upload/v1731937674/slider1_pfdj4r.jpg', // Replace with actual image
    },
    {
      title: 'Ironing Service',
      description: 'Efficient ironing to make your clothes look perfect.',
      imageUrl: 'https://res.cloudinary.com/pojuagbomeji/image/upload/v1731939037/slider2_gzxzfr.jpg', 
    },
    {
      title: 'End of Tenancy Cleaning',
      description: 'Thorough cleaning for the end of your tenancy.',
      imageUrl: 'https://res.cloudinary.com/pojuagbomeji/image/upload/v1731942470/slider4_qw3arx.jpg', 
    },
    {
      title: 'Regular Cleaning',
      description: 'regular cleaning.',
      imageUrl: 'https://res.cloudinary.com/pojuagbomeji/image/upload/v1731941774/slider3_rvwolq.jpg', 
    },
    {
      title: 'HouseKeeping',
      description: 'housekeeping.',
      imageUrl: 'https://res.cloudinary.com/pojuagbomeji/image/upload/v1731942796/slider5_e0whbh.jpg', 
    },
    {
      title: 'One-off Cleaning',
      description: 'one-off cleaning.',
      imageUrl: 'https://res.cloudinary.com/pojuagbomeji/image/upload/v1731943853/slider6_xtt8ic.jpg', 
    },
  ];

  const ArrowButton = ({
    className,
    style,
    onClick,
    direction,
  }: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    direction: 'left' | 'right';
  }) => (
    <button
      onClick={onClick}
      className={`absolute z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-200 ${
        direction === 'left' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'
      }`}
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      {direction === 'left' ? (
        <HiChevronLeft className="text-gray-800 text-2xl" />
      ) : (
        <HiChevronRight className="text-gray-800 text-2xl" />
      )}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Our Services</h2>
      </div>

      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden border">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <button className="mt-4 px-4 py-2 bg-[#00bba3] text-white font-semibold rounded hover:bg-[#007c6c]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeServicesCards;
