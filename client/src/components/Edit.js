import React, {useEffect, useState} from 'react';
import { Header } from "./header";
import { UserForm } from "./UserForm";
import { useRouteMatch, useHistory } from 'react-router-dom';
import { updateUser, getUser } from './api';

export const EditUser = () => {
    const match = useRouteMatch();
    const [human, setHuman] = useState();

    useEffect(() => {
        const fetchHuman = async () => {
            const human = await getUser(match.params.id);
            setHuman(human);
        }
        fetchHuman();
    }, []);
    
    const history = useHistory();
    const onSubmit = async (data) => {
        await updateUser(data, match.params.id);
        history.push("/");
    };
    
    return human ? (
        <div className="wrap">
            <Header title="Edit User" />
            <UserForm user={human} onSubmit={onSubmit} />
        </div>
    ) : (
        <div>Loading...</div>
    )
}


