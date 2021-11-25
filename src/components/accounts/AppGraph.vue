<template>
  <div class="chart-div">
    <LineChart
      :chartData="datacollection"
      :options="chartOptions"
      class="line-chart"
    />
  </div>
</template>

<script>
import LineChart from "./AppLineChart";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Numbers",
            borderColor: "#0f054c",
            borderWidth: 2,
            // fill: false,
            pointBackgroundColor: "0f054c",
            pointRadius: 4,
            pointHoverRadius: 8,
            PointHoverBorderColor: "#000",
            data: [100, 150, 300, 200, 258],
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: "#00055e",
          titleFontColor: "#ffffff",
          bodyFontColor: "#ffffff",
          position: "nearest",
          mode: "nearest",
          intersect: 0,
          bodySpacing: 4,
          xPadding: 20,
        },
      },
    };
  },
};
</script>

<style>
.line-chart {
  width: 100%;
  height: 100%;
}
</style>