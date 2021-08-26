import { Header } from "./header";
import { UserForm } from "./UserForm";
import { useHistory } from 'react-router-dom';

export const NewUser = () => {
    
    const history = useHistory();

   

    return (
        <div className="wrap">
         <Header title="Register" />
         <p className="text-center text-primary">You can use the form to fill up the needed details</p>
         <UserForm />
        </div>
    );
}
