<template>
  <div class="billing-board">
    <v-row>
      <v-col>
        <div class="left-colimn">
          <LeftColumn />
        </div>
      </v-col>
      <v-col>
        <div class="right-column">
          <h3>testing</h3>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LeftColumn from "../../components/LeftColumn.vue";

export default {
  name: "Billing",
  components: {
    LeftColumn,
  },
};
</script>

<style scoped>
.billing-board {
  background-color: whitesmoke;
  width: 100%;
}
.left-column {
  width: 20%;
  height: 100%;
  background-color: red;
}
.right-column {
  width: 80%;
  height: 100%;
  background-color: blue;
}
</style>
