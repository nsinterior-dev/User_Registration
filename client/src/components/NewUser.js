import { Header } from "./header";
import { UserForm } from "./UserForm";

export const NewUser = () => {
    return (
        <div className="wrap">
         <Header title="Register" />
         <UserForm/>
        </div>
    );
}
