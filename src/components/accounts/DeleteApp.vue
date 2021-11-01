<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark class="del" v-bind="attrs" v-on="on"
          >Delete App</v-btn
        >
      </template>

      <v-card>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <div>
                  <div class="text-center">
                    <h3>Are You Sure You Want To Delete This App?</h3>
                  </div>
                </div>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0f054c" text dark @click="dialog = false"> Yes </v-btn>
          <v-btn color="red" text dark @click="dialog = false"> No </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      paylink: "",
    };
  },
};
</script>

<style scoped>
.v-btn {
  font-weight: bold;
}
h3{
    margin-top: 15px;
    margin-left: 25px;
    color: black;
}
.paylink {
  font-weight: bold;
  margin-top: 5px;
  width: 80%;
}
</style>
