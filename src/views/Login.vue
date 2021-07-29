<template>
  <v-container>
      <v-card>
          <div class="head">
              <h2>Login</h2>
          </div>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >

            <input type="number" name="number" placeholder="Phone Number" required>

            <input type="password" name="password" placeholder="Password" required>

            <v-btn
            dark
            color="#0F054C"
            @click="validate"
            >
            Submit
            </v-btn>
            <div class="sign-in">
                <a href="/register">Don't have an account? Register</a>
            </div>
        </v-form>
      </v-card>
  </v-container>
</template>

<script>
  export default {
      name: "Login",

  }
</script>

<style scoped>
.head h2{
    color: #0F054C;
    font-family: Tahoma, sans-serif;
    font-size: 30px;
}
    .v-card{
        width: 50%;
        margin: 100px auto;
        border: 1px solid #0F054C;
        padding: 40px;
        border-radius: 10px;
    }
    input{
        border: 1px solid #0F054C;
        outline: none;
        width: 100%;
        border-radius: 50px;
        margin-top: 20px;
        padding: 10px 20px;
    }
    .v-btn{
        margin-top: 20px;
        width: 100%;
        border-radius: 50px;
    }
    .sign-in{
        margin-top: 20px;
    }
    .sign-in a{
        text-decoration: none;
        color: #0F054C;
        padding: 30px;
    }

    @media only screen and (max-width:480px){
    .v-card{
        width: 90%;
    }
    .sign-in a{
        font-size: 12px;
    }
}
</style>