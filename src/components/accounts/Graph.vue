<template>
  <v-card class="mx-auto text-center" color="#0f054c" dark max-width="600">
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="whitesmoke"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> ${{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
    //  value: [
    //    "Jan",
    //    "Feb",
    //    "Mar",
    //    "Apr",
    //    "May",
    //    "Jun",
    //    "Jul",
    //    "Aug",
    //    "Sep",
    //    "Oct",
    //    "Nov",
    //    "Dec",
    //  ],
  }),
};
</script>
