import axios from "axios"
import { getToken } from "../../utils"

const task = {
    fetchAllTasks: async () => {
        const result = await axios.get('https://api-nodejs-todolist.herokuapp.com/task', {
            headers:{
                Authorization: getToken(),
                "Content-Type": "application/json"
            }
        })
        return result.data
    },
    addTasks : async (todo) => {
        const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/task', {
            description: todo
        },{
            headers: {
                Authorization: getToken(),
                "Content-Type": "application/json"
            }
        })
        return result.data
    },
    completeTask : async (id, completed) => {
        const result = await axios.put(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
            completed: completed
        },{
            headers: {
                Authorization: getToken(),
                "Content-Type": "application/json"
            }
        })
        return result.data
    },
    deleteTask : async ( id ) => {
        const result = await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
            headers: {
                Authorization: getToken(),
                "Content-Type": "application/json"
            }
        })
        return result.data
    }
}  

export default task