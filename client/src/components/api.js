export const getUsers = () =>
    fetch("http://localhost:4000").then(res => res.json());

export const newUser = (user) =>
   
    fetch("http://localhost:4000/create", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    });

export const getUser = (id) => 
    fetch(`http://localhost:4000/${id}`).then((res) => res.json());

export const updateUser = (user, id) =>
    fetch(`http://localhost:4000/${id}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8 '
        },
        body: JSON.stringify(user),
        
    });
