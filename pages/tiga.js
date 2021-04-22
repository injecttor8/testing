import { useRouter } from 'next/router'
import Link from 'next/link'
const page3 = ()=>{
    const router = useRouter();

    return (
    <p>
        <h1>Welcome to Page 3, {router.query.name}</h1>
        
        <div>
            <Link href ='/'>
                <a>Go to Home</a>
            </Link>
        </div>
            
         
    </p>
    )
}

export default page3;