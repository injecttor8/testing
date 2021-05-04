import { forwardRef } from "react";
import Input, { InputArgs } from "./input";

export class AreaOptions extends InputArgs {
  name= string;
  cols= number;
  rows= number;
  defaultValue= string;
}

const Area = forwardRef(
  (
    { label, info, error, name, cols, rows, defaultValue }, AreaOptions,
    ref
  ) => {
    return (
      <Input label={label} info={info} error={error}>
        <textarea
          name={name}
          defaultValue={defaultValue}
          cols={cols}
          rows={rows}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          ref={ref}
        ></textarea>
      </Input>
    );
  }
);

export default Area;
