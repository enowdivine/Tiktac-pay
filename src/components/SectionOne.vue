<template>
    <section>
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
                <Button text="testing" color="red" />
                <Button text="testing" color="blue" />
            </div>
        </div>
        <div class="image">
            <img src="../assets/logo.png" alt="Oh no!!">
        </div>
    </section>
</template>

<script>
import Button from "../components/Button"

    export default{
        name: 'SectionOne',
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
       font-size: 50px; 
       text-align: left;
    }
    p{
        text-align: left;
        font-size: 20px;
        margin-top: 20px;
    }
    .buttons{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
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