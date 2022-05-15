<script setup>
import HelloWorld from "./components/HelloWorld.vue";

</script>


<template>
  
   
  <header>
    <img src="./assets/logo.jpg" alt="logo" class="logo">
    <div>  
      <button class="quienes_somos">¿Quienes somos?</button>
      <button class="iniciar_sesion">Iniciar sesión</button>
      <button class="registrate">Registrate</button>
    </div>
     
  
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  
  <body>
     <section>    
      <div class="top"><p class="parrafo">Top</p> <button class="donadores">Donadores</button> <button class="voluntarios">Voluntarios</button></div> 
     </section>
    
  </body> 

  <main>
    <TheWelcome />
  </main>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  position: relative;
  top: -350px;
  left: -200px;
  display: block;
  margin: 0 auto 2rem;
  width: 200px;
  height: 200px;
  
}

.quienes_somos {
   position: relative;
   left: 750px;
   top: -350px;
   font-weight: bold;
   height: 50px;   
}

.iniciar_sesion{
  height: 50px;
  width: 100px; 
  position: relative;
  left: 900px;
  top: -400px;
  font-weight: bold;
   
}

.registrate{
  position: relative;
  left: 1050px;
  top: -450px;
  font-weight: bold;
  height: 50px;
}

.top{
  background-color: gray;
  position: relative;
  top: -100px;
  left: -1360px;
  width: 850px;
  height: 100px;
}

p.parrafo{
     position: relative;
     left: 10px;
     top: 33px;
     font-weight: bold;   
}

.donadores{
   position: relative;
   left: 60px;
   top: -20px;
   height: 50px;
   font-weight: bold; 
}

.voluntarios{
  position: relative;
  left: 80px;
  top: -20px;
  height: 50px;
  font-weight: bold;
}

body{
  background-color: #0E6FA0;
}

header {
  line-height: 1.5;
}



a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
