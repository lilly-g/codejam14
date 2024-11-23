import { useActionState } from "react";
import { submitFormLogin } from "../app/actions";

export default function LoginForm() {

    const [messageLogin, formActionLogin, isPendingLogin] = useActionState(submitFormLogin, "");

    return (
        <div>
            <h2>Log in to existing group</h2>
            <form action={formActionLogin}>
                <label htmlFor="group-code">Join code:</label>
                <input type="text" id="group-code" name="group-code"></input>
                <label htmlFor="name">Username:</label>
                <input type="text" id="name" name="name"></input>
                <label htmlFor="pass">Password:</label>
                <input type="text" id="pass" name="pass"></input>
                <input type="submit" value="Log in" />
            </form>
        </div>
    )
}