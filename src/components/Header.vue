<template>
<div class=" nav d-flex">
    <div class="p-2">
        <router-link to="/">Home</router-link>
    </div>
    <div class="p-2">
        <router-link to="/task-lists">Task Lists</router-link>
    </div>
    <div class="p-2">
        <router-link to="/create-task">Add Task</router-link>
    </div>
    <div class="ml-auto p-2"> <a v-on:click="logout" href="#">Logout</a></div>
</div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'Login'
            })
        }

    }
}
</script>

<style scoped>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: right;
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
</style>
