import { forwardRef } from "react";
import Input, { InputArgs } from "./input";

class SelectOptions extends InputArgs {
  name= string;
  children;
  defaultValue= string;
}

const Select = forwardRef(
  (
    { label, info, error, name, children, defaultValue, width="full"}, 
    ref
  ) => {
    return (
      <Input label={label} info={info} error={error}>
        <select
          name={name}
          className={`mt-1 block w-${width} py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          defaultValue={defaultValue}
          ref={ref}
        >
          {children}
        </select>
      </Input>
    );
  }
);

export default Select;
