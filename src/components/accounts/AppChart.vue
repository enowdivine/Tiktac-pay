<template>
  <div class="board">
    <div class="chart">
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value"
        color="#0f054c"
      >
        {{ value }}
      </v-progress-circular>
    </div>
    <div class="keys">
      <div class="mtn-group">
        <div class="mtn"></div>
        <span>MTN Momo</span>
      </div>
      <div class="orange-group">
        <div class="orange"></div>
        <span>Orange Money</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.board {
  display: flex;
}
.chart {
  width: 50%;
  float: left;
  margin-top: 20px;
}
.keys {
  width: 50%;
  margin-top: 50px;
}
.mtn {
  width: 20px;
  height: 20px;
  background-color: #0f054c;
}
.orange {
  width: 20px;
  height: 20px;
  background-color: red;
}
.mtn-group {
  font-weight: bold;
}
.mtn-group .mtn {
  float: left;
}
.orange-group {
  margin-top: 20px;
  font-weight: bold;
}
.orange-group .orange {
  float: left;
}
</style>
