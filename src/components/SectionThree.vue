<template>
    <section>
        <div class="image">
            <img src="/images/new-functions.png" alt="Oh no!!">
        </div>
        <div class="description">
            <h3>Flexible Functionalities For All Transactions</h3>
            <p>
                TiktacPay enables all kinds of businesses both individuals and companies to make quick and secure 
                onlinetransactions.
            </p>
            <ul>
                <li><a href="#"><v-icon>mdi-checkbox-marked-circle</v-icon>QR Code Payments</a></li>
                <li><a href="#"><v-icon>mdi-checkbox-marked-circle</v-icon>Smart Integrations</a></li>
                <li><a href="#"><v-icon>mdi-checkbox-marked-circle</v-icon>Payment Links</a></li>
                <li><a href="#"><v-icon>mdi-checkbox-marked-circle</v-icon>Scan and Pay</a></li>
                <li><a href="#"><v-icon>mdi-checkbox-marked-circle</v-icon>Documented APIs</a></li>
                <li><a href="#"><v-icon>mdi-checkbox-marked-circle</v-icon>Application</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default{
        name: 'SectionThree',
    }
</script>

<style scoped>
    section{
        background-color: lightcyan;
        display: flex;
    }
    .description{
        width: 50%;
        padding: 30px;
        margin-top: 6%;
    }
    h3{
        font-size: 40px;
        text-align: left;
    }
    p{
        font-size: 20px;
        text-align: left;
        
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
    }
    .v-icon{
        color: green;
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