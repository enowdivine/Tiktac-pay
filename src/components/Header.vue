<template>
  <header>
    <div class="topnav" id="myTopnav">
      <div class="logo">
        <h1>
          <router-link to="/dashboard"
            >Tiktac<span class="pay">Pay</span></router-link
          >
        </h1>
      </div>
      <div class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/support">Support</router-link></li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">Integrations</button>
            <div class="dropdown-content">
              <router-link to="#">HTTP Docs</router-link>
              <router-link to="#">Python SDK</router-link>
              <router-link to="#">Wordpress Plugins</router-link>
            </div>
          </div>
        </li>
        <li><router-link to="/contact">Contact</router-link></li>
      </div>
      <div class="btn-group">
        <div class="btn1">
          <v-btn rounded
            ><router-link class="one" to="/register"
              >Sign Up</router-link
            ></v-btn
          >
        </div>
        <div class="btn2">
          <v-btn rounded dark color="#0f054c"
            ><router-link to="/login">Login</router-link></v-btn
          >
        </div>
        <a
          href="javascript:void(0);"
          class="icon"
          @click.stop="drawer = !drawer"
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>TiktacPay</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.page">{{ item.title }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", page: "/" },
        { title: "About", icon: "mdi-forum", page: "/about" },
        { title: "Support", icon: "mdi-forum", page: "/support" },
        { title: "HTTP Docs", icon: "mdi-forum", page: "/httpdocs" },
        { title: "Python SDK", icon: "mdi-forum", page: "/pythonsdk" },
        { title: "Wordpress Plugins", icon: "mdi-forum", page: "/WPplugins" },
        { title: "Contact", icon: "mdi-forum", page: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
header {
  background-color: white;
  position: fixed;

  width: 100%;
  top: 0;
  z-index: 999;
  align-items: center;
  margin: 0px;
  padding: 15px 0 15px 0;
  -moz-box-shadow: 3px 3px 5px 6px grey;
  -webkit-box-shadow: 3px 3px 5px 6px grey;
  box-shadow: 3px 3px 2px 0px grey;
}

.topnav {
  display: flex;
  justify-content: space-evenly;
}

.topnav .icon {
  display: none;
}
.logo {
  margin-top: 7px;
}
h1 {
  color: #0f054c;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.pay {
  font-family: Georgia, "Times New Roman", Times, serif;
}
.logo h1 a {
  text-decoration: none;
  color: #0f054c;
}
.links {
  margin-top: 20px;
}
.links li {
  display: inline;
  margin: 10px;
}
li {
  list-style: none;
  margin-top: 20px;
}
li a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 8px 10px;
}
li a:hover {
  color: #0f054c;
  border-bottom: 2px solid #0f054c;
}
.btn-group {
  display: flex;
  margin-top: 10px;
}
.btn1 {
  margin: 0 5px 0 0;
}
.btn2 {
  margin: 0 0 0 5px;
}
.btn2 .v-btn a {
  font-weight: bold;
  text-decoration: none;
  color: white;
}
.btn1 .v-btn a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

/* Dropdown Button */
.dropbtn {
  color: black;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  margin-top: -15px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  border-radius: 10px;
  position: absolute;
  background-color: whitesmoke;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #0f054c;
  color: white;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn:hover {
  background-color: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  h1 {
    margin-left: -40px;
  }
  .icon {
    margin-right: -40px;
  }
  .topnav li:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
    margin-top: 13px;
    font-size: 20px;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
