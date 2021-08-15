<template>
    <section>
        <v-container>
            <v-row>
                <div class="description">
            <h3>Application Download</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores voluptatum et sequi, nam praesentium pariatur, quibusdam ullam aliquid non fuga eligendi beatae ipsum modi reiciendis mollitia est totam id.
            </p>
            <div class="btn">
                <v-btn depressed dark  rounded color="green"><v-icon>mdi-google-play</v-icon> Google Play</v-btn>
                 <v-btn depressed rounded class="ml-1" dark><v-icon>mdi-apple</v-icon> App Store</v-btn>
            </div>
        </div>
        <div class="image">
            <img src="/images/dashboard.png" alt="Oh no!!">
        </div>
            </v-row>
        </v-container>
    </section>
</template>

<script>

    export default{
        name: 'SectionFour'
    }
</script>

<style scoped>
    section{
        background-color: #fff;
        display: flex;
    }
     .description{
        width: 50%;
        padding: 30px;
        margin: 100px 0 0 0;
    }
    h3{
        font-size: 55px;
        text-align: left;
        line-height: 50px;
    }
    p{
        font-size: 20px;
        text-align: left;
        
    }
    .btn{
        float: left;
        margin-top: 30px;
    }
    .image{
        width: 40%;
        padding: 30px;
    }
    img{
        width: 100%;
        height: 100%;
        padding: 0;
    }

    @media only screen and (max-width:480px){
    .description{
        width: 100%;
        margin: 0;
    }
    .btn{
        width: 100%;
        margin: 0;
    }
    .v-btn{
        margin: 5px;
    }
    .image{
        width: 100%;
        height: 100%;
        margin: 0;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>