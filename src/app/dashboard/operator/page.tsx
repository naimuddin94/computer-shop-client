import UsersTable from '@/components/allUsers/UsersTable';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { IUser } from '@/types/types';
import React from 'react';

const OperatorPage = async() => {
    const axiosSecure = useAxiosSecure();
    const response = await axiosSecure("/users");
    const users: IUser[] = response.data;
    const operator = users.filter((user) => user.role === "operator");
    return <div>
        <UsersTable users={operator}/>
    </div>;
};

export default OperatorPage;