// BOILERPLATE INICIAL. Este es el código que
// nos "regala" vue/cli cuando creamos un proyecto
// declarando vuex como dependencia. El store se
// puede crear de varias maneras pero este es el
// patrón que usaremos de memoria por buena práctica
// para comenzar. Luego se puede aprender el "por qué".

// import { createStore } from 'vuex'

// observa que el export default es: export default createStore({})
// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

// PASO 1. Defino variables de "estado"
// y sus valores iniciales dentro del objeto state: {}
// Aquí van las variables que yo necesito compartir entre
// varios componentes. En este ejemplo simple yo solo crearé
// una variable "contador" inicializada en 0

// state: {
//   contador: 0
// }

// PASO 2. Defino mis "mutations" (mutadores)
// estas son una colección de funciones que
// tienen "permitido" modificar las variables
// del estado directamente. Cada función en 
// mutations: {} puede recibir dos argumentos,
// el 1ro siempre representa al "objeto" state
// y el segundo al "payload" los datos que sean
// necesarios para modificar erl estado. Podemos
// crear tantos mutadores como requiera nuestra
// lógica. Recuerda que los argumentos state y
// payload pueden llamarse de cualquier manera 
// mientras sea consistente dentro de la función
// pero Vuex SIEMPRE, colocará el state en el 
// primer argumento y el payload en el segundo

// mutations: {
//   incrementar(state) {
//     state.contador++;
//   },
//   decrementar(state) {
//     state.contador--;
//   },
//   incrementarEn(state, payload) {
//     state.contador += payload;
//   },
//   decrementarEn(s, p) {
//     s.count -= p;
//   }
// }

// PASO 3. Defino métodos en actions: {}. Los
// métodos en esta parte existen porque los
// mutadores, por el patrón de buena práctica
// usaremos, no deberían ser accesibles de forma
// directa por los componentes. En casos muy
// simples puede ser pero para evitar ambiguedades
// que induzcan a error, aprendermos un patrón: 
// el state tiene los valores, mutations tiene las
// funciones que cambian el state, y actions tiene
// las funciones que pueden invocar las funciones 
// de mutations desde los componentes u otros archivos
// del proyecto.
// Cada método en actions también puede recibir 2
// argumentos: el "context" un objeto que tiene el
// listado completo de todas las propiedades en state,
// además de todas las funciones que puedan existir
// en mutations y getters, además de otras utilidades. 
// Nosotros lo usaremos para "invocar" mutations y 
// quizá algún getter. El segundo argumento es
// nuevamente, el "payload" los datos que enviamos
// desde el componente para modificar las propiedades
// del state.
// actions: {
//   incrementar(context) {
//     context.commit('incrementar')
//   },
//   decrementar(context) {
//     context.commit('decrementar')
//   },
//   incrementarEn(context, payload) {
//     context.commit('incrementarEn', payload);
//   },
//   decrementarEn(ctx, cuanto) {
//     ctx.commit('decrementarEn', cuanto)
//   }
// }

// EL archivo finalmente queda así:
import { createStore } from 'vuex'
import discos from '../db/data.js'      // olvida esto por ahora

export default createStore({
  state: {
    contador: 0,                        // declaramos contador
    discos: discos,                      // solo probando
    user: {
      nombre:"Pedrito",
      clave: "Developer",
      esAdmin: false
    }
  },
  mutations: {
    incrementar(state) {                // no usa el 2do argumento
      state.contador++;                 // porque siempre sumará 1
    },
    decrementar(state) {
      state.contador--;
    },
    incrementarEn(state, payload) {     // usa el 2do argumento porque
      state.contador += payload;        // el valor sumado puede cambiar
    },
    decrementarEn(stt, cuanto) {        // cualquier nombre
      stt.contador -= cuanto;           // pero consistente
    },
    esAdmin(stt) {
      stt.user.esAdmin = true;
    }
  },
  actions: {
    incrementar(context) {              // la string incrementar refiere
      context.commit('incrementar')     // al mutations.incrementar
    },
    decrementar(ctx) {                  // argumento ctx con cualquier nombre
      ctx.commit('decrementar');        // pero commit siempre se llama así.
    },
    incrementarEn(ctx, payload) {
      ctx.commit('incrementarEn', payload);
    },
    decrementarEn(ctx, cuanto) {
      ctx.commit('decrementarEn', cuanto)
    }
  }
})

// con esto, ya podemos usar los métodos mapState y mapActions
// que nos ofrece Vue en nuestros componentes para manejar el 
// contador desde cualquier componente sin perder el valor del
// estado.