import Slider from '../../components/Slider';
import { cookies } from "next/headers";


export default async function Page() {
    const cookieStore = await cookies();
    const joinCode = cookieStore.get('joinCode');

    return (
        <Slider j={joinCode.value}/>
    );
  
}