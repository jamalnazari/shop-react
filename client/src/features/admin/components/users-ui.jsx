import { useEffect, useState } from "react"
import axios from "axios"
export default function UsersUi(){

    const [users, setUsers]=useState([])
    useEffect(()=>{
        const getData= async ()=>{
             const res= await axios("http://localhost:3001/users")
             setUsers(res.data)
        }
    getData()

    }, [])
       
    console.log(users);
    
    return(
            <div className="w-3/4 flex-1 p-4">
                <h2 className="text-xl font-bold mb-4">لیست کاربران</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="border p-2 mb-2">
                            {user.phone}
                        </li>
                    ))}
                </ul>
            </div>
    )
}