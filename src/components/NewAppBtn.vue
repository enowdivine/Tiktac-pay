<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#0f054c"
          class="btn"
          v-bind="attrs"
          v-on="on"
          rounded
          dark
          depressed
          >New App</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> NEW APP </v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-text-field
                  v-model="appname"
                  label="App Name"
                  required
                ></v-text-field>
              </v-row>
              <v-row>
                <v-file-input
                  accept="image/*"
                  label="File input"
                ></v-file-input>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0f054c" dark @click="dialog = false"> Register </v-btn>
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
    };
  },
};
</script>

<style scoped>
.v-btn {
  font-weight: bold;
}
</style>
