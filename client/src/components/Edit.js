import React, {useEffect, useState} from 'react';
import { Header } from "./header";
import { UserForm } from "./UserForm";

export const EditUser = () => {
    return (
        <div className="wrap">
            <Header title="Edit User" />
            <UserForm />
        </div>
    );
}


