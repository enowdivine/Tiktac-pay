<template>
  <section>
    <v-container>
      <v-row>
        <div class="image">
          <img src="/images/image3.jpg" alt="Oh no!!" />
        </div>
        <div class="description">
          <h3>Flexible Functionalities For All Transactions</h3>
          <p>
            TiktacPay enables all kinds of businesses both individuals and
            companies to make quick and secure onlinetransactions.
          </p>
          <ul>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a class="ml-1" href="#">QR Code Payments</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a class="ml-1" href="#">Smart Integrations</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a class="ml-1" href="#">Payment Links</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a class="ml-1" href="#">Scan and Pay</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a class="ml-1" href="#">Documented APIs</a>
            </li>
            <li>
              <v-icon>mdi-checkbox-marked-circle</v-icon
              ><a class="ml-1" href="#">Application</a>
            </li>
          </ul>
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SectionThree",
};
</script>

<style scoped>
section {
  margin-top: 30px;
  display: flex;
  min-height: 600px;
}
.description {
  width: 50%;
  padding: 30px;
  margin-top: 4%;
}
h3 {
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 20px;
  text-align: left;
  line-height: 50px;
}
p {
  font-size: 18px;
  text-align: left;
}
ul {
  margin-left: -5%;
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
}
.v-icon {
  color: green;
}
.image {
  width: 50%;
  margin-top: 80px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
}

@media only screen and (max-width: 480px) {
  .description {
    width: 100%;
    margin: 0;
  }
  .image {
    width: 100%;
    min-height: 400px;
    margin-top: 10px;
  }
  img {
    width: 95%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
