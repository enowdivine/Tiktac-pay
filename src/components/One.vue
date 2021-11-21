<template>
  <div class="board">
    <div class="type">
      <v-icon> mdi-view-dashboard </v-icon>
      <p class="name">Lorem ipsum</p>
    </div>
    <p class="price">1000000</p>
  </div>
</template>

<style scoped>
.board {
  display: flex;
}
.type {
  width: 70%;

  margin-top: 15px;
  margin-bottom: -40px;
  padding: 0;
  display: flex;
  font-size: 13px;
  float: left;
}
.name {
  color: grey;
  margin: 2px 0 0 4px;
}
.type .v-icon {
  float: left;
  font-size: 18px;
  border-radius: 50px;
  padding: 5px;
  background-color: whitesmoke;
  margin-bottom: 50px;
}
.price {
  font-size: 15px;
  margin-top: 16px;
  font-weight: bold;
  float: right;
}
</style>
