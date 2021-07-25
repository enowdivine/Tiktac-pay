<template>
    <section>
        <v-container>
            <div class="description">
            <h3>Get In Touch</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet beatae ad nesciunt ut cum. Aperiam, 
                eaque aut eius 
                distinctio fuga dolor culpa iusto obcaecati praesentium, quo voluptate fugiat nesciunt voluptas?
            </p>
            <div class="buttons">
                <v-btn dark color="green">contact</v-btn>
                <v-btn color="white">get started</v-btn>
            </div>
        </div>
        </v-container>
    </section>
</template>

<script>

    export default{
        name: 'SectionOne'
    }
</script>

<style scoped>
    section{
        background-color: #0F054C;
        padding: 30px 0 30px 0;
        min-height: 450px;
    }
    .description{
        width: 50%;
        margin: auto;
        padding: 30px;
        text-align: center;
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
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        margin: auto;
    }
</style>