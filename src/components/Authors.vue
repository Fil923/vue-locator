<template>
    <section id="Authors" class="authors-wrapper">
        <div class="author salmen">
            <img src="@/assets/avatar-salmen.jpg" alt="Salmen author image profile">
            <h2>Salmen Bejaoui</h2>
            <p class="bio">Mi occupo di sviluppo frontend in YNAP. Nel tempo libero fotografo. Da autodidatta, appassionato di tecnologia, le ho provate quasi tutte, passando dalla mondo 3D e motion design fino all'arrivare allo sviluppo web.</p>
            <p>Github: <a href="https://github.com/SLMNBJ">SLMNBJ</a></p>
        </div>
        <div class="author filippo">
            <img src="@/assets/avatar-filippo.jpg" alt="Filippo author image profile">
            <h2>Filippo Nardi</h2>
            <p class="bio">Appassionato della tecnologia sin dalla nascita, laureato in informatica a Camerino e sviluppatore front end dal 2016 presso Ynap. Da allora, oltre alla tecnologia, si è appassionato a tutto ciò che riguarda il web e ciò che lo compone.</p>
            <p>Github: <a href="https://github.com/Fil923">Fil923</a></p>
        </div>
    </section>
</template>

<style scoped>
.authors-wrapper {
  display: flex;
  justify-content: space-between;
}

.author {
  padding: 0 20px;
}

.author > img {
  width: 100%;
  height: auto;
}

.author .bio {
  padding: 0 20px;
  max-width: 400px;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .author {
    width: 100%;
  }
  .authors-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>

<script>
export default {
  name: "Authors"
};
</script>
