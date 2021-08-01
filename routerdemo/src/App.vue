<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link
      :to="{ path: `/account/${course.id}`, query: { token: 'abc123' } }"
      >Account</router-link
    >
    |
    <router-link :to="`/account/${course.id}`"> Account2</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return { 
      course: {
        name: "ReactJs",
        id: 1122,
      },
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
