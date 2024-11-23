import { useActionState } from "react";
import { submitFormJoin } from "../app/actions";

export default function NewUserForm() {
    
    const [messageJoin, formActionJoin, isPendingJoin] = useActionState(submitFormJoin, "");

    return (
        <div>
            <h2>Join a group</h2>
            <form action={formActionJoin}>
                <label htmlFor="join-code">Join code:</label>
                <input type="text" id="join-code" name="join-code"></input>
                <label htmlFor="new-user-name">Username:</label>
                <input type="text" id="new-user-name" name="new-user-name"></input>
                <label htmlFor="new-user-pass">Password:</label>
                <input type="text" id="new-user-pass" name="new-user-pass"></input>
                <input type="submit" value="Join" />
            </form>
        </div>
    )
}