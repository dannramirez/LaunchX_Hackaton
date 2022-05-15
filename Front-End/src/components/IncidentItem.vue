<template>
  <div class="incident_container">
    <div class="incident_items">
      <h2>Incidente</h2>
      <p class="incident_organisation">Organizacion</p>
      <p class="incident_help">¿Comó ayudarnos?</p>
      <div class="incident_button">
        <button>Donar</button>
        <button>Voluntariado</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncidentItem"
}
</script>

<style scoped>
.incident_container {
  height: auto;
  width: 12rem;
  padding: .6rem 0;
  border-radius: 25px 25px 0 25px;
  text-align: center;
  background-color: #507dee;
}

.incident_container h2 {
  font-size: 1.5rem;
  margin: 0;
}

.incident_organisation {
  font-size: 1.4rem;
  width: 90%;
  margin: auto;
  padding: .4rem 0;
}

.incident_button button {
  margin: 0 .4rem;
  height: 2rem;
  padding: .3rem;
  border: none;
  border-radius: 5px;
  background-color: #64CBF7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.incident_button button:hover {
  background-color: #19acec;
  transition: all ease .4s;
  color: white;
}

.incident_items {
  margin: auto;
  padding: .6rem;
}
</style>