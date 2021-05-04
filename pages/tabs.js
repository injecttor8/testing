import Btn from "../components/buttons/button"
import BtnIcon from "../components/buttons/buttonIcon"
import Form from "../components/forms/form"
import Inpt from "../components/forms/inputs/input"
import Text from "../components/forms/inputs/text"
import Select from "../components/forms/inputs/select"
import { useEffect, useState } from "react";
import { HomeIcon , LightBulbIcon, UserIcon, PrinterIcon,DocumentTextIcon, PlusCircleIcon} from '@heroicons/react/solid'


const Tabs = () =>{
    return(
        <>
            {/* tabs */}
            <ul id="tabs" class="inline-flex w-full px-1 pt-2 ">
                <li class="px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50"><a id="default-tab" href="#first">All</a></li>
                <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#second">Clothes</a></li>
                <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#third">Electronics</a></li>
                <li class="px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50"><a href="#fourth">Others</a></li>
            </ul>   

                <div id="tab-contents">
                    <div id="first" class="p-4">
                        First tab
                    </div>
                    <div id="second" class="hidden p-4">
                        Second tab
                    </div>
                    <div id="third" class="hidden p-4">
                        Third tab
                    </div>
                    <div id="fourth" class="hidden p-4">
                        Fourth tab
                    </div>
                </div>

            {/* <div id="tab-contents">
                <ul id="tabs" class="flex flex-col w-full px-1 pt-2 ">
                    <li class="px-4 py-1 font-semibold text-gray-800 bg-blue-400 rounded-t opacity-50">
                        <a id="default-tab" href="#first">All</a>
                        <div id="first" class="p-4">
                            First tab
                        </div>
                    </li>
                    
                    <li class="px-4 py-1 font-semibold text-gray-800 rounded-t opacity-50">
                        <a href="#second">Clothes</a>
                        <div id="second" class="hidden p-4">
                            Second tab
                        </div>
                    </li>
                    <li class="px-4 py-1 font-semibold text-gray-800 rounded-t opacity-50">
                        <a href="#third">Electronics</a>
                        <div id="third" class="hidden p-4">
                            Third tab
                        </div>
                    </li>
                    <li class="px-4 py-1 font-semibold text-gray-800 rounded-t opacity-50">
                        <a href="#fourth">Others</a>
                        <div id="fourth" class="hidden p-4">
                            Fourth tab
                        </div>
                    </li>
                </ul>
            </div> */}
        </>
        
    )
}

export default Tabs;