// import Head from "next/head";
// import Link from "next/link";
// import faker from "faker";
// import { useEffect, useState } from "react";

// const TableBodyItem = ({ children, className }) => {
//   return <td className={`border border-gray-500 ${className}`}>{children}</td>;
// };

// const TableBodyRow = ({ children }) => {
//   return <tr>{children}</tr>;
// };

// const TableBody = ({ children }) => {
//   return <tbody>{children}</tbody>;
// };

// const TableHeadItem = ({ children }) => {
//   return (
//     <th className="border border-gray-500 text-left bg-gray-200">{children}</th>
//   );
// };

// const TableHead = ({ children }) => {
//   return (
//     <thead>
//       <tr>{children}</tr>
//     </thead>
//   );
// };

// const Table = ({ children }) => {
//   return (
//     <table className="w-1/2 border border-gray-200 mt-20 mx-auto">
//       {children}
//     </table>
//   );
// };

// const TableSiswaItem = ({ nama, umur, kelas, className }) => {
//   return (
//     <TableBodyRow>
//       <TableBodyItem className={className}>{nama}</TableBodyItem>
//       <TableBodyItem className={className}>{umur}</TableBodyItem>
//       <TableBodyItem className={className}>{kelas}</TableBodyItem>
//     </TableBodyRow>
//   );
// };

// const TableSiswa = ({ children }) => {
//   return (
//     <Table>
//       <TableHead>
//         <TableHeadItem>Nama</TableHeadItem>
//         <TableHeadItem>Umur</TableHeadItem>
//         <TableHeadItem>Kelas</TableHeadItem>
//       </TableHead>
//       <TableBody>{children}</TableBody>
//     </Table>
//   );
// };

// const Home = () => {
//   const [dataTable1, setDataTable1] = useState([]);

//   useEffect(() => {
//     console.log("hello");
//     const tmp = [];
//     for (let i = 0; i < 100; i++) {
//       tmp.push({
//         nama: faker.name.findName(),
//         umur: faker.datatype.number({ min: 10, max: 20 }),
//         kelas:
//           faker.datatype.number({ min: 1, max: 3 }) +
//           faker.helpers.randomize([" SMP", " SMA"]),
//       });
//     }

//     setDataTable1(tmp);
//   }, []);

//   return (
//     <>
//       <TableSiswa>
//         {dataTable1.map((entry, rowIndex) => (
//           <TableSiswaItem
//             nama={entry.nama}
//             umur={entry.umur}
//             kelas={entry.kelas}
//             className={entry.kelas === "1 SMP" ? "bg-red-100" : null}
//             key={rowIndex}
//           />
//         ))}
//       </TableSiswa>

//       {/* <TableSiswa>
//         <TableSiswaItem nama="Anto" umur="12" kelas="1 SMP" />
//         <TableSiswaItem nama="Anto 2" umur="12" kelas="1 SMP" />
//         <TableSiswaItem nama="Anto 3" umur="12" kelas="1 SMP" />
//       </TableSiswa> */}
//     </>
//   );
// };

// export default Home;