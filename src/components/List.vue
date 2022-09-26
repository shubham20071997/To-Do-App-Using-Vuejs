<!-- <template>
<Header />
<h1>List page</h1>
<table>
    <tr v-for="item in task" :key='item.id'>
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    </tr>
    <tr>
        <td>
            <router-link to='/update'>Update</router-link>
        </td>
    </tr>
</table>
<button v-on:click="deleteTask(item.id)">Delete</button>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: "List",
    data() {
        return {
            name: '',
            task: [],
        }
    },
    components: {
        Header
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get("https://to-do-list-4512824.herokuapp.com/api/category-list");
        console.warn(result)
        this.task = result.data;
    },
    methods: {
        async deleteTask(id) {
            let result = await axios.delete('https://to-do-list-4512824.herokuapp.com/api/category-list/' + id);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({
                    name: 'SignUp'
                })
            }
            let result = await axios.get('https://to-do-list-4512824.herokuapp.com/api/category-list');
            console.warn(result);
        }
    },
    async mounted() {
        this.loadData()
    }
};
</script> -->
