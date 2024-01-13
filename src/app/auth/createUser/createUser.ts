import axios from "axios"
import { userType } from "../../../../prisma/appTypes"


export const createUser = async (newuser:userType) => {

        const response = axios.post('/api/registerUser', newuser)
        if (((await response).status) === 200) {console.log(newuser, "created")}
                else {console.log("something went wrong")}

}

