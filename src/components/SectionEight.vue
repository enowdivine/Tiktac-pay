<template>
    <section class="action">
         <div class="overlay"></div>
        <div class="description">
            <h3>Start Accepting payments Today</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet beatae ad nesciunt ut cum. Aperiam, 
                eaque aut eius 
                distinctio fuga dolor culpa iusto obcaecati praesentium, quo voluptate fugiat nesciunt voluptas?
            </p>
            <div class="buttons">
               <v-btn depressed dark color="#0F054C">create your tiktac account</v-btn>
            </div>
        </div>
    </section>
</template>

<script>

    export default{
        name: 'SectionOne'
    }
</script>

<style scoped>
    section{
        background: url("/images/bgPic.jpg") fixed 100%;
        background-size: cover;
        padding: 30px 0 30px 0;
        position: relative;
    }
    .description{
        width: 50%;
        margin: auto;
        padding: 30px;
        text-align: center;
        position: relative;
        z-index: 1;
    }
    .overlay{
        width: 100%;
        height: 100%;
        background: darkblue;
        opacity: 0.4;
        top: 0;
        position: absolute;
    }
    h3{
       font-size: 30px; 
       color: white;
    }
    p{
        color: white;
        font-size: 20px;
        margin-top: 20px;
    }
    .buttons{
        display: flex;
        justify-content: space-evenly;
    }
</style>