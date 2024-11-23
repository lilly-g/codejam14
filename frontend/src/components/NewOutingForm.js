import { useActionState } from "react";
import { submitFormNew } from "../app/actions";

export default function NewOuting() {

    const [messageNew, formActionNew, isPendingNew] = useActionState(submitFormNew, "");

    return (
        <div>
            <h2>Create a new group</h2>
            <form action={formActionNew}>
                <label htmlFor="new-group-name">Group name:</label>
                <input type="text" id="new-group-name" name="new-group-name"></input>
                <label htmlFor="new-admin-name">Username:</label>
                <input type="text" id="new-admin-name" name="new-admin-name"></input>
                <label htmlFor="new-admin-pass">Password:</label>
                <input type="text" id="new-admin-pass" name="new-admin-pass"></input>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}