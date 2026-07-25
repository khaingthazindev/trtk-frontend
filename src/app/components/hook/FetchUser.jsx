'use client';

import {useEffect, useState} from "react";
import useFetch from "@/app/components/hook/useFetch";

export default function FetchUser() {
   // const [users, setUsers] = useState([]);
   // const [isLoading, setIsLoading] = useState(true);
   //
   // useEffect(() => {
   //    fetch('https://jsonplaceholder.typicode.com/users')
   //    .then(response => response.json())
   //    .then(json => {
   //       setIsLoading(false);
   //       setUsers(json);
   //    })
   // }, []);

   const [users, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users');

   return (<div>
      {isLoading && <div>Loading</div>}
      {users.map(user => <div key={user.id}>{user.name}</div>)}
   </div>)
}