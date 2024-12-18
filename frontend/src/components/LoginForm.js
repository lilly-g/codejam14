'use client'
import { useActionState } from "react";
import { submitFormLogin } from "../app/actions";

export default function LoginForm() {

    const [messageLogin, formActionLogin, isPendingLogin] = useActionState(submitFormLogin, "");

    return (
        <div className="">
            <h2 className="font-display text-3xl py-2">log in</h2>
            <form action={formActionLogin} className="w-3/4 px-2">
                <div>
                    <label
                        htmlFor="group-code"
                        className="font-body block mb-2"
                    >
                        Group code:
                    </label>
                    <input
                        type="text"
                        id="group-code"
                        name="group-code"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="name"
                        className="font-body block mb-2"
                    >
                        Username:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-md border-2 border-slate-400 active:border-slate-800 w-full p-1"
                    />
                </div>
                <div>
                    <label
                        htmlFor="pass"
                        className="font-body block mb-2"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        id="pass"
                        name="pass"
                        className="rounded-md border-2 border-slate-400 active:border-purple-900 w-full p-1"
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="rounded-md border-2 border-purple-900 my-2 px-4 p-2 cursor-pointer hover:bg-purple-900 hover:text-white"
                />
                <p>{messageLogin}</p>
            </form>
            
        </div>
    )
}