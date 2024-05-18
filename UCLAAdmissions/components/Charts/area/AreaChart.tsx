import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    date: "June '23",
    "My GPA": 3.5,
    "Average GPA": 2.8,
  },
  {
    date: "June '24",
    "My GPA": 3.4,
    "Average GPA": 2.56,
  },
  {
    date: "June '25",
    "My GPA": 4.0,
    "Average GPA": 3.3,
  },
  {
    date: "June '26",
    "My GPA": 3.3,
    "Average GPA": 2.89,
  }
];

const valueFormatter = function (number: number) {
  return new Intl.NumberFormat("us").format(number).toString();
};

const Area = () => {
  const gpa = 3.55; // Set your desired GPA here
  const otherGpa = 2.8875

  return (
    <Card className = "border-xl border-blue-400 border-2 p-4">
      <Title>My GPA vs The Average GPA At My High School</Title>
      {/* Line under the title */}
      <div className="border-t border-gray-300 mt-2 py-2 text-sm text-gray-500 flex items-center">
        My Cumulative GPA:&nbsp; <span className = "text-blue-400"> {gpa.toFixed(2)}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Average Class GPA:&nbsp; <span className = "text-blue-400">{otherGpa.toFixed(2)}</span>
      </div>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={["My GPA", "Average GPA"]}
        colors={["blue", "green"]}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
};
export default Area;
