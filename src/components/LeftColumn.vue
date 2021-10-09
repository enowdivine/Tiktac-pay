<template>
  <div class="board">
    <div class="links">
      <Slider />
    </div>
    <div class="get-apps">
      <GetApps />
    </div>
  </div>
</template>

<script>
import Slider from "../components/accounts/Slider.vue";
import GetApps from "./GetApps";
export default {
  name: "LeftColumn",
  components: {
    GetApps,
    Slider,
  },
};
</script>

<style scoped>
.board {
  padding-bottom: 120px;
}
.links {
  margin-left: 20px;
  padding-top: 30px;
}
.headx {
  font-weight: bold;
}

.get-apps {
  background-color: whitesmoke;
  width: 80%;
  margin: 0 auto;
  min-height: 200px;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
