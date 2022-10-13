<template>
  <section class="bg">
    <v-container class="bg">
      <v-card>
        <div class="head">
          <h2>Login</h2>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="phoneNumber"
            :counter="13"
            label="Phone Number"
            required
            color="#0f054c"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
            color="#0f054c"
          ></v-text-field>

          <v-btn dark color="#0F054C" @click="validate"> Submit </v-btn>
          <div class="sign-in">
            <router-link to="/register"
              >Don't have an account? Register</router-link
            >
          </div>
        </v-form>
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    phoneNumber: "",
    numberRules: {
      required: true,
      digits: 13,
      regex: "^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$",
    },
    show1: false,
    password: "",
    passwordRules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
};
</script>

<style scoped>
.bg {
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
}
.head h2 {
  color: #0f054c;
  font-family: Tahoma, sans-serif;
  font-size: 30px;
}
.v-card {
  width: 50%;
  margin: 100px auto;

  padding: 40px;
  border-radius: 10px;
  background-color: white;
}
input {
  border: 1px solid #0f054c;
  outline: none;
  width: 100%;
  border-radius: 50px;
  margin-top: 20px;
  padding: 10px 20px;
}
.v-btn {
  margin-top: 20px;
  width: 100%;
  border-radius: 50px;
}
.sign-in {
  margin-top: 20px;
}
.sign-in a {
  text-decoration: none;
  color: #0f054c;
  padding: 30px;
}

@media only screen and (max-width: 480px) {
  .v-card {
    width: 90%;
  }
  .sign-in a {
    font-size: 12px;
  }
}
</style>
