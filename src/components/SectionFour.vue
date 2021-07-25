<template>
    <section>
        <div class="description">
            <h3>Plugin Module</h3>
            <p>
                For easy intergration, Download our woocormmerce plugin

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores voluptatum et sequi, nam praesentium pariatur, quibusdam ullam aliquid non fuga eligendi beatae ipsum modi reiciendis mollitia est totam id.
            </p>
            <div class="btn">
                <v-btn dark color="green">click to download</v-btn>
            </div>
        </div>
        <div class="image">
            <img src="/images/Dashboard-amico.png" alt="Oh no!!">
        </div>
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
        font-size: 40px;
        text-align: left;
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
        width: 50%;
        padding: 30px;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>