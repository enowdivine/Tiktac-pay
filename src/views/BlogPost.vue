<template>
  <div>
    <Header />
    <section class="post">
      <div class="content">
        <h2>Blog post title</h2>
        <div class="image">
          <img src="/images/showcase2.jpg" alt="" />
        </div>
        <div class="desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sapiente rem consectetur impedit repellendus placeat exercitationem,
            nobis dicta perspiciatis suscipit expedita culpa soluta ullam
            quaerat aliquam repudiandae dolor est atque!Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Doloribus sapiente rem
            consectetur impedit repellendus placeat exercitationem, nobis dicta
            perspiciatis suscipit expedita culpa soluta ullam quaerat aliquam
            repudiandae dolor est atque!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sapiente rem consectetur impedit repellendus placeat exercitationem,
            nobis dicta perspiciatis suscipit expedita culpa soluta ullam
            quaerat aliquam repudiandae dolor est atque!Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Doloribus sapiente rem
            consectetur impedit repellendus placeat exercitationem, nobis dicta
            perspiciatis suscipit expedita culpa soluta ullam quaerat aliquam
            repudiandae dolor est atque!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sapiente rem consectetur impedit repellendus placeat exercitationem,
            nobis dicta perspiciatis suscipit expedita culpa soluta ullam
            quaerat aliquam repudiandae dolor est atque!Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Doloribus sapiente rem
            consectetur impedit repellendus placeat exercitationem, nobis dicta
            perspiciatis suscipit expedita culpa soluta ullam quaerat aliquam
            repudiandae dolor est atque!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sapiente rem consectetur impedit repellendus placeat exercitationem,
            nobis dicta perspiciatis suscipit expedita culpa soluta ullam
            quaerat aliquam repudiandae dolor est atque!Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Doloribus sapiente rem
            consectetur impedit repellendus placeat exercitationem, nobis dicta
            perspiciatis suscipit expedita culpa soluta ullam quaerat aliquam
            repudiandae dolor est atque!
            <br />
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Contact",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.post {
  margin-top: 130px;
}
.content {
  width: 50%;
  margin: 50px auto;
}
.content h2 {
  margin: 20px 0 10px 0;
  text-align: left;
}
.image {
  width: 100%;
}
.image img {
  width: 100%;
}

.desc p {
  text-align: left;
  margin-top: 10px;
}

@media screen and (max-width: 600px) {
  .content {
    width: 90%;
  }
}
</style>
