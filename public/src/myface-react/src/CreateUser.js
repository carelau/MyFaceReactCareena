import React from 'react';

export function CreateUser() {
    /*
       const [name, setName] = useState([]);
       const [username, setUserName] = useState([]);
       const [email, setEmail] = useState([]);
   
       function handleChangeName(event) {
           setName(event.target.value);
       }
   
       function handleChangeUsername(event) {
           setUserName(event.target.value);
       }
   
       function handleChangeEmail(event) {
           setEmail(event.target.value);
       }
   
       function updateuser(event){
           event.preventDefault();
           console.log("hello");
       }
       */
    return (
            <form method="post" action="http://localhost:3001/users/create" >
                <label>Name: 
                <input type="text" name="name" required />
                </label>
                <label>Username:
                <input type="text" name="username"required />
                </label>
                <label> Email:
                <input type="email" name="email" required />
                </label>
                <label> ProfileImageUrl :
                <input type="url" name="profileImageUrl" required />
                </label>
                <label> CoverImageUrl :
                <input type="url" name="coverImageUrl" required />
                </label>
                <button type="submit">Submit</button>
            </form>
    )

}