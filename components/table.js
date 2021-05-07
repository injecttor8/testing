const Tabel = ({ children }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">{children}</table>
  );
};

const TabelHead = ({tambahanclassName, children }) => {
  return (
    <thead>
      <tr className={`bg-gray-100 ${tambahanclassName}`}>{children}</tr>
    </thead>
  );
};
const TabelHeadItems = ({px,py, background, textAlign="left" ,children }) => {
  return (
    <th className={`px-${px} py-${py} bg-${background}-200 text-${textAlign} text-xs font-medium text-gray-500 uppercase tracking-wider`}>
      {children}
    </th>
  );
};

const TabelBody = ({devideyx="y", children }) => {
  return <tbody className={`divide-${devideyx} divide-gray-200`}>{children}</tbody>;
};
const TabelBodyRow = ({tambahanclassName,  children }) => {
  return <tr className={`bg-white hover:bg-yellow-100 ${tambahanclassName}`}>{children}</tr>;
};
const TabelBodyRowItems = ({px,py, tambahanclassName, background,children }) => {
  return (
    <td className={`px-${px} py-${py} text-left font-normal text-sm text-gray-900 ${tambahanclassName} bg-${background}-200`}>
      {children}
    </td>
  );
};

export {
  Tabel,
  TabelHead,
  TabelHeadItems,
  TabelBody,
  TabelBodyRow,
  TabelBodyRowItems 
};
