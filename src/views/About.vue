<template>
  <div>
    <Header />
    <section class="banner">
      <div class="overlay"></div>
      <v-container>
        <div class="container">
          <h2>About Us</h2>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda 
          ipsa magnam doloribus esse exercitationem optio voluptatem, quam sunt dolore quasi possimus 
          consectetur quibusdam veritatis rem illum! Quaerat, pariatur officia.</p>
      </div>
        </div>
      </v-container>
    </section>
    <section class="about">
      <v-container>
        <v-row>
            <div class="description">
              <h3>Who We Are </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit 
              officiis beatae esse alias blanditiis eum corporis, quibusdam atque, 
              sed nostrum error dolorum vel unde magni, iusto debitis velit. Tenetur?<br><br>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit 
              officiis beatae esse alias blanditiis eum corporis, quibusdam atque, 
              sed nostrum error dolorum vel unde magni, iusto debitis velit. Tenetur?<br><br>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit 
              officiis beatae esse alias blanditiis eum corporis, quibusdam atque, 
              sed nostrum error dolorum vel unde magni, iusto debitis velit. Tenetur?<br><br>
              </p>
            </div>
          <div class="image">
            <img src="/images/bgPic.jpg" alt="Oh no!">
          </div>
        </v-row>

        <div class="team"><h2>Our Team</h2></div>

        <v-row>
            <v-card elevation="2">
              <img src="/images/bgPic.jpg" alt="Oh no!">
              <h4>Deon Achuo</h4>
              <p><i>CEO</i></p>
            </v-card>
            <v-card elevation="2">
              <img src="/images/bgPic.jpg" alt="Oh no!">
              <h4>Nzometiah Nervis</h4>
              <p><i>Auditor</i></p>
            </v-card>
            <v-card elevation="2">
              <img src="/images/bgPic.jpg" alt="Oh no!">
              <h4>Awah Precious</h4>
              <p><i>General Manager</i></p>
            </v-card>
            <v-card elevation="2">
              <img src="/images/bgPic.jpg" alt="Oh no!">
              <h4>Enow Divine</h4>
              <p><i>CTO</i></p>
            </v-card>
            <v-card elevation="2">
              <img src="/images/bgPic.jpg" alt="Oh no!">
              <h4>Peng Boris</h4>
              <p><i>Assistant CTO</i></p>
            </v-card>
            <v-card elevation="2">
              <img src="/images/bgPic.jpg" alt="Oh no!">
              <h4>Oben Desmond</h4>
              <p><i>PRO</i></p>
            </v-card>
        </v-row>
      </v-container>
    </section>
    <SectionEight />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import SectionEight from "../components/SectionEight";
import Footer from "../components/Footer";

export default {
  name: "About",
  components: {
    Header,
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
    .container{
      position: relative;
      z-index: 1;
    }
  .about{
    margin: 70px;
  }
  h2{
    font-size: 25px;
    margin-top: 30px;
  }
  .description{
    width: 50%;
    padding: 20px;
    margin-top: 20px;
  }
  h3{
    font-size: 30px;
  }
  .image{
        width: 50%;
        padding: 30px;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .team{
      margin: 60px 0 50px 0;
      border-bottom: 1px solid #aaa;
    }
    .team h2{
      font-size: 30px;
      
    }
    .v-card{
      width: 30%;
      height: 500px;
      margin: 10px;
    }
    .v-card img{
      width: 100%;
      height: 80%;
    }
    .v-card h4{
      font-size: 20px;
      padding: 5px;
    }
    .v-card p{
      background-color: rgb(218, 218, 218);
      padding: 10px;
    }
</style>
