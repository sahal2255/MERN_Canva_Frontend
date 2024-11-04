import Instance from "../Utils/Axios";


export const UserRegister=async(data)=>{
    console.log('first setup the service section',data)
    try{
        const response=await Instance.post('/signup',data)
        console.log('response for the success user registration',response)
        return response.data
    }
    catch(error){
        console.log('error for the user registration',error)
    }
}

export const UserLogin=async(data)=>{
    console.log('login service section',data)
    try{
        const response=await Instance.post('/login',data)
        console.log(response)
        return response.data
    }catch(error){
        console.log('error in the login service section')
    }
}

