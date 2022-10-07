import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm({mode:"all"})

    const submit = async (newUser) => {
        const {data} = await userService.create(newUser);
        setUsers (users =>[...users,data]);
        reset();
    };

    return (

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name', {required: true, minLength:{value:2, message:'min 2 symbols'}})}/>
            <input type="text" placeholder={'surname'} {...register('surname', {required: true, minLength:{value:2, message:'min 2 symbols'}})}/>
            <button disabled={!isValid}> Save </button>
            { errors.name && <div>{errors.name.message}</div>}
            { errors.surname && <div>{errors.surname.message}</div>}
        </form>
    );
};

export {UserForm};