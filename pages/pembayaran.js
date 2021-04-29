import Head from 'next/head'
import Link from 'next/Link'
import faker from "faker"
import { useEffect, useState } from "react";
import { HomeIcon , LightBulbIcon} from '@heroicons/react/solid'

const Home = () =>{
    const Tabel = ({children})=>{
        return (
            <table className="min-w-full divide-y divide-gray-200">
            {children}
            </table>
        )
    }
    const TabelHead = ({children}) => {
        return(
            <thead>
            <tr className="bg-gray-100">
                {children}
            </tr>
            </thead>
        )
    }
    const TabelHeadItems =({children}) => {
        return(
            <th className="px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
        )
    }
    
    const TabelBody = ({children}) => {
        return (
            <tbody className="divide-y divide-gray-200">
            {children}
            </tbody>
        )
    }
    const TabelBodyRow = ({children}) => {
        return (
            <tr className="bg-white hover:bg-yellow-100">
            {children}
            </tr>
        )
    }
    const TabelBodyRowItems= ({children}) => {
        return(
            <td className="px-2 text-left text-left text-sm text-gray-900">{children}</td>
        )
    }
    const TabelDataPembelian = ({children}) => {
        return (
            <Tabel>
                <TabelHead>
                    <TabelHeadItems>No</TabelHeadItems>
                    <TabelHeadItems>ACTION</TabelHeadItems>
                    <TabelHeadItems>PEMBATALAN</TabelHeadItems>
                    <TabelHeadItems>TANGGAL DAFTAR</TabelHeadItems>
                    <TabelHeadItems>GELOMBANG</TabelHeadItems>
                    <TabelHeadItems>JALUR</TabelHeadItems>
                    <TabelHeadItems>NO. FORMULIR</TabelHeadItems>
                    <TabelHeadItems>NAMA</TabelHeadItems>
                    <TabelHeadItems>ASAL SEKOLAH</TabelHeadItems>
                    <TabelHeadItems>NO TELP ORTU</TabelHeadItems>
                    <TabelHeadItems>STATUS BAYAR</TabelHeadItems>
                </TabelHead>
        
                <TabelBody>
                    {children}
                </TabelBody>
            </Tabel> 
        )
    }
    const TabelDataPembelianItems = ({no, isi1, isi2, isi3,isi4,isi5,isi6,isi7,isi8,isi9,isi10}) =>
    {
        return(
            <TabelBodyRow>
                <TabelBodyRowItems>{no}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi1}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi2}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi3}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi4}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi5}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi6}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi7}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi8}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi9}</TabelBodyRowItems>
                <TabelBodyRowItems>{isi10}</TabelBodyRowItems>
            </TabelBodyRow>
        )
    }

    const [dataPembeli, setDataPembeli] = useState([]);
    useEffect( () => {
    
        const tmp=[];
        let x1=1,x2=1,i=0, no_f=20210000;
        for (i; i<=10; i++)
        {
            if(i%2 == 0 )
            {
                x2= 1;
            }
            else{
                x2=2;
            }
            tmp.push({
                no: i+1,
                action1 : <button className="bg-yellow-500 text-sm p-1 rounded">Cetak</button>,
                action2 : <button className="bg-red-500 text-sm p-1 rounded">Pembatalan</button>,
                tgldfatar: faker.datatype.number({min : 2020, max:2021}) +"-"+
                faker.datatype.number({min : 1, max:12}) +"-"+
                faker.datatype.number({min : 1, max:30}),
                gelombang: "Gelombang "+ x1 + " Tahap "+x2,
                jalur: (i+1)%2 == 0 ? "FULLDAY" : "BOARDING",
                noformulir: no_f++,
                nama: faker.name.findName(),
                sekolah: "Sekolah " + (i+1),
                notelp: faker.phone.phoneNumber(),
                statusbayar: faker.helpers.randomize(["Sudah Bayar", "Belum Bayar"])
            })
            if((i+1)%2 ==0 )
            {
                x1++
            }
        }
        setDataPembeli(tmp);
    }, []);

    return(
        <>
            {/* head */}
            <div className="px-2 py-1">
                <a className="text-lg font-medium text-gray-700">Pembayaran</a>
                <a className="text-gray-500 text-opacity-70">    Formulir</a>
                <div className="flex float-right divide-x divide-gray-500">
                    <div className="flex px-2 hover:bg-gray-100">
                        <HomeIcon className="h-6 w-4 text-gray-800" />
                        <a className="text-gray-700">Home</a>
                    </div>
                    <div className="flex px-2 hover:bg-gray-100">
                        <a>Pendaftaran</a>
                    </div>
                    <div>
                        <a className="text-gray-500 text-opacity-70 px-2" >Pembayaran Formulir</a>
                    </div>
                </div>
            </div>

            {/* content 1 */}
            <div className="flex flex-row justify-between gap-10 p-2">
                {/* kolom pencarian */}
                <div className="w-2/4">
                    <div className="min-w-full  p-1">
                        <a>Kolom Pencarian</a>
                        <div className="overflow-hidden border border-gray-300 rounded w-full bg-gray-100 shadow p-2">
                            <form>
                                <table className=" divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-1">Piih Gelombang</td>
                                        <td className="px-6 py-1">
                                            <select className="w-40">
                                                <option >Gelombang a</option>
                                                <option >Gelombang b</option>
                                                <option >Gelombang c</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-1">Pilih Jalur</td>
                                        <td className="px-6 py-1">
                                        <select className="w-40">
                                                <option >Jalur a</option>
                                                <option >Jalur b</option>
                                                <option >Jalur c</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-1">Masukan Nomor Formulir</td>
                                        <td className="px-6 py-1">
                                            <input className="text-gray-700 w-40" type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-1">Pilih Status Bayar</td>
                                        <td className="px-6 py-1">
                                        <select className="w-40">
                                                <option >Bayar a</option>
                                                <option >Bayar b</option>
                                                <option >Bayar c</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div className="w-full flex float-right p-1 gap-2 bg-gray-100 ">
                            <button className="bg-blue-300 rounded p-1 float-right">Tampilkan Data</button>
                            <button className="bg-blue-300 rounded flex p-1"><LightBulbIcon className="w-6 h-5 text-white"/>Bantuan Pengguna</button>
                        </div>
                    </div>
                    
                </div>

                {/* informasi */}
                <div  className="w-2/4">
                    <div className="w-full">
                        <a>Informasi</a>
                        <ul className="text-xs">
                            <li>Formulir yang sudah di proses bayar otomatis dianggap sudah dikonfirmasi status pendaftarannya</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* content 2 */}
            
            <div className="p-2 -mt-2">
                <div className="p-2 w-full">
                    <p>Data Pembelian Formulir</p>
                    <div className=" overflow-hidden border border-gray-300 rounded w-full shadow" >
                        <TabelDataPembelian>
                            {dataPembeli.map((entry, rowIndex) => {
                                <TabelDataPembelianItems
                                    no="1"
                                    isi1={entry.action1}
                                    isi2={entry.action2}
                                    isi3={entry.tgldfatar}
                                    isi4={entry.gelombang}
                                    isi5={entry.jalur}
                                    isi6={entry.noformulir}
                                    isi7={entry.nama}
                                    isi8={entry.sekolah}
                                    isi9={entry.notelp}
                                    isi10={entry.statusbayar}
                                    key={rowIndex}
                                    />
                            })}
                        </TabelDataPembelian>
                        
                        {/* <table className="divide-y divide-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">NO</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">ACTION</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">PEMBATALAN</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">TANGGAL DAFTAR</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">GELOMBANG</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">JALUR</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">NO PENDAFTAR</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">NAMA</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">ASAL SEKOLAH</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">NO TELP ORTU</th>
                                    <th className="px-2 text-left text-gray-500 uppercase tracking-wider">STATUS BAYAR</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="bg-white hover:bg-yellow-100">
                                    <td className="px-2 py-1 text-left">1</td>
                                    <td className="px-2 py-1 text-left"><button className="bg-yellow-500 text-sm p-1 rounded">Cetak</button></td>
                                    <td className="px-2 py-1 text-left"><button className="bg-red-500 text-sm p-1 rounded">Pembatalan</button></td>
                                    <td className="px-2 py-1 text-left">2020-01-01</td>
                                    <td className="px-2 py-1 text-left">Gelombang 1 Tahap 1</td>
                                    <td className="px-2 py-1 text-left">FULLDAY</td>
                                    <td className="px-2 py-1 text-left">200001</td>
                                    <td className="px-2 py-1 text-left">Budi Budiman</td>
                                    <td className="px-2 py-1 text-left">SMPN 226</td>
                                    <td className="px-2 py-1 text-left">089604759579</td>
                                    <td className="px-2 py-1 text-left">Sudah Bayar</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;