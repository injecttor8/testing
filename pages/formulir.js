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
import Leftbar from "../components/leftbar"
import HeaderDashboard from "../components/header";
import { useForm } from "react-hook-form";


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
const Submit = (data)=>{
    console.log(data)
}
const BioCalonSiswa = () =>{
    const {register, handleSubmit } = useForm();
    return(
        <div className="bg-white">
            <Form onSubmit={handleSubmit(Submit)}>
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
                                <Select name="jurusan" width="60" ref={register}>
                                    <option value="Teknik Informatika">Teknik Informatika</option>
                                    <option value="Teknik Industri">Teknik Industri</option>
                                    <option value="Teknik Elektro">Teknik Elektro</option>
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
                                <Text name="nama-panggilan" width="60" ref={register}></Text>
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
                                    <Text name="tinggi-badan" width="60" ref={register}></Text>
                                    <span className="flex items-center">CM</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Berat Badan</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-3">
                                    <Text name="berat-badan" width="60" ref={register}></Text>
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
                                <Select name="agama" width="60" ref={register}>
                                    <option>Islam</option>
                                    <option>Kristen</option>
                                    <option>Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kewarganegaraan</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-10" >
                                    <Radio name="kewarganegaraan" label="WNI" id="WNI" value="WNI" ref={register}/>
                                    <Radio name="kewarganegaraan" label="WNA" id="WNA" value="WNA" ref={register}/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor Induk Siswa Nasional (NISN)</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="nisn" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor Induk Kependudukan (NIK)</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="nik" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Email</TabelHeadItem>
                            <TabelBodyItem>
                                <Mail name="email" width="60" ref={register}></Mail>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Lengkap</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="alamat" width="60" ref={register}/>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="provinsi" width="60" ref={register}>
                                    <option value="jakarta">Jakarta</option>
                                    <option value="jawa tengah">Jawa Tengah</option>
                                    <option value="aceh">Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kota" width="60" ref={register}>
                                    <option value="kota a">kotaa</option>
                                    <option value="kota b">kota b</option>
                                    <option value="kota c">kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kecamatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kecamatan" width="60" ref={register}>
                                    <option value="Kecamatan a">Kecamatan a</option>
                                    <option value="Kecamatan b">Kecamatan b</option>
                                    <option value="Kecamatan c">Kecamatan c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kelurahan</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kelurahan" width="60" ref={register}>
                                    <option value="Kelurahan a">Kelurahan a</option>
                                    <option value="Kelurahan b">Kelurahan b</option>
                                    <option value="Kelurahan c">Kelurahan c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kode Pos</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="kode-pos"  width="60" ref={register}/>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="telp-rumah"  width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. HP</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="no-hp"  width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Masuk Di Kelas</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="kelas" width="60" ref={register}>
                                    <option value="X-A">X-A</option>
                                    <option value="X-B">X-B</option>
                                    <option value="X-C">X-C</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Sekolah Asal</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="sekolah-asal" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Sekolah Asal</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="alamat-sekolah-asal" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor Ijazah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="no-ijazah" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nomor SKHUN</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="no-skhun" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Status Dalam Keluarga</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="status-keluarga" label="Anak Kandung" value="Anak Kandung" ref={register}></Radio>
                                    <Radio name="status-keluarga" label="Anak Angkat" value="Anak Angkat" ref={register}></Radio>
                                    <Radio name="status-keluarga" label="Anak Tiri" value="Anak Tiri" ref={register}></Radio>
                                    <Radio name="status-keluarga" label="Lainnya" ref={register}></Radio>
                                    <Text name="status-keluarga-lainnya" width="60" ref={register}/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Anak Ke</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-3">
                                    <Text name="anak-ke" width="12" ref={register}/>
                                    <span className="flex items-center">Dari</span>
                                    <Text name="dari-saudara" width="12" ref={register}/>
                                    <span className="flex items-center">Saudara</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari Dirumah</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="bahasa" label="Indonesia" ref={register}></Radio>
                                    <Radio name="bahasa" label="Inggris" ref={register}></Radio>
                                    <Radio name="bahasa" label="Daerah" ref={register}></Radio>
                                    <Radio name="bahasa" label="Lainnya" ref={register}></Radio>
                                    <Text name="bahasa-lainnya" width="60" ref={register}/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                    <div className="flex justify-center p-1">
                        <Btn type="submit">Submit</Btn>
                    </div>
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
    const {register, handleSubmit } = useForm();
    return(
        <div className="bg-white">
            <Form onSubmit={handleSubmit(Submit)}>
                <div className="overflow-hidden border border-gray-300 rounded w-full shadow">
                    <Tabel>
                        <TabelBody>
                            <TabelHeadItem>Ayah Masih Hidup</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-5">
                                    <Radio name="ayah-live" label="Masih Hidup" value="Masih Hidup" ref={register}></Radio>
                                    <Radio name="ayah-live" label="Sudah Meninggal Dunia" value="Sudah Meninggal Dunia" ref={register}></Radio>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Ayah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-nama" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tempat Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-tempat-lahir" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tanggal Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col">
                                    <input ref={register} className="w-40 px-2 py-1 focus:ring-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-md" type="date" name="ayah-tanggal-lahir"></input>
                                    <span className="text-red-600 text-sm">*wajib diisi gunakan format dd-mm-yyyy (01-01-1985)</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Agama</TabelHeadItem>
                            <TabelBodyItem>
                                <Select ref={register} name="ayah-agama" width="60">
                                    <option value="Islam">Islam</option>
                                    <option value="Kristen">Kristen</option>
                                    <option value="Hindu">Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-alamat-rumah" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ayah-provinsi" width="60" ref={register}>
                                    <option value="Jakarta">Jakarta</option>
                                    <option value="Jawa Tengah">Jawa Tengah</option>
                                    <option value="Aceh">Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ayah-kota" width="60" ref={register}>
                                    <option value="kota a">kota a</option>
                                    <option value="kota b">kota b</option>
                                    <option value="kota c">kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ayah-notelp-rumah" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Hp</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ayah-no-hp" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pendidikan Terakhir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-pendidikan-terakhir" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-pekerjaan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jabatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-jabatan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Penghasilan Tiap Bulan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-penghasilan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ayah-alamat-pekerjaan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Telp Kantor</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ayah-telp-kantor" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="ayah-bahasa" label="Indonesia" value="Indonesia" ref={register}></Radio>
                                    <Radio name="ayah-bahasa" label="Inggris" value="Inggris" ref={register}></Radio>
                                    <Radio name="ayah-bahasa" label="Daerah" value="Daerah" ref={register}></Radio>
                                    <Radio name="ayah-bahasa" label="Lainnya" ref={register}></Radio>
                                    <Text name="ayah-bahasa-lainnya" width="60" ref={register}/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                    <div className="flex justify-center p-1">
                        <Btn type="submit">Submit</Btn>
                    </div>
                </div>
            </Form>
        </div>
    )
}
const DataIbu= ()=>{
    const {register, handleSubmit } = useForm();
    return(
        <div className="bg-white">
            <Form onSubmit={handleSubmit(Submit)}>
                <div className="overflow-hidden border border-gray-300 rounded w-full shadow">
                    <Tabel>
                        <TabelBody>
                            <TabelHeadItem>Ibu Masih Hidup</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-5">
                                    <Radio name="ibu-live" label="Masih Hidup" value="Masih Hidup" ref={register}></Radio>
                                    <Radio name="ibu-live" label="Sudah Meninggal Dunia" value="Sudah Meninggal Dunia" ref={register}></Radio>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Ibu</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-nama" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tempat Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-tempat-lahir" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tanggal Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col">
                                    <input ref={register} className="w-40 px-2 py-1 focus:ring-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-md" type="date" name="ibu-tanggal-lahir"></input>
                                    <span className="text-red-600 text-sm">*wajib diisi gunakan format dd-mm-yyyy (01-01-1985)</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Agama</TabelHeadItem>
                            <TabelBodyItem>
                                <Select ref={register} name="ibu-agama" width="60">
                                    <option value="Islam">Islam</option>
                                    <option value="Kristen">Kristen</option>
                                    <option value="Hindu">Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-alamat-rumah" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ibu-provinsi" width="60" ref={register}>
                                    <option value="Jakarta">Jakarta</option>
                                    <option value="Jawa Tengah">Jawa Tengah</option>
                                    <option value="Aceh">Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="ibu-kota" width="60" ref={register}>
                                    <option value="kota a">kota a</option>
                                    <option value="kota b">kota b</option>
                                    <option value="kota c">kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ibu-notelp-rumah" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Hp</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ibu-no-hp" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pendidikan Terakhir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-pendidikan-terakhir" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-pekerjaan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jabatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-jabatan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Penghasilan Tiap Bulan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-penghasilan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="ibu-alamat-pekerjaan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Telp Kantor</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="ibu-telp-kantor" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="ibu-bahasa" label="Indonesia" value="Indonesia" ref={register}></Radio>
                                    <Radio name="ibu-bahasa" label="Inggris" value="Inggris" ref={register}></Radio>
                                    <Radio name="ibu-bahasa" label="Daerah" value="Daerah" ref={register}></Radio>
                                    <Radio name="ibu-bahasa" label="Lainnya" ref={register}></Radio>
                                    <Text name="ibu-bahasa-lainnya" width="60" ref={register}/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                    <div className="flex justify-center p-1">
                        <Btn type="submit">Submit</Btn>
                    </div>
                </div>
            </Form>
        </div>
    )
}
const DataWali = () =>{
    const {register, handleSubmit } = useForm();

    return(
        <div className="bg-white">
            <Form onSubmit={handleSubmit(Submit)}>
                <div className="overflow-hidden border border-gray-300 rounded w-full shadow">
                    <Tabel>
                        <TabelBody>
                            <TabelHeadItem>Wali Masih Hidup</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-row gap-5">
                                    <Radio name="wali-live" label="Masih Hidup" value="Masih Hidup" ref={register}></Radio>
                                    <Radio name="wali-live" label="Sudah Meninggal Dunia" value="Sudah Meninggal Dunia" ref={register}></Radio>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Nama Wali</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-nama" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tempat Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-tempat-lahir" width="60" ref={register}></Text>
                                <span className="text-red-600 text-sm">*(wajib diisi)</span>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Tanggal Lahir</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col">
                                    <input ref={register} className="w-40 px-2 py-1 focus:ring-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-300 rounded-md" type="date" name="wali-tanggal-lahir"></input>
                                    <span className="text-red-600 text-sm">*wajib diisi gunakan format dd-mm-yyyy (01-01-1985)</span>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Agama</TabelHeadItem>
                            <TabelBodyItem>
                                <Select ref={register} name="wali-agama" width="60">
                                    <option value="Islam">Islam</option>
                                    <option value="Kristen">Kristen</option>
                                    <option value="Hindu">Hindu</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-alamat-rumah" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Provinsi</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="wali-provinsi" width="60" ref={register}>
                                    <option value="Jakarta">Jakarta</option>
                                    <option value="Jawa Tengah">Jawa Tengah</option>
                                    <option value="Aceh">Aceh</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Kota</TabelHeadItem>
                            <TabelBodyItem>
                                <Select name="wali-kota" width="60" ref={register}>
                                    <option value="kota a">kota a</option>
                                    <option value="kota b">kota b</option>
                                    <option value="kota c">kota c</option>
                                </Select>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Telp Rumah</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="wali-notelp-rumah" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>No. Hp</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="wali-no-hp" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pendidikan Terakhir</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-pendidikan-terakhir" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-pekerjaan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Jabatan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-jabatan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Penghasilan Tiap Bulan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-penghasilan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Alamat Pekerjaan</TabelHeadItem>
                            <TabelBodyItem>
                                <Text name="wali-alamat-pekerjaan" width="60" ref={register}></Text>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Telp Kantor</TabelHeadItem>
                            <TabelBodyItem>
                                <Phone name="wali-telp-kantor" width="60" ref={register}></Phone>
                            </TabelBodyItem>
                        </TabelBody>
                        <TabelBody>
                            <TabelHeadItem>Bahasa Sehari-hari</TabelHeadItem>
                            <TabelBodyItem>
                                <div className="flex flex-col gap-3">
                                    <Radio name="wali-bahasa" label="Indonesia" value="Indonesia" ref={register}></Radio>
                                    <Radio name="wali-bahasa" label="Inggris" value="Inggris" ref={register}></Radio>
                                    <Radio name="wali-bahasa" label="Daerah" value="Daerah" ref={register}></Radio>
                                    <Radio name="wali-bahasa" label="Lainnya" ref={register}></Radio>
                                    <Text name="wali-bahasa-lainnya" width="60" ref={register}/>
                                </div>
                            </TabelBodyItem>
                        </TabelBody>
                    </Tabel>
                    <div className="flex justify-center p-1">
                        <Btn type="submit">Submit</Btn>
                    </div>
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
            <div className="flex flex-row">
                <div className="flex flex-col w-1/5 h-screen border-r-2 shadow-2xl">
                    <Leftbar/>
                </div>
                <div className="w-full h-screen">
                    <HeaderDashboard>
                    </HeaderDashboard>
                    <TabNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
                    {content}
                </div>
                
            </div>
            
        </>
    )
}

export default Tab;