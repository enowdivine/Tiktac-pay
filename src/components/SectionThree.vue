<template>
    <section>
        <div class="image">
            <img src="../assets/logo.png" alt="Oh no!!">
        </div>
        <div class="description">
            <h3>Unlimited Services For All Kinds Of Businesses</h3>
            <p>
                TiktacPay enables all kinds of businesses both individuals and companies to make quick and secure 
                onlinetransactions.
            </p>
            <ul>
                <li><a href="#">QR Code Payments</a></li>
                <li><a href="#">Smart Integrations</a></li>
                <li><a href="#">Payment Links</a></li>
                <li><a href="#">Scan and Pay</a></li>
                <li><a href="#">Documented APIs</a></li>
                <li><a href="#">Application</a></li>
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