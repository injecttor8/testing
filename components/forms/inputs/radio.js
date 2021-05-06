import { forwardRef } from "react";
import { InputArgs } from "./input";

export class RadioOptions extends InputArgs {
  name= string;
  defaultChecked= boolean;
}

const Radio = forwardRef(
  ({ name, label, defaultChecked, value },ref) => {
    return (
      <div className="flex justify-start mt-1">
        <input
          name={name}
          type="radio"
          value={value}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          defaultChecked={defaultChecked}
          ref={ref}
        />
        <label className="ml-3 block text-sm font-medium text-gray-700">
          {label}
        </label>
      </div>
    );
  }
);

export default Radio;
