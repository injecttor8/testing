import { forwardRef } from "react";
import Input, { InputArgs } from "./input";

export class EmailOptions extends InputArgs {
  name= string;
  defaultValue= string;
}

const Email = forwardRef(
  ({ label, info, error, name, defaultValue ,width="full"}, ref) => {
    return (
      <Input label={label} info={info} error={error}>
        <input
          type="email"
          name={name}
          defaultValue={defaultValue}
          className={`mt-1 px-2 py-1 focus:ring-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-${width} shadow-sm sm:text-sm border border-gray-300 rounded-md`}
          ref={ref}
        />
      </Input>
    );
  }
);

export default Email;
