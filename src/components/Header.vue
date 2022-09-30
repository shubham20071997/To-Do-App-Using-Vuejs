<template>
<header>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/create-task">Add Task</router-link>
        <router-link to="/task-lists">Task Lists</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</header>
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
</style>
