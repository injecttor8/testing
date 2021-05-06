import faker from "faker"
import { useEffect, useState } from "react";
import { HomeIcon , LightBulbIcon, UserIcon, PrinterIcon,DocumentTextIcon} from '@heroicons/react/solid'
import Btn from "../components/buttons/button"
import BtnIcon from "../components/buttons/buttonIcon"
import Form from "../components/forms/form"
import Text from "../components/forms/inputs/text"
import Select from "../components/forms/inputs/select"
import Leftbar from "../components/leftbar"
import HeaderDashboard from "../components/header";
import Link from 'next/link'

const Dashboard = () =>{
    const Tabel = ({children}) =>{
        return(
            <table className="w-full divide-y divide-gray-200">
                {children}
            </table>
        )
    }
    const TabelHeadPP = ({children}) =>{
        return(
            <thead>
                <tr className="bg-gray-100 divide-x divide-gray-200">
                    {children}
                </tr>
            </thead>
        )
    }
    const TabelHeadItemPP =({children}) => {
        return(
            <th className="px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
        )
    }
    const TabelBodyPP = ({children}) => {
        return (
            <tbody className="divide-y divide-gray-200">
            {children}
            </tbody>
        )
    }
    const TabelBodyRowPP = ({children}) => {
        return (
            <tr className="bg-white hover:bg-yellow-100 divide-x divide-gray-200">
            {children}
            </tr>
        )
    }
    const TabelBodyRowItemPP= ({children}) => {
        return(
            <td className="px-2  text-left text-left text-xs text-gray-900">{children}</td>
        )
    }
    const TabelPP = ({children}) =>{
        return(
            <Tabel>
                <TabelHeadPP>
                    <TabelHeadItemPP>No</TabelHeadItemPP>
                    <TabelHeadItemPP>Pengumuman</TabelHeadItemPP>
                </TabelHeadPP>

                <TabelBodyPP>
                    {children}
                </TabelBodyPP>
            </Tabel>
        )
    }
    const TabelPPItem = ({no,isi}) =>{
        return(
            <TabelBodyRowPP>
                <TabelBodyRowItemPP>{no}</TabelBodyRowItemPP>
                <TabelBodyRowItemPP>{isi}</TabelBodyRowItemPP>
            </TabelBodyRowPP>

        )
    }
    const TabelBody = ({children}) =>{
        return (
            <tr className="divide-x divide-gray-200">
                {children}
            </tr>
        )
    }
    const TabelBodyItem = ({children,warna="yellow"})=>{
        return(
            <td className={`w-3/6 bg-${warna}-200 font-normal px-2`}>{children}</td>
        )
    }
    const TabelHeadItem = ({children,warna="gray"}) =>{
        return(
            <th className={`w-3/6 text-right bg-${warna}-200 px-2`}>{children}</th>
        )
    }
    const TabelWelcome = ({children}) => {
        return(
            <Tabel>
                {children}
            </Tabel>
        )
    }
    const TabelWelcomeItem = ({th,td ,warnath,warnatd}) =>{
        return(
            <TabelBody>
                <TabelHeadItem warna={`${warnath}`}  >{th} </TabelHeadItem>
                <TabelBodyItem warna={`${warnatd}`} >{td} </TabelBodyItem>
            </TabelBody>
        )
    }
    return(
        <>
            <div className="flex flex-row">
                
                {/* sidebar left */}
                <div className="flex flex-col w-1/5 h-screen border-r-2 shadow-2xl">
                    <Leftbar/>
                </div>

                {/* sidebar right */}
            
                <div className="w-full h-screen bg-white relative">
                    <HeaderDashboard/>
                    
                    <div>
                        <div className="px-2">

                            {/* header penerimaan */}
                            <div>
                                <a className="text-lg font-medium text-gray-700">Penerimaan</a>
                                <a className="text-sm text-gray-500 text-opacity-70"> Peserta Didik Baru</a>

                                <div className="pt-1 flex float-right divide-x divide-gray-500 text-xs font-medium text-gray-700">
                                    <div className="flex px-2">
                                        <HomeIcon className="h-4 w-4 text-gray-800" />
                                        <a className="text-gray-700">Home</a>
                                    </div>
                                    <div>
                                        <a className="text-gray-500 text-opacity-70 px-2" >Dashboard</a>
                                    </div>
                                </div>
                            </div>

                            {/* content selamat datang & tahapan selanjutnya */}
                            <div className="flex flex-row gap-2 pt-4">
                                {/* content selamat datang */}
                                <div className="w-full bg-white font-medium text-gray-700">
                                    <div className="border-b-2 border-gray-200 bg-white p-1">Selamat Datang User Dummy</div>
                                    <div className="w-full py-2 px-2">
                                        <div className=" overflow-hidden border border-gray-300 rounded w-full bg-gray-100 shadow">
                                            <TabelWelcome>
                                                <TabelWelcomeItem th="Nomor Pendaftaran" td="20210147"/>
                                                <TabelWelcomeItem th="Jalur Pendaftaran" td="BOARDING"/>
                                                <TabelWelcomeItem th="Nama Lengkap" td="Dummy User"/>
                                                <TabelWelcomeItem th="Tempat/Tanggal Lahir" td="Jakarta, 02 Februari 2010"/>
                                                <TabelWelcomeItem th="Status Pendaftaran" td="Berhasil daftar, menunggu pembayaran formulir & verifikasi dari panitia"/>
                                                <TabelWelcomeItem th="Status Seleksi" td="Menunggu Proses" warnath="green" warnatd="yellow" />
                                            </TabelWelcome>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-1/4 h-2/4 bg-white font-medium text-gray-700 pb-2 px-2">
                                    <div className="border-b-2 border-gray-200 bg-white p-1">Tahapan Selanjutnya</div>
                                    <div className="flex flex-col gap-3 pt-5">
                                        <Link href="/formulir">
                                            <Btn theme="warning">Lengkapi Formulir</Btn>
                                        </Link>
                                        <Btn>Cetak Formulir</Btn>
                                    </div>
                                </div>
        
                            </div>

                            {/* content pengumuman */}
                            <div className="pt-14">
                                <div className="bg-white font-medium text-gray-700">
                                    <div className="border-b-2 border-gray-200 bg-white p-1">Pengumuman Penting</div>
                                    <div className="w-full py-2 px-2">
                                        <div className="pt-2 overflow-hidden border border-gray-300 rounded w-full bg-gray-100 shadow">
                                            <TabelPP>
                                                <TabelPPItem no="1" isi="Bismillah, pendaftaran berhasil, silahkan melakukan pembayaran uang Formulir Pendaftaran Sebesar Rp.1.000.000 ke Virtual Account BNI Syariah 9881 4655 2008 1903 dan konfirmasi dengan melampirkan bukti pembayaran kebagian finance."/>
                                            </TabelPP>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                                
                        </div>
                    </div>

                    {/* footer */}
                    <div>
                        <div className="absolute bottom-0 bg-white w-full">
                            <div className="p-1">
                                <p className="float-left">Copyright © 2009-2021 <a className="text-blue-300">Software Sekolah</a>. All rights reserved</p>
                                <p className="float-right text-black">Version 3.0.1</p>
                            </div>
                        </div>  
                    </div>
                    
                    
                </div>
            
                
            </div>
        </>
    )
}

export default Dashboard;