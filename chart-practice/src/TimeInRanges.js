import React, { useEffect } from "react";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.plugins.register(ChartDataLabels);

let stackedBar;

export class TIRChart extends React.Component {
  constructor(props) {
    super(props);
  }

  chartRef = React.createRef();

  // useEffect(() => {
  //     this.buildChart();
  // }, [input]);

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    if (typeof stackedBar !== "undefined") stackedBar.destroy();

    stackedBar = new Chart(myChartRef, {
      type: "bar",
      data: {
        datasets: [
          {
            // barPercentage: 0.5,
            // barThickness: 20,
            // maxBarThickness: 40,
            // minBarLength: 20,
            label: "Very Low",
            hours: "(1h 26min)", // number of hours
            data: [6], // percent of day
            range: "(<54 mg/dL)", // need to make dynamic based on reading type (device type?)
            align: 10, // special variable for datalabels
            backgroundColor: "maroon",
          },
          {
            // barPercentage: 0.5,
            // barThickness: 20,
            // maxBarThickness: 40,
            // minBarLength: 20,
            label: "Low",
            hours: "(58min)",
            data: [4],
            range: "(54-69 mg/dL)",
            align: 5,
            backgroundColor: "red",
          },
          {
            // barPercentage: 0.5,
            // barThickness: 20,
            // maxBarThickness: 40,
            // minBarLength: 20,
            label: "Target",
            hours: "(11h 17min)",
            data: [47],
            range: "(70-180 mg/dL)",
            align: 0,
            backgroundColor: "green",
          },
          {
            // barPercentage: 0.5,
            // barThickness: 20,
            // maxBarThickness: 40,
            // minBarLength: 20,
            label: "High",
            hours: "(5h 31min)",
            data: [23],
            range: "(181-250 mg/dL)",
            align: -5,
            backgroundColor: "yellow",
          },
          {
            // barPercentage: 0.5,
            // barThickness: 20,
            // maxBarThickness: 40,
            // minBarLength: 20,
            label: "Very High",
            hours: "(4h 48min)",
            data: [20],
            range: "(>250 mg/dL)",
            align: -10,
            backgroundColor: "orange",
          },
        ],
      },
      options: {
        tooltips: {
          enabled: false,
        },
        layout: {
          padding: {
            left: 50,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              position: "top",
              offset: false,
              // barPercentage: 0.99,
              barThickness: 100,
              maxBarThickness: 200,
              minBarLength: 20,
            },
          ],
          yAxes: [
            {
              stacked: true,
              display: false,
            },
          ],
        },
        legend: {
          display: false,
          position: "right",
          reverse: true,
        },
        plugins: {
          datalabels: {
            labels: {
              title: {
                color: "gray",
                anchor: "center",
                align: 0,
                // function (context) {
                //     return context.chart.data.datasets[context.datasetIndex].align;
                // },
                offset: 50,
                font: {
                  weight: "bold",
                  size: 14,
                },
                formatter: function (value, context) {
                  return context.chart.data.datasets[context.datasetIndex]
                    .label;
                  // + " " + context.chart.data.datasets[context.datasetIndex].range
                  // + " " + Math.round(value) + '%'
                  // + " " + context.chart.data.datasets[context.datasetIndex].hours;
                } /*  */,
              },

              range: {
                color: "gray",
                anchor: "center",
                align: 0,
                offset: 135,
                font: {
                  weight: "italic",
                  size: 9,
                },
                formatter: function (value, context) {
                  return (
                    context.chart.data.datasets[context.datasetIndex].range +
                    "........"
                  );
                },
              },
              value: {
                color: "black",
                anchor: "center",
                align: 0,
                offset: 220,
                font: {
                  weight: "bold",
                  size: 11,
                },
                formatter: function (value, context) {
                  return Math.round(value) + "%";
                },
              },
              hours: {
                color: "gray",
                anchor: "center",
                align: 0,
                offset: 250,
                formatter: function (value, context) {
                  return context.chart.data.datasets[context.datasetIndex]
                    .hours;
                },
              },
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <div className="">
        <h1> HERE WE ARE</h1>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export const TIRChartFunc = () => {
  let chartRef = React.createRef();

  useEffect(() => {
    buildChart();
  }, []);

  function buildChart() {
    const myChartRef = chartRef.current.getContext("2d");

    if (typeof stackedBar !== "undefined") stackedBar.destroy();

    stackedBar = new Chart(myChartRef, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Very Low",
            hours: "(1h 26min)", // number of hours
            data: [6], // percent of day
            range: "(<54 mg/dL)", // need to make dynamic based on reading type (device type?)
            align: 10, // special variable for datalabels
            backgroundColor: "maroon",
          },
          {
            label: "Low",
            hours: "(58min)",
            data: [4],
            range: "(54-69 mg/dL)",
            align: 5,
            backgroundColor: "red",
          },
          {
            label: "Target",
            hours: "(11h 17min)",
            data: [47],
            range: "(70-180 mg/dL)",
            align: 0,
            backgroundColor: "green",
          },
          {
            label: "High",
            hours: "(5h 31min)",
            data: [23],
            range: "(181-250 mg/dL)",
            align: -5,
            backgroundColor: "yellow",
          },
          {
            label: "Very High",
            hours: "(4h 48min)",
            data: [20],
            range: "(>250 mg/dL)",
            align: -10,
            backgroundColor: "orange",
          },
        ],
      },
      options: {
        tooltips: {
          enabled: false,
        },
        layout: {
          padding: {
            left: 50,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              position: "top",
              offset: false,
              barThickness: 100,
              maxBarThickness: 200,
              minBarLength: 20,
            },
          ],
          yAxes: [
            {
              stacked: true,
              display: false,
            },
          ],
        },
        legend: {
          display: false,
          position: "right",
          reverse: true,
        },
        plugins: {
          datalabels: {
            labels: {
              title: {
                color: "gray",
                anchor: "center",
                align: 0,
                offset: 50,
                font: {
                  weight: "bold",
                  size: 14,
                },
                formatter: function (value, context) {
                  return context.chart.data.datasets[context.datasetIndex]
                    .label;
                },
              },

              range: {
                color: "gray",
                anchor: "center",
                align: 0,
                offset: 135,
                font: {
                  weight: "italic",
                  size: 9,
                },
                formatter: function (value, context) {
                  return (
                    context.chart.data.datasets[context.datasetIndex].range +
                    "........"
                  );
                },
              },
              value: {
                color: "black",
                anchor: "center",
                align: 0,
                offset: 220,
                font: {
                  weight: "bold",
                  size: 11,
                },
                formatter: function (value, context) {
                  return Math.round(value) + "%";
                },
              },
              hours: {
                color: "gray",
                anchor: "center",
                align: 0,
                offset: 250,
                formatter: function (value, context) {
                  return context.chart.data.datasets[context.datasetIndex]
                    .hours;
                },
              },
            },
          },
        },
      },
    });
  }

  return (
    <div className="">
      <h1> HERE WE ARE</h1>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};
