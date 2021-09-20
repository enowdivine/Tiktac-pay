<template>
  <div>
    <Header />
    <SectionOne />
    <SectionTwo />
    <ShowcaseTwo />
    <SectionThree />
    <SectionFour />
    <ShowcaseFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import ShowcaseTwo from "../components/ShowcaseTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import ShowcaseFour from "../components/ShowcaseFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    SectionOne,
    SectionTwo,
    ShowcaseTwo,
    SectionThree,
    SectionFour,
    ShowcaseFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
    Footer,
  },
};
</script>
