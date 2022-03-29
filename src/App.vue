<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// 初始化REM, 当DOM加载完毕时，设置html元素的fontSize
document.addEventListener("DOMContentLoaded", (e) => {
  let fontSize = window.innerWidth / 37.5 ? 15 : window.innerWidth;
  let html = document.documentElement;
  html.style.fontSize = fontSize + "px";
  console.log(html);
  console.info("html-font-size: ", html.style.fontSize);
});

import Login from "./view/Login";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
</style>
