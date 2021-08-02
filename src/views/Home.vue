<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h4>{{userInfo}}</h4>
    <h4>{{error}}</h4>
    <button @click="updateInfo">Update Information</button>
    <button @click="clearEmail">Update email</button>
    <button @click="displayError">Display Error</button>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  setup(){
    const store=useStore()

    const userInfo=computed(()=>{return store.getters['getUserInfo']})

    const error=ref('')
    
    const updateInfo= async ()=>{
      console.log('Reached the function')
      await store.dispatch('loadInfo')
    }

    const clearEmail=()=>{
      store.commit("SET_EMAIL")
    }

    const displayError=()=>{
      error.value='this is an error'
    }


    return { userInfo, updateInfo, clearEmail, error, displayError }
  },
  
});
</script>
