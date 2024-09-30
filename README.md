# vuex-first-steps

- [vuex-first-steps](#vuex-first-steps)
  - [Descripcion](#descripcion)
  - [Primeros hallazgos:](#primeros-hallazgos)
  - [Comenzando a crear un store](#comenzando-a-crear-un-store)
  - [Usando el store](#usando-el-store)
  - [Comandos:](#comandos)
  - [Flujos de trabajo](#flujos-de-trabajo)
    - [Crear un proyecto con vuex](#crear-un-proyecto-con-vuex)


## Descripcion
Un pequeño proyecto para introducir en los conceptos básicos de vuex.

Ejemplo construido sobre Vue3 con `vue/cli` a través de `vue create vuex-first-steps`, y configurado con vue-router y vuex para observar el entorno completo habitual. Linter solo para corregir errores.

## Primeros hallazgos:

1. En [`/src/main.js`](./src/main.js), observa que se importa el store y se inserta con `use(store)` en la línea de creación de la app:
```js
import store from './store'
createApp(App).use(store).use(router).mount('#app')
```

2. En `/src` se ha creado una nueva carpeta `store/` con un archivo [``index.js``](./src/store/index.js) que está controlado por vuex de la misma manera que `src/router/index.js` está controlado por vue-router.
3. Este archivo tiene un boilerplate (template o plantilla) base para crear de inmediato nuestro store:
```js
// /src/store/index.js

// se importa la función que crea un store desde vuex,
// un poco de forma similar a como importamos axios en
// ejercicios anteriores.

// la función importada "createStore" se utiliza acá
// junto con export default para que otros módulos (archivos)
// y componentes puedan hacer uso de ella. Así es como la
// importa App.vue en el ejemplo del punto 1.
import { createStore } from 'vuex'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```

## Comenzando a crear un store
1. Llenar el state: {} con propiedades así como hacemos en data() {} de los componentes, con las variables que vamos a necesitar.
2. Llenar los mutations: {} con métodos que reciben el argumento state y posiblemente un argumento payload para modificar el estado. Por buena práctica no usaremos estos métodos directamente desde nuestros componentes sino que crearemos,
3. métodos en actions: {} que pueden recibir dos argumentos, el primero llamado "context" que tiene varios objetos, pero a nosotros nos interesa el método `commit` que nos permite invocar cualquier método en mutations y getters, y un posible segundo argumento `payload` que tiene el valor a usar para modificar el estado (cuando es necesario, no siempre)
4. Revisa el archivo `/store/index.js` para comentarios detallados en este proceso.

## Usando el store
1. Una vez creado el store, con state, mutations y actions (al menos), podemos usarlo en nuestros componentes, para eso, importaremos dos métodos especiales de vuex:
2. `import { mapState, mapActions } from 'vuex'`
3. Estos métodos se usan para llenar el `computed` del componente con mapState, y los `methods` con `mapActions`. Ver archivos `/src/views/HomeView.vue` y `/src/views/AboutView.vue` para comentarios detallados sobre esto.

## Comandos:
```
- Instalar node_modules cuando no están presentes: `npm install`
- Levantar servidor de desarrollo: `npm run serve`
- Crear paquete de distribución (producción): `npm run build`
- Lintear y corregir errores: `npm run lint`
```

## Flujos de trabajo

### Crear un proyecto con vuex
1. En una terminal ejecutar `vue create nombre-proyecto`
2. Elegir manualmente las siguientes opciones:
   1. Babel
   2. ESLint
   3. Vue Router (no es necesario para vuex, pero siempre se usará)
   4. vuex
3. Elegir la versión 3.x de vue
4. Elegir mantener el historial de navegación ("Y")
5. Elegir Eslint solo para corregir errores
6. Guardar configuraciones en sus propios archivos
7. No guardar como una plantilla ("N")