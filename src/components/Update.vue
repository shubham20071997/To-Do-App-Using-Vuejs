<template>
    <div class="container">
    <h1>Update The Task</h1>
    <form>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input type="email" v-model="name" placeholder="Title of Task" class="form-control" id="inputEmail3">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Remark</label>
            <div class="form-outline w-75 mb-4">
                <textarea class="form-control" placeholder="type here" id="textAreaExample6" rows="3"></textarea>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Date</label>
            <div class="md-form md-outline input-with-post-icon datepicker">
                <input placeholder="Select date" type="date" id="example" class="form-control">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Category</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div>
            <button class="btn btn-success" type="button" v-on:click="addTask">UPDATE TASK</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name:"Create",
    components:{
        
    },
    data(){
      return{
        task:{
          title:'',
          type:'',
          date:'',
          category:''
        }

      }
    },
    methods:{
      addTask(){
        console.warn(this.task);
      }

    },
     mounted()
    {
      let user=localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name:'SignUp'})
      }
    }
};
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

</style>