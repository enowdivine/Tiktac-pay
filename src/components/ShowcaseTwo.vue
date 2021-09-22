<template>
  <v-container>
    <div class="image">
      <v-card>
        <h1>Heading</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          vel eius nisi cum laborum tempora corporis ullam quisquam sit ipsa,
          aut recusandae architecto eligendi modi? Temporibus, sapiente?
          Repellat, magni autem?
        </p>
      </v-card>
      <v-card>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          iusto nam odio, delectus ipsam quam corrupti saepe cumque laudantium
          laborum harum molestias unde pariatur! Possimus provident a
          necessitatibus est numquam.
        </p></v-card
      >
      <v-card
        ><h1>Heading</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quis
          veritatis enim adipisci tempore praesentium velit eius aliquam aut,
          incidunt debitis commodi eos illum? Pariatur odit quod laboriosam
          eaque minima.
        </p></v-card
      >
    </div>
  </v-container>
</template>

<style scoped>
.image {
  display: flex;
  border-radius: 50px;
  background: url("/images/showcase2.jpg") fixed 100%;
  background-size: cover;
  position: relative;
  min-height: 400px;
}
.image .v-card {
  width: 30%;
  justify-content: center;
  height: 230px;
  border-radius: 20px;
  padding: 10px;
  background-color: whitesmoke;
  color: black;
  margin: auto;
}
</style>
