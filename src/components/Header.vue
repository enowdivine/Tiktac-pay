<template>
    <header>
        <h2>TiktacPay</h2>
        <li><a href="#">Use Cases</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Developers</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contacts</a></li>
        <Button text="Sign Up / Login" color="darkblue" />
    </header>
</template>

<script>
import Button from "./Button"

export default {
  name: "Header",
  components: {
      Button,
  }
}
</script>


<style scoped>
    header{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 0px;
        padding: 15px 10px 15px 10px;
        border-bottom: 1px solid black;
    }
    li{
        list-style: none;
    }
    li a{
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
</style>