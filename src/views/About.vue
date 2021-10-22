<template>
  <div>
    <Header />
    <section class="banner">
      <div class="overlay"></div>
      <v-container>
        <div class="container">
          <h2>About Us</h2>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              assumenda ipsa magnam doloribus esse exercitationem optio
              voluptatem, quam sunt dolore quasi possimus consectetur quibusdam
              veritatis rem illum! Quaerat, pariatur officia.
            </p>
          </div>
        </div>
      </v-container>
    </section>
    <section class="about">
      <v-row>
        <div class="description">
          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            reprehenderit officiis beatae esse alias blanditiis eum corporis,
            quibusdam atque, sed nostrum error dolorum vel unde magni, iusto
            debitis velit. Tenetur?<br /><br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            reprehenderit officiis beatae esse alias blanditiis eum corporis,
            quibusdam atque, sed nostrum error dolorum vel unde magni, iusto
            debitis velit. Tenetur?<br /><br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            reprehenderit officiis beatae esse alias blanditiis eum corporis,
            quibusdam atque, sed nostrum error dolorum vel unde magni, iusto
            debitis velit. Tenetur?<br /><br />
          </p>
        </div>
        <div class="image">
          <img src="/images/bgPic.jpg" alt="Oh no!" />
        </div>
      </v-row>
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
  name: "About",
  components: {
    Header,
    SectionSeven,
    SectionEight,
    Footer,
  },
};
</script>

<style scoped>
.banner {
  margin-top: 93px;
  min-height: 200px;
  background: url("/images/bgPic.jpg") fixed 100%;
  background-size: cover;
  position: relative;
  color: white;
}
.overlay {
  width: 100%;
  height: 100%;
  background: darkblue;
  opacity: 0.4;
  top: 0;
  position: absolute;
}
.container {
  position: relative;
}
.about {
  margin: 70px;
}
h2 {
  font-size: 25px;
  margin-top: 30px;
}
.description {
  width: 50%;
  padding: 20px;
  margin-top: 20px;
  text-align: left;
}
h3 {
  font-size: 30px;
}
.image {
  width: 50%;
  padding: 30px;
}
img {
  width: 100%;
  height: 100%;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .v-row {
    width: 100%;
  }
  .description {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .image {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
