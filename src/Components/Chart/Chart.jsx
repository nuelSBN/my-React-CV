import { Bar } from "react-chartjs-2";

const data = {
  labels: ["HTML 5", "CSS 5", "BOOTSTRAP", "JAVASCRIPT", "REACT.JS", "VUEJS"],
  datasets: [
    {
      label: "Efficiency",
      data: [90, 80, 50, 60, 80, 60, 50, 80, 30, 40, 70],
      backgroundColor: [
        "#0d6efd",
        "#6610f2",
        "#d63384",
        "#dc3545",
        "#fd7e14",
        "#ffc107",
      ],
      // barThickness: 60,
    },
  ],
};

function Chart() {
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

export default Chart;
