<template>
  <section>
    <v-container>
      <v-row>
        <div class="description">
          <h3>Tiktac Payment Experience</h3>
          <p>
            Make secure, flexible and rapid tiktac transactions in one click
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
          <img src="/images/undraw_wallet_aym5.png" alt="Oh no!!" />
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
  padding: 40px 0 40px 0;
}
.description {
  margin-top: 3%;
  width: 50%;
  padding: 30px;
}
h3 {
  font-size: 40px;
  text-align: left;
}
p {
  font-size: 20px;
}
ul li {
  list-style: none;
  text-align: left;
}
ul li a {
  text-decoration: none;
  color: black;
  font-size: 22px;
  font-weight: bold;
  margin-left: 5px;
}
.v-icon {
  color: green;
}
.image {
  width: 35%;
  padding: 10px;
  margin-top: 90px;
}
img {
  width: 100%;
  height: 80%;
}
</style>
