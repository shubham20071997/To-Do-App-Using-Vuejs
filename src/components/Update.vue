<template>
<Header />
<div class="container">
    <h1>Update The Task</h1>
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

            </select>
        </div>
        <div>
            <button class="btn btn-success" type="button" v-on:click="updateTask">UPDATE TASK</button>
        </div>
        <div class="alert alert-success" role="alert" id="msg"></div>
    </form>
</div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: "Update",
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
    async mounted() {
        const token = localStorage.getItem('token')
        await axios.get("https://to-do-list-4512824.herokuapp.com/api/category-list", {
                headers: {
                    "Authorization": `Bearer ${token}`
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
        await axios.get('https://to-do-list-4512824.herokuapp.com/api/task/' + this.$route.params.taskId, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            console.warn(result.data)
            this.title = result.data[0].title
            this.category = result.data[0].category;
            this.remark = result.data[0].remark;
            this.date = result.data[0].date;
            this.status = result.data[0].status;
        });
    },
    methods: {
        async updateTask() {
            await axios.put("https://to-do-list-4512824.herokuapp.com/api/edit/" + this.$route.params.taskId, {
                title: this.title,
                remark: this.remark,
                date: this.date,
                category: this.category,
                status: this.status,
                userId: localStorage.getItem('userId')
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
                if (response.data.code == 400) {
                    document.getElementById('msg').innerHTML = 'Oops ! There was something wrong.. Please try Again';
                } else {
                    document.getElementById('msg').innerHTML = 'Task has been updated successfully.';
                }
            });
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

.alert {
    background-color: #e9ecef;
    border: none;
}

#category {
    height: 33px;
    width: 169px;
}

textarea.form-control,
input[type="date"].form-control,
select {
    margin-left: 14px;
}

md-form md-outline input-with-post-icon datepicker {
    height: 62px;
}
@media (min-width: 200px) {
    .col-sm-10 {
        flex: 0 0 83.333333%;
        max-width: 79.333333%;
    }
}
</style>
