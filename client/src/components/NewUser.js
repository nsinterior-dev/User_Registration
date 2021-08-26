import { Header } from "./header";
import { UserForm } from "./UserForm";
import { useHistory } from 'react-router-dom';
import { newUser } from "./api";

export const NewUser = () => {
    
    const history = useHistory();

    const onSubmit = async (data) => {
        await newUser(data);
        history.push("/");
        console.log(data);
    };
   

    return (
        <div className="wrap">
         <Header title="Register" />
         <p className="text-center text-primary">You can use the form to fill up the needed details</p>
         <UserForm onSubmit={onSubmit}/>
        </div>
    );
}
