import { useEffect, useState } from "react"

export default function UsersPage () {
    const [users, setUsers] = useState([])

    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
    }
    useEffect(()=>{
        fetchUsers()
    }, [])

    return(
        <div className="users-content">
            <div className="container">
            <div className="links">
                    <p className="text">Главная\Каталог</p>
                </div>
                <br />
                <h1 className="title">Пользователи</h1>
                <br />
                <div className="users-content-wrap">
                    {
                        users.map((user)=>{
                            return(
                                <>
                                <div className="users-item">
                                    <p className="name-users">{user.name}</p>
                                    <p className="email">email: {user.email}</p>
                                </div> <br />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}