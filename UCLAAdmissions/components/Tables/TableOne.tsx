import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/fbla.jpg",
    name: "FBLA",
    position: "President",
    years: "2024-25",
  },
  {
    logo: "/images/brand/computerClub.png",
    name: "Computer Club",
    position: "Vice President",
    years: "2023-25",
  },
  {
    logo: "/images/brand/modelUn.jpg",
    name: "Model UN",
    position: "Co-Founder",
    years: "2022-25",
  },
  {
    logo: "/images/brand/keyClub.png",
    name: "Key Club",
    position: "Treasurer",
    years: "2024-25",
  },
  {
    logo: "/images/brand/tennis.jpg",
    name: "Varsity Tennis",
    position: "Captain",
    years: "2024-25",
  },
];

const TableOne = () => {
  const fbla = "I was elected the President of FBLA for the 2024-2025 academic year, which is also my senior year at high school."
  const compClub = "I was elected the Vice President of Computer Club for the 2023-2024 and 2024-2025 academic years, which are also my junior and senior years at high school."
  const modelUn = "During my sophomore year of high school, I co-founded, established, and brought Model United Nations to my high school."
  const keyClub = "I was elected the Treasurer of Key Club for the 2024-2025 academic year, which is also my senior year at high school."
  const tennis = "I was elected the Captain of the Men's Varsity Tennis Team during my senior year at high school (2024-2025 academic/school year)."

  return (
    <div className="rounded-xl border-blue-400 border-2 bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-8.5 text-xl font-semibold text-blue-400 dark:text-white">
        My Extracurricular Activities
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5 col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Clubs / Activities
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5 col-span-1">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Positions
            </h5>
          </div>
          <div className="p-2.5 text-center sm:p-5 xl:p-5 col-span-2">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Years Participated
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5 col-span-2">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-blue-400 dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 col-span-1">
              <p className="text-meta-3">{brand.position}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5 col-span-2">
              <p className="text-meta-5">{brand.years}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;