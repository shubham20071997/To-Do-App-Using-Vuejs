<!-- <template>
    <h1>Welcome to update task component</h1>
    <form class='add'>
    <input type="text" placeholder="Title of Task" v-model='task.title'>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type Here" v-model='task.type'></textarea>
    <input type="text" placeholder="date" v-model='task.date'>
    <input type="text" placeholder="category" v-model='task.category'>
    <button type="button" v-on:click="addTask">Update Task</button>
    </form>
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
.add input {
  width: 500px;
  height: 30px;
  display: block;
  margin: auto;
  margin-bottom: 30px;
  border: 3px solid skyblue;
}

.add button {
  width: 510px;
  height: 40px;
  font-size: 20px;
  border: 3px solid skyblue;
  background-color: rgb(112, 112, 161);
  color: white;
  cursor: pointer;
}
</style> -->