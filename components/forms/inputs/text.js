import { forwardRef } from "react";
import Input, { InputArgs } from "./input";

class TextOptions extends InputArgs {
  name= string;
  defaultValue= string;
}

const Text = forwardRef(
  ({ label, info, error, name, defaultValue }, TextOptions, ref) => {
    return (
      <Input label={label} info={info} error={error}>
        <input
          type="text"
          name={name}
          defaultValue={defaultValue}
          className="mt-1 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ref={ref}
        />
      </Input>
    );
  }
);

export default Text;
