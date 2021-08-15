<template>
  <div>
    <Header />
    <section class="banner">
      <div class="overlay"></div>
      <v-container>
        <h2>Get In Touch</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam delectus ut officiis mollitia rerum recusandae quos modi distinctio, 
          esse molestiae voluptate! Ex unde quas autem itaque accusantium molestias labore a!</p>
      </v-container>
    </section>
    <section class="contact">
        <v-container>
          <div class="head">
            <h4>For More Info and Support, Contact Us Below</h4>
          </div>
            <v-row>
                <v-card>
                  <div class="contacts">
                    <h1>Contacts</h1>
                  </div>
                    <div class="list">
                      <div class="item">
                        <v-icon color="white">mdi-map-marker</v-icon>
                        <h3>Location</h3>
                        <p><a href="#">Buea, SW, Cameroon</a></p>
                      </div>
                    </div>
                    <div class="list">
                      <div class="item">
                        <v-icon color="white">mdi-email</v-icon>
                        <h3>Email</h3>
                        <p><a href="#">info@tiktacpay.com</a></p>
                      </div>
                    </div>
                    <div class="list">
                      <div class="item">
                        <v-icon color="white">mdi-cellphone-iphone</v-icon>
                        <h3>Call</h3>
                        <p><a href="#">(+237) 600 000 000</a></p>
                      </div>
                    </div>
                    <div class="list">
                      <div class="item">
                        <v-icon color="white">mdi-cellphone-iphone</v-icon>
                        <h3>WhatsApp</h3>
                        <p><a href="#">(+237) 600 000 000</a></p>
                      </div>
                    </div>
                </v-card>
                <v-card>
                    <v-form v-model="valid">
                        <v-container>
                        <v-row>
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="First name"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="10"
                                label="Last name"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>

                            <v-text-field 
                              controls-type="updown"
                              v-model="number"
                              :rules="numberRules"
                              label="Number"
                              required
                            ></v-text-field>
                            
                            <v-textarea class="mt-5"
                              outlined
                              name="input-7-4"
                              label="Message Here"
                            ></v-textarea>

                            <v-btn
                              color="#0F054C"
                              dark
                            >
                              Submit
                            </v-btn>
                        </v-row>
                        </v-container>
                    </v-form>
                </v-card>
            </v-row>
        </v-container>
    </section>
    <section class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=buea&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe><a href="https://fmovies-online.net"></a><br>
          <a href="https://www.embedgooglemap.net">google maps embedded map</a>
          </div>
        </div>
    </section>
    <SectionSeven />
    <SectionEight />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";
import Footer from "../components/Footer";

export default {
  name: "Contact",
  components: {
    Header,
    SectionSeven,
    SectionEight,
    Footer,
  },
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
    .contact{
      padding: 60px 0 60px 0;
    }
    .container{
      position: relative;
    }
    h2{
      margin-top: 30px;
    }
    .contacts{
      width: 100%;
    }
    .contacts h1{
      width: 100%;
      font-size: 40px;
      color: #0F054C;
      margin: 0 0 20px -30%;
    }
    .head{
      padding: 20px;
      margin: 10px 0 20px 0;
      border-radius: 10px;
      color: white;
      background-color: #0F054C;
    }
    .v-icon{
      float: left;
      font-size: 30px;
      background-color: #0F054C;
      padding: 20px;
      border-radius: 50%;
    }
    .item{
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid #0F054C;
    }
    .item h3{
      color: #0F054C;
      font-size: 25px;
    }
    .item p a{
      color: #000;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
    }
    .v-card{
      width: 48%;
      padding: 40px;
      margin: 10px;
      border-top: 5px solid #0F054C;
    }
    .v-text-field{
      width: 80%;
    }
    .v-textarea{
      width: 90%;
      height: 40%;
      resize: none;
    }
    .mapouter{position:relative;text-align:right;height:400px;width:100%;}
    .gmap_canvas {overflow:hidden;background:none!important;height:400px;width:100%;}

  @media screen and (max-width: 600px) {
    .v-card{
      width: 100%;
      margin: 20px 0;
    }
}
</style>
