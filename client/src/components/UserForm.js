import React from 'react';
import { useForm } from 'react-hook-form';
import './css/form.css';

export const UserForm = (user, onSubmit) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            firstname : user ? user.firstname : "",
            lastname: user ? user.lastname : "",
            email: user ? user.email : "",
            password: user ? user.password : "",
            mobilenum: user ? user.mobilenum : "",
            gender: user ? user.gender : "",
        }
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
    });

    return (
        <div>
            <form onSubmit={() => submitHandler}>
                <div className="form-group userNameDiv">
                    <label htmlFor="firstname">First Name</label>
                    <br />
                    <input type="text" {...register('firstname', { required: true })} className="form-control userName" name="firstname" id="firstname" placeholder="Nicolle" required />
                    <br />
                    <label htmlFor="lastname">Last Name</label>
                    <br />
                    <input type="text" {...register('lastname', { required: true })} className="form-control userName" name="lastname" id="lastname" placeholder="Interior" required />
            
                </div>
               
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register('email', { required: true })} className="form-control" name="email" id="email" placeholder="example@email.com" required />
                    <br />
                    <br />
                    <label htmlFor="password" >Password</label>
                    <input type="text" {...register('password', { required: true })} className="form-control" name="password" id="password" placeholder="********" required />
                    <br />
                    <br />
                    <label htmlFor="mobilenum">Mobile Number</label>
                    <input type="number" {...register('mobilenum', { required: true })} className="form-control" name="mobilenum" id="mobilenum" placeholder="09123456789" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="gender" required >Gender</label>
                   
                    <div className="radio inline">
                        <input type="radio" {...register('gender', { required: true })} name="gender" value="Man"/>
                        <label htmlFor="gender" className="gender">Man</label>
                    </div>
                    <div className="radio inline">
                        <input type="radio" {...register('gender', { required: true })} name="gender"  value="Woman" />
                        <label htmlFor="gender" className="gender">Woman</label>
                    </div>
                   
                </div>

               <div className="form-group">
                   <button className="btn btn-primary save" type="submit">
                       Save
                   </button>
               </div>
            </form>
        </div>
    );
}


