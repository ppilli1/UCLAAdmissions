import { BarChart, Card, Subtitle, Title } from "@tremor/react";

const chartdata = [
  {
    name: "AP Biology",
    "AP Exam Score": 4,
  },
  {
    name: "AP Chemistry",
    "AP Exam Score": 3,
  },
  {
    name: "AP English Language and Composition",
    "AP Exam Score": 5,
  },
  {
    name: "AP Calculus BC",
    "AP Exam Score": 4,
  },
  {
    name: "AP United States History",
    "AP Exam Score": 5,
  },
  {
    name: "AP Psychology",
    "AP Exam Score": 3,
  },
  {
    name: "AP Computer Science A",
    "AP Exam Score": 4,
  },
];

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

const SimpleBar = () => (
  <Card>
    <Title>AP Exam Scores</Title>
    <Subtitle>
      Here are all the AP Exam Scores I received from the AP courses I have taken throughout my time at High School.
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["AP Exam Score"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
      minValue={1}  // Set the minimum value for the y-axis
      maxValue={5}  // Set the maximum value for the y-axis
    />
  </Card>
);

export default SimpleBar;
