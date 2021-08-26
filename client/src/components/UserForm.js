import React from 'react';
import './css/form.css';

export const UserForm = () => {
    return (
        <div>
            <form>
                <div className="form-group userNameDiv">
                    <label htmlFor="firstname">First Name</label>
                    <br />
                    <input type="text" className="form-control userName" name="firstname" id="firstname" />
                    <br />
                    <label htmlFor="lastname">Last Name</label>
                    <br />
                    <input type="text" className="form-control userName" name="lastname" id="lastname" />
            
                </div>
               
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" id="email" />
                    <br />
                    <br />
                    <label htmlFor="password" >Password</label>
                    <input type="text" className="form-control" name="password" id="password" />
                    <br />
                    <br />
                    <label htmlFor="mobilenum">Mobile Number</label>
                    <input type="number" className="form-control"  name="mobilenum" id="mobilenum" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <br />
                    <br />
                    <input type="radio" className="form-switch" name="man" value="man" id="gender" />
                    <label htmlFor="man">Man</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" className="form-switch" name="woman" value="woman" id="gender" />
                    <label htmlFor="woman">Woman</label>
                    <br />
                    <br />
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


