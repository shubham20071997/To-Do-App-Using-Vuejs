<template>
<Header/>
<Dashboard/>
</template>

<script>
import Dashboard from './Dashboard.vue';
import Header from './Header.vue'
export default {
    name:"Home",
    components:{
        Header,
        Dashboard
    },
    
     mounted()
    {
      let user=localStorage.getItem('userId')
      if(!user)
      {
        this.$router.push({name:'Landing'})
      }
    }
};
</script>