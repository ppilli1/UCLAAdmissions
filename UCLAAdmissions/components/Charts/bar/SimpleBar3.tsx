import { BarChart, Card, Subtitle, Title } from "@tremor/react";

const chartdata = [
  {
    name: "My ACT Score",
    "AP Exam Score": 34,
  },
  {
    name: "Average ACT Score",
    "AP Exam Score": 30,
  }
];

const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

const SimpleBar3 = () => {
  const myAct = 34
  const avgAct = 30

  return(
    <Card className = "border-lg border-blue-400 border-2 p-4">
      <Title>ACT Scores</Title>
      <Subtitle>
        Here is a comparison of my ACT score to the average ACT score at my high school.
      </Subtitle>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["AP Exam Score"]}
        colors={["green"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
        minValue={0}  // Set the minimum value for the y-axis
        maxValue={36}  // Set the maximum value for the y-axis
      />
    </Card>
  )
}

export default SimpleBar3;
