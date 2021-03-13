import {API} from "../../backend";

export const createOrder = (userId,token,orderData)=>{
    return fetch(`${API}//order/create/${userID}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"appliction/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({order:orderData})
    })
    .then(response =>{
        return Response.json();
    })
    .catch(err => console.log(err));

}