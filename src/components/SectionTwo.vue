<template>
    <section>
        <div class="description">
            <h3>Tiktac Payment Experience</h3>
            <p>
                Make secure, flexible and rapid tiktac transactions in one click
            </p>
            <ul>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a href="#">MTN Mobile Money</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a href="#">Orange Money</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a href="#">Express Union</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a href="#">Express Exchange</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a href="#">Debit Cards</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a href="#">Visa and Mastercard</a></li>
            </ul>
        </div>
        <div class="image">
            <img src="/images/security-amico.png" alt="Oh no!!">
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
        background-color: #fff;
        display: flex;
    }
    .description{
        margin-top: 6%;
        width: 50%;
        padding: 30px;
    }
    h3{
        font-size: 40px;
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
        color: black;
        font-size: 22px;
        font-weight: bold;
        margin-left: 5px;
    }
    .v-icon{
        color: green;
    }
    .image{
        width: 50%;
        padding: 10px;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>