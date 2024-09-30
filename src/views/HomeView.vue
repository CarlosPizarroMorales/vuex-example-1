<template>
  <main class="home">
    <hgroup>
      <h1>Usando el store de vuex</h1>
      <p>El valor actual del contador es: {{ contador }}</p>
      <p>El usuario actual es: {{ user.nombre }}</p>
    </hgroup>
    <p>Importamos los métodos necesarios en nuestro script con la línea:</p>
    <code>import { mapState, mapActions } from 'vuex'</code>
    <p>Si solo se usará uno de ellos puede ser solo <code>{ mapState }</code> o <code>{mapActions}</code></p>
    <p>Luego, <em>"desgranamos"</em> el state en <code>computed</code> y los métodos en <code>methods</code></p>
    <p>El código del <code>script</code> en nuestro componente queda así:</p>
    <pre><code>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['contador'])
  }
}        
    </code></pre>
    <p>Observa y memoriza la sintaxis de <em>"desgranado"</em> que se usa en <code>computed</code></p>
    <p>Los tres puntitos en <code>...mapState(['contador', 'cualquierOtro', etc, ...])</code> van llenado el objeto <code>computed</code> con cada una de las strings que se pasan a <code>mapState([])</code> como argumento. En el caso de este ejercicio solo existe un valor, <code>contador</code> pero podría ser cualquiera, y en este patrón al menos <code>mapState([])</code> las strings deben coincidir con el nombre de un método en actions.</p>
    <p class="warning">También observa que no estamos importando ni usando <code>mapActions</code> porque este componente para efectos didácticos, no tiene la responsabilidad de modificar los valores, sino solo de mostrarlos. En AboutView crearemos los componentes necesarios para modificar el state.</p>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['contador', 'user'])
  }
}
</script>
