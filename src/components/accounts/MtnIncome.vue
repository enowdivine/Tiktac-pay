<template>
  <div>
    <div class="type">
      <v-icon> mdi-view-dashboard </v-icon>
      <p class="name">MTN INCOME</p>
    </div>
    <p class="price">10000000 FCFA</p>
  </div>
</template>

<style scoped>
.type {
  display: flex;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
}
.name {
  margin: 5px 0 0 5px;
  color: #0f054c;
}

.type .v-icon {
  font-size: 20px;
  border-radius: 50px;
  padding: 5px;
  color: #0f054c;
  background-color: whitesmoke;
}
.price {
  font-size: 15px;
  font-weight: bold;
  text-align: left;
 margin: 5px 0 0 33px;
}
</style>
