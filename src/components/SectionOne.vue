<template>
  <section class="showcase">
    <v-container>
      <v-row>
        <div class="description">
          <h3>The Next Gen Payment Method</h3>
          <p>
            Tiktacpay is a cross plateform system that enables you to manage
            your digital wallet and also a virtual card. Enables tiktac transfer
            of money from your wallet to your virtual card and vice versa. Also,
            instantly accept MTN Mobile Money, Orange Money, Express Union, and
            Local Debit cards (Mastercard and Visa)
          </p>
          <div class="buttons">
            <v-btn dark rounded color="green"><b>Get Started</b></v-btn>
            <v-btn dark rounded color="#0f054c"><b>Learn More</b></v-btn>
          </div>
        </div>
        <div class="image">
          <img src="/images/online_payment.png" alt="Oh no!!" />
        </div>
      </v-row>
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
  background-color: #fff;
  margin-top: 120px;
  display: flex;
}
.description {
  width: 50%;
  padding: 30px;
}
h3 {
  font-size: 70px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: left;
  color: black;
  line-height: 80px;
}
p {
  text-align: left;
  font-size: 18px;
  margin-top: 20px;
  color: black;
}
.buttons {
  width: 60%;
  display: flex;
  justify-content: space-evenly;
}
.image {
  width: 50%;
  padding: 0px;
  margin-top: 20px;
}
img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 480px) {
  .description {
    width: 100%;
  }
  .buttons {
    width: 100%;
  }
  .v-btn {
    margin-top: 15px;
    margin: 10px;
  }
}
</style>
