import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { Graph } from "react-d3-graph";

const Chart = ({ chartData, outputGraphData, GraphConfig }) => {
  const data = {
    labels: chartData.map((x) => x.person1),
    datasets: [
      {
        label: "How Much Group Owe",
        data: chartData.map((x) => x.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.graphContainer}>
          <div className={styles.graphHeading}>How Much Do A Person Owe?</div>
          <div className={styles.graph}>
            <Doughnut
              data={data}
              width={200}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
        <div className={styles.graphContainer2}>
          <h5 className={styles.graphHeading}>
            Graph Generated From The Solution Of Algorithm
          </h5>
          <Graph
            id="graph-id-output" // id is mandatory
            data={outputGraphData}
            config={GraphConfig}
          />
        </div>
      </div>
    </>
  );
};

export default Chart;
