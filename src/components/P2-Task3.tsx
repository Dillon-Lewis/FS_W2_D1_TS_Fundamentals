import React, { useState } from "react"


const UserList: React.FC = () => {


type User = {
    name: string
    age: number
}

let user1: User ={
    name: 'John',
    age: 23
}

let UserListAlais: User[];
UserListAlais = [user1]

    return (
        <>
        {UserListAlais}
        </>
    )
}

export default UserList 