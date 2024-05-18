import { AWARD } from "@/types/awards";
import Image from "next/image";

const awardData: AWARD[] = [
  {
    logo: "/images/brand/mathOlympiad.jpg",
    award: "American Mathematics Olympiad Winner"
  },
  {
    logo: "/images/brand/fbla.jpg",
    award: "FBLA Nationals Finalist"
  },
  {
    logo: "/images/brand/second.png",
    award: "High School Salutatorian"
  },
  {
    logo: "/images/brand/aws.jpg",
    award: "Amazon Web Services Certification"
  },
  {
    logo: "/images/brand/python.png",
    award: "Python Certification"
  },
];

const TableFour = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
       My Awards
      </h4>

      <div className="flex flex-col">

        {awardData.map((award, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === awardData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={award.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {award.award}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableFour;