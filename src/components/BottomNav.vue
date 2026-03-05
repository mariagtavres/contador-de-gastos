<template>
  <nav class="bottom-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/history">Historico</router-link>
    <router-link to="/recurring">Recorrentes</router-link>
  </nav>
</template>

<style scoped>

a {
    text-decoration: none;
    color: #777;
    font-weight: 500;
  }

.router-link-active {
  color: #4f6df5;
  font-weight: 600;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 700px;
  background: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 12px 0;
  border-top: 1px solid #eee;
}

.bottom-nav a {
  text-decoration: none;
  color: #888;
  font-size: 14px;
  text-align: center;
}

.bottom-nav a.router-link-active {
  color: #3b82f6;
  font-weight: 600;
}
</style>