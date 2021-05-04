import { forwardRef } from "react";

const colorSchemes = {
  primary: "indigo",
  secondary: "gray",
  success: "green",
  danger: "red",
  warning: "yellow",
  info: "blue",
  light: "white",
  dark: "black",
};

export class ButtonOptions {
  theme=
      "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  full= boolean;
  type= "submit" | "button" | "reset";
  onClick= () => void{};
  children;
}

const Button = forwardRef(
  ({ theme, type, full, onClick, children ,py=2,px=4}, ButtonOptions, ref) => {
    const colorScheme = colorSchemes[theme || "primary"];
    let className = `group relative flex justify-center py-${py} px-${px} border border-transparent text-sm font-medium rounded-md text-white bg-${colorScheme}-600 hover:bg-${colorScheme}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${colorScheme}-500`;

    if (full) className = `${className} w-full`;

    return (
      <button type={type || "button"} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
);

export default Button;
