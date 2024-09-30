<template>
  <main class="home">
    <hgroup>
      <h1>vuex desde About</h1>
      <p>El valor actual del contador es: {{ contador }}</p>
      <p class="info">En este componente sí haremos lógica necesaria para cambiar los valores del contador</p>
    </hgroup>
    <article>
      <section>
        <p>Agregar o quitar 1 a la vez:</p>
        <button @click="decrementar">➖</button>
        <button @click="incrementar">➕</button>
      </section>
      <section>
        <p>Elige <label for="cuanto">cuánto:</label><input v-model="cuanto" id="cuanto" type="number" min="1" max="1000" step="1"></p>
        <button @click="decrementarEn(cuanto)">Quitar</button>
        <button @click="incrementarEn(cuanto)">Agregar</button>
      </section>
    </article>
    <p>Igual que en nuestro componente HomeView: 1) importamos <code>mapState</code> y <code>mapActions</code> en nuestro <code>script</code> y luego lo <em>"desgranamos"</em> de la misma manera. La única diferencia es que ahora también tenemos los métodos de <code>mapActions</code> que deben usarse en <code>methods: {}</code>. Observa el código del componente:</p>
    <pre><code>
      import { mapState, mapActions } from 'vuex'
      
export default {
  name: 'AboutView',
  data() {
    return {
      cuanto: 1,
    }
  },
  computed: {
    ...mapState(['contador'])
  },
  methods: {
    ...mapActions(['incrementar', 'decrementar', 'incrementarEn', 'decrementarEn'])
  }
}        
    </code></pre>

    <p class="warning">Observa y memoriza la sintaxis de <em>"desgranado"</em> que se usa en <code>computed</code> que es la misma que se usa en <code>methods</code></p>
    <p>Ahora, el código relevante de nuestro <code>template</code></p>
    
    <pre><code>
      &lt;p>Agregar o quitar 1 a la vez:&lt;/p>
      &lt;button @click="decrementar">➖&lt;/button>
      &lt;button @click="incrementar">➕&lt;button>
      
      &lt;p>Elige &lt;label for="cuanto">cuánto:&lt;/label>&lt;input v-model="cuanto" id="cuanto" type="number" min="1" max="1000" step="1">&lt;/p>
      &lt;button @click="decrementarEn(cuanto)">Quitar&lt;/button>
      &lt;button @click="incrementarEn(cuanto)">Agregar&lt;/button>
    </code></pre>
    <p class="warning">Observa que al <em>"desgranar"</em> las actions del store en <code>methods</code> no hemos agregado código a los métodos, porque ya tienen su código (lógica) en el store. Acá solo los estamos 'importando'. Por eso, es que podemos usar <code>incrementarEn</code> con un argumento <code>(cuanto)</code> porque en su definición en el store, <code>actions.incrementarEn</code> si recibe un <em>"payload"</em>. Es este <em>"payload"</em> el que nos permite modificar el contador en un valor a voluntad a través del input. Lo mismo aplica para <code>decrementarEn</code>, y bueno, como <code>incrementar</code> y <code>decrementar</code> no necesitan un argumento los usamos directamente en sus botones.</p>
  </main>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'AboutView',
    data() {
      return {
        cuanto: 1,
      }
    },
    computed: {
      ...mapState(['contador'])     // mapState siempre en computed
    },
    methods: {                      // mapActions siempre en methods
      ...mapActions(['incrementar', 'decrementar', 'incrementarEn', 'decrementarEn']),
      // incrementar: mapActions(['incrementar']),
      // decrementar: mapActions(['decrementar']),
      // incrementarEn: mapActions(['incrementarEn']),

    }
  }
</script>