<template>
    <div class="my-2">
        <v-btn
            
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
    .v-btn{
        font-weight: bold;
    }
</style>