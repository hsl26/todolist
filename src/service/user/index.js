import axios from "axios"
import { destroyToken, getToken, setToken } from "../../utils"

const user = {
    signup: async ({ name, email, password, age }) => {
        const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/register', {
            name, email, password, age
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        setToken(result.data.token)
        return result
    },
    login: async ({email, password}) => {
        const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', {
            email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        setToken(result.data.token)
        return result
    },
    logout: async () => {
        const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/logout', { },
        {
            headers:{
                Authorization: getToken(),
            }
        })
        setToken(result.data.token)
        destroyToken()
        return result
    },
    withdraw: async () => {
        const result = await axios.delete('https://api-nodejs-todolist.herokuapp.com/user/me', {
            headers: {
                Authorization: getToken(),
            }
        })
        setToken(result.data.token)
        return result
    }
}
export default user