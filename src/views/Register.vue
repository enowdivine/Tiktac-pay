<template>
  <div>
    <Header />
    <section class="banner">
      <div class="overlay"></div>
      <v-container>
        <div class="container">
          <h2>Create Account</h2>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              assumenda ipsa magnam doloribus esse exercitationem optio
              voluptatem, quam sunt dolore quasi possimus consectetur quibusdam
              veritatis rem illum! Quaerat, pariatur officia.
            </p>
          </div>
        </div>
      </v-container>
    </section>
    <section class="form">
      <v-container>
        <v-card>
          <div class="head">
            <h2>Register</h2>
          </div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              color="#0f054c"
            ></v-text-field>

            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
              color="#0f054c"
            ></v-text-field>

            <v-text-field
              v-model="phoneNumber"
              :counter="13"
              label="Phone Number"
              required
              color="#0f054c"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              color="#0f054c"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRules.required, passwordRules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              color="#0f054c"
            ></v-text-field>

            <v-text-field
              v-model="passwordConfirm"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRules.required, passwordRules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Retype Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              color="#0f054c"
            ></v-text-field>

            <v-row justify="center">
              <v-dialog v-model="dialog" width="60%">
                <template v-slot:activator="{ on, attrs }">
                  <p v-bind="attrs" v-on="on" class="policy">
                    Terms and Privacy policy
                  </p>
                </template>
                <v-card class="agreement">
                  <v-card-title>
                    <span class="text-h5">Use Google's location service?</span>
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, semper quis, sapien id natoque
                    elit. Nostra urna at, magna at neque sed sed ante imperdiet,
                    dolor mauris cursus velit, velit non, sem nec. Volutpat sem
                    ridiculus placerat leo, augue in, duis erat proin
                    condimentum in a eget, sed fermentum sed vestibulum varius
                    ac, vestibulum volutpat orci ut elit eget tortor. Ultrices
                    nascetur nulla gravida ante arcu. Pharetra rhoncus morbi
                    ipsum, nunc tempor debitis, ipsum pellentesque, vitae id
                    quam ut mauris dui tempor, aptent non. Quisque turpis.
                    Phasellus quis lectus luctus orci eget rhoncus. Amet donec
                    vestibulum mattis commodo, nulla aliquet, nibh praesent,
                    elementum nulla. Sit lacus pharetra tempus magna neque
                    pellentesque, nulla vel erat. Justo ex quisque nulla
                    accusamus venenatis, sed quis. Nibh phasellus gravida metus
                    in, fusce aenean ut erat commodo eros. Ut turpis, dui
                    integer, nonummy pede placeat nec in sit leo. Faucibus
                    porttitor illo taciti odio, amet viverra scelerisque quis
                    quis et tortor, curabitur morbi a. Enim tempor at, rutrum
                    elit condimentum, amet rutrum vitae tempor torquent nunc.
                    Praesent vestibulum integer maxime felis. Neque aenean quia
                    vitae nostra, tempus elit enim id dui, at egestas pulvinar.
                    Integer libero vestibulum, quis blandit scelerisque mattis
                    fermentum nulla, tortor donec vestibulum dolor amet eget,
                    elit nullam. Aliquam leo phasellus aliquam curabitur metus
                    a, nulla justo mattis duis interdum vel, mollis vitae et id,
                    vestibulum erat ridiculus sit pulvinar justo sed. Vehicula
                    convallis, et nulla wisi, amet vestibulum risus, quam ac
                    egestas. Et vitae, nulla gravida erat scelerisque nullam
                    nunc pellentesque, a dictumst cras augue, purus imperdiet
                    non. Varius montes cursus varius vel tortor, nec leo a qui,
                    magni cras, velit vel consectetuer lobortis vel. Nibh erat
                    et wisi felis leo porttitor, sapien nibh sapien pede mi, sed
                    eget porttitor, repellendus arcu ac quis. Luctus vulputate
                    aut est sem magna, placerat accumsan nunc vestibulum ipsum
                    ac auctor, maecenas lorem in ut nec mauris tortor, doloribus
                    varius sem tortor vestibulum mollis, eleifend tortor felis
                    tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris
                    nec nunc euismod, tortor porta ridiculus potenti, massa
                    tristique nam magna, et wisi placerat et erat ante. Eget
                    pede erat in facilisis, fermentum venenatis sodales. Ac
                    tortor sociis et non animi tristique, rhoncus malesuada, ut
                    arcu volutpat scelerisque sollicitudin, elit curabitur dui
                    pede purus dolor, integer aenean risus taciti nulla eleifend
                    accumsan. At pulvinar diam parturient, interdum mi velit
                    aliquet et a. Arcu at ac placerat eget justo semper, purus
                    sociis curabitur mi ipsum consequat ut, mollis vestibulum,
                    est ante ornare lacus sem. Neque magna mauris, commodo
                    quisque, praesent semper suscipit lobortis nam. Justo
                    malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis
                    nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
                    aliquam, sed vestibulum nullam arcu sit risus arcu, id
                    luctus vitae lorem nibh, integer nec nullam class cursus mi,
                    purus arcu lectus. Vel ante suscipit volutpat potenti mattis
                    sed, wisi eu placerat aliquam erat, lectus morbi lobortis at
                    assumenda. Consequat neque purus ipsum voluptas odio, netus
                    vestibulum ut nec, suspendisse pellentesque nec enim in.
                    Wisi dictum sed semper a, ipsum erat tellus habitasse est,
                    erat sem ornare, vitae quisque ultricies. Dui sed blandit.
                    Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc
                    nibh pede, ipsum vestibulum aenean leo ante ultricies, nam
                    cras quis sed penatibus amet. In mauris a. Integer metus
                    mauris tortor, et rutrum vestibulum ultricies, ut phasellus
                    in ullamcorper ut mollit, eu justo. Cursus pretium
                    venenatis. Cras pellentesque vel sodales accumsan aenean.
                    Feugiat metus sit nec in aliquet amet, porttitor pretium
                    vulputate massa. Consequat ipsum luctus quisque adipiscing
                    libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem
                    natoque vestibulum et, aliquet faucibus at morbi nibh, vel
                    condimentum. Massa unde orci sed id sed, odio donec congue
                    nec praesent amet. Hymenaeos velit lacus, quis vivamus
                    libero tempus duis, eu nisi eu, ipsum at accumsan pede justo
                    morbi donec, massa et libero sit risus neque tortor. Ut sed
                    sed etiam hendrerit dapibus, quis metus suspendisse nibh.
                    Fringilla tempor felis augue magna. Cum arcu a, id vitae.
                    Pellentesque pharetra in cras sociis adipiscing est. Nibh
                    nec mattis at maecenas, nisl orci aliquam nulla justo
                    egestas venenatis, elementum duis vel porta eros, massa
                    vitae, eligendi imperdiet amet. Nec neque luctus suscipit,
                    justo sem praesent, ut nisl quisque, volutpat torquent wisi
                    tellus aliquam reprehenderit, curabitur cras at quis massa
                    porttitor mauris. Eros sed ultrices. Amet dignissim justo
                    urna feugiat mauris litora, etiam accumsan, lobortis a orci
                    suspendisse. Semper ac mauris, varius bibendum pretium, orci
                    urna nunc ullamcorper auctor, saepe sem integer quam, at
                    feugiat egestas duis. Urna ligula ante. Leo elementum
                    nonummy. Sagittis mauris est in ipsum, nulla amet non justo,
                    proin id potenti platea posuere sit ut, nunc sit erat
                    bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere
                    morbi nunc tellus gravida vivamus. Mauris nec, facilisi quam
                    fermentum, ut mauris integer, orci tellus tempus diam ut in
                    pellentesque. Wisi faucibus tempor et odio leo diam,
                    eleifend quis integer curabitur sit scelerisque ac, mauris
                    consequat luctus quam penatibus fringilla dis, vitae lacus
                    in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed
                    blandit id sed. Tellus integer, dignissim id pede sodales
                    quis, felis dolorem id mauris orci, orci tempus ut. Nullam
                    hymenaeos. Curabitur in a, tortor ut praesent placerat
                    tincidunt interdum, ac dignissim metus nonummy hendrerit
                    wisi, etiam ut. Semper praesent integer fusce, tortor
                    suspendisse, augue ligula orci ante asperiores ullamcorper.
                    In sit per mi sed sed, mi vestibulum mus nam, morbi mauris
                    neque vitae aliquam proin senectus. Ac amet arcu mollis ante
                    congue elementum, inceptos eget optio quam pellentesque quis
                    lobortis, sollicitudin sed vestibulum sollicitudin, lectus
                    parturient nullam, leo orci ligula ultrices. At tincidunt
                    enim, suspendisse est sit sem ac. Amet tellus molestie est
                    purus magna augue, non etiam et in wisi id. Non commodo,
                    metus lorem facilisi lobortis ac velit, montes neque sed
                    risus consectetuer fringilla dolor. Quam justo et integer
                    aliquam, cursus nulla enim orci, nam cursus adipiscing,
                    integer torquent non, fringilla per maecenas. Libero ipsum
                    sed tellus purus et. Duis molestie placerat erat donec ut.
                    Dolor enim erat massa faucibus ultrices in, ante ultricies
                    orci lacus, libero consectetuer mauris magna feugiat neque
                    dapibus, donec pretium et. Aptent dui, aliquam et et amet
                    nostra ligula. Augue curabitur duis dui volutpat, tempus sed
                    ut pede donec. Interdum luctus, lectus nulla aenean elit, id
                    sit magna, vulputate ultrices pellentesque vel id fermentum
                    morbi. Tortor et. Adipiscing augue lorem cum non lacus,
                    rutrum sodales laoreet duis tortor, modi placerat facilisis
                    et malesuada eros ipsum, vehicula tempus. Ac vivamus amet
                    non aliquam venenatis lectus, sociosqu adipiscing consequat
                    nec arcu odio. Blandit orci nec nec, posuere in pretium,
                    enim ut, consectetuer nullam urna, risus vel. Nullam odio
                    vehicula massa sed, etiam sociis mauris, lacus ullamcorper,
                    libero imperdiet non sodales placerat justo vehicula. Nec
                    morbi imperdiet. Fermentum sem libero iaculis bibendum et
                    eros, eget maecenas non nunc, ad pellentesque. Ut nec diam
                    elementum interdum. Elementum vitae tellus lacus vitae,
                    ipsum phasellus, corporis vehicula in ac sed massa vivamus,
                    rutrum elit, ultricies metus volutpat. Semper wisi et,
                    sollicitudin nunc vestibulum, cursus accumsan nunc pede
                    tempus mi ipsum, ligula sed. Non condimentum ac dolor sit.
                    Mollis eu aliquam, vel mattis mollis massa ut dolor ante,
                    tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum,
                    iaculis ut congue ac vivamus. Nam libero orci, pulvinar
                    nulla, enim pellentesque consectetuer leo, feugiat rhoncus
                    rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper
                    viverra. Ultricies quis orci lorem, suspendisse ut
                    vestibulum integer, purus sed lorem pulvinar habitasse
                    turpis. +
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      Disagree
                    </v-btn>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
              color="#0f054c"
            ></v-checkbox>

            <v-btn dark color="#0f054c" class="mt-5 pt-6 pb-6">Sign Up</v-btn>

            <router-link class="login-btn" to="/login">
              <v-btn color="lightcyan" class="mt-5 pt-6 pb-6"> Log in </v-btn>
            </router-link>
          </v-form>
        </v-card>
      </v-container>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Register",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    phoneNumber: "",
    numberRules: {
      required: true,
      digits: 13,
      regex: "^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$",
    },
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    password: "",
    passwordRules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    dialog: false,
    checkbox: false,
  }),
};
</script>

<style scoped>
template {
  background-color: whitesmoke;
}
.banner {
  margin-top: 90px;
  min-height: 500px;
  background: url("/images/bgPic.jpg") fixed 100%;
  background-size: cover;
  position: relative;
  color: white;
}
.overlay {
  width: 100%;
  height: 100%;
  background: darkblue;
  opacity: 0.4;
  top: 0;
  position: absolute;
}
.container {
  position: relative;
}

/*sectin styling*/
.form {
  border-radius: 50px;
  margin-top: -470px;
  background-color: whitesmoke;
}
.form p {
  text-align: left;
}
.form p a {
  text-decoration: none;
  color: #0f054c;
}

/*form styling */
.head h2 {
  color: #0f054c;
  font-family: Tahoma, sans-serif;
  font-size: 30px;
}
.form .v-card {
  width: 50%;
  margin: 100px auto;
  padding: 40px;
  border-radius: 10px;
  background-color: white;
}
hr {
  margin-top: 20px;
}
.v-btn {
  border-radius: 10px;
  margin: 10px;
  font-weight: bold;
}
.login-btn {
  text-decoration: none;
  color: #0f054c;
}

.policy {
  text-align: left;
  color: #0f054c;
  margin-top: 20px;
}

.agreement {
  margin-top: 100px;
}

@media only screen and (max-width: 480px) {
  .v-card {
    width: 90%;
  }
  .sign-in a {
    font-size: 12px;
  }
}
</style>
