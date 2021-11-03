<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green" class="transactions mr-3" v-bind="attrs" v-on="on" dark
          >Transactions</v-btn
        >
      </template>

      <v-card>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
             
                <div class="body" v-for="i in 10" :key="i">
                  <div class="transaction">
                    <div class="desc">
                      <p class="type">Lorem ipsum dolor</p>
                      <p class="time">3 hours Ago</p>
                    </div>
                    <div class="amount"><p>+100 000 FCFA</p></div>
                  </div>
                </div>
              
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      paylink: "",
    };
  },
};
</script>

<style scoped>
.v-btn {
  font-weight: bold;
}
.paylink {
  font-weight: bold;
  margin-top: 5px;
  width: 80%;
}

.transaction {
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin: 0 10px 3px 10px;
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
.v-card{
  border-radius: 15px;
}
</style>
