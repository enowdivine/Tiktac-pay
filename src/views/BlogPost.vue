<template>
  <div>
    <Header />
    <section class="post">
      <div class="content">
        <div class="image">
          <img src="/images/showcase2.jpg" alt="" />
        </div>
        <div class="desc">
          <h2>Blog post title</h2>
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
  margin-top: 100px;
}
.content {
  width: 50%;
  margin: 50px auto;
}
.image {
  width: 100%;
}
.image img {
  width: 100%;
}
.desc h2 {
  margin-top: 20px;
}
.desc p {
  text-align: left;
  margin-top: 10px;
}
</style>
