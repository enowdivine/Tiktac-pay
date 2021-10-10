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
      <h2>Manage Applications</h2>
      <v-btn color="grey" dark depressed class="new-app">New App</v-btn>
      <div class="app" v-for="i in 6" :key="i">
        <div class="name">Google</div>
        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          maiores rerum ratione et, esse vitae perferendis, natus, totam
          reprehenderit ipsa culpa corporis nam. Ipsam, fugiat voluptates. Atque
          veritatis quos debitis?
        </div>
        <div class="actions">
          <v-icon small class="mr-2 edit">mdi-pencil</v-icon>
          <v-icon small class="del">mdi-delete</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/accounts/Slider.vue";
import GetApps from "../../components/GetApps.vue";
export default {
  name: "Apps",
  components: {
    GetApps,
    Slider,
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
  min-height: 700px;
  background-color: white;
}
.get-apps {
  background-color: whitesmoke;
  width: 80%;
  margin: 0 auto;
  min-height: 200px;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.main {
  width: 82%;
  min-height: 700px;
  background-color: whitesmoke;
  float: right;
}
.app {
  background-color: white;
  margin: 10px 20px 10px 30px;
  padding: 10px 0 10px 0;
  display: flex;
}
.name {
  width: 20%;
  text-align: left;
  padding: 10px;
  font-weight: bold;
}
.desc {
  width: 70%;
  padding: 10px;
  text-align: left;
  font-size: 15px;
}
.actions {
  width: 10%;
  padding: 10px;
}
.edit {
  color: green;
  cursor: pointer;
  padding: 10px;
  background-color: whitesmoke;
}
.del {
  color: red;
  cursor: pointer;
  padding: 10px;
  background-color: whitesmoke;
}
</style>
