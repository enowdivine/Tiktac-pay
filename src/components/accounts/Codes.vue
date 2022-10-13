<template>
  <div class="board">
    <div class="code">
      <h3>API Key</h3>
      <div>
        <v-text-field class="txt" v-model="appname" solo flat></v-text-field>
        <v-btn fab small
          ><v-icon small>mdi-clipboard-multiple-outline</v-icon></v-btn
        >
      </div>
    </div>
    <div class="code">
      <h3>Callback Endpoint</h3>
      <div>
        <v-text-field class="txt" v-model="appname" solo flat></v-text-field>
        <v-btn fab small
          ><v-icon small>mdi-clipboard-multiple-outline</v-icon></v-btn
        >
      </div>
    </div>
    <div class="code">
      <h3>Embed Code</h3>
      <div>
        <v-text-field class="txt" v-model="appname" solo flat></v-text-field>
        <v-btn fab small
          ><v-icon small>mdi-clipboard-multiple-outline</v-icon></v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    appname: "wertyuio34567890-=dfghjkl;3456789olkjhgfd",
  }),
};
</script>

<style scoped>
.code {
  width: 100%;
  float: left;
  padding: 10px;
  text-align: left;
}
h3 {
  font-weight: bold;
}
.code div {
  width: 95%;
  float: left;
  background-color: whitesmoke;
  padding: 15px 15px 0 15px;
  border-radius: 10px;
}
.code div .v-btn {
  float: right;
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .code {
    padding: 10px 0 0 0;
  }
  .code div {
    padding: 5px 5px 0 5px;
  }
  .v-btn {
    width: 20%;
  }
  .code div .txt {
    width: 80%;
    float: left;
    margin: 10px 0 0 0;
  }
}
</style>
