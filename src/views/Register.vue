<template>
  <div>
    <Header />
    <section class="banner">
      <div class="overlay"></div>
      <v-container>
        <div class="container">
          <h2>Create Account</h2>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda 
          ipsa magnam doloribus esse exercitationem optio voluptatem, quam sunt dolore quasi possimus 
          consectetur quibusdam veritatis rem illum! Quaerat, pariatur officia.</p>
      </div>
        </div>
      </v-container>
    </section>
    <section class="form">
        <v-container>
            <v-card>
                <div class="head">
                    <h2>Register</h2>
                </div>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    
                    <input type="text" name="name" placeholder="Name" required>

                    <input type="number" name="number" placeholder="Phone Number" required>

                    <input type="email" name="email" placeholder="E-mail" required>

                    <input type="password" name="password" placeholder="Password" required>

                    <input type="password" name="password-check" placeholder="Re-type Password" required>

                    <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="I agree to the Terms and Privacy policy"
                    required
                    ></v-checkbox>

                    <v-btn
                    dark
                    :disabled="!valid"
                    color="#0F054C"
                    class="mr-4 pt-6 pb-6"
                    @click="validate"
                    >
                    Sign up
                    </v-btn>
                    <hr>

                    <v-btn
                    :disabled="!valid"
                    color="lightcyan"
                    class="mt-5 pt-6 pb-6"
                    @click="validate"
                    >
                    Log in
                    </v-btn>

                </v-form>
            </v-card>
        </v-container>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Register",
  components: {
    Header,
    Footer,
  },
  data: () => ({
      valid: true,
      checkbox: false,
    }),
}
</script>

<style scoped>
  .banner{
    min-height: 200px; 
    background: url("/images/bgPic.jpg") fixed 100%;
    background-size: cover;
    position: relative;
    color: white;
  }
  .overlay{
        width: 100%;
        height: 100%;
        background: darkblue;
        opacity: 0.4;
        top: 0;
        position: absolute;
    }
    .container{
      position: relative;
    }
    
    /*sectin styling*/
    .form{
        border-radius: 50px;
        margin-top: -170px;
    }

    /*form styling */
    .head h2{
    color: #0F054C;
    font-family: Tahoma, sans-serif;
    font-size: 30px;
}
    .v-card{
        width: 50%;
        margin: 100px auto;
        padding: 40px;
        border-radius: 10px;
    }
    input{
        border: 1px solid #0F054C;
        outline: none;
        width: 100%;
        border-radius: 10px;
        margin-top: 20px;
        padding: 10px 20px;
    }
    hr{
        margin-top: 20px;
    }
    .v-btn{
        width: 100%;
        border-radius: 10px;
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
