<script setup>
import HelloWorld from "./components/HelloWorld.vue";

</script>

<template>

  <header>
    <div class="logo_container">
      <img src="./assets/logo.jpg" alt="logo" class="logo">
    </div>
    <h1>Oceanautas</h1>
    <div class="header_buttons">
      <button class="button about">¿Quienes somos?</button>
      <button class="button login">Iniciar sesión</button>
      <button class="button singup">Registrate</button>
    </div>
  </header>

  <body>
    <section class="top_container">
      <p class="parrafo">Top</p>
      <div class="parrafo_buttons">
        <button class="donadores">Donadores</button>
        <button class="voluntarios">Voluntarios</button>
      </div>
    </section>

    <main>
      <div class="wrapper">
        <HelloWorld />
      </div>
    </main>

  </body>

</template>

<style>
.logo_container {
  margin: 1rem 1.4rem;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}

.logo {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.header_buttons {
  display: flex;
}

.button {
  height: 50px;
  margin: 0 .5rem;
  border: none;
}

.top_container {
  display: flex;
  min-width: 20rem;
  max-width: 35rem;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 6rem;
  left: 12rem;
  padding: .5rem;
  background-color: rgb(26, 166, 194);
}

.top_container button {
  margin: 0 .4rem;
}

.parrafo {
  margin: 0 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.parrafo_buttons {
  padding: 0 1rem;
}

.donadores {
  height: 50px;
  font-weight: bold;
}

.voluntarios {
  height: 50px;
  font-weight: bold;
}

button {
  cursor: pointer;
}

body {
  color: white;
  background-color: #0E6FA0;
  font-family: 'Poppins', sans-serif;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
