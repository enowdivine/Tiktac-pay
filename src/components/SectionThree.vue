<template>
    <section>
        <v-container>
            <v-row>
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
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a class="ml-1" href="#">QR Code Payments</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a class="ml-1" href="#">Smart Integrations</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a class="ml-1" href="#">Payment Links</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a class="ml-1" href="#">Scan and Pay</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a class="ml-1" href="#">Documented APIs</a></li>
                <li><v-icon>mdi-checkbox-marked-circle</v-icon><a class="ml-1" href="#">Application</a></li>
            </ul>
        </div>
            </v-row>
        </v-container>
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
        min-height: 600px;
    }
    .description{
        width: 50%;
        padding: 30px;
        margin: 4% 0 0 60px;
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
        width: 35%;
        padding: 30px;
        margin-top: 80px;
    }
    img{
        width: 100%;
        height: 80%;
    }
</style>