<template>
<header>
<div class="nav flex-row-reverse">
    <router-link to='/sign-up'>Signup</router-link>
    <router-link to='/login'>Login</router-link>
    </div>
</header>
<div class="container">
    <img class="logo" src="..//assets/logo1.png" />
    <h2>HI, WELCOME TO THE TO-DO-APP</h2>
    <p class="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe
        at voluptatem iste doloremque, accusantium quaerat. Odio atque aliquam ut
        fugiat dicta ab, sint fugit eos! Sint quas dicta cumque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi nesciunt, voluptatem deleniti deserunt perspiciatis nam corrupti officiis maiores fuga quos atque ut magnam quis? Rerum fugit fugiat dolor sunt modi, ducimus distinctio impedit qui, deleniti doloribus quidem sit nam enim at nisi repudiandae iusto voluptate molestias nesciunt vitae sequi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error ea impedit quam dolorem quisquam dolores reiciendis iure sunt omnis!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, aliquid placeat laboriosam similique laudantium voluptate autem corporis. Quo, quasi culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum voluptates necessitatibus sequi excepturi voluptas error facilis fuga sit iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illum?Lorem ipsum dolor sit fu.
    </p>
</div>
</template>

<script>
export default {
    name: "Landing",
};
</script>

<style scoped>
.logo {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 130px;
}
h2{
  font-weight: bold;
  color: brown;
  margin-bottom: 20px;
}
.lead{
  text-align: justify;
  font-size: 1.5em;  
}

.btn{
  margin-top: 40px;
  margin-bottom: 40px;
}
.btn a{
  text-decoration: none;
  color: black;
  font-size: 1.5em;
  font-weight: bold;
}
button{
  height: 45px;
  background-color: rgb(110, 181, 75);
}
.nav{
    background-color: #333;
    overflow: hidden;
}

.nav a {
float:right;
color: #f2f2f2;
text-align: center;
padding: 19px 50px;
text-decoration: none;
font-size: 20px;
margin: 4px;
margin-right: 50px;
}
.nav a:hover{
    background-color: rgb(161, 41, 41);
}

</style>
