<template>
  <div class="board">
    <div class="sidebar">
      <div class="links">
        <Slider />
      </div>
      <div class="get-apps">
        <GetApps />
      </div>
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
.links {
  margin-left: 10px;
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
}
@media screen and (max-width: 768px) {
  .get-apps{
    display: none;
  }
}
</style>
