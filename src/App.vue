<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 1px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--lightestgrey);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: whitesmoke;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
