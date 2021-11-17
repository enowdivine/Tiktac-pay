<template>
  <div class="my-account">
    <div class="left">
      <div class="left-column">
        <LeftColumn />
      </div>
    </div>

    <div class="middle scroller">
      <v-row>
        <v-col
          ><div class="name">
            <h2>Hello Divine</h2>
            <p>Here you can manage all your transactions</p>
          </div></v-col
        >
        <v-col
          ><div class="search">
            <input type="text" name="search" placeholder="Search..." /></div
        ></v-col>
      </v-row>
      <v-row class="earnings">
        <v-col
          ><div class="one"><One /></div
        ></v-col>
        <v-col
          ><div class="two"><One /></div
        ></v-col>
        <v-col
          ><div class="three"><One /></div
        ></v-col>
      </v-row>
      <v-row>
        <div class="middle-column">
          <div>
            <Graph />
          </div>
        </div>
      </v-row>
      <v-row>
        <v-col>
          <div class="map">
            <div>
              <Location />
            </div>
          </div>
        </v-col>
        <v-col
          ><div class="chart">
            <div>
              <Progress />
            </div></div
        ></v-col>
      </v-row>
    </div>
    <div class="right">
      <div class="right-column scroller">
        <RightColumn />
      </div>
    </div>
  </div>
</template>

<script>
import One from "../../components/One.vue";
import LeftColumn from "../../components/LeftColumn";
import RightColumn from "../../components/RightColumn";
import Graph from "../../components/accounts/Graph";
import Progress from "../../components/accounts/Progress";
import Location from "../../components/accounts/Location";
export default {
  name: "Dashboard",
  components: {
    LeftColumn,
    RightColumn,
    One,
    Graph,
    Progress,
    Location,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style scoped>
.my-account {
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
}

.name {
  text-align: left;
}

.name p {
  font-size: 15px;
}

.search input {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  outline: none;
}
.one,
.two,
.three {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  min-height: 30px;
}

.left {
  width: 18%;
  height: 100vh;
}
.middle {
  width: 70%;
  padding: 40px;
}
.right {
  width: 30%;
}
.left-column {
  height: 100vh;
  background-color: white;
}
.middle-column {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  min-height: 100px;
  width: 100%;
}
.right-column {
  background-color: white;
}
.map {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  min-height: 300px;
  width: 150%;
}
.chart {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  min-height: 300px;
  width: 50%;
  float: right;
}

.scroller {
  height: 100vh;
  overflow-y: scroll;
}

@media screen and (max-width: 768px) {
  .right, .chart {
    display: none;
    margin: 0;
    padding: 0;
  }
  .middle {
    width: 100%;
    padding: 10px;
  }
  .map {
  width: 220%;
  max-height: 100px;
}
}
</style>
