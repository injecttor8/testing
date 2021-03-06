import Head from 'next/head'
import Link from 'next/Link'
import faker from "faker"
import { useEffect, useState } from "react";
import { HomeIcon , LightBulbIcon} from '@heroicons/react/solid'
import Btn from "../components/buttons/button"
import BtnIcon from "../components/buttons/buttonIcon"
import Form from "../components/forms/form"
import Inpt from "../components/forms/inputs/input"
import Text from "../components/forms/inputs/text"
import Select from "../components/forms/inputs/select"


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
            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
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
            <td className="px-2 py-1 text-left text-left text-sm text-gray-900">{children}</td>
        )
    }
    const TabelPencarian = ({children}) =>{
        return(
            <Tabel>
                <TabelBody>
                    {children}
                </TabelBody>
            </Tabel>
        )
    }
    const TabelInformasi = ({children}) =>{
        return(
            <Tabel>
                <TabelBody>
                    <TabelBodyRow>
                        <TabelBodyRowItems><li>{children}</li></TabelBodyRowItems>
                    </TabelBodyRow>
                </TabelBody>
            </Tabel>
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
        for (i; i<40; i++)
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
                action1 : <Btn py="1" px ="1">Cetak</Btn>,
                action2 : <Btn theme="danger" py="1" px ="1">Pembatalann</Btn>,
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
        <div className="bg-blue-50">
            {/* head */}
            <div className="px-2 py-1">
                <a className="text-lg font-medium text-gray-700">Pembayaran</a>
                <a className="text-gray-500 text-opacity-70">    Formulir</a>
                <div className="flex float-right divide-x divide-gray-500 text-xs font-medium text-gray-700">
                    <div className="flex px-2">
                        <HomeIcon className="h-4 w-4 text-gray-800" />
                        <a className="text-gray-700">Home</a>
                    </div>
                    <div className="flex px-2">
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
                    <div className="w-full bg-white px-1 pb-1 rounded text-base font-medium text-gray-700">
                        <a className="p-1 py-1">Kolom Pencarian</a>
                        <div className="overflow-hidden border border-gray-300 rounded w-full bg-gray-100 shadow p-2 ">
                            <Form>
                                <table className=" divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-1">Piih Gelombang</td>
                                        <td className="px-6 py-1">
                                            <Select name="pilih_gelombang">
                                                <option value="a">Gelombang a</option>
                                                <option value="b">Gelombang b</option>
                                                <option value="c">Gelombang c</option>
                                            </Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-1">Pilih Jalur</td>
                                        <td className="px-6 py-1">
                                            <Select name="pilih_jalur">
                                                <option value="a">Jalur a</option>
                                                <option value="b">Jalur b</option>
                                                <option value="c">Jalur c</option>
                                            </Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-1">Masukan Nomor Formulir</td>
                                        <td className="px-6 py-1">
                                            <Text name="nomor_formulir"></Text>
                                            {/* <input className="text-gray-700 w-40" type="text" /> */}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-1">Pilih Status Bayar</td>
                                        <td className="px-6 py-1">
                                            <Select name="pilih_status">
                                                <option value="a">Bayar a</option>
                                                <option value="b">Bayar b</option>
                                                <option value="c">Bayar c</option>
                                            </Select>
                                        </td>
                                    </tr>
                                </table>
                            </Form>
                        </div>
                        <div className="w-full flex justify-end p-1 gap-2 ">
                            <Btn>Tampilkan Data</Btn>
                            <BtnIcon theme="warning" icon={<LightBulbIcon className="w-6 h-5 text-white"/>}>Bantuan Pengguna</BtnIcon>

                        </div>
                    </div>
                    
                </div>

                {/* informasi */}
                <div  className="w-2/4">
                    <div className="w-full divide-y divide-gray-200 bg-white px-1 pb-1 rounded text-base font-medium text-gray-700">
                        <a className="p-1 py-1">Informasi</a>
                        <div className="text-sm font-normal text-gray-700 overflow-hidden border border-gray-300 divide-y divide-gray-200 rounded">
                            <TabelInformasi>Formulir yang sudah di proses bayar otomatis dianggap sudah di konfirmasi status pembayarannya</TabelInformasi>
                            <TabelInformasi>test1</TabelInformasi>
                            <TabelInformasi>test2</TabelInformasi>
                        </div>
                        
                    </div>
                </div>

            </div>

            {/* content 2 */}
            <div className="p-2 -mt-2">
                <div className="p-2 w-full">
                    <p>Data Pembelian Formulir</p>
                    <div className=" overflow-hidden border border-gray-300 rounded w-full shadow" >
                        <TabelDataPembelian>
                            {dataPembeli.map((entry, rowIndex) => (
                                <TabelDataPembelianItems
                                    no={entry.no}
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
                            ))}
                        </TabelDataPembelian>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;