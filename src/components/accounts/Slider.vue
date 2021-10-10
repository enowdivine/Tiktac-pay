<template>
  <div class="board">
    <div class="links">
      <v-navigation-drawer permanent>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="/images/logo.jpeg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title class="headx">TiktacPay</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon small>{{ item.icon }}</v-icon>
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
        { title: "Dashboard", icon: "mdi-view-dashboard", page: "/account" },
        { title: "My API's", icon: "mdi-wallet", page: "/api" },
        { title: "My Apps", icon: "mdi-receipt", page: "/apps" },
        {
          title: "Transaction",
          icon: "mdi-account-cash",
          page: "/transaction",
        },
        { title: "Billing", icon: "mdi-credit-card-sync", page: "/billing" },
        { title: "Settings", icon: "mdi-cog", page: "/setting" },
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
}
.v-icon {
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 3px;
}
</style>
