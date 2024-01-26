<template>
  <section>
    <Menubar :model="items"/>
    <h1 id="prueba">{{this.instancia}}</h1>
  </section>

</template>

<script>
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import { ref } from "vue";

export default {
  name: "PeliculasView",
  
  components:{
    Menubar,
    Button
  },
  data(){
    return{
      instancia:"hola",
        items: ref([
      {
          label: 'Accion',
          icon: 'pi pi-home',
          command: (instancia)=>{
            this.instancia = "Accion"
            console.log(instancia)} // Toggle event
      },
      {
          label: 'Comedia',
          icon: 'pi pi-star',
          command: ()=>{
            this.instancia = "Comedia"
            console.log(instancia)}
      },
      {
          label: 'Drama',
          icon: 'pi pi-star',
          command: ()=>{
            this.instancia = "Drama"
            console.log(instancia)}
      },
      {
          label: 'Ficcion',
          icon: 'pi pi-star',
          command: ()=>{
            this.instancia = "Ficcion"
            console.log(instancia)}
      }])



      }
    },
    methods:{

    }
  }

</script>

<style scoped lang="sass">
  section
    height:100vh
    width: 100%
    background: #09090B
    #prueba
      color: white


</style>
