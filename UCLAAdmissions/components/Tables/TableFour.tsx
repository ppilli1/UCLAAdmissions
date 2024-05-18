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
  const awardCerts1 = "American Mathematics Olympiad Winner"
  const awardCerts2 = "FBLA Nationals Finalist"
  const awardCerts3 = "Salutatorian of my High School"
  const awardCerts4 = "Amazon Web Services Certification"
  const awardCerts5 = "Python Certification"

  return (
    <div className="rounded-xl border-blue-400 border-2 bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-blue-400 dark:text-white">
        My Awards and Certifications
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
            <div className="flex items-center gap-3 p-2.5 xl:p-6 xl:pl-0 whitespace-nowrap">
              <div className="flex-shrink-0">
                <Image src={award.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="flex-grow text-blue-400 dark:text-white">
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
