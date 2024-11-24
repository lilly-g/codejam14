import "../globals.css";
import AcceptingForm from '../../components/AcceptingForm';
import { cookies } from "next/headers";


export default async function Page() {
    const cookieStore = await cookies();
    const joinCode = cookieStore.get('joinCode');

    return(
        <div>
            <AcceptingForm j={joinCode.value} />
        </div>
    )

}