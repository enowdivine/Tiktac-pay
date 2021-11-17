<template>
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
</template>

<script>
export default {
  data() {
    return {
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

