export class InputArgs {
  label= String;
  info;
  error= string;
  children;
}

const Input = ({ label, info, error, children }, InputArgs) => {
  let labelEl = <span>{label}</span>;
  if (label?.endsWith("*")) {
    labelEl = (
      <>
        {" "}
        <span>{label.substr(0, label.length - 1)}</span>
        <span className="text-red-500">*</span>{" "}
      </>
    );
  }

  return (
    <div>
      {label ? (
        <label className="block text-sm font-medium text-gray-700">
          {labelEl}
        </label>
      ) : null}
      {children}
      {info ? (
        typeof info === "string" ? (
          <p className="text-sm text-gray-500">{info}</p>
        ) : (
          info
        )
      ) : null}
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  );
};

export default Input;
