<template>
  <div class="header">
    <div class="nav-bar">
      <div class="title">
        <router-link to="/">
          <img src="../assets/appLogo.png" alt="appLogo" class="app-logo" />
        </router-link>
      </div>
      <ul class="nav-items">
        <li>Offers</li>
        <li>
          <router-link to="/search" class="router-link">Search</router-link>
        </li>
        <li>Help</li>
        <li>Sing In</li>
        <li><router-link to="/cart" class="router-link">Cart</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.app-logo {
  width: 50px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid orange;
}
.header {
  padding: 0px 50px;
  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar > .nav-items {
  display: flex;
  list-style-type: none;
}

.nav-bar > .nav-items > li {
  padding: 24px 13px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
}

.router-link {
  text-decoration: none;
  color: #282c3f;
}

.nav-items > li:hover {
  text-decoration: orange 3px underline;
  text-underline-offset: 15px;
}
</style>
