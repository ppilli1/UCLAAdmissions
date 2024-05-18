"use client";
import Image from 'next/image';

const SupplyChainManagement: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-4xl font-bold mb-8">Supply Chain Management</h1>
        
        {/* Use next/image to display the SVG */}
        <div className="relative w-80 h-80">
          <Image
            src="/images/majors/SupplyChainManagement.svg"
            alt="Supply Chain Management"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Add additional content or styling as needed */}
      </div>
    </div>
  );
};

export default SupplyChainManagement;