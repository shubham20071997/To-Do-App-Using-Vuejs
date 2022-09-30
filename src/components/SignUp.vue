<template>
<header>
    <div class="nav">
        <router-link to='/Landing'>Start</router-link>
        <router-link to='/login'>Login</router-link>
        <router-link to='/sign-up'>Signup</router-link>
    </div>
</header>
<div class="container">
    <form>
        <img class="logo" src="..//assets/logo1.png" />
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
                <input type="text" placeholder="Enter Your Name" class="form-control" :class="{invalid:nameValidity==='invalid'}" v-model.trim="name" @blur="validateInput">
                <p v-if="nameValidity==='invalid'">Please enter a valid Name</p>
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" placeholder="Enter Your Email Address" class="form-control" :class="{invalid:emailValidity==='invalid'}" v-model.trim="email" @blur="validateInput">
                <p v-if="emailValidity==='invalid'">Email is required</p>
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
                <input type="password" id="password" placeholder="Enter Password" class="form-control" :class="{invalid:passwordValidity==='invalid'}" v-model.trim="password" @blur="validateInput" />
                <p v-if="passwordValidity==='invalid'">Please enter a valid password</p>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword2" class="col-sm-2 col-form-label">Confirm Password</label>
            <div class="col-sm-10">
                <input type="password" id="confirmpassword" placeholder="Enter Confirm Password" class="form-control" v-model.trim="confirmpassword" />
            </div>
        </div>
        <div>
            <button class="btn btn-primary" type="button" v-on:click="SignUp()">Sign Up</button>
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
            password: "",
            confirmpassword: "",
            nameValidity: 'pending',
            emailValidity: 'pending',
            passwordValidity: 'pending',

        }
    },
    methods: {
        async SignUp() {
                if (this.password != this.confirmpassword) {
                    alert("passwords don't match")
                }
            let result = await axios.post(
                "https://to-do-list-4512824.herokuapp.com/api/signup", {
                    name: this.name,
                    email: this.email,
                    gender: this.gender,
                    password: this.password,
                    confirmpassword: this.confirmpassword
                })
            console.log(result)
            if (result.status == 201) {
                this.$router.push({
                    name: "Login"
                })
                alert("signup is successful")
            }
        },
        validateInput() {
            if (this.name === '') {
                this.nameValidity = 'invalid';
            } else {
                this.nameValidity = 'valid';
            }
            if (this.email === '') {
                this.emailValidity = 'invalid';
            } else {
                this.emailValidity = 'valid';
            }
            if (this.password === '') {
                this.passwordValidity = 'invalid';
            } else {
                this.passwordValidity = 'valid';
            }

        },
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

.form-control.invalid {
    border-color: red;
}

p {
    color: red;
}

@media (min-width: 1200px) {
    .container {
        width: 600px;
    }
}
</style>
