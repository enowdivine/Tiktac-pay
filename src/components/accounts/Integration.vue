<template>
  <div class="board">
    <div class="side-bar">
      <div class="slider">
        <Slider />
      </div>
      <div class="get-apps">
        <GetApps />
      </div>
    </div>
    <div class="main">
      <div class="heading">
        <h2>Integration</h2>
      </div>
      <div class="post">
        <h2>HTTP Request</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          veritatis eius ullam dolorem rem dolor quae pariatur quo vero,
          repellat nam eligendi. Accusantium corrupti inventore, veniam voluptas
          fuga beatae consequuntur.
        </p>
        <div class="btn">
          <v-btn small depressed rounded>Visit Docs</v-btn>
        </div>
      </div>
      <div class="post">
        <h2>Python SDK</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          veritatis eius ullam dolorem rem dolor quae pariatur quo vero,
          repellat nam eligendi. Accusantium corrupti inventore, veniam voluptas
          fuga beatae consequuntur.
        </p>
        <div class="btn">
          <v-btn small depressed rounded>Visit Docs</v-btn>
          <v-btn small depressed rounded
            >Download SDK
            <v-icon class="ml-2">mdi-cloud-download</v-icon></v-btn
          >
        </div>
      </div>
      <div class="post">
        <h2>Wordpress Plugin</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          veritatis eius ullam dolorem rem dolor quae pariatur quo vero,
          repellat nam eligendi. Accusantium corrupti inventore, veniam voluptas
          fuga beatae consequuntur.
        </p>
        <div class="btn">
          <v-btn small depressed rounded>Visit Docs</v-btn>
          <v-btn small depressed rounded
            >Download Plugin
            <v-icon class="ml-2">mdi-cloud-download</v-icon></v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/accounts/Slider.vue";
import GetApps from "../../components/GetApps.vue";
export default {
  name: "Integration",
  components: {
    GetApps,
    Slider,
  },
};
</script>

<style scoped>
.board {
  background-color: whitesmoke;
}
h2 {
  margin: 20px 0 10px 30px;
  text-align: left;
}
.new-app {
  width: 96%;
  margin: 10px 10px 10px 30px;
}
.side-bar {
  width: 18%;
  float: left;
  padding-left: 10px;
  min-height: 200px;
  height: 100vh;
  background-color: white;
}
.get-apps {
  background-color: whitesmoke;
  width: 80%;
  margin: 0 auto;
  min-height: 200px;
  border-radius: 10px;
}
.main {
  width: 82%;
  height: 700px;
  background-color: whitesmoke;
  float: right;
}
.heading {
  width: 100%;
  margin: 20px 0 20px 0;
  display: flex;
}
.heading h2 {
  margin-left: 25px;
}
.post {
  background-color: white;
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  min-height: 200px;
  margin-bottom: 10px;
}
.post p {
  text-align: left;
  margin-top: 10px;
}
.post h2 {
  margin: 0;
  color: #0f054c;
}
.v-btn {
  color: #0f054c;
  font-weight: bold;
  float: left;
  margin-right: 5px;
}
.main {
  height: 100vh;
  overflow-y: scroll;
}
@media screen and (max-width: 768px) {
  .get-apps {
    display: none;
  }

  .btn {
    display: flex;
  }
  .btn .v-btn {
    font-size: 10px;
  }
}
</style>
