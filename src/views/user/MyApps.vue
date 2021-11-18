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
      <NewAppBtn class="new-app" />
      <div class="app">
        <Apps />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/accounts/Slider.vue";
import NewAppBtn from "../../components/NewAppBtn.vue";
import GetApps from "../../components/GetApps.vue";
import Apps from "../../components/accounts/Apps.vue";
export default {
  name: "MyApps",
  components: {
    GetApps,
    Slider,
    Apps,
    NewAppBtn,
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
  align-items: left;
  font-weight: bold;
  margin: 10px 10px 10px -920px;
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
  margin: 10px 10px 10px 5px;
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

@media screen and (max-width: 768px) {
  .main {
    width: 82%;
    padding: 0;
    margin: 0;
  }
  .get-apps{
    display: none;
  }
}
</style>
