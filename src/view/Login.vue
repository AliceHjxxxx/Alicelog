<template>
  <div class="align body">
    <div class="words">每一天都有所为才能毋负过晚上</div>
    <form class="login">
      <div class="form_item" prop="name">
        <label for="login_username"
          ><svg class="icon">
            <use xlink:href="#icon-user"></use></svg
          ><span class="hidden">Username</span></label
        >
        <input
          type="text"
          autocomplete="username"
          name="username"
          id="login_username"
          placeholder="Username"
          class="form_input"
          v-model="info.username"
        />
      </div>
      <div class="form_item">
        <label for="login_password"
          ><svg class="icon">
            <use xlink:href="#icon-lock"></use></svg
          ><span class="hidden">Username</span></label
        >
        <input
          type="password"
          autocomplete="password"
          name="password"
          id="login_password"
          placeholder="Password"
          class="form_input"
          v-model="info.password"
        />
      </div>
      <div class="submit" @click="login_opt">SIGN IN</div>
    </form>

    <svg xmlns="http://www.w3.org/2000/svg" class="icons">
      <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
        <path
          d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"
        />
      </symbol>
      <symbol id="icon-lock" viewBox="0 0 1792 1792">
        <path
          d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"
        />
      </symbol>
      <symbol id="icon-user" viewBox="0 0 1792 1792">
        <path
          d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"
        />
      </symbol>
    </svg>
  </div>
</template>

<script>
import { login } from "../api/login.js";
export default {
  name: "Login",
  data() {
    return {
      info: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    login_opt() {
      if (this.username == "" || this.password == "")
        this.open1("error", "用户名或密码不能为空");
      else {
        console.log(process.env);
        this.sendrequst();
      }
    },
    async sendrequst() {
      try {
        const res = await login(this.info);
        this.open1("success", "欢迎回家");
        localStorage.setItem("token", res.data.token);
        this.$router.replace({ path: "/home" });
        // console.log(res.data);
      } catch (err) {
        console.log(err);
        this.open1("error", "登陆失败");
      }
    },
    open1(type, msg) {
      this.$notify({
        message: msg,
        type: type,
        duration: 1000,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.align {
  // 网格布局
  // display: grid;
  display: flex;
  flex-direction: column;
  place-items: center;
}
.body {
  background-color: #2c3338;
  color: #606468;
  font-size: 0.875rem;
  // font-weight: 400;
  margin: 0;
  // 最小视口的高度
  min-block-size: 100vh;
}
.form {
  margin: 0.875rem;
}
.icons {
  display: none;
}
.icon {
  // 块级高度
  block-size: 1rem;
  display: inline;
  fill: #606468;
  //行内宽度
  inline-size: 1rem;
  // vertical-align: middle;
}
input {
  background-image: none;
  border: 0;
  // 颜色继承父元素
  color: inherit;
  font: inherit;
  margin: 0;
  outline: none;
  padding: 0;
  transition: background-color 0.3s;
}
.login {
  color: #eee;
  margin: 0.875rem;
}
.login label,
.login input[type="text"],
.login input[type="password"] {
  border-radius: 0.25rem;
  padding: 1rem;
}
.login input[type="text"],
.login input[type="password"] {
  background-color: #3b4148;
  inline-size: 100%;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.login input[type="password"]:focus,
.login input[type="password"]:hover,
.login input[type="text"]:focus,
.login input[type="text"]:hover {
  background-color: #434a52;
}
.hidden {
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
  position: absolute;
}
.login label {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background-color: #363b41;
}

.form_item {
  display: flex;
  margin: 0.875rem;
}
// .form_item {
//   margin: 0.875rem;
// }

.form_input {
  flex: 1;
}
.submit {
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: #ea4c88;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  margin: 0.875rem;
  &:hover {
    background-color: #d44179;
  }
}
.words {
  top: 30%;
  color: #fff;
  text-align: center;
  position: absolute;
  font-size: 1rem;
  padding: 1rem;
}
.login {
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
}
</style>