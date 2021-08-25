import React from 'react';


export const UserForm = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname" id="firstname" />
                    <br />
                    <br />
                    <label>Last Name</label>
                    <input type="text" name="lastname" id="lastname" />
                    <br />
                    <br />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <br />
                    <br />
                    <input type="radio" name="man" value="man" id="gender" />
                    <label for="man">Man</label>
                    <input type="radio" name="woman" value="woman" id="gender" />
                    <label for="woman">Woman</label>
                    <input type="radio" name="nocomment" value="not-to-say" id="gender" />
                    <label for="not-to-say">Prefer not to say</label>
                    <br />
                    <br />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" id="email" />
                    <br />
                    <br />
                    <label>Password</label>
                    <input type="text" name="password" id="password" />
                    <br />
                    <br />
                    <label>Mobile Number</label>
                    <input type="number" name="mobilenum" id="mobilenum" />
                </div>
               

               <div className="form-group">
                   <button type="submit">
                       Save
                   </button>
               </div>
            </form>
        </div>
    );
}


