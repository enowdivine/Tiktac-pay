<template>
  <section>
    <v-container>
      <div class="footer-above">
        <div class="description">
          <h3>Tiktac<span class="pay">Pay</span></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ab
            voluptas. Atque, odit dolores! Mollitia maiores impedit vel ratione
            voluptates repellendus incidunt amet architecto! Dolor natus harum
            veritatis sint doloribus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Culpa, ab voluptas. Atque, odit dolores! Mollitia
            maiores impedit vel ratione voluptates repellendus incidunt amet
            architecto! Dolor natus harum veritatis sint doloribus?
          </p>
        </div>
        <div class="support">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>
              <router-link to="/terms&conditions"
                >Terms & Condistions</router-link
              >
            </li>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
        <div class="company">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="address">
          <h3>Address</h3>
          <ul>
            <li>
              <!-- <v-icon color="white">mdi-map-marker</v-icon
              > -->
              <a class="ml-1" href="#">Buea, SW, Cameroon</a>
            </li>
            <li>
              <!-- <v-icon color="white">mdi-email</v-icon
              > -->
              <a class="ml-1" href="#">info@tiktacpay.com</a>
            </li>
            <li>
              <!-- <v-icon color="white">mdi-cellphone-iphone</v-icon
              > -->
              <a class="ml-1" href="#">(+237) 000 000 000</a>
            </li>
            <li>
              <!-- <v-icon color="white">mdi-cellphone-iphone</v-icon
              > -->
              <a class="ml-1" href="#">(+237) 000 000 000</a>
            </li>
          </ul>
        </div>
        <div class="apps">
          <div class="google">
            <a href="#"> <img src="/images/google.png" alt="" /></a>
          </div>
          <div class="apple">
            <a href="#"><img src="/images/apple.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="footer-below">
        <p>Copyright &copy; 2021 Tiktac Financial Company Limited</p>
        <ul>
          <li>
            <a href="#"><v-icon color="white">mdi-facebook</v-icon></a>
          </li>
          <li>
            <a href="#"><v-icon color="white">mdi-linkedin</v-icon></a>
          </li>
          <li>
            <a href="#"><v-icon color="white">mdi-twitter</v-icon></a>
          </li>
        </ul>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
section {
  padding: 30px;
  background-color: #0f054c;
}
.footer-above {
  margin-top: 30px;
  display: flex;
}
.footer-below {
  display: flex;
  justify-content: space-between;
}
.footer-below ul {
  display: flex;
}
.footer-below ul li {
  margin: 5px;
}
.description {
  width: 40%;
}
h3 {
  color: white;
  font-size: 25px;
  text-align: left;
  padding-left: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.pay {
  font-family: Georgia, "Times New Roman", Times, serif;
}
p {
  color: white;
  text-align: left;
  margin-top: 20px;
}
ul {
  margin-top: 20px;
  padding: 20px;
}
ul li {
  list-style: none;
  text-align: left;
  color: white;
  margin-bottom: 10px;
}
ul li a {
  text-decoration: none;
  color: white;
}
.apps {
  width: 20%;
}
.google {
  width: 100%;
}
.google img {
  width: 100%;
  height: 100%;
}
.apple {
  margin-top: 30px;
  width: 100%;
}
.apple img {
  width: 100%;
}

@media only screen and (max-width: 480px) {
  .footer-above {
    display: block;
  }
  .description,
  .company,
  .support,
  .address {
    width: 100%;
    text-align: center;
  }
  ul li,
  p,
  h3 {
    text-align: center;
  }
  .footer-below {
    display: block;
  }
  .footer-below ul {
    display: block;
    margin: auto;
  }
  .footer-below ul li {
    display: inline;
    margin: 10px;
  }
  .apps {
    width: 60%;
    margin: auto;
  }
}
</style>
