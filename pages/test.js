import Btn from "../components/buttons/button"
import BtnIcon from "../components/buttons/buttonIcon"
import Form from "../components/forms/form"
import Inpt from "../components/forms/inputs/input"
import Text from "../components/forms/inputs/text"
import Select from "../components/forms/inputs/select"
import { useEffect, useState } from "react";
import { HomeIcon , LightBulbIcon, UserIcon, PrinterIcon,DocumentTextIcon, PlusCircleIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useForm } from "react-hook-form";

const Test = () => {
  const {register, handleSubmit } = useForm();
  const Submit = (data) =>{
    console.log(data)
  }
  return(
    <Form onSubmit={handleSubmit(Submit)}>
      <Text name="username" ref={register}></Text>
      <Btn type="submit">Submitt</Btn>
    </Form>
  )
}

export default Test;
// const Tabs = () =>{
//     const [data, setData] = useState(["hello", "hi there", "holla"]);

//     const [currentIdx, setCurrentIdx] = useState(0);
//     const [showCurrent, setShowCurrent] = useState(false);
  
  
//     const toggleCurrent = () => {
//       if (!showCurrent) {
//         setShowCurrent(true);
//         return;
//       }
//       else{
//         setShowCurrent(false);
//         return;
//       }
//     };
  
//     const setCurrent = index => {
//       setCurrentIdx(index);
//       toggleCurrent();
//     };
    
//     return (
//       <div>
//         <div className="flex flex-row gap-2">
          
//           <Btn onClick={() => setCurrent(0)}>First</Btn>
//           <Btn onClick={() => setCurrent(1)}>Second</Btn>
//           <Btn onClick={() => setCurrent(2)}>Third</Btn>
//         </div>
//         {showCurrent ? <div>{data[currentIdx]}</div> : null}
//       </div>
//     );
//     // const [data, setData] = useState(["hello", "hi there", "holla"]);

//     // const [currentIdx, setCurrentIdx] = useState(0);
//     // const [showCurrent, setShowCurrent] = useState(false);

 

//     // const toggleCurrent = () => {
//     //     if (!showCurrent) {
//     //     setShowCurrent(true);
//     //     return;
//     //     }
//     // };

//     // const setCurrent = index => {
//     //     setCurrentIdx(index);
//     //     toggleCurrent();
//     // };
//     // return (
//     //     <div>
//     //         <div>
//     //         <button onClick={() => setCurrent(0)}>First</button>
//     //         <button onClick={() => setCurrent(1)}>Second</button>
//     //         <button onClick={() => setCurrent(2)}>Third</button>
//     //         </div>
            

//     //         {showCurrent ? <div>{data[currentIdx]}</div> : null}
//     //     </div>
//     // );
// }

// export default Tabs;