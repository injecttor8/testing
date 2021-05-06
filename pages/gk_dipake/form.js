import { useRouter } from 'next/router'
import Link from 'next/Link'
const login = ()=>{
    const router = useRouter();

    return (
    <>
        <div className="flex justify-center ">
            <div className="w-4/12 h-96 my-32 bg-red-300 rounded-lg">
                <div className="flex flex-col">
                    {/* head */}
                    <div className="m-1 p-1 h-1/5 bg-yellow-50 flex justify-center font-serif text-5xl text">
                        LOGIN
                    </div>
                    {/* content */}
                    <div className="m-1 p-1 bg-blue-700 ">
                        <form action="/tiga">
                            <input className="h-0 focus-visible:ring-2 placeholder-gray-200 border-2 border-red-300 rounded-full py-3 px-6" type="text" name="username" placeholder="Username" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default login;