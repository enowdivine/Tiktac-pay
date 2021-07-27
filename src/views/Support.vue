<template>
  <div>
    <Header />
    <section class="banner">
      <div class="overlay"></div>
      <v-container>
        <h2>Welcome To Our Helpdesk</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam delectus ut officiis mollitia rerum recusandae quos modi distinctio, 
          esse molestiae voluptate! Ex unde quas autem itaque accusantium molestias labore a!</p>
      </v-container>
    </section>

    <section class="box">
        <v-container>
            <v-row>
                <a href="#">
                <v-card>
                    <v-icon>mdi-account</v-icon> 
                    <h3>Knowledge Base</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        ucimus quis eum obcaecati temporibus dicta ipsa?</p>
                </v-card>
                </a>
                <a href="#">
                    <v-card>
                        <v-icon>mdi-account</v-icon>
                        <h3>FAQs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                            ucimus quis eum obcaecati temporibus dicta ipsa?</p>
                    </v-card>
                </a>
                <a href="#">
                    <v-card>
                        <v-icon>mdi-account</v-icon>
                        <h3>More Questions?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            ucimus quis eum obcaecati temporibus dicta ipsa?</p>
                    </v-card>
                </a>
            </v-row>
        </v-container>
    </section>

    <section class="articles">
        <v-container>
            <v-row>
                    <v-card>
                        <v-toolbar
                        flat
                        color="#0F054C"
                        dark
                        >
                        <v-toolbar-title>Articles</v-toolbar-title>
                        </v-toolbar>
                        <v-tabs vertical>
                        <v-tab>
                            <!-- <v-icon left>
                            mdi-account
                            </v-icon> -->
                            For Freelancers
                        </v-tab>
                        <v-tab>
                            For companies
                        </v-tab>
                        <v-tab>
                            For Web developers
                        </v-tab>

                        <v-tab-item>
                            <v-card flat>
                            <v-card-text>
                                <p>
                                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                                </p>

                                <p>
                                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                                </p>

                                <p class="mb-0">
                                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                                </p>
                            </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                            <v-card-text>
                                <p>
                                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                                </p>

                                <p>
                                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                                </p>

                                <p>
                                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                                </p>

                                <p>
                                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                                </p>

                                <p class="mb-0">
                                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                            <v-card-text>
                                <p>
                                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                                </p>

                                <p class="mb-0">
                                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                                </p>
                            </v-card-text>
                            </v-card>
                        </v-tab-item>
                        </v-tabs>
                    </v-card>
            </v-row>
        </v-container>
    </section>

    <section class="faqs">
        <v-container>
            <div class="faq-header">
                <h1>Frequently Asked Questions</h1>
            </div>
            <template>
                <v-expansion-panels focusable>
                    <v-expansion-panel
                    v-for="(item,i) in 1"
                    :key="i"
                    >
                    <v-expansion-panel-header>How to widthdraw money from your account</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                     <v-expansion-panel
                    v-for="(item,i) in 1"
                    :key="i"
                    >
                    <v-expansion-panel-header>How to deposite money in your account</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                     <v-expansion-panel
                    v-for="(item,i) in 1"
                    :key="i"
                    >
                    <v-expansion-panel-header>How to reset your password</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </template>
        </v-container>
    </section>
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import SectionSix from "../components/SectionSix";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";
import Footer from "../components/Footer";

export default {
  name: "Support",
  components: {
    Header,
    SectionSix,
    SectionSeven,
    SectionEight,
    Footer,
  },
}
</script>

<style scoped>
  .banner{
    min-height: 200px; 
    background: url("/images/bgPic.jpg") fixed 100%;
    background-size: cover;
    position: relative;
    color: white;
  }
  .overlay{
        width: 100%;
        height: 100%;
        background: darkblue;
        opacity: 0.4;
        top: 0;
        position: absolute;
    }
    .v-icon{
        font-size: 60px;
        color: #0F054C;
    }
    .container{
      position: relative;
    }
    .box{
        margin: 100px 0 100px 0;
    }
    .article-head{
        color: #0F054C;
        font-size: 30px;
        margin: 0 0 30px -80%;
    }
    .articles{
        padding: 80px 0 100px 0;
        background-color: aliceblue;
    }
    a{
      width: 30%;
      margin: 10px;
      text-decoration: none;
    }
    .v-card{
        padding: 40px;
    }
    .faqs{
        margin: 80px 0 100px 0;
    }
    .faq-header{
        color: #0F054C;
        font-size: 25px;
        margin: 0 0 10px 0;
    }
</style>
