<template>
    <div id="About" class="about-wrapper">
        <Authors />
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
import Authors from "@/components/Authors"
export default {
    name: "about",
    components: {
        Authors
    }
}
</script>
