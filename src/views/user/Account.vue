<template>
  <div class="my-account">
    <v-row>
      <div class="left">
        <div class="left-column">
          <LeftColumn />
        </div>
      </div>
      <div class="middle">
        <v-row>
          <v-col
            ><div class="name">
              <h3>Hello Divine</h3>
              <p>Here you can manage all your transactions</p>
            </div></v-col
          >
          <v-col
            ><div class="search">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field></div
          ></v-col>
        </v-row>
        <v-row>
          <v-col><div class="one">one</div></v-col>
          <v-col><div class="two">two</div></v-col>
          <v-col><div class="three">three</div></v-col>
        </v-row>
        <v-row>
          <div class="middle-column">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            excepturi ducimus cumque voluptatem dolorem repellendus fuga,
            doloremque accusantium aut fugiat repellat esse nulla aperiam
            necessitatibus molestias laborum, nemo totam ratione.
          </div>
        </v-row>
        <v-row>
          <v-col>
            <div class="map">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              nam molestiae dolor atque provident sequi dolorem quibusdam
              perferendis quis veniam ut, quaerat fugiat qui itaque, illo
              doloribus ducimus quas. Excepturi.
            </div>
          </v-col>
          <v-col
            ><div class="chart">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate ut quos nesciunt, aperiam accusamus rem tenetur ipsum,
              saepe facilis voluptates dignissimos explicabo molestias.
              Consequuntur tenetur fuga rem delectus esse labore?
            </div></v-col
          >
        </v-row>
      </div>
      <div class="right">
        <div class="right-column">
          <RightColumn />
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
import LeftColumn from "../../components/LeftColumn";
import RightColumn from "../../components/RightColumn";
export default {
  name: "Account",
  components: {
    LeftColumn,
    RightColumn,
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
  height: 100%;
}
.middle {
  width: 50%;
  padding: 40px;
}
.right {
  width: 32%;
  padding-right: 20px;
}
.left-column {
  background-color: white;
}
.middle-column {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  min-height: 200px;
}
.right-column {
  background-color: white;
}
.map {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  min-height: 200px;
}
.chart {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  min-height: 200px;
}
</style>
