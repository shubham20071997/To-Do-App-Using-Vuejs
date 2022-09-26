<template>
<Header/>
<Dashboard/>
</template>

<script>
import Dashboard from './Dashboard.vue';
import Header from './Header.vue'
export default {
    name:"Home",
    data(){
      return{
        name:''
      }
    },
    components:{
        Header,
        Dashboard
    },
     mounted()
    {
      let user=localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name:'Landing'})
      }
    }
};
</script>