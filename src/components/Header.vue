<template>
    <div id="Header" class="header-wrapper">
        <h2>A simple store locator made with vue</h2>
        <nav id="Navigation">
          <ul class="navigation-wrapper">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  margin-bottom: 10px;
}

.navigation-wrapper {
  display: flex;
  justify-content: center;

    li {
      padding: 0 10px;
    }
}
</style>

<script>
export default {
  name: "Header"
};
</script>
