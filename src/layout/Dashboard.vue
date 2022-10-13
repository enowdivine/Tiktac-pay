<template>
  <div class="dashboard">
    <div class="sidebar"></div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.dashboard {
  display: flex;
}
.sidebar {
  flex: 2;
  background-color: red;
}
.main {
  flex: 8;
  background-color: blue;
}
</style>
