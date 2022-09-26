<template>
<div class="container">
    <form>
        <img class="logo" src="..//assets/logo1.png" />
        <h1>Signup</h1>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
                <input type="email" v-model="name" placeholder="Enter Your Name" class="form-control" id="inputEmail3">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" v-model="email" placeholder="Enter Your Email Address" class="form-control" id="inputEmail3">
            </div>
        </div>
        <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                <div class="col-sm-1">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="gridRadios" id="gridRadios1" value="option1" checked>
                        <label class="form-check-label" for="gridRadios1">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="gridRadios" id="gridRadios2" value="option2">
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
                <input type="password" v-model="password" placeholder="Enter Password" class="form-control" id="inputPassword" />
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Confrm Password</label>
            <div class="col-sm-10">
                <input type="password" v-model="confirmpassword" placeholder="Enter Confirm Password" class="form-control" id="inputPassword" />
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
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            gender: "",
            password: "",
            confirmpassword: "",
        };
    },
    methods: {
        async SignUp() {
            console.warn(
                "SignUp",
                this.name,
                this.email,
                this.gender,
                this.password,
                this.confirmpassword
            );
            let result = await axios.post(
                "https://to-do-list-4512824.herokuapp.com/api/signup", {
                    name: this.name,
                    email: this.email,
                    gender: this.gender,
                    password: this.password,
                    confirmpassword: this.confirmpassword,
                }
            );
            console.log(result);
            if (result.status == 201) {
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
.form-control{
  height: 3em;
}

</style>
