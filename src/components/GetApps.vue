<template>
  <div class="board">
    <div class="image">
      <img src="/images/board.png" alt="" />
    </div>
    <div class="txt">
      <p>Get Mobile Apps</p>
    </div>
    <div class="links">
      <a href="#"> <img class="google" src="/images/google1.png" alt="" /></a>
      <a href="#"><img class="apple" src="/images/apple1.jpg" alt="" /></a>
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
.links .google {
  width: 65px;
}

</style>
