import { Bar } from "react-chartjs-2";

const data = {
  labels: ["NODEJS", "EXPRESS", "NEST JS", "MONGODB", "MONGOOSE"],
  datasets: [
    {
      label: "Efficiency",
      data: [80, 80, 60, 55, 70],
      backgroundColor: ["#198754", "#20c997", "#0dcaf0", "#dc3545", "#212529"],
    },
  ],
};

function Chart2() {
  return (
    <>
      <Bar
        data={data}
        options={{ maintainAspectRatio: false }}
        width={200}
        height={600}
      />
    </>
  );
}

export default Chart2;
