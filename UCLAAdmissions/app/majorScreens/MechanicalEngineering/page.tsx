"use client";
import Image from 'next/image';

const MechanicalEngineering: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-4xl font-bold mb-8">Mechanical Engineering</h1>
        
        {/* Use next/image to display the SVG */}
        <div className="relative w-80 h-80">
          <Image
            src="/images/majors/MechanicalEngineering.svg"
            alt="Mechanical Engineering"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Add additional content or styling as needed */}
      </div>
    </div>
  );
};

export default MechanicalEngineering;