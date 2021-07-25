<template>
  <div>
    <Header />
    <section class="banner">
      <h2>Aout Us</h2>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam assumenda 
          ipsa magnam doloribus esse exercitationem optio voluptatem, quam sunt dolore quasi possimus 
          consectetur quibusdam veritatis rem illum! Quaerat, pariatur officia.</p>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <h3>Who We Are </h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit 
          officiis beatae esse alias blanditiis eum corporis, quibusdam atque, 
          sed nostrum error dolorum vel unde magni, iusto debitis velit. Tenetur?
        </div>
         <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit 
          officiis beatae esse alias blanditiis eum corporis, quibusdam atque, 
          sed nostrum error dolorum vel unde magni, iusto debitis velit. Tenetur?
        </div>
      </div>
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

<style>
  .banner{
    min-height: 400px; 
  }
  .about{
    min-height: 300px;
  }
</style>
