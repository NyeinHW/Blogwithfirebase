import {retrieveData, storeData} from "../utilities/localStorage";
import firestore from "../utilities/firebase";
export const fetchUsers= () => dispatch=>{
    const users=[];
    const userData=firestore.collection('users').get();
    console.log("user data is ",userData);
   userData.then((snapshot)=>{
       snapshot.docs.forEach(item=>users.push(item.data()));
       console.log("users is",users);
       dispatch({
        type: "FETCH_USERS",
        payload: users
    });
   })
   
};
export const insertUsers=(user)=>dispatch=>{
    user.id=6;
    const users=firestore.collection('users').add(user);
//     const mapped_array=users.map(i=>parseInt(i.id));
// const max_id=Math.max(...mapped_array);
// console.log(mapped_array,max_id,user.id);
// user.id=max_id+1;
// users.push(user);
// console.log('stored user',users,user);
// storeData('users',users);
console.log("stored register users is ",users);

    dispatch({
        type: "ADD_NEW_USERS",
     user: user
    })
}
export const loginUserEvent=(user,cb)=>dispatch=>{
    dispatch({
        type: "LOGIN",
        user:user
    });
    cb();
}