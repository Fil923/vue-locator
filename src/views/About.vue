<template>
    <div id="About" class="about-wrapper">
        <Author />
        <Author />
    </div>
</template>

<style scoped>
.about-wrapper {
    display: flex;
    justify-content: space-around;
}

@media only screen and (max-width: 600px) {
  .about-wrapper {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>

<script>
import Author from "@/components/Author"
export default {
    name: "about",
    components: {
        Author
    }
}
</script>
