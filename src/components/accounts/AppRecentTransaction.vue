<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          small
          class="transactions mr-3"
          v-bind="attrs"
          v-on="on"
          dark
          >Transactions</v-btn
        >
      </template>

      <v-card>
        <v-card-title>
          Transactions
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
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
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Transaction Type", value: "type" },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "Amount", value: "amount" },
      ],
      desserts: [
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "withdrawal",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "Received",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
        {
          name: "Enow Divine",
          type: "sent",
          date: "12 / 06 / 2021",
          time: "13:00",
          amount: 40000,
        },
      ],
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
.v-card {
  border-radius: 15px;
}
</style>
