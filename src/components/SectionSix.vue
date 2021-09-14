<template>
  <section>
    <v-container>
      <div class="description">
        <h3>Get In Touch</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          beatae ad nesciunt ut cum. Aperiam, eaque aut eius distinctio fuga
          dolor culpa iusto obcaecati praesentium, quo voluptate fugiat nesciunt
          voluptas?
        </p>
        <div class="buttons">
          <v-btn dark rounded color="green">contact</v-btn>
          <v-btn rounded color="white">get started</v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SectionOne",
};
</script>

<style scoped>
section {
  background-color: #0f054c;
  padding: 30px 0 30px 0;
  min-height: 450px;
  margin-top: 80px;
}
.description {
  width: 50%;
  margin: auto;
  padding: 30px;
  text-align: center;
}
h3 {
  font-size: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: white;
}
p {
  color: white;
  font-size: 18px;
  margin-top: 20px;
}
.buttons {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
}

@media only screen and (max-width: 480px) {
  .description {
    width: 100%;
    margin: 0;
  }
  .buttons {
    width: 100%;
    margin: 0;
  }
  .v-btn {
    display: block;
    margin-top: 10px;
  }
}
</style>
