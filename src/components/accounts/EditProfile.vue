<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          fab
          small
          class="edit mt-1"
          v-bind="attrs"
          v-on="on"
          dark
          ><v-icon color="green">mdi-pencil</v-icon></v-btn
        >
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2"
          >Edit Profile
        </v-card-title>

        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-text-field
                  class="mt-10"
                  v-model="paylink"
                  label="Name"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="paylink"
                  label="Email"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="paylink"
                  label="Contact"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="paylink"
                  label="Address"
                  outlined
                  required
                ></v-text-field>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0f054c" text dark @click="dialog = false"> Save </v-btn>
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
.paylink {
  font-weight: bold;
  width: 80%;
}
.edit {
  float: right;
}
</style>
