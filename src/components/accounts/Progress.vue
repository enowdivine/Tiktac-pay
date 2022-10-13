<template>
  <div id="app">
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import PieChart from "./PieChart.vue";
export default {
  name: "App",
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["MTN", "Orange"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["green", "red"],
            data: [10, 5]
          }
        ]
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
