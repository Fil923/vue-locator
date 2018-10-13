<template>
    <div id="Author" class="author">
        <img src="#" alt="author image profile">
        <p>name</p>
        <p>bio</p>
        <p>Link Github <a href="#">link</a></p>
    </div>
</template>

<style scoped>
.author {
    width: 50%;
}

@media only screen and (max-width: 600px) {
  .author {
    width: 100%;
  }
}
</style>

<script>
export default {
    name: "Author"
}
</script>
