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
      <v-card>
        <h3>Billing Information</h3>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
                color="#0f054c"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
                color="#0f054c"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="phoneNumber"
                :counter="13"
                label="Card Number"
                required
                color="#0f054c"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="phoneNumber"
                :counter="5"
                label="MM/YY"
                required
                color="#0f054c"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="phoneNumber"
                :counter="4"
                label="CVC"
                required
                color="#0f054c"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="phoneNumber"
                :counter="5"
                label="ZIP"
                required
                color="#0f054c"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="save" depressed color="#0f054c" dark>Save</v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
import Slider from "../../components/accounts/Slider.vue";
import GetApps from "../../components/GetApps.vue";
export default {
  name: "LeftColumn",
  components: {
    GetApps,
    Slider,
  },
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    phoneNumber: "",
    numberRules: {
      required: true,
      digits: 13,
      regex: "^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$",
    },
  }),
};
</script>

<style scoped>
.board {
  background-color: whitesmoke;
}
h3 {
  margin-bottom: 30px;
}
.side-bar {
  width: 18%;
  float: left;
  padding-left: 10px;
  min-height: 700px;
  background-color: white;
}
.get-apps {
  background-color: whitesmoke;
  width: 80%;
  margin: 0 auto;
  min-height: 200px;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.main {
  width: 80%;
  min-height: 700px;
  background-color: whitesmoke;
}
.v-card {
  width: 50%;
  position: absolute;
  margin: 100px 35%;
  padding: 30px;
  border-radius: 10px;
}
.save {
  width: 100%;
  font-weight: bold;
  margin-top: 20px;
}
</style>
