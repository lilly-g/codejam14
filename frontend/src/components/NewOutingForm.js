import { useActionState } from "react";
import { submitFormNew } from "../app/actions";
import "../app/globals.css";

export default function NewOuting() {

    const [messageNew, formActionNew, isPendingNew] = useActionState(submitFormNew, "");

    return (
        <div className="">
            <h2 className="font-display text-3xl py-2">create group</h2>
            <form action={formActionNew} className="w-3/4 px-2">
                <div>
                    <label
                        htmlFor="new-group-name"
                        className="font-body block mb-2"
                    >
                        Group name:
                    </label>
                    <input
                        type="text"
                        id="new-group-name"
                        name="new-group-name"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="new-admin-name"
                        className="font-body block mb-2"
                    >
                        Username:
                    </label>
                    <input
                        type="text"
                        id="new-admin-name"
                        name="new-admin-name"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="new-admin-pass"
                        className="font-body block mb-2"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        id="new-admin-pass"
                        name="new-admin-pass"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="rounded-md border-2 border-purple-900 my-2 px-4 p-2 cursor-pointer hover:bg-purple-900 hover:text-white"
                />
                <p>{messageNew}</p>
            </form>
        </div>

    )
}