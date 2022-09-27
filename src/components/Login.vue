<template>
<div class="container">
    <form>
        <img class="logo" src="..//assets/logo1.png" />
        <h1>Login</h1>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"><b>Email Address</b>
            </label>
            <input type="email" placeholder="Enter Your Email Address" class="form-control" v-model="email"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"><b> Password</b></label>
            <input type="password" placeholder="Enter Password" class="form-control" v-model="password"/>
        </div>
        <div>
            <button @click="submitForm" type="button" class="btn btn-success" v-on:click="login">
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
        submitForm() {
            this.v$.$validate();
            if (this.v$.$error) {
                alert("Data is required");
            }
        },
        async login() {
            const result = await axios
                .post("https://to-do-list-4512824.herokuapp.com/api/login", {
                    email: this.email,
                    password: this.password
                })
                .then((result) => {
                    console.log(result)
                    if (result.data.code == 200) {
                        console.log("inside")
                        localStorage.setItem("token", result.data.token);
                        localStorage.setItem("userId", result.data.userId);
                        this.$router.push({
                            name: "Home",
                        })
                    }
                })
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
