<template>
  <div class="board">
    <div class="links">
      <v-navigation-drawer permanent>
        <v-list-item class="px-2">
          <!-- <v-list-item-avatar> 
             <v-img src="/images/tiktacPay-light.png"></v-img>
          </v-list-item-avatar> -->

          <router-link to="/"
            ><img src="/images/tiktacPay-light.png" alt=""
          /></router-link>

          <!-- <v-list-item-title class="headx">TiktacPay</v-list-item-title> -->
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <router-link :to="item.page"><v-icon small>{{ item.icon }}</v-icon></router-link>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link class="items" :to="item.page">{{
                item.title
              }}</router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",

  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", page: "/dashboard" },
        { title: "Integration", icon: "mdi-wallet", page: "/integration" },
        { title: "My Apps", icon: "mdi-receipt", page: "/apps" },
        {
          title: "Transaction",
          icon: "mdi-account-cash",
          page: "/transactions",
        },
        { title: "Profile", icon: "mdi-cog", page: "/profile" },
      ],
      right: null,
    };
  },
};
</script>
<style scoped>
.items {
  text-align: left;
  color: black;
  text-decoration: none;
  margin-top: 13px;
}
.v-icon {
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 3px;
  color: #0f054c;
}
img {
  width: 100%;
  padding: 10px;
}
</style>
