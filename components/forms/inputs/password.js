import { forwardRef } from "react";
import Input, { InputArgs } from "./input";

export class PasswordOptions extends InputArgs {
  name= string;
  defaultValue= string;
}

const Password = forwardRef(
  ({ label, info, error, name, defaultValue ,width="full"}, ref) => {
    return (
      <Input label={label} info={info} error={error}>
        <input
          type="password"
          name={name}
          defaultValue={defaultValue}
          className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-${width} shadow-sm sm:text-sm border-gray-300 rounded-md`}
          ref={ref}
        />
      </Input>
    );
  }
);

export default Password;
