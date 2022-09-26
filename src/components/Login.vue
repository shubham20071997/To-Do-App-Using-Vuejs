<template>
<div class="container">
    <form>
        <img class="logo" src="..//assets/logo1.png" />
        <h1>Login</h1>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"><b>Email Address</b> </label>
            <input type="email" v-model="email" placeholder="Enter Your Email Address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"><b> Password</b></label>
            <input type="password" v-model="password" placeholder="Enter Password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div>
            <button type="button" class="btn btn-success" v-on:click="login">
                Login
            </button>
        </div>
        <div>
            <button type="button" class="btn btn-success">
                <router-link to="/sign-up">SignUp</router-link>
            </button>
        </div>
        <div>
            <button type="button" class="btn btn-success">
                <router-link to="/landing">Back to the Page</router-link>
            </button>
        </div>
    </form>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            const result = await axios.post(
                    "https://to-do-list-4512824.herokuapp.com/api/login", {
                        email: this.email,
                        password: this.password,
                    }
                )
                // .then((response) => {
                //     localStorage.setItem('jwttoken', response.data.token);
                //     // setAuthHeader(response.data.token)
                // })
            console.log(result);
            if (result.status == 200) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: "Home",
                });
            }
        },

    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({
                name: "Home",
            });
        }
    },
};
</script>

<style scoped>
.logo {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 200px;
}

h1 {
    font-weight: bold;
    color: brown;
    margin-bottom: 20px;
}

.form-control {
    height: 3em;
    border: 0.5px solid red;
}

.btn {
    margin-top: 20px;
    margin-bottom: 10px;
}

.btn a {
    text-decoration: none;
    color: black;
    font-weight: bold;
}

button.btn.btn-success {
    text-decoration: none;
    color: black;
    font-weight: bold;
}
</style>
