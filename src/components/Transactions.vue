<template>
  <div class="body">
    <div class="transaction">
      <div class="desc">
        <p class="type">Lorem ipsum dolor</p>
        <p class="time">3 hours Ago</p>
      </div>
      <div class="amount"><p>+100 000 FCFA</p></div>
    </div>
    <div class="transaction">
      <div class="desc">
        <p class="type">Lorem ipsum dolor</p>
        <p class="time">3 hours Ago</p>
      </div>
      <div class="amount"><p>+100 000 FCFA</p></div>
    </div>
    <div class="transaction">
      <div class="desc">
        <p class="type">Lorem ipsum dolor</p>
        <p class="time">3 hours Ago</p>
      </div>
      <div class="amount"><p>+100 000 FCFA</p></div>
    </div>
    <div class="transaction">
      <div class="desc">
        <p class="type">Lorem ipsum dolor</p>
        <p class="time">3 hours Ago</p>
      </div>
      <div class="amount"><p>+100 000 FCFA</p></div>
    </div>
    <div class="transaction">
      <div class="desc">
        <p class="type">Lorem ipsum dolor</p>
        <p class="time">3 hours Ago</p>
      </div>
      <div class="amount"><p>+100 000 FCFA</p></div>
    </div>
    <div class="transaction">
      <div class="desc">
        <p class="type">Lorem ipsum dolor</p>
        <p class="time">3 hours Ago</p>
      </div>
      <div class="amount"><p>+100 000 FCFA</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transactions",
  data: () => ({}),
};
</script>

<style scoped>
.transaction {
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  margin: 0 20px 3px 20px;
  display: flex;
}
.desc {
  width: 50%;
}
.type {
  margin: 0;
  text-align: left;
  font-size: 15px;
}
.desc .time {
  margin: 0;
  text-align: left;
  font-size: 15px;
  color: grey;
}
.amount {
  width: 50%;
}
.amount p {
  text-align: right;
  font-size: 13px;
  margin-top: 10px;
  color: green;
}
</style>
