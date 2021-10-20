<template>
  <div>
    <Header />
    <section class="banner">
      <div class="overlay"></div>
      <v-container>
        <h2>Get Our Latest Updates</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          delectus ut officiis mollitia rerum recusandae quos modi distinctio,
          esse molestiae voluptate! Ex unde quas autem itaque accusantium
          molestias labore a!
        </p>
      </v-container>
    </section>
    <sections class="terms">
      <BlogContent />
    </sections>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogContent from "../components/BlogContent";

export default {
  name: "Contact",
  components: {
    Header,
    Footer,
    BlogContent,
  },
};
</script>

<style scoped>
.banner {
  margin-top: 92px;
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
h2 {
  margin-top: 40px;
}
</style>
