<template>
  <div id="app">
    <div id="nav">
      <router-link to="/table">Table</router-link>
      |
      <router-link to="/notification">Notification</router-link>
      |
      <router-link to="/modal">Modal</router-link>
      |
      <router-link to="/tooltip">Tooltip</router-link>
      |
      <router-link to="/parallax">Parallax</router-link>
      |
      <router-link to="/calendar">Calendar</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
