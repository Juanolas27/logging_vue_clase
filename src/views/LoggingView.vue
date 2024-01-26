<template>
  <section id="principal">
    <div id="cuadro_logging">
      <input-group id="cuadro_logging2">
        <input-group-addon>
          <i class="pi pi-user" style="font-size: 1rem"></i>
        </input-group-addon>
        <input-text placeholder="Username" v-model="username"></input-text>
        
      </input-group>
          <Password v-model="passwd" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" class="contraseña" toggleMask/>
          
          <div id="posible_error"></div>
          
          <router-link :to="route">
                <Button label="Login" @click="verificacion_cuenta"/>
          </router-link>
    </div>
  </section>
  

</template>

<script>
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Password from 'primevue/password';
import {arrayUsuarios} from "../../usuarios.js";
import Message from 'primevue/message';
//import {arrayGenerosPeliculas} from "../../peliculas.js";
export default {
  name: "LoggingView",
  components: {
    InputGroupAddon,
    InputGroup,
    InputText,
    Card,
    Password,
    Button,
    Message
  },
  data(){
    return {
      passwd: "",
      username: "",
      route: "/"
    }
  },
  computed: {
    
  },
  methods:{
    verificacion_cuenta: function(){
      arrayUsuarios.forEach(element => {
      console.log(element)
      if(element.idUsuario === this.username && element.contrasena === this.passwd){
        this.route = `/${this.username}`
      }
      else{
        document.getElementById("posible_error").innerHTML="<Message severity='error'>Contraseña o usuario incorrect@</Message>"
      }
    })
    }
  }

  
}
</script>

<style scoped lang="sass">
  #principal
    width: 100%
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    background: #09090B
    #cuadro_logging
      width: 50%
      height: 40%
      z-index: 1
      background: #18181B
      border-radius: 20px
      display: flex
      align-items: center
      flex-direction: column
      justify-content: space-around
      padding: 2% 10% 2% 10%

      .contraseña
        margin-bottom: 5%

    
</style>

