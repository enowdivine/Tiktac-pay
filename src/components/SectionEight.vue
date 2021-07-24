<template>
    <section>
        <div class="description">
            <h3>Start Accepting payments Today</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet beatae ad nesciunt ut cum. Aperiam, 
                eaque aut eius 
                distinctio fuga dolor culpa iusto obcaecati praesentium, quo voluptate fugiat nesciunt voluptas?
            </p>
            <div class="buttons">
                <Button text="Create Your Tiktac Account" color="red" />
            </div>
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
        background-color: blue;
        padding: 30px 0 30px 0;
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
        display: flex;
        justify-content: space-evenly;
    }
</style>