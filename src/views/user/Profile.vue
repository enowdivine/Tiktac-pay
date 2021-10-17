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
      <UserProfile />
    </div>
  </div>
</template>

<script>
import Slider from "../../components/accounts/Slider.vue";
import GetApps from "../../components/GetApps.vue";
import UserProfile from "../../components/accounts/UserProfile.vue";
export default {
  name: "MyApps",
  components: {
    GetApps,
    Slider,
    UserProfile,
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
</style>
