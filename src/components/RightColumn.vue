<template>
  <div>
    <v-list-item class="px-2">
      <v-list-item-title>Enow Divine</v-list-item-title>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <div class="card">
      <img src="/images/visa.png" alt="" />
    </div>

    <div>
      <Transactions />
    </div>
  </div>
</template>

<script>
import Transactions from "./Transactions.vue";
export default {
  components: {
    Transactions,
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}
.card img {
  width: 100%;
  height: 100%;
}
</style>
