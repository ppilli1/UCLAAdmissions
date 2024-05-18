import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Housing = ({ style }: { style?: React.CSSProperties }) => {
  const campusInfo = [
    {
        image: '/images/housing/sojournerTruth.jpg',
        title: 'Sojourner Truth - College Avenue Campus',
        link: 'https://www.youtube.com/watch?v=Hx4b2RtryYg&pp=ygUic29qb3VybmVyIHRydXRoIGFwYXJ0bWVudHMgcnV0Z2Vycw%3D%3D',
    },
    {
      image: '/images/housing/bestHall.jpg',
      title: 'BEST Hall - Busch Campus',
      link: 'https://www.youtube.com/watch?v=oJWqJKO55zw&pp=ygURYmVzdCBoYWxsIHJ1dGdlcnM%3D',
    },
    {
      image: '/images/housing/liviApts.jpg',
      title: 'Livingston Apartments - Livingston Campus',
      link: 'https://www.youtube.com/watch?v=TWEcFjqQgBQ&pp=ygUdbGl2aW5nc3RvbiBhcGFydG1lbnRzIHJ1dGdlcnM%3D',
    },
    {
      image: '/images/housing/newellApts.jpg',
      title: 'Newell Apartments - Cook Campus',
      link: 'https://www.youtube.com/watch?v=goadsBx77v0&pp=ygUZbmV3ZWxsIGFwYXJ0bWVudHMgcnV0Z2Vycw%3D%3D',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCircleClick = (index: number) => {
    setActiveSlide(index);

    if (containerRef.current) {
      const slideWidth = containerRef.current.clientWidth / campusInfo.length;
      containerRef.current.scrollLeft = index * slideWidth;
    }
  };

  return (
    <motion.div
      className="relative w-[500px] mx-auto mt-10"
      style = {style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative w-[500px] flex absolute right-80 bottom-65">
        <div className="w-[500px] border-red-500 border-4 p-4" ref={containerRef}>
          {campusInfo.map((campus, index) => (
            <div
              key={index}
              className={`w-full ${index === activeSlide ? '' : 'hidden'}`}
            >
              <a href={campus.link} target="_blank" rel="noopener noreferrer">
                <Image src={campus.image} alt={campus.title} width={500} height={300} />
              </a>
              <div className="absolute bottom-0 left-0 w-[500px] bg-black bg-opacity-40 p-4">
                <p className="text-white">{campus.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[500px] h-16 mx-auto mt-2 flex items-center justify-center absolute right-80 bottom-65">
        <div className="flex space-x-2">
          {campusInfo.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full z-10 ${index === activeSlide ? 'bg-red-500' : ''}`}
              style={{ backgroundColor: index === activeSlide ? '#ff0000' : '#333A48' }} // Use your custom gray color here
              onClick={() => handleCircleClick(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Housing;
