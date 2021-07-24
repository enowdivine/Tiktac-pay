<template>
    <section>
        <div class="image">
            <img src="../assets/logo.png" alt="Oh no!!">
        </div>
        <div class="description">
            <h3>The Most Easy, Fast and Secure Payment Platform </h3>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora mollitia
               laboriosam molestias numquam in<br><br>

               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora mollitia perspiciatis ipsam quidem earum adipisci recusandae optio modi sit doloribus eligendi, 
               laboriosam molestias numquam in alias reiciendis similique possimus?
            </p>
            <div class="btn">
                <Button text="Get Started" color="blue" />
            </div>
        </div>
    </section>
</template>

<script>
import Button from "../components/Button";

    export default{
        name: 'SectionFive',
        components:{
            Button,
        }
    }
</script>

<style scoped>
    section{
        display: flex;
    }
    .description{
        width: 50%;
        padding: 30px;
    }
    h3{
        font-size: 55px;
        text-align: left;
    }
    p{
        font-size: 20px;
        text-align: left;
        
    }
    .btn{
        float: left;
    }
    ul li{
        list-style: none;
        text-align: left;
    }
    ul li a{
        text-decoration: none;
        color: darkblue;
        font-size: 22px;
    }
    .image{
        width: 50%;
        padding: 30px;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>