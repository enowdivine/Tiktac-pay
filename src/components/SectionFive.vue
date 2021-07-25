<template>
    <section>
        <v-container>
            <v-row>
                <div class="image">
            <img src="/images/security-rafiki.png" alt="Oh no!!">
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
                <v-btn dark color="#0F054C">get started</v-btn>
            </div>
        </div>
            </v-row>
        </v-container>
    </section>
</template>

<script>

    export default{
        name: 'SectionFive'
    }
</script>

<style scoped>
    section{
        background-color: lightcyan;
        display: flex;
        min-height: 600px;
    }
    .description{
        width: 50%;
        padding: 30px;
        margin: 0 0 0 40px;
    }
    h3{
        font-size: 40px;
        text-align: left;
        margin-top: 10%;
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
        width: 35%;
        padding: 30px;
    }
    img{
        width: 100%;
        height: 80%;
    }
</style>