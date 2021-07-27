<template>
    <header>
        <h1>Tiktac<span class="pay">Pay</span></h1>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/support">Support</a></li>
        <div class="dropdown">
        <button class="dropbtn">Integrations</button>
            <div class="dropdown-content">
                <a href="#">HTTP Docs</a>
                <a href="#">Python SDK</a>
                <a href="#">Wordpress Plugins</a>
            </div>
        </div>
        <li><a href="/contact">Contact</a></li>
        <v-btn color="white"><v-icon>mdi-account-plus</v-icon> <span class="ml-1">Sign Up / Login</span></v-btn>
    </header>
</template>

<script>

export default {
  name: "Header",
}
</script>


<style scoped>
    header{
        background-color: #0F054C;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 0px;
        padding: 15px 10px 15px 10px;
    }
    h1{
        color: white;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

    }
    .pay{
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    li{
        list-style: none;
    }
    li a{
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
    li:hover{
        border-bottom: 1px solid #fff;
    }
    .v-btn{
        font-weight: bold;
    }

    /* Dropdown Button */
.dropbtn {
  color: white;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  border: none;
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
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #0F054C; color: white;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: none;}
</style>