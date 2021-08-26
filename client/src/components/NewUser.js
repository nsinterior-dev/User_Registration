import { Header } from "./header";
import { UserForm } from "./UserForm";

export const NewUser = () => {
    



    return (
        <div className="wrap">
         <Header title="Register" />
         <p className="text-center text-primary">You can use the form to fill up the needed details</p>
         <UserForm/>
        </div>
    );
}
