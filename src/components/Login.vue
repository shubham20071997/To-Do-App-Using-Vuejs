<template>
<header>
    <div class="nav flex-row-reverse">
        <router-link to='/Landing'>Start</router-link>
        <router-link to='/sign-up'>Signup</router-link>
        <router-link to='/login'>Login</router-link>
    </div>
</header>
<div class="container">
    <form>
        <img class="logo" src="..//assets/logo1.png" />
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"><b>Email Address</b>
            </label>
            <input type="email" placeholder="Enter Your Email Address" class="form-control" v-model="email" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"><b> Password</b></label>
            <input type="password" placeholder="Enter Password" class="form-control" v-model="password" />
        </div>
        <div>
            <button @click="login" class="btn btn-success" type="button">
                Login
            </button>
            <div class="alert alert-primary" role="alert" id="msg"></div>
        </div>
    </form>
</div>
</template>

<script>
import useValidate from "@vuelidate/core"
import {
    required
} from "@vuelidate/validators"
import axios from "axios"
export default {
    name: "Login",
    data() {
        return {
            v$: useValidate(),
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {
            // this.v$.$validate();
            // if (this.v$.$error) {
            //     alert('Please fill the form, all fields are required.');
            // }
            const result = await axios
                .post("https://to-do-list-4512824.herokuapp.com/api/login", {
                    email: this.email,
                    password: this.password
                })
                .then((result) => {
                    if (result.data.code == 200) {
                        localStorage.setItem("token", result.data.token);
                        localStorage.setItem("userId", result.data.userId);
                        this.$router.push({
                            name: "Home",
                        })
                    }
                })
                .catch(error => document.getElementById('msg').innerHTML = 'Sorry, you have entered wrong credentials.'
                        );
                        
        }
    },
    validations() {
        return {
            email: {
                required,
            },
            password: {
                required
            }
        }
    }
};
</script>

<style scoped>
.logo {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 130px;
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

.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 19px 50px;
    text-decoration: none;
    font-size: 20px;
    margin: 4px;
    margin-left: 20px;
}

.nav a:hover {
    background-color: rgb(161, 41, 41);
}
.alert{
    background-color: #e9ecef;
    border: none;
}

@media (min-width: 1200px) {
    .container {
        width: 500px;
    }
}
</style>
