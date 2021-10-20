<template>
  <div class="board">
    <div class="side-bar">
      <div class="slider">
        <Slider />
      </div>
      <div class="get-apps">
        <GetApps />
      </div>
    </div>
    <div class="main">
      <h2>Transaction History</h2>
      <div class="transactions">
        <Transactions />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/accounts/Slider.vue";
import GetApps from "../../components/GetApps.vue";
import Transactions from "../../components/Transactions.vue";
export default {
  name: "Transaction",
  components: {
    GetApps,
    Slider,
    Transactions,
  },
};
</script>

<style scoped>
.board {
  background-color: whitesmoke;
}
h2 {
  margin: 20px 0 10px 30px;
  text-align: left;
}
.new-app {
  width: 96%;
  margin: 10px 10px 10px 30px;
}
.side-bar {
  width: 18%;
  float: left;
  padding-left: 10px;
  min-height: 200px;
  background-color: white;
}
.get-apps {
  background-color: whitesmoke;
  width: 80%;
  margin: 0 auto;
  min-height: 200px;
  border-radius: 10px;
}
.main {
  width: 82%;
  min-height: 200px;
  background-color: whitesmoke;
  float: right;
  height: 100vh;
  overflow-y: scroll;
}
.app {
  background-color: white;
  margin: 10px 20px 10px 30px;
  padding: 10px 0 10px 0;
  display: flex;
}
.transactions {
  margin-left: 15px;
}
</style>
