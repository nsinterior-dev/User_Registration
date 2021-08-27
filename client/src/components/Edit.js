import React, {useEffect, useState} from 'react';
import { Header } from "./header";
import { UserForm } from "./UserForm";
import { useRouteMatch, useHistory } from 'react-router-dom';
import { updateUser, getUser } from './api';

export const EditUser = () => {
    const match = useRouteMatch();
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser(match.params.id);
            setUser(user);
        }
        fetchUser();
    }, []);
    
    const history = useHistory();
    const onSubmit = async (data) => {
        await updateUser(data, match.params.id);
        history.push("/");

    };
    
    return user ? (
        <div className="wrap">
            <Header title="Edit User" />
            <UserForm user={user} onSubmit={onSubmit} />
        </div>
    ) : (
        <div>Loading...</div>
    )
}


