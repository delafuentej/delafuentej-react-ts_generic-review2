import { useState } from 'react';


interface User {
    uid: string;
    name: string;
};
// const tempUser: User = {
//     uid: 'XYWMRTE',
//     name: 'Janivicius',
// }

export const User = () => {
    const[ user, setUser ]= useState<User>();


    
    const login=()=>{
        setUser({
            uid:'abc123',
            name:'Jesús de la Fuente',
        });
    }
  return (
    <div className="mt-5">
        <h3>User: useState</h3>
        <button 
            className='btn btn-outline-primary'
            onClick={login}
            >Login</button>
        <pre>{(!user) ? 'There is no user' : JSON.stringify(user)}</pre>
    </div>
  )
}
