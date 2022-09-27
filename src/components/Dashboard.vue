<template>
<div class="container">
<h1>DASHBOARD</h1>
    <div class="row">
        <div class="col-12">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Total Tasks</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Due Tasks</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Completed Tasks</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Dashboard",
    data() {
        return {
            name: ''
        }
    },
    components: {

    },
    Methods:{
    mounted() {
        let user = localStorage.getItem('userId');
        if (!user) {
            this.$router.push({
                name: 'Landing'
            })
        }
         axios.defaults.headers = {
      Authorization: 'Bearer '+ localStorage.getItem('token'),
       "Content-Type":"application/json",
       "Accept":"application/json"
    };
    const result = axios
        .get("https://to-do-list-4512824.herokuapp.com/api/dashboard")
        .then((result) => {
          console.log(result.status);
          if (result.status == 200) 
          {
            console.log(result.data[0].total_task)
            
          }

        });
        
    }
    }
};
</script>

<style scoped>
h1 {
    font-weight: bold;
    color: brown;
    margin-bottom: 50px;
    margin-top: 50px;
}
.col-12{
    margin-bottom: 20px;
}
.text-warning {
    color: #0062cc !important;
}
</style>
