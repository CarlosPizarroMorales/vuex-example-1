<template>
  <h1> Vista oculta discos</h1>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'DiscosView',
  computed: {
    ...mapState(['discos']),
    discosPop() {
      return this.discos.pop.map(disco => disco);
    },
    discosRock() {
      return this.discos.rock.map(disco => disco);
    },
    discosRap() {
      return this.discos.rap.map(disco => disco);
    },
  },
  mounted() {
    console.table(this.discosRock);
    console.table(this.discosPop);
    console.table(this.discosRap);
  }
  // methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>