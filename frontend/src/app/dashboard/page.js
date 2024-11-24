import "../globals.css";
import Test from '../../components/Test';
import { cookies } from "next/headers";


export default async function Page() {
    const cookieStore = await cookies();
    const joinCode = cookieStore.get('joinCode');

    return(
        <div>
            <Test j={joinCode.value} />
        </div>
    )

}