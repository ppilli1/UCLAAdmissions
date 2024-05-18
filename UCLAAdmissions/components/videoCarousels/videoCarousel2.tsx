import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CampusFoodInfo = ({ style }: { style?: React.CSSProperties }) => {
  const campusFoodInfo = [
    {
      image: '/images/campusFood/buschDhall.jpeg',
      title: 'Busch Dining Hall',
      link: 'https://www.youtube.com/watch?v=Z9y4FCmwMv0&pp=ygUZYnVzY2ggZGluaW5nIGhhbGwgcnV0Z2Vycw%3D%3D',
    },
    {
      image: '/images/campusFood/liviDhall.jpg',
      title: 'Livingston Dining Hall',
      link: 'https://www.youtube.com/watch?v=igBbSsBcYHM&pp=ygUWbGl2aW5nc3RvbiBkaW5pbmcgaGFsbA%3D%3D',
    },
    {
      image: '/images/campusFood/douglassDhall.jpg',
      title: 'Neilson Dining Hall',
      link: 'https://www.youtube.com/watch?v=QR23t3LDLKQ&pp=ygUbbmVpbHNvbiBkaW5pbmcgaGFsbCBydXRnZXJz',
    },
    {
      image: '/images/campusFood/atrium.jpg',
      title: 'College Avenue Atrium',
      link: 'https://www.youtube.com/watch?v=ufra9GklwyM&pp=ygUdcnV0Z2VycyBjb2xsZWdlIGF2ZW51ZSBhdHJpdW0%3D'
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCircleClick = (index: number) => {
    setActiveSlide(index);

    if (containerRef.current) {
      const slideWidth = containerRef.current.clientWidth / campusFoodInfo.length;
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
      <div className="relative w-[500px] flex absolute left-80 bottom-65">
        <div className="w-[500px] border-red-500 border-4 p-4" ref={containerRef}>
          {campusFoodInfo.map((campus, index) => (
            <div
              key={index}
              className={`w-full ${index === activeSlide ? '' : 'hidden'}`}
            >
              <a href={campus.link} target="_blank" rel="noopener noreferrer">
                <Image src={campus.image} alt={campus.title} width={500} height={300}/>
              </a>
              <div className="absolute bottom-0 left-0 w-[500px] bg-black bg-opacity-40 p-4">
                <p className="text-white">{campus.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[500px] h-16 mx-auto mt-2 flex items-center justify-center absolute left-80 bottom-65">
        <div className="flex space-x-2">
          {campusFoodInfo.map((_, index) => (
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

export default CampusFoodInfo;
