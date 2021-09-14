<template>
  <section>
    <v-container>
      <v-row>
        <div class="image">
          <img src="/images/image5.jpeg" alt="Oh no!!" />
        </div>
        <div class="description">
          <h3>The Most Easy, Fast and Secure Payment Platform</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempora mollitia laboriosam molestias numquam in<br /><br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempora mollitia perspiciatis ipsam quidem earum adipisci recusandae
            optio modi sit doloribus eligendi, laboriosam molestias numquam in
            alias reiciendis similique possimus?
          </p>
          <div class="btn">
            <v-btn dark rounded color="#0F054C">get started</v-btn>
          </div>
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SectionFive",
};
</script>

<style scoped>
section {
  margin-top: 20px;
  display: flex;
  min-height: 600px;
}
.description {
  width: 50%;
  padding: 30px;
}
h3 {
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 20px;
  text-align: left;
  margin-top: 10%;
  line-height: 50px;
}
p {
  font-size: 18px;
  text-align: left;
}
.btn {
  float: left;
}
ul li {
  list-style: none;
  text-align: left;
}
ul li a {
  text-decoration: none;
  color: darkblue;
  font-size: 22px;
}
.image {
  width: 50%;

  margin-top: 8%;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

@media only screen and (max-width: 480px) {
  .description {
    width: 100%;
    margin: 0;
  }
  .image {
    width: 100%;
    margin-top: 10px;
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
