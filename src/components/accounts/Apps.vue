<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(item, i) in 5" :key="i">
      <v-expansion-panel-header>Apps</v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="content">
          <div class="haed">
            <div class="appDesc">
              <v-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <span class="name">MY APP</span>
            </div>
            <v-btn color="white" fab depressed small class="edit"
              ><v-icon color="green">mdi-pencil</v-icon></v-btn
            >
          </div>
          <div class="clearfix"></div>

          <div class="stats">
            <v-row>
              <v-col>
                <div class="mtnstat">
                  <MtnIncome />
                </div>
              </v-col>
              <v-col>
                <div class="orangestat"><OrangeIncome /></div>
              </v-col>
              <v-col>
                <div class="totalstat"><TotalAppIncome /></div>
              </v-col>
              <v-col>
                <div class="btn-group">
                  <v-btn color="white" class="widthdraw">Widthdraw</v-btn>
                  <v-btn color="#0f054c" dark class="paylink">Paylink</v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="charts">
            <v-row>
              <v-col>
                <div class="graph">
                  <AppGraph />
                </div>
              </v-col>
              <v-col
                ><div class="chart">
                  <AppChart /></div
              ></v-col>
            </v-row>
          </div>
          <div class="codes">
            <Codes />
          </div>
          <div class="btngroup">
            <v-btn color="green" dark class="transactions">Transactions</v-btn>
            <v-btn color="red" dark class="del">Delete App</v-btn>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import AppGraph from "./AppGraph.vue";
import AppChart from "./AppChart.vue";
import Codes from "./Codes.vue";
import MtnIncome from "./MtnIncome.vue";
import OrangeIncome from "./OrangeIncome.vue";
import TotalAppIncome from "./TotalAppIncome.vue";

export default {
  components: {
    AppGraph,
    AppChart,
    Codes,
    MtnIncome,
    OrangeIncome,
    TotalAppIncome,
  },
};
</script>

<style scoped>
.clearfix {
  clear: both;
  display: block;
  height: 20px;
  visibility: hidden;
  content: "";
}
.v-expansion-panel-content {
  background-color: whitesmoke;
}
.content {
  padding: 15px;
  background-color: whitesmoke;
}
.appDesc {
  float: left;
  cursor: pointer;
}
.name {
  margin-left: 10px;
  font-weight: bold;
}
.edit {
  float: right;
}
.mtnstat {
  background-color: white;
  padding: 10px;
  min-height: 80px;
  border-radius: 10px;
}
.orangestat {
  background-color: white;
  padding: 10px;
  min-height: 80px;
  border-radius: 10px;
}
.totalstat {
  background-color: white;
  padding: 10px;
  min-height: 80px;
  border-radius: 10px;
}
.widthdraw {
  font-weight: bold;
  width: 80%;
}
.paylink {
  font-weight: bold;
  margin-top: 5px;
  width: 80%;
}
.graph,
.chart {
  min-height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
.codes {
  background-color: white;
  min-height: 530px;
  margin-top: 15px;
  padding: 20px;
  border-radius: 10px;
}
.btngroup {
  display: flex;
  margin-top: 20px;
}
.transactions {
  font-weight: bold;
  margin-right: 5px;
}
.del {
  font-weight: bold;
}
</style>
