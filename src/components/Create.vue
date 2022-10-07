<template>
<Header />
<div class="container">
    <h1>Add Task</h1>
    <form>
        <div class="row mb-3">
            <label for="task" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input id="title" type="text" placeholder="Title of Task" class="form-control" v-model="title" required>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="remark" class="col-sm-2 col-form-label">Remark</label>
            <div class="form-outline w-75 mb-4">
                <textarea id="remark" class="form-control" placeholder="type here" rows="3" v-model="remark"></textarea>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="date" class="col-sm-2 col-form-label">Date</label>
            <div class="md-form md-outline input-with-post-icon datepicker">
                <input id="date" min="2022-10-03" placeholder="Select date" v-model="date" type="date" class="form-control">
            </div>
        </div>
        <!-- <div class="mb-3 row">
            <label for="status" class="col-sm-2 col-form-label">Status</label>
            <select v-model="status" class="form-select" aria-label="Default select example">
                <option selected>Select Category</option>
                <option value="0">ToDo</option>
                <option value="1">Completed</option>
                <option value="2">Incomplete</option>
            </select>
        </div> -->
        <div class="mb-3 row">
            <label for="category" class="col-sm-2 col-form-label">Category</label>
            <select id="category" v-model="category" class="form-select" aria-label="Default select example">
                <!-- <option selected>Select Category</option>
                <option value="office">Office</option>
                <option value="home">Home</option>
                <option value="market">Market</option> -->
            </select>
        </div>
        <div>
            <button v-on:click="addTask" type="button" class="btn btn-success">ADD TASK</button>
        </div>
        <div class="alert alert-success" role="alert" id="msg"></div>
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
            category: '',
            userId: localStorage.getItem('userId'),
            date: {
                disabledDates: {
                    to: new Date(Date.now() - 8640000)
                }

            }
        }
    },

    async mounted() {
        await axios.get("https://to-do-list-4512824.herokuapp.com/api/category-list", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                let str = '';
                for (let i = 0; i < response.data.length; i++) {
                    str += "<option value='" + response.data[i].id + "'>" + response.data[i].category + "</option>";
                }
                console.log(str)
                document.getElementById('category').innerHTML = str;
            });
        console.log('mounted');
    },
    methods: {
        async addTask() {
            let token = localStorage.getItem('token')
            let userId = localStorage.getItem('userId')
            let result = await axios.post("https://to-do-list-4512824.herokuapp.com/api/add-task", {
                title: this.title,
                remark: this.remark,
                date: this.date,
                category: this.category,
                status: 0,
                userId: this.userId
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(result);
            if (result.data.code == 201) {
                document.getElementById('msg').innerHTML = 'Task has been created successfully.';
                document.getElementById('title').value = ''
                document.getElementById('remark').value = ''
                document.getElementById('date').value = ''

            }
        }
    }
}
</script>

<style scoped>
input,
select {
    margin-bottom: 20px;
}

.btn {
    margin-top: 40px;
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

md-form md-outline input-with-post-icon datepicker {
    height: 62px;
}

#category {
    height: 33px;
    width: 169px;
}
.alert{
    background-color: #e9ecef;
    border: none;
}

@media (min-width: 200px) {
    .col-sm-10 {
        flex: 0 0 83.333333%;
        max-width: 79.333333%;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 800px;
    }
}
</style>
