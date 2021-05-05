import { useEffect, useState } from "react";
import Text from "../components/forms/inputs/text"
import Select from "../components/forms/inputs/select"
import Form from "../components/forms/form"
import Radio from "../components/forms/inputs/radio"
import Mail from "../components/forms/inputs/mail"
import Phone from "../components/forms/inputs/phone"
import Btn from "../components/buttons/button"
import BtnIcon from "../components/buttons/buttonIcon"
import { UploadIcon, UserIcon } from '@heroicons/react/solid'



const Tabel = ({children}) =>{
    return(
        <table className="w-full divide-y divide-gray-200">
            {children}
        </table>
    )
}
const TabelBody = ({children}) =>{
    return (
        <tr className="divide-x divide-gray-200">
            {children}
        </tr>
    )
}
const TabelBodyItem = ({children})=>{
    return(
        <td className={`w-3/5 bg-white font-normal px-2 py-1`}>{children}</td>
    )
}
const TabelHeadItem = ({children}) =>{
    return(
        <th className={`w-2/5 text-right font-medium bg-gray-100 px-2 py-1`}>{children}</th>
    )
}

const TabNavigation = ({ currentTab, setCurrentTab }) => {
    const clickTab = (tabIndex) => () => {
    setCurrentTab(tabIndex);
    console.log(tabIndex)
    };

    const defaultClasses ="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none";
    const activeClasses = "text-blue-500 border-b-2 font-medium border-blue-500";

    return (
    <div className="bg-white mb-2">
        <nav className="flex flex-col sm:flex-row">
            <button
                className={
                currentTab === 1
                    ? `${defaultClasses} ${activeClasses}`
                    : defaultClasses
                }
                onClick={clickTab(1)}>
                Biodata Pribadi Calon Mahasiswa
            </button>
            <button
                className={
                currentTab === 2
                    ? `${defaultClasses} ${activeClasses}`
                    : defaultClasses
                }
                onClick={clickTab(2)}>
                Upload Foto Calon Siswa
            </button>
            <button
                className={
                currentTab === 3
                    ? `${defaultClasses} ${activeClasses}`
                    : defaultClasses
                }
                onClick={clickTab(3)}>
                Data ayah
            </button>
            <button
                className={
                currentTab === 4
                    ? `${defaultClasses} ${activeClasses}`
                    : defaultClasses
                }
                onClick={clickTab(4)}>
                Data Ibu
            </button>
            <button
                className={
                currentTab === 5
                    ? `${defaultClasses} ${activeClasses}`
                    : defaultClasses
                }
                onClick={clickTab(5)}>
                Data Wali
            </button>
        </nav>
    </div>
    );
};

const BioCalonSiswa = () =>{
    return(
        <div className="bg-white">
            <Form>
                <div className="overflow-hidden border border-gray-300 rounded w-full shadow">
                    <Tabel>
                        <TabelBody>
                            <TabelHeadItem>Gelombang</TabelHeadItem>
                            <TabelBodyItem>GELOMBANG 2</TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jalur Pendaftaran</TabelHeadItem>
                            <TabelBodyItem>BOARDING</TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jurusan</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="jurusan" widht="60">
                                    <option>Teknik Informatika</option>
                                    <option>Teknik Industri</option>
                                    <option>Teknik Elektro</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor Formulir</TabelHeadItem>
                            <TabelBodyItem>20210137</TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Lengkap</TabelHeadItem>
                            <TabelBodyItem>Dummy User</TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Panggilan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="nama-panggilan" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tempat/Tanggal Lahir</TabelHeadItem>
                            <TabelBodyItem>Jakarta, 02 Februari 2010</TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tinggi Badan</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-3">
                                    <Text name="tinggi-badan" widht="60"></Text>
                                    <span className="flex items-center">CM</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Berat Badan</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-3">
                                    <Text name="berat-badan" widht="60"></Text>
                                    <span className="flex items-center">Kg</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jenis Kelamin</TabelHeadItem>
                            <TabelBodyItem>Laki-Laki</TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Agama</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="agama" widht="60">
                                    <option>Islam</option>
                                    <option>Kristen</option>
                                    <option>Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kewarganegaraan</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-10">
                                    <Radio name="gender" label="WNI"/>
                                    <Radio name="gender" label="WNA"/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor Induk Siswa Nasional (NISN)</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="nisn" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor Induk Kependudukan (NIK)</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="nik" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Email</TabelHeadItem>
                            <TabelBodyItem>
                                <Mail name="email" widht="60"></Mail>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Lengkap</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="alamat" widht="60"/>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="provinsi" widht="60">
                                    <option>Jakarta</option>
                                    <option>Jawa Tengah</option>
                                    <option>Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kota" widht="60">
                                    <option>kotaa</option>
                                    <option>kota b</option>
                                    <option>kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kecamatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kecamatan" widht="60">
                                    <option>Kecamatan a</option>
                                    <option>Kecamatan b</option>
                                    <option>Kecamatan c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kelurahan</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kelurahan" widht="60">
                                    <option>Kelurahan a</option>
                                    <option>Kelurahan b</option>
                                    <option>Kelurahan c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kode Pos</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="kode-pos"  widht="60"/>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="telp-rumah"  widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. HP</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="no-hp"  widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Masuk Di Kelas</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kelas" widht="60">
                                    <option>X-A</option>
                                    <option>X-B</option>
                                    <option>X-C</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Sekolah Asal</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="sekolah-asal" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Sekolah Asal</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="alamat-sekolah-asal" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor Ijazah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="no-ijazah" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor SKHUN</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="no-skhun" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Status Dalam Keluarga</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="status-keluarga" label="Anak Kandung"></Radio>
                                    <Radio name="status-keluarga" label="Anak Angkat"></Radio>
                                    <Radio name="status-keluarga" label="Anak Tiri"></Radio>
                                    <Radio name="status-keluarga" label="Lainnya"></Radio>
                                    <Text name="status-keluarga" widht="60"/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Anak Ke</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-3">
                                    <Text name="anak-ke" widht="12"/>
                                    <span className="flex items-center">Dari</span>
                                    <Text name="dari-saudara" widht="12"/>
                                    <span className="flex items-center">Saudara</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari Dirumah</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="bahasa" label="Indonesia"></Radio>
                                    <Radio name="bahasa" label="Inggris"></Radio>
                                    <Radio name="bahasa" label="Daerah"></Radio>
                                    <Radio name="bahasa" label="Lainnya"></Radio>
                                    <Text name="bahasa" widht="60"/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                </div>
            </Form>
        </div>
    )
}

const UploadFotoCalonSiswa = () =>{
    return(
        <div className=" py-5 flex flex-col justify-center items-center gap-5 bg-white">
            <div className=" overflow-hidden flex justify-center items-center rounded-full h-48 w-48 border-2 border-gray-50 bg-gray-100">
                <UserIcon className="text-gray-500"/>
            </div>
            <BtnIcon theme="warning" icon={<UploadIcon className="w-6 h-5 text-white"/>}>Upload Foto</BtnIcon>
        </div>
    )
}

const DataAyah = () =>{
    return(
        <div className="bg-white">
            <Form>
                <div className="overflow-hidden border border-gray-300 rounded w-full shadow">
                    <Tabel>
                        <TabelBody>
                            <TabelHeadItem>Ayah Masih Hidup</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-5">
                                    <Radio name="ayah-live" label="Masih Hidup"></Radio>
                                    <Radio name="ayah-live" label="Sudah Meninggal Dunia"></Radio>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Ayah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-nama" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tempat Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-tempat-lahir" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tanggal Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col">
                                    <input className="w-36 px-2 py-1 focus:ring-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-md" type="date" name="ayah-tanggal-lahir"></input>
                                    <span className="text-red-600 text-sm">*wajib diisi gunakan format dd-mm-yyyy (01-01-1985)</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Agama</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ayah-agama" widht="60">
                                    <option>Islam</option>
                                    <option>Kristen</option>
                                    <option>Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-alamat-rumah" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ayah-provinsi" widht="60">
                                    <option>Jakarta</option>
                                    <option>Jawa Tengah</option>
                                    <option>Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ayah-kota" widht="60">
                                    <option>kotaa</option>
                                    <option>kota b</option>
                                    <option>kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ayah-notelp-rumah" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Hp</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ayah-no-hp" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pendidikan Terakhir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-pendidikan-terakhir" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-pekerjaan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jabatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-jabatan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Penghasilan Tiap Bulan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-penghasilan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-alamat-pekerjaan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Telp Kantor</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ayah-telp-kantor" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="ayah-bahasa" label="Indonesia"></Radio>
                                    <Radio name="ayah-bahasa" label="Inggris"></Radio>
                                    <Radio name="ayah-bahasa" label="Daerah"></Radio>
                                    <Radio name="ayah-bahasa" label="Lainnya"></Radio>
                                    <Text name="ayah-bahasa" widht="60"/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                </div>
            </Form>
        </div>
    )
}
const DataIbu= ()=>{
    return(
        <div className="bg-white">
            <Form>
                <div className="overflow-hidden border border-gray-300 rounded w-full shadow">
                    <Tabel>
                        <TabelBody>
                            <TabelHeadItem>Ibu Masih Hidup</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-5">
                                    <Radio name="ibu-live" label="Masih Hidup"></Radio>
                                    <Radio name="ibu-live" label="Sudah Meninggal Dunia"></Radio>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Ibu</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-nama" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tempat Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-tempat-lahir" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tanggal Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col">
                                    <input className="w-36 px-2 py-1 focus:ring-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-md" type="date" name="ibu-tanggal-lahir"></input>
                                    <span className="text-red-600 text-sm">*wajib diisi gunakan format dd-mm-yyyy (01-01-1985)</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Agama</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ibu-agama" widht="60">
                                    <option>Islam</option>
                                    <option>Kristen</option>
                                    <option>Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-alamat-rumah" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ibu-provinsi" widht="60">
                                    <option>Jakarta</option>
                                    <option>Jawa Tengah</option>
                                    <option>Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ibu-kota" widht="60">
                                    <option>kotaa</option>
                                    <option>kota b</option>
                                    <option>kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ibu-notelp-rumah" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Hp</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ibu-no-hp" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pendidikan Terakhir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-pendidikan-terakhir" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-pekerjaan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jabatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-jabatan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Penghasilan Tiap Bulan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-penghasilan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-alamat-pekerjaan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Telp Kantor</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ibu-telp-kantor" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="ibu-bahasa" label="Indonesia"></Radio>
                                    <Radio name="ibu-bahasa" label="Inggris"></Radio>
                                    <Radio name="ibu-bahasa" label="Daerah"></Radio>
                                    <Radio name="ibu-bahasa" label="Lainnya"></Radio>
                                    <Text name="ibu-bahasa" widht="60"/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                </div>
            </Form>
        </div>
    )
}
const DataWali = () =>{
    return(
        <div className="bg-white">
            <Form>
                <div className="overflow-hidden border border-gray-300 rounded w-full shadow">
                    <Tabel>
                        <TabelBody>
                            <TabelHeadItem>Wali Masih Hidup</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-5">
                                    <Radio name="wali-live" label="Masih Hidup"></Radio>
                                    <Radio name="wali-live" label="Sudah Meninggal Dunia"></Radio>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Wali</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-nama" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tempat Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-tempat-lahir" widht="60"></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tanggal Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col">
                                    <input className="w-36 px-2 py-1 focus:ring-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-md" type="date" name="wali-tanggal-lahir"></input>
                                    <span className="text-red-600 text-sm">*wajib diisi gunakan format dd-mm-yyyy (01-01-1985)</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Agama</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="wali-agama" widht="60">
                                    <option>Islam</option>
                                    <option>Kristen</option>
                                    <option>Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-alamat-rumah" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="wali-provinsi" widht="60">
                                    <option>Jakarta</option>
                                    <option>Jawa Tengah</option>
                                    <option>Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="wali-kota" widht="60">
                                    <option>kotaa</option>
                                    <option>kota b</option>
                                    <option>kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="wali-notelp-rumah" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Hp</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="wali-no-hp" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pendidikan Terakhir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-pendidikan-terakhir" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-pekerjaan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jabatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-jabatan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Penghasilan Tiap Bulan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-penghasilan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-alamat-pekerjaan" widht="60"></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Telp Kantor</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="wali-telp-kantor" widht="60"></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="wali-bahasa" label="Indonesia"></Radio>
                                    <Radio name="wali-bahasa" label="Inggris"></Radio>
                                    <Radio name="wali-bahasa" label="Daerah"></Radio>
                                    <Radio name="wali-bahasa" label="Lainnya"></Radio>
                                    <Text name="wali-bahasa" widht="60"/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                </div>
            </Form>
        </div>
    )
}
const Tab = () =>{
    
    const [currentTab, setCurrentTab] = useState(1);
    let content = null;
    switch (currentTab) {
        case 1:
            content = (
                <BioCalonSiswa></BioCalonSiswa>
            );

            break;

        case 2:
            content = (
                <UploadFotoCalonSiswa></UploadFotoCalonSiswa>
            )
            break;

        case 3:
            content = (
                <DataAyah></DataAyah>
            )
            break;

        case 4:
            content = (
                <DataIbu></DataIbu>
            )
            break;

        case 5:
            content = (
                <DataWali></DataWali>
            )
            break;
        default:
            break;
    }
    
    return(
        <>
            <TabNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {content}
        </>
    )
}

export default Tab;