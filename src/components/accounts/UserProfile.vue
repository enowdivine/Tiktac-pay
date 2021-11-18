<template>
  <div class="board">
    <div class="structure">
      <div class="head">
        <div class="profile-pic">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="" />
        </div>
        <div class="infos">
          <div class="appnumber">
            <span class="text">Total App Number</span><br />
            <span class="num">10</span>
          </div>
          <div class="appincome">
            <span class="text">Total Income</span><br />
            <span class="num">1,000,000 FCFA</span>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="detail">
          <div>
            <span>Name:</span>
            <p>Enow Divine</p>
          </div>
          <!-- <v-btn fab small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn> -->
        </div>
        <div class="detail">
          <div>
            <span>Email:</span>
            <p>enowdivine14@gmail.com</p>
          </div>
          <!-- <v-btn fab small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn> -->
        </div>
        <div class="detail">
          <div>
            <span>Contact:</span>
            <p>+237 672491296</p>
          </div>
          <!-- <v-btn fab small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn> -->
        </div>
        <div class="detail">
          <div>
            <span>Address:</span>
            <p>Buea</p>
          </div>
          <!-- <v-btn fab small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn> -->
        </div>
        <div>
          <EditProfile />
        </div>
      </div>
      <div class="pincode">
        <h3>Create A Transaction Pin</h3>
        <v-row>
          <v-col>
            <v-text-field solo flat rounded placeholder="Pin Code">
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field solo flat rounded placeholder="Confirm Pin">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn class="pin" rounded color="#0f054c" dark>Create Pin</v-btn>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import EditProfile from "../accounts/EditProfile.vue";

export default {
  components: {
    EditProfile,
  },
};
</script>

<style scoped>
.board {
  background-color: whitesmoke;
}
.structure {
  width: 80%;
  margin: auto;
  margin-bottom: 30px;
}
.head {
  background-color: white;
  min-height: 300px;
  border-radius: 10px;
  margin-top: 50px;
  padding: 50px;
}
.profile-pic {
  width: 30%;
}
.profile-pic img {
  width: 100%;
  background-color: whitesmoke;
  border-radius: 10px;
  float: left;
}
.infos {
  width: 60%;
  padding: 30px;
  border-radius: 10px;
  margin-left: 37%;
  background-color: whitesmoke;
}
.appnumber {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
}
.appincome {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  margin-top: 20px;
}
.text {
  font-weight: bold;
  margin-right: 10px;
}
.num {
  float: right;
}
.details {
  margin-top: 20px;
}
.detail {
  background-color: white;
  border-radius: 10px;
  text-align: left;
  padding: 10px 10px 10px 15px;
  margin-top: 10px;
  display: flex;
}
.detail div {
  width: 100%;
  margin-top: 10px;
}
.detail div span {
  float: left;
  margin-right: 10px;
  font-weight: bold;
}
.v-btn {
  float: right;
}
.pincode {
  margin-top: 20px;
  padding: 10px;
}
.pincode h3 {
  text-align: left;
  margin-bottom: 10px;
}
.pin {
  margin-left: 10px;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .structure {
    width: 95%;
  }
  .head {
    background-color: white;
    min-height: 300px;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
  }
  .profile-pic {
    width: 60%;
    margin: 0 auto;
    display: block;
  }
  .profile-pic img {
    width: 100%;
  }
  .profile-pic img {
    float: none;
  }
  .infos {
    width: 100%;
    margin: 10px 0 0 0;
  }
}
</style>
