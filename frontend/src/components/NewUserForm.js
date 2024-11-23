import { useActionState } from "react";
import { submitFormJoin } from "../app/actions";

export default function NewUser() {

    const [messageJoin, formActionJoin, isPendingJoin] = useActionState(submitFormJoin, "");

    return (
        <div className="">
            <h2 className="font-display text-3xl py-2">Join a group</h2>
            <form action={formActionJoin} className="w-2/4 px-2">
                <div>
                    <label
                        htmlFor="join-code"
                        className="font-body block mb-2"
                    >
                        Enter the join code:
                    </label>
                    <input
                        type="text"
                        id="join-code"
                        name="join-code"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="new-user-name"
                        className="font-body block mb-2"
                    >
                        Enter a username:
                    </label>
                    <input
                        type="text"
                        id="new-user-name"
                        name="new-user-name"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="new-user-pass"
                        className="font-body block mb-2"
                    >
                        Enter a password:
                    </label>
                    <input
                        type="password"
                        id="new-user-pass"
                        name="new-user-pass"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="rounded-md border-2 border-slate-800 my-2 px-4 p-2 cursor-pointer hover:bg-slate-800 hover:text-white"
                />
            </form>
        </div>
    )
}