<template>
  <section>
    <v-container>
      <v-row>
        <div class="description">
          <h3>Plugin Module</h3>
          <p>
            For easy intergration, Download our woocormmerce plugin Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Porro maiores
            voluptatum et sequi, nam praesentium pariatur, quibusdam ullam
            aliquid non fuga eligendi beatae ipsum modi reiciendis mollitia est
            totam id.
          </p>
          <div class="btn">
            <v-btn dark rounded color="#0f054c">click to download</v-btn>
          </div>
        </div>
        <div class="image">
          <img src="/images/image4.jpg" alt="Oh no!!" />
        </div>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "SectionFour",
};
</script>

<style scoped>
section {
  background-color: #fff;
  display: flex;
  min-height: 500px;
}
.description {
  width: 50%;
  padding: 30px;
  margin: 50px 0 0 0;
}
h3 {
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 20px;
  text-align: left;
}
p {
  font-size: 18px;
  text-align: left;
}
.btn {
  float: left;
  margin-top: 30px;
}
.image {
  width: 50%;
  margin-top: 85px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

@media only screen and (max-width: 480px) {
  .description {
    width: 100%;
    margin: 0;
  }
  .image {
    width: 100%;
    margin-top: 10px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
