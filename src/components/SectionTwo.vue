<template>
  <section>
    <v-container>
      <v-row>
        <div class="description">
          <h3>Tiktac Payment Experience</h3>
          <p>
            Make secure, flexible and rapid tiktac transactions in one click
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque
            beatae ea quaerat error. Tempore soluta officiis voluptatum debitis
            natus quas mollitia animi nobis error molestiae, facere iste ex
            repellendus?
          </p>
          <ul>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a href="#">MTN Mobile Money</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a href="#">Orange Money</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a href="#">Express Union</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a href="#">Express Exchange</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a href="#">Debit Cards</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a href="#">Visa and Mastercard</a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="/images/image1.jpg" alt="Oh no!!" />
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SectionTwo",
};
</script>

<style scoped>
section {
  background-color: #fff;
  display: flex;
  padding: 20px 0 40px 0;
}
.description {
  margin-top: 3%;
  width: 50%;
  padding: 30px;
}
h3 {
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: left;
  margin-bottom: 20px;
  line-height: 50px;
}
p {
  font-size: 18px;
  text-align: left;
}
ul {
  margin-left: -6%;
}
ul li {
  list-style: none;
  text-align: left;
  background-color: whitesmoke;
  margin-bottom: 5px;
  padding: 10px 15px;
  border-radius: 10px;
}
ul li a {
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
}
.v-icon {
  color: green;
}
.image {
  width: 50%;
  padding: 10px;
  margin-top: 70px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;
}

@media only screen and (max-width: 480px) {
  .description {
    width: 100%;
  }
  .image {
    width: 100%;
    min-height: 400px;
    margin-top: 10px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
