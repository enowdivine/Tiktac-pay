<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(item, i) in 5" :key="i">
      <v-expansion-panel-header>Apps</v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="content">
          <div class="head">
            <div class="appDesc">
              <v-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="Profile Image"
                />
              </v-avatar>
              <span class="name">MY APP</span>
            </div>
            <EditApp />
          </div>
          <div class="clearfix"></div>

          <div>
            <v-row class="stats">
              <div class="box">
                <div class="mtnstat">
                  <MtnIncome />
                </div>
              </div>
              <div class="box">
                <div class="orangestat"><OrangeIncome /></div>
              </div>
              <div class="box">
                <div class="totalstat"><TotalAppIncome /></div>
              </div>
              <div class="btn-group">
                <v-btn color="white" class="widthdraw">Widthdraw</v-btn>

                <GeneratePaylink />
              </div>
            </v-row>
          </div>
          <div class="charts">
            <v-row>
              <v-col>
                <div class="graph">
                  <AppGraph />
                </div>
              </v-col>
             
            </v-row>
          </div>
          <div class="codes">
            <Codes />
          </div>
          <div class="btngroup">
            <AppRecentTransaction />
            <DeleteApp />
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import AppGraph from "./AppGraph.vue";
import Codes from "./Codes.vue";
import MtnIncome from "./MtnIncome.vue";
import OrangeIncome from "./OrangeIncome.vue";
import TotalAppIncome from "./TotalAppIncome.vue";
import GeneratePaylink from "../accounts/GeneratePaylink.vue";
import DeleteApp from "../accounts/DeleteApp.vue";
import EditApp from "../accounts/EditApp.vue";
import AppRecentTransaction from "../accounts/AppRecentTransaction.vue";

export default {
  components: {
    AppGraph,
    Codes,
    MtnIncome,
    OrangeIncome,
    TotalAppIncome,
    GeneratePaylink,
    DeleteApp,
    AppRecentTransaction,
    EditApp,
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
.v-expansion-panels {
  padding: 0;
}
.v-expansion-panel-content {
  background-color: whitesmoke;
  padding: 10px 0 0 0;
  margin: 0;
}

.appDesc {
  float: left;
  cursor: pointer;
}
.name {
  margin-left: 10px;
  font-weight: bold;
}

.stats{
  display: flex;
  justify-content: center;
}
.box{
  width: 25%;
  margin: 0.5%;
}
.btn-group{
  width: 18%;
  margin-top: 4px;
}

.mtnstat {
  background-color: white;
  padding: 10px;
  min-height: 40px;
  border-radius: 10px;
}
.orangestat {
  background-color: white;
  padding: 10px;
  min-height: 40px;
  border-radius: 10px;
}
.totalstat {
  background-color: white;
  padding: 10px;
  min-height: 40px;
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
.graph {
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
@media screen and (max-width: 768px) {
  .head{
    margin: 5px 0 0 0;
  }
  .v-expansion-panel-content {
    padding: 5px;
  }
  .box{
    width: 100%;
  }
  .btn-group{
  width: 100%;
  margin: 5px 0 5px 0;
}
  .chart {
    display: none;
  }
  .content {
    padding: 0;
    margin: 0;
  }
  .v-expansion-panels {
    width: 150%;
    margin: 0 0 0 0;
  }
  .v-expansion-panel-content {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .btngroup {
    width: 100%;
    display: none;
  }
  .graph {
    width: 220%;
  }
}
</style>
