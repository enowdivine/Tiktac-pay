<template>
    <div class="my-2">
        <v-btn
            dark
            large
            v-bind:style="{background: color, 
                            color: Fcolor}"
            >
              {{text}}
            </v-btn>
    </div>
</template>

<script>
export default{
    name: "Button",
    props: {
        text: String,
        color: String,
        Fcolor: String,
    },
}
</script>

<style scoped>
    #btn{
        border: none;
        background-color: darkblue;
        color: white;
        padding: 10px 15px 10px 15px;
        border-radius: 10px;
    }
</style>