<template>
    <section class="showcase">
        <v-container>
            <div class="description">
            <h3>#1 Online Cross Plateform Transactions Made Easy</h3>
            <p>
                Tiktacpay is a cross plateform system that enables you to 
                manage your digital wallet and also a virtual card. Enables tiktac 
                transfer of money from your wallet to your virtual card and vice versa.
                Also, instantly accept MTN Mobile Money, Orange Money, Express Union, and 
                Local Debit cards (Mastercard and Visa)
            </p>
            <div class="buttons">
                <v-btn dark color="green"><b>Get Started</b></v-btn>
                <v-btn><b>Learn More</b></v-btn>
            </div>
        </div>
        </v-container>
    </section>
</template>

<script>

    export default{
        name: 'SectionOne',
    }
</script>

<style scoped>
    section{
        background-image:url("/images/landing-page.jpg");
        background-size: cover;
        background-position: center center;
        height: 100vh;
        display: flex;
        padding-bottom: 50px;
    }
    .description{
        width: 50%;
        padding: 30px;
    }
    h3{
       font-size: 50px; 
       text-align: left;
       color: white;
    }
    p{
        text-align: left;
        font-size: 20px;
        margin-top: 20px;
        color: white;
    }
    .buttons{
        width: 60%;
        display: flex;
        justify-content: space-evenly;
    }
</style>