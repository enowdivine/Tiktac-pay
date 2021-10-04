<template>
  <div class="board">
    <div class="links">
      <v-navigation-drawer permanent>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title class="headx">TiktacPay</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="items">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="get-apps">
      <GetApps />
    </div>
  </div>
</template>

<script>
import GetApps from "./GetApps";
export default {
  name: "LeftColumn",
  components: {
    GetApps,
  },
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "My Wallets", icon: "mdi-image" },
        { title: "Transaction", icon: "mdi-help-box" },
        { title: "Invoice", icon: "mdi-view-dashboard" },
        { title: "Cards", icon: "mdi-image" },
        { title: "Settings", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
};
</script>
<style scoped>
.board {
  padding-bottom: 40px;
}
.links {
  margin-left: 20px;
  padding-top: 30px;
}
.headx {
  font-weight: bold;
}
.items {
  text-align: left;
}
.get-apps {
  background-color: whitesmoke;
  width: 80%;
  margin: 0 auto;
  min-height: 200px;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
