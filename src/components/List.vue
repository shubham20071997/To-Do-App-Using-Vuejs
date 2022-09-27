<template>
<Header />
<h1>List page</h1>
<table class="table table-bordered">
    <thead>
        <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Title</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
                <router-link to='/update'>Update ||</router-link>
                <button v-on:click="deleteTask(item.id)">Delete</button>
            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
        </tr>
    </tbody>
</table>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: "List",
    data() {
        return {
            name: ''
        }
    },
    components: {
        Header
    },
    
    methods: {
        async mounted() {
        let user = localStorage.getItem('userId');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        axios.defaults.headers = {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "application/json",
                "Accept": "application/json"
            };
        let result = await axios.get("https://to-do-list-4512824.herokuapp.com/api/category-list");
        console.warn(result)
    },
        // async deleteTask(id) {
        //     let result = await axios.delete('https://to-do-list-4512824.herokuapp.com/api/category-list/' + id);
        //     if (result.status == 200) {
        //         this.loadData()
        //     }
        // },
        // async loadData() {
        //     let user = localStorage.getItem('user-info');
        //     // if (!user) {
        //     //     this.$router.push({
        //     //         name: 'SignUp'
        //     //     })
        //     // }
        //     // let result = await axios.get('https://to-do-list-4512824.herokuapp.com/api/category-list');
        //     // console.warn(result);
        // }
    },
    // async mounted() {
    //     this.loadData()
    // }
};
</script>

<style scoped>
body {
    background-color: white;
}

.table-bordered {
    border: 4px solid #ab5189;
}

table tr th {
    background-color: white;
}

table tr td {
    background-color: white;
}
</style>
