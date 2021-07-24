<template>
    <section>
        <div class="description">
            <h3>Tiktac Payment Experience</h3>
            <p>
                Make secure, flexible and rapid tiktac transactions in one click
            </p>
            <ul>
                <li><a href="#">MTN Mobile Money</a></li>
                <li><a href="#">Orange Money</a></li>
                <li><a href="#">Express Union</a></li>
                <li><a href="#">Express Exchange</a></li>
                <li><a href="#">Debit Cards</a></li>
                <li><a href="#">Visa and Mastercard</a></li>
            </ul>
        </div>
        <div class="image">
            <img src="../assets/logo.png" alt="Oh no!!">
        </div>
    </section>
</template>

<script>
    export default{
        name: 'SectionTwo',
    }
</script>

<style scoped>
    section{
        background-color: rgb(236, 255, 255);
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