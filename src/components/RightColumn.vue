<template>
  <div class="board">
    <div class="profile">
      <v-icon>mdi-bell</v-icon>
      <p class="name"><a href="#">Enow Divine</a></p>
      <a href="#">
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt=""
      /></a>
    </div>

    <div class="card">
      <img src="/images/visa.png" alt="" />
    </div>

    <div class="transaction">
      <div class="recent">
        <p>Recent Transactions</p>
      </div>
      <div class="all">
        <p><a href="#">See All</a></p>
      </div>
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
.board {
  padding-bottom: 50px;
}
.v-icon {
  float: left;
  margin: 10px 0 0 20px;
  padding: 5px;
  background-color: whitesmoke;
  border-radius: 50px;
}
.profile {
  padding: 30px 0 0 0;
}
.name {
  font-weight: bold;
  font-size: 15px;
  width: 70%;
  float: left;
  margin: 13px -20px 0 -30px;
  text-align: right;
}
.name a {
  text-decoration: none;
  color: black;
}
.profile img {
  border-radius: 50px;
  margin: 0 20px 0 0;
  width: 50px;
  float: right;
}
.transaction {
  margin-top: 20px;
}
.card {
  margin-top: 60px;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}
.card img {
  width: 100%;
  height: 100%;
}
.recent {
  width: 60%;
  float: left;
}
.recent p {
  color: grey;
}
.all p a {
  text-decoration: none;
  color: grey;
}
</style>
