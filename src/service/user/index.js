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
    },
    logged: async () => {
        const result = await axios.get('https://api-nodejs-todolist.herokuapp.com/user/me', { // me api는 settoken 안함.
            headers: {
                Authorization: getToken(),
            }
        })
        return result.data
    }
}
export default user