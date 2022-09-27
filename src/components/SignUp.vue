<template>
<div class="container">
    <form>
        <img class="logo" src="..//assets/logo1.png" />
        <h1>Signup</h1>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
                <input type="text" placeholder="Enter Your Name" class="form-control" v-model="name">
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" placeholder="Enter Your Email Address" class="form-control" v-model="email">
            </div>
        </div>
        <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                <div class="col-sm-1">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Male" checked v-model="gender">
                        <label class="form-check-label" for="gridRadios1">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Female" v-model="gender">
                        <label class="form-check-label" for="gridRadios2">
                            Female
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" placeholder="Enter Password" class="form-control" v-model="password" />
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword2" class="col-sm-2 col-form-label">Confrm Password</label>
            <div class="col-sm-10">
                <input type="password" placeholder="Enter Confirm Password" class="form-control" />
            </div>
        </div>
        <div>
            <button class="btn btn-primary" type="button" v-on:click="SignUp">Sign Up</button>
        </div>
        <div>
            <button class="btn btn-success" type="button">
                <router-link to="/login">Login</router-link>
            </button>
        </div>
        <div>
            <button class="btn btn-success" type="button">
                <router-link to="/landing">Back to the Page</router-link>
            </button>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            gender: "",
            password: ""
        }
    },
    methods: {
        async SignUp() {
            console.warn(
                "SignUp",
                this.name,
                this.email,
                this.gender,
                this.password
            )
            let result = await axios.post(
                "https://to-do-list-4512824.herokuapp.com/api/signup", {
                    name: this.name,
                    email: this.email,
                    gender: this.gender,
                    password: this.password
                })
            console.log(result)
            if (result.status == 201) {
                this.$router.push({
                    name: "Login"
                })
            }
        }
    }
};
</script>

<style scoped>
.logo {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 130px;
}

h1 {
    font-weight: bold;
    color: brown;
    margin-bottom: 20px;
}

.btn {
    margin-top: 10px;
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

.col-form-label {
    font-weight: bold
}

.form-check {
    display: flex;
    margin-bottom: 8px;
}

.form-control {
    height: 3em;
}
</style>
