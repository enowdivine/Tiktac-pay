<template>
  <div>
    <div class="image">
      <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="" />
    </div>
    <div class="txt">
      <p>Get Mobile Apps</p>
    </div>
    <div class="links">
      <a href="#">
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt=""
      /></a>
      <a href="#"
        ><img src="https://randomuser.me/api/portraits/men/85.jpg" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetApps",
};
</script>

<style scoped>
.image img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}
.txt p {
  font-weight: bold;
  font-size: 15px;
}
.links img {
  border-radius: 50px;
  width: 50px;
  margin: 4px;
}
</style>
