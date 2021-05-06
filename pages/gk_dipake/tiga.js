import { useRouter } from 'next/router'
import Link from 'next/link'
import Input from '../components/buttons/button'
const page3 = ()=>{
    const router = useRouter();

    return (
    <p>
        <h1>Welcome to Page 3, {router.query.name}</h1>
        
        <div>
            <Link href ='../buttons/button'>
                <a>Go to Home</a>
            </Link>
        </div>
            
         <div>
             <Input>a</Input>
         </div>
    </p>
    )
}

export default page3;