<template>
  <div id="app">
      <h1>Calculadora Vue.js</h1>
      <Calculator />
  </div>
</template>

<script>
import Calculator from "./main/Calculator"

export default {
    components: { Calculator }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

h1 {
    font-size: 1.3em;
}

* {
    font-family: "RobotoMono", "monospace";
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(to right, #1A2980, #26D0CE);
}
</style>