<template>
<Header />
<div class="container">
    <h1>Create The Task</h1>
    <form>
        <div class="row mb-3">
            <label for="task" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input type="text" placeholder="Title of Task" class="form-control" v-model="title">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="remark" class="col-sm-2 col-form-label">Remark</label>
            <div class="form-outline w-75 mb-4">
                <textarea class="form-control" placeholder="type here" rows="3" v-model="remark"></textarea>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="date" class="col-sm-2 col-form-label">Date</label>
            <div class="md-form md-outline input-with-post-icon datepicker">
                <input placeholder="Select date" v-model="date" type="date" id="example" class="form-control">
            </div>
        </div>
        <!-- <div class="row mb-3">
            <label for="status" class="col-sm-2 col-form-label">Status</label>
            <div class="col-sm-10">
                <input type="text" placeholder="Enter Status" class="form-control" v-model="status">
            </div>
        </div> -->
        <div class="mb-3 row">
            <label for="status" class="col-sm-2 col-form-label">Status</label>
            <select v-model="status" class="form-select" aria-label="Default select example">
                <option selected>Select Category</option>
                <option value="0">ToDo</option>
                <option value="1">Completed</option>
                <option value="2">Incomplete</option>
            </select>
        </div>
        <div class="mb-3 row">
            <label for="category" class="col-sm-2 col-form-label">Category</label>
            <select v-model="category" class="form-select" aria-label="Default select example">
                <option selected>Select Category</option>
                <option value="study">Study</option>
                <option value="work">work</option>
                <option value="office">office</option>
            </select>
        </div>
        <div>
            <button class="btn btn-success" type="button" v-on:click="addTask">ADD TASK</button>
        </div>
    </form>
</div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: "Create",
    components: {
        Header
    },
    data() {
        return {
            title: '',
            remark: '',
            date: '',
            status: '',
            category: ''
        }
    },
    methods: {
        async addTask() {
            let ramesh = localStorage.getItem('token')
            console.log(ramesh)
            let suresh = localStorage.getItem('userId')
            console.log(suresh)
            let result = await axios.post("https://to-do-list-4512824.herokuapp.com/api/add-task", {
                title: this.title,
                remark: this.remark,
                date: this.date,
                status:this.status,
                category: this.category,
                userId: suresh
            }, 
            {
                headers: {
                    "Authorization": `Bearer ${ramesh}`
                }
            });
            console.log(result);
            if(result.data.code==201){
                alert("task created successfully")
            }
        }
    }
}
</script>

<style scoped>
button,
input {
    margin-bottom: 40px;
}

h1 {
    font-weight: bold;
    color: brown;
    margin-bottom: 40px;
    margin-top: 40px;
}

textarea.form-control,
input[type="date"].form-control,
select {
    margin-left: 14px;
}
</style>
