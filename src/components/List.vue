<template>
<Header/>
<!-- <header class="nav">
    <nav navbar-fixed-top>
        <router-link to="/">Home</router-link>
        <router-link to="/create-task">Add Task</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </nav>
</header>-->
<!-- <h1><b> List page</b></h1>  -->
<div class="container">
<!-- <form class="form-inline form-row serach-form">
        <div>
            <label for="category"><b>SELECT CATEGORY</b></label>
            <select id="category" name="category" v-model="category">
                <option value="0">TO-DO</option>
                <option value=1>IN-PROGRESS</option>
                <option value=2>COMPLETED</option>
            </select>
        </div>
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <label for="date"><b>DATE</b></label>
            <input v-model="date" type="date">
        </div>
    </form> -->
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Task Id</th>
                <th scope="col">Title</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>
                    <button v-if="item.status==0">
                    <router-link :to="{ name: 'Update', params: { taskId: item.id }}">Edit</router-link>
                        <!-- <router-link :to="'/update/'+item.id">Edit</router-link> -->
                    </button>
                    <button v-if="item.status==0"  v-on:click="updateStatus(1,item.id)">Complete</button>
                    <button class="cpl" v-else-if="item.status==1">Completed</button>
                    <button v-if="item.status==0" v-on:click="updateStatus(2,item.id)">Delete</button>
                    <button class="del" v-else-if="item.status==2">Deleted</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name: "List",
    components: {
        Header
    },
    data() {
        return {
            name: '',
            list: []
        }
    },
    async mounted() {
        let token = localStorage.getItem('token')
        let user = localStorage.getItem('userId');
        this.name = JSON.parse(user).name;
        let result = await axios.get("https://to-do-list-4512824.herokuapp.com/api/tasks/" + user, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.warn(result)
        this.list = result.data;
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'Login'
            })
        },
        async updateStatus(status,taskId){
             await axios.patch("https://to-do-list-4512824.herokuapp.com/api/update-status", {
                status:status,
                id:taskId
            }, 
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
				if(response.data.code == 400){
				alert('Oops ! There was something wrong.. Please try Again')
				}else{
				alert('Task status has been updated successfully.')
                 this.$router.push({
                            name: "Home",
                        })
				}
			});

        }

    }
};
</script>

<style scoped>
body {
    background-color: white;
}

table tr th {
    background-color: white;
}

table tr td {
    background-color: white;
}

.nav {
    background-color: #333;
    overflow: visible;
}

.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 19px 25px;
    text-decoration: none;
    font-size: 20px;
    margin: 4px;
}

.nav a:hover {
    background-color: rgb(161, 41, 41);
}
.del{
    color: red;
    background-color: #f6f3ef;
}
.cpl{
    color: green;
    background-color: #f6f3ef;
}
</style>
