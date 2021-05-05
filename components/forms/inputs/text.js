import { forwardRef } from "react";
import Input, { InputArgs } from "./input";

class TextOptions extends InputArgs {
  name= string;
  defaultValue= string;
}

const Text = forwardRef(
  ({ label, info, error, name, defaultValue ,widht="full"}, TextOptions, ref) => {
    return (
      <Input label={label} info={info} error={error}>
        <input
          type="text"
          name={name}
          defaultValue={defaultValue}
          className={`mt-1 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-${widht} shadow-sm sm:text-sm border border-gray-300 rounded-md`}
          ref={ref}
        />
      </Input>
    );
  }
);

export default Text;
