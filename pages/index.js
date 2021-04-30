import Head from 'next/head'
import Link from 'next/Link'
import faker from "faker"
import { useEffect, useState } from "react";
import { PencilAltIcon, InformationCircleIcon, CurrencyDollarIcon, UserGroupIcon, ClipboardListIcon, ArchiveIcon, ChatAlt2Icon } from '@heroicons/react/solid'

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
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
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
    <td className="px-6 py-3 text-left text-left text-sm text-gray-900">{children}</td>
  )
}

const TabelInfoGelombang = ({children}) => {
  return (
    <Tabel>
      <TabelHead>
          <TabelHeadItems>No</TabelHeadItems>
          <TabelHeadItems>NAMA GELOMBANG</TabelHeadItems>
          <TabelHeadItems>TANGGAL MULAI</TabelHeadItems>
          <TabelHeadItems>TANGGAL BERAKHIR</TabelHeadItems>
        </TabelHead>

        <TabelBody>
          {children}
        </TabelBody>
    </Tabel> 
  )
}
const TabelRekapGelombang = ({children}) => {
  return(
    <Tabel>
      <TabelHead>
          <TabelHeadItems>No</TabelHeadItems>
          <TabelHeadItems>NAMA GELOMBANG</TabelHeadItems>
          <TabelHeadItems>JALUR PENDAFTARAN</TabelHeadItems>
          <TabelHeadItems>TOTAL PENDAFTAR</TabelHeadItems>
        </TabelHead>

        <TabelBody>
          {children}
        </TabelBody>
    </Tabel>
  )
}
const TabelGelombangItems = ({no, isi1, isi2, isi3}) =>
{
  return(
    <TabelBodyRow>
      <TabelBodyRowItems>{no}</TabelBodyRowItems>
      <TabelBodyRowItems>{isi1}</TabelBodyRowItems>
      <TabelBodyRowItems>{isi2}</TabelBodyRowItems>
      <TabelBodyRowItems>{isi3}</TabelBodyRowItems>
    </TabelBodyRow>
  )
}

const NamaForm = ({nama ,warna}) =>{
  return(
    <>
      <div className="h-3/4 p-6">
        <p className=" text-sm">{nama}</p>
        <p>****</p>
      </div>
      <div className={`flex justify-center gap-1 bg-${warna}-600 h-1/4 hover:bg-${warna}-700`} >
        <p>More Info</p>
        <InformationCircleIcon className="h-6 w-4 text-white" />
      </div>
    </>
  )
}

const GambarForm = ({children,warna}) =>{
  return(
    <div className="flex justify-center ">
      <div className={` flex justify-center items-center rounded-full h-16 w-16 bg-gray-500 border-2 border-white -m-10 bg-${warna}-500`}>
        {children}
      </div>
    </div>
  )
}

const Home = () =>{
  const [dataTabel, setDataTabel ] = useState([]);
  const [dataTabel1, setDataTabel1 ] = useState([]);
  useEffect( () => {
    const tmp=[];
    let x1=1,x2=1,i=0;
    for (i; i<3; i++)
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
        gelombang: "Gelombang "+ x1 + " Tahap "+x2,
        mulai: faker.datatype.number({min : 2020, max:2021}) +"-"+
        faker.datatype.number({min : 1, max:12}) +"-"+
        faker.datatype.number({min : 1, max:30}),
        berakhir: faker.datatype.number({min : 2020, max:2021}) +"-"+
        faker.datatype.number({min : 1, max:12}) +"-"+
        faker.datatype.number({min : 1, max:30})
      })
      if((i+1)%2 ==0 )
      {
        x1++
      }
      
    }
    console.log(tmp[0].mulai)
    setDataTabel(tmp);
  }, []);
  useEffect( () => {
    const temp=[];
    let x1=1,x2=1,i=0;
    for (i; i<6; i++)
    {
      if(i%2 == 0 )
      {
        x2= 1;
      }
      else{
        x2=2;
      }
      temp.push({
        no: i+1,
        gelombang: "Gelombang "+ x1 + " Tahap "+x2,
        jalur: (i+1)%2 == 0 ? "FULLDAY" : "BOARDING",
        pendaftar: faker.datatype.number({min : 16, max:30})
      })
      if((i+1)%4 ==0 )
      {
        x1++
      }
      
    }
    setDataTabel1(temp);
  }, []);
  // let x1=1, x2=1;
  // useEffect(() => {
  //   const tmp = [];
  //   for (let i = 0; i < 7; i++) {
  //     tmp.push({
  //       no: i+1,
  //       gelombang: "Gelombang "+ x1 + " Tahap "+x2,
  //       jalur: (i+1)%2 == 0 ? "FULLDAY" : "BOARDING",
  //       pendaftar: faker.datatype.number({min : 16, max:30})
  //     });
  //   }

  //   setDataTable1(tmp);
  // }, []);

  return(
    <main>
      {/* header */}
      <div className="p-1 px-3">
      
        <a className="text-lg font-medium text-gray-700">Beranda</a>
        <a className="text-gray-500 text-opacity-70">    Penerimaan Peserta Didik Baru</a>
        <div className="flex float-right	hover:bg-gray-100 rounded-full py-1 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <a className="text-gray-700">Home</a>
        </div>
        
      </div>

      {/* content 1 */}
      <div className ="flex justify-around text-center gap-3 p-4 pt-10  text-white"> 

        <div className = "bg-gray-500 w-full h-28 flex flex-col justify-center ">
          <GambarForm warna="gray">
            <PencilAltIcon className="h-10 w-10 text-white"/>
          </GambarForm>

          <NamaForm nama="DAFTAR FORMULIR" warna="gray" />
        </div>
        
        <div className = "bg-green-500 w-full h-28 flex flex-col justify-center">
          <GambarForm warna ="green">
            <CurrencyDollarIcon className="h-10 w-10 text-white"/>
          </GambarForm>

          <NamaForm nama="PEMBAYARAN FORMULIR" warna="green" />

        </div>

        <div className = "bg-yellow-500 w-full h-28 flex flex-col justify-center">
          <GambarForm warna= "yellow">
            <UserGroupIcon className="h-10 w-10 text-white"/>
          </GambarForm>

          <NamaForm nama="SELEKSI KELULUSAN" warna ="yellow" />
        </div>

        <div className = "bg-blue-500 w-full h-28 flex flex-col justify-center">
          <GambarForm warna= "blue">
            <ClipboardListIcon className="h-10 w-10 text-white"/>
          </GambarForm>

          <NamaForm nama="DAFTAR ULANG" warna="blue"/>
        </div>

        <div className = "bg-red-500 w-full h-28 flex flex-col justify-center">
          <GambarForm warna= "red">
            <ArchiveIcon className="h-10 w-10 text-white"/>
          </GambarForm>

          <NamaForm nama="LAPORAN PEMBELIAN" warna="red"/>
        </div>

        <div className = "bg-purple-500 w-full h-28 flex flex-col justify-center">
          <GambarForm warna= "purple">
            <ChatAlt2Icon className="h-10 w-10 text-white"/>
          </GambarForm>

          <NamaForm nama="KIRIM SMS" warna="purple" />
        </div>
      </div>
  
      {/* content 2 */}
      <div className="p-2 -mt-2">
        <div className="p-2 w-full">
          <p>Informasi Gelombang Pendaftaran</p>
          <div className=" overflow-hidden border border-gray-300 rounded w-full shadow" >
            <TabelInfoGelombang>
              {dataTabel.map((entry, rowIndex) => (
                <TabelGelombangItems
                    no= {entry.no}
                    isi1={entry.gelombang}
                    isi2={entry.mulai}
                    isi3={entry.berakhir}
                    key={rowIndex}
                  />
                ))}
            </TabelInfoGelombang>
          </div>
        </div>
      </div>

      {/* content 3 */}
      <div className="flex flex-row justify-between gap-10 p-2 h-1/2 -mt-2">
        <div className="p-2 w-full">
          <p>Rekap Pendaftaran Per Gelombang</p>
          <div className=" overflow-hidden border border-gray-300 rounded w-full shadow">
            <TabelRekapGelombang>
            {dataTabel1.map((entry, rowIndex) => (
              <TabelGelombangItems
                  no= {entry.no}
                  isi1={entry.gelombang}
                  isi2={entry.jalur}
                  isi3={entry.pendaftar}
                  key={rowIndex}
                />
              ))}

              {/* <TabelGelombangItems no="1" isi1="Gelombang 1 Tahap 1" isi2="BOARDING" isi3="27" />
              <TabelGelombangItems no="2" isi1="Gelombang 1 Tahap 1" isi2="FULLDAY" isi3="16" />
              <TabelGelombangItems no="3" isi1="Gelombang 1 Tahap 2" isi2="BOARDING" isi3="32" />
              <TabelGelombangItems no="4" isi1="Gelombang 1 Tahap 2" isi2="FULLDAY" isi3="29" />
              <TabelGelombangItems no="5" isi1="Gelombang 2" isi2="BOARDING" isi3="30" />
              <TabelGelombangItems no="6" isi1="Gelombang 2" isi2="FULLDAY" isi3="22" /> */}
            </TabelRekapGelombang>
          </div>
        </div>

        <div className="p-2 w-full">
          <p>Rekap Pendaftaran Lulus Seleksi</p>
          <div className=" overflow-hidden border border-gray-300 rounded w-full shadow">
            <TabelRekapGelombang>
              {dataTabel1.map((entry, rowIndex) => (
              <TabelGelombangItems
                  no= {entry.no}
                  isi1={entry.gelombang}
                  isi2={entry.jalur}
                  isi3={entry.pendaftar}
                  key={rowIndex}
                />
              ))}
              {/* <TabelGelombangItems no="1" isi1="Gelombang 1 Tahap 1" isi2="BOARDING" isi3="25" />
              <TabelGelombangItems no="2" isi1="Gelombang 1 Tahap 1" isi2="FULLDAY" isi3="15" />
              <TabelGelombangItems no="3" isi1="Gelombang 1 Tahap 2" isi2="BOARDING" isi3="28" />
              <TabelGelombangItems no="4" isi1="Gelombang 1 Tahap 2" isi2="FULLDAY" isi3="29" />
              <TabelGelombangItems no="5" isi1="Gelombang 2" isi2="BOARDING" isi3="26" />
              <TabelGelombangItems no="6" isi1="Gelombang 2" isi2="FULLDAY" isi3="16" /> */}
            </TabelRekapGelombang>
          </div>
        </div>
      </div>
    </main>
    
    
  )
}
export default Home;  