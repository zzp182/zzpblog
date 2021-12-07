<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

 #app{ 
    width: 100%;
    height: 100%;
   overflow-x: hidden;
}
body{
   margin: 0;
  padding: 0;
  height: 100%;
} 


</style>
