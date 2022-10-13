<template>
  <div class="board">
    <div class="structure">
      <div class="content" v-for="i in 10" :key="i">
        <v-card>
          <div class="image">
            <router-link to="/blogpost"
              ><img src="/images/showcase2.jpg" alt=""
            /></router-link>
          </div>
          <div class="desc">
            <h3><router-link to="/blogpost">Content Title</router-link></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              odio eveniet cum aliquam nihil tempora eaque, illum porro ipsam.
              Alias, modi at fugiat assumenda ratione quisquam atque nemo
            </p>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
};
</script>

<style scoped>
.structure {
  width: 60%;
  margin: 50px auto;
}
.v-card {
  margin-top: 10px;
  min-height: 200px;
  padding: 15px;
}
.image {
  width: 30%;
  float: left;
}
.image img {
  width: 100%;
  height: 100%;
}
.desc {
  width: 70%;
  float: right;
  padding: 0 15px 0 15px;
  text-align: left;
}
.desc h3 a {
  text-decoration: none;
  color: #0f054c;
}
.desc p {
  margin-top: 10px;
}

@media screen and (max-width: 600px) {
  .structure {
    width: 90%;
  }
  .v-card {
    min-height: 420px;
  }
  .image {
    width: 100%;
  }
  .image img {
    width: 100%;
    height: 200px;
  }
  .desc {
    width: 100%;
  }
}
</style>
