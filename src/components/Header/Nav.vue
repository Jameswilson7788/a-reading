<template>
  <div>
    <nav :class="{}" v-show="isOnTop">
      <div class="headline">
        <div class="logo">
          <img
            class="logo"
            width="48"
            height="48"
            src="https://signland.nl/wp-content/uploads/2017/09/ss-ltr-W.jpg"
          />
          <span class="title">W-Reading</span>
        </div>
        <button class="menu">
          <ArrowDown style=""></ArrowDown>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import ArrowDown from "./ArrowDown.vue";

export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.top.scrollY > 30) {
        this.isOnTop = false;
      } else {
        this.isOnTop = true;
      }
    },
  },
  components: {
    ArrowDown,
  },

  data() {
    return {
      isOnTop: true,
      navList: [
        {
          name: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  height: 80px;
  background: white;
  border-bottom: 1px solid rgba(196, 196, 196, 0.9);
  margin: 0;
  padding: 0;
  box-shadow: 0px 1px 2px 0 black;
}
.scroll-not-top {
  position: absolute;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

.headline {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 12px;
}
.logo {
  display: flex;
  align-items: center;
}
button {
  background: #ffffff;
  border: 0px;
}
button:focus {
  border: 0;
}
</style>