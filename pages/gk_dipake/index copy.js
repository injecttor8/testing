import Head from 'next/head'
import Link from 'next/Link'

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
    <tr className="bg-white ">
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
const Home = () =>{
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
      <div className ="flex justify-around text-center gap-3 p-5 pt-10 text-white"> 

        <div className = "bg-gray-500 w-full h-28 flex flex-col justify-center ">
          <div className="flex justify-center">
            <div className=" flex justify-center items-center rounded-full h-16 w-16 bg-gray-500 border-2 border-white -m-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="h-3/4 p-6">
              <p className=" text-sm">DAFTAR FORMULIR</p>
              <p>****</p>
            </div>
            <div className="flex justify-center gap-1 bg-gray-600 h-1/4 hover:bg-gray-700 ">
              <p>More Info</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            </div>
        </div>
        
        <div className = "bg-green-500 w-full h-28 flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex justify-center items-center rounded-full h-16 w-16 bg-green-500 border-2 border-white -m-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <div className="h-3/4 p-6">
            <p className=" text-sm">PEMBAYARAN FORMULIR</p>
            <p>****</p>
          </div>
          <div className="flex justify-center gap-1 bg-green-600 h-1/4 hover:bg-green-700">
            <p>More Info</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <div className = "bg-yellow-500 w-full h-28 flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex justify-center items-center rounded-full h-16 w-16 bg-yellow-500 border-2 border-white -m-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          <div className="h-3/4 p-6 ">
            <p className=" text-sm">SELEKSI KELULUSAN</p>
            <p>****</p>
          </div>
          <div className="flex justify-center gap-1 bg-yellow-600 h-1/4 hover:bg-yellow-700">
            <p>More Info</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <div className = "bg-blue-500 w-full h-28 flex flex-col justify-center">
        <div className="flex justify-center">
            <div className="flex justify-center items-center rounded-full h-16 w-16 bg-blue-500 border-2 border-white -m-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
          </div>

          <div className="h-3/4 p-6">
            <p className=" text-sm">DAFTAR ULANG</p>
            <p>****</p>
          </div>
          <div className="flex justify-center gap-1 bg-blue-600 h-1/4 hover:bg-blue-700">
            <p>More Info</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <div className = "bg-red-500 w-full h-28 flex flex-col justify-center">
        <div className="flex justify-center">
            <div className="flex justify-center items-center rounded-full h-16 w-16 bg-red-500 border-2 border-white -m-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
          </div>

        <div className="h-3/4 p-6">
          <p className=" text-sm">LAPORAN PEMBELIAN</p>
            <p>****</p>
          </div>
          <div className=" flex justify-center gap-1 bg-red-600 h-1/4 hover:bg-red-700">
            <p>More Info </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <div className = "bg-purple-500 w-full h-28 flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex justify-center items-center rounded-full h-16 w-16 bg-purple-500 border-2 border-white -m-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
          </div>

        <div className="h-3/4 p-6">
          <p className=" text-sm">KIRIM SMS</p>
            <p>****</p>
          </div>

          <div className="flex justify-center gap-1 bg-purple-600 h-1/4 hover:bg-purple-700">
            <p>More Info</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>


      {/* content 2 */}
      <div className="p-2">
        <div className="p-2 w-full">
          <p>Informasi Gelombang Pendaftaran</p>
          <div className=" overflow-hidden border border-gray-300 rounded w-full shadow" >
            <TabelInfoGelombang>
              <TabelGelombangItems no="1" isi1="Gelombang 1 Tahap 1" isi2="2020-08-24" isi3="2020-09-24" />
              <TabelGelombangItems no="2" isi1="Gelombang 2" isi2="2020-12-01" isi3="2021-01-12" />
              <TabelGelombangItems no="3" isi1="Gelombang 1 Tahap 2" isi2="2020-09-25" isi3="2020-10-25" />
            </TabelInfoGelombang>
            {/* <table className="min-w-full divide-y divide-gray-200">
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Gelombang</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Mulai</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Berakhir</th>
              </tr>
              
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">1</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">GELOMBANG 1 TAHAP 1</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2020-08-24</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2020-09-24</td>
              </tr >
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">GELOMBANG 2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2020-12-01</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2021-02-13</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">3</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">GELOMBANG 1 TAHAP 2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2020-09-25</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2020-11-30</td>
              </tr>
            </table> */}
          </div>
        </div>
        
      </div>

      {/* content 3 */}
      <div className="flex flex-row justify-between gap-10 p-2 h-1/2">
        <div className="p-2 w-full">
          <p>Rekap Pendaftaran Per Gelombang</p>
          <div className=" overflow-hidden border border-gray-300 rounded w-full shadow">
            <TabelRekapGelombang>
              <TabelGelombangItems no="1" isi1="Gelombang 1 Tahap 1" isi2="BOARDING" isi3="27" />
              <TabelGelombangItems no="2" isi1="Gelombang 1 Tahap 1" isi2="FULLDAY" isi3="27" />
              <TabelGelombangItems no="3" isi1="Gelombang 1 Tahap 2" isi2="BOARDING" isi3="27" />
              <TabelGelombangItems no="4" isi1="Gelombang 1 Tahap 2" isi2="FULLDAY" isi3="27" />
              <TabelGelombangItems no="5" isi1="Gelombang 2" isi2="BOARDING" isi3="27" />
              <TabelGelombangItems no="6" isi1="Gelombang 2" isi2="FULLDAY" isi3="27" />
            </TabelRekapGelombang>
            {/* <table className="w-full divide-y divide-gray-200">
              <tr className="bg-gray-100 text-left">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Gelombang</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jalur Pendaftaran</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Pendaftar</th>
              </tr>

              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-sm text-gray-900">1</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">Gelombang 1 Tahap 1</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">BOARDING</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">27</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-sm text-gray-900">2</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">Gelombang 1 Tahap 1</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">FULLDAY</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">16</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-sm text-gray-900">3</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">Gelombang 1 Tahap 2</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">BOARDING</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">32</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-sm text-gray-900">4</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">Gelombang 1 Tahap 2</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">FULLDAY</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">29</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-sm text-gray-900">5</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">Gelombang 2</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">BOARDING</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">30</td>
              </tr>
              <tr className="bg-white"> 
                <td className="px-6 py-3 text-left text-sm text-gray-900">6</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">Gelombang 2</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">FULLDAY</td>
                <td className="px-6 py-3 text-left text-sm text-gray-900">22</td>
              </tr>
            </table> */}
          </div>
          
        </div>

        <div className="p-2 w-full">
          <p>Rekap Pendaftaran Lulus Seleksi</p>
          <div className=" overflow-hidden border border-gray-300 rounded w-full shadow">
            <table className="w-full divide-y divide-gray-200">
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Gelombang</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jalur Pendaftaran</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Pendaftar</th>
              </tr>

              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">1</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">Gelombang 1 Tahap 1</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">BOARDING</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">27</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">Gelombang 1 Tahap 1</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">FULLDAY</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">16</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">3</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">Gelombang 1 Tahap 2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">BOARDING</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">32</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">4</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">Gelombang 1 Tahap 2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">FULLDAY</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">29</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">5</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">Gelombang 2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">BOARDING</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">30</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">6</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">Gelombang 2</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">FULLDAY</td>
                <td className="px-6 py-3 text-left text-left text-sm text-gray-900">22</td>
              </tr>
            </table>
          </div>
          
        </div>
      </div>
    </main>
    
    
  )
}
export default Home;  