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
            <Button label="Submit" />
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
export default {
  name: "LoggingView",
  components: {
    InputGroupAddon,
    InputGroup,
    InputText,
    Card,
    Password,
    Button
  },
  data(){
    return {
      passwd: "",
      username: ""
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
      width: 30%
      height: 40%
      z-index: 1
      background: #18181B
      border-radius: 20px
      display: flex
      align-items: center
      flex-direction: column
      justify-content: space-around
      padding-top: 2%
      padding-bottom: 2%
      #cuadro_logging2
        width: 50%
  .contraseña
    margin-bottom: 5%
</style>

