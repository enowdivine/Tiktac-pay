<template>
    <section>
        <div class="footer-above">
            <div class="description">
            <h3>Tiktac Pay</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ab voluptas. Atque, odit dolores! Mollitia maiores impedit vel ratione voluptates 
                repellendus incidunt amet architecto! Dolor natus harum veritatis sint doloribus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ab voluptas. Atque, odit dolores! Mollitia maiores impedit vel ratione voluptates 
                repellendus incidunt amet architecto! Dolor natus harum veritatis sint doloribus?
            </p>
        </div>
        <div class="support">
            <h3>Support</h3>
            <ul>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Cookies Policy</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
        <div class="company">
            <h3>Company</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div class="address">
            <h3>Address</h3>
            <ul>
                <li>Addrss:<a href="#">Buea, SW, Cameroon</a></li>
                <li>Email:<a href="#">info@tiktacpay.com</a></li>
                <li>Phone:<a href="#">(+237) 000 000 000</a></li>
                <li>FAQ:<a href="#">(+237) 000 000 000</a></li>
            </ul>
        </div>
        </div>
        <div class="footer-below">
            <p>
                Copyright &copy; 2021 Tiktac Financial Company Limited
            </p>
            <ul>
                <li><a href="#"><v-icon color="white">mdi-facebook</v-icon></a></li>
                <li><a href="#"><v-icon color="white">mdi-linkedin</v-icon></a></li>
                <li><a href="#"><v-icon color="white">mdi-twitter</v-icon></a></li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default{
        name: 'Footer',
    }
</script>

<style scoped>
    section{
        padding: 30px;
        background-color: #0F054C;
         justify-content: space-evenly;
    }
    .footer-above{
        margin-top: 30px;
        display: flex;
    }
    .footer-below{
        display: flex;
        justify-content: space-between;
    }
    .footer-below ul{
        display: flex;
    }
    .footer-below ul li{
        margin: 5px;
    }
    .description{
        width: 40%;
    }
    h3{
        color: white;
        font-size: 25px;
        text-align: left;
        padding-left: 15px;
    }
    p{
        color: white;
        text-align: left;
        margin-top: 20px;
    }
    ul{
        margin-top: 20px;
        padding: 20px;
    }
    ul li{
        list-style: none;
        text-align: left;
        color: white;
        margin-bottom: 10px;
    }
    ul li a{
        text-decoration: none;
        color: white;
    }
</style>