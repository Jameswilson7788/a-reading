<template>
  <div class="main">
    <div class="header">
      <Nav></Nav>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Header/Nav.vue";

export default {
  components: { Nav },
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  background: white;
  border-bottom: 1px solid rgba(196, 196, 196, 0.9);
  margin: 0;
  padding: 0;
  box-shadow: 0px 1px 2px 0 black;
}
</style>