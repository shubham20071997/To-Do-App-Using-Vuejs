<template>
<div class="container">
    <h1>DASHBOARD</h1>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card border-left-warning shadow h-100 py-2 data1">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Total Tasks</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{data}}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card border-left-warning shadow h-100 py-2 data2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Due Tasks</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{data1}}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="card border-left-warning shadow h-100 py-2 data3">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Completed Tasks</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{data2}}</div>
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
import axios from 'axios';
export default {
    name: "Dashboard",
    data() {
        return {
            data: '',
            data1: '',
            data2: ''
        }
    },
    components: {

    },

    async mounted() {
        let token = localStorage.getItem('token')
        let user = localStorage.getItem('userId');
        this.name = JSON.parse(user).name;
        let result = await axios.post("https://to-do-list-4512824.herokuapp.com/api/dashboard", {
            'userId': user
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.warn(result);
        this.data = result.data[0].total_task
        this.data1 = result.data[0].due_task
        this.data2 = result.data[0].completed

    },
};
</script>

<style scoped>
h1 {
    font-weight: bold;
    color: brown;
    margin-bottom: 50px;
    margin-top: 50px;
}

.col-sm-12 {
    margin-bottom: 20px;
}

.text-warning {
    color: #0062cc !important;
}

.row {
    height: 200px;
    align-items: center;
}

.data1 {
    background-color: #f9d9d1;
}

.data2 {
    background-color: #f7f7c6;
}

.data3 {
    background-color: #d2f9d4;
}

.font-weight-bold[data-v-aae30ed8] {
    font-weight: 700 !important;
    font-size: x-large;
}
</style>
