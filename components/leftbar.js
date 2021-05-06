import { HomeIcon , LightBulbIcon, UserIcon, PrinterIcon,DocumentTextIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Leftbar = () =>{
    const router = useRouter()
    const handleClick = (href) => {
        router.push(href)
    }
    return(
        <>
            <div className="flex flex-row w-full h-16 bg-green-300">
                <div className="flex justify-center items-center w-2/5 pb-2">
                    <img className="h-12" src="/logo.png"></img>
                </div>
                <div className="flex flex-col gap-1 justify-center  w-full text-xs font-medium">
                    <span>SMA AL-Wildan 3 BSD CITY</span>
                    
                    <span>School Information System</span>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-56 px-1 py-2 bg-gray-300">
                <div className=" overflow-hidden flex justify-center items-center rounded-full h-48 w-48 border-2 border-white bg-white">
                    <UserIcon className="text-gray-500"/>
                </div>
                <div>
                    <a>Dummy User</a>
                </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 bg-white h-full">
                <div className="flex flex-row hover:bg-gray-200 gap-1 px-4 py-2">
                    <HomeIcon className="w-5 h-5 text-black"/>
                    <Link href="/dashboard">
                        <a className="w-full text-sm">Beranda</a>
                    </Link>
                </div>
                <div className="flex flex-row hover:bg-gray-200 gap-1 px-4 py-2">
                    <DocumentTextIcon className="w-5 h-5 text-black"/>
                    <Link href="/formulir">
                        <a className="w-full text-sm">Lengkapi Formulir Pendaftaran</a>
                    </Link>
                    
                </div>
                <div className="flex flex-row hover:bg-gray-200 gap-1 px-4 py-2">
                    <PrinterIcon className="w-5 h-5 text-black"/>
                    <Link href="#">
                        <a className="w-full text-sm">Cetak Formulir</a>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
export default Leftbar;