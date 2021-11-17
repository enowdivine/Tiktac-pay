<template>
  <div>
    <div class="type">
      <v-icon> mdi-view-dashboard </v-icon>
      <p class="name">Lorem ipsum</p>
    </div>
    <p class="price">1000000</p>
  </div>
</template>

<style scoped>
.type {
  width: 55%;
  margin-top: 0px;
  float: left;
  font-size: 13px;
}
.name {
  color: grey;
}
.type .v-icon {
  float: left;
  font-size: 18px;
  border-radius: 50px;
  padding: 5px;
  background-color: whitesmoke;
  margin-bottom: 40px;
}
.price {
  font-size: 15px;
  margin-top: 16px;
  font-weight: bold;
}
</style>
