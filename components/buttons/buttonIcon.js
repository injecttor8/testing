import { forwardRef } from "react";
import Button, { ButtonOptions } from "./button";

export class ButtonIconOptions extends ButtonOptions {
  icon;
}

const ButtonIcon = forwardRef(
  (
    { theme, type, full, icon, onClick, children }, ButtonIconOptions,
    ref
  ) => {
    return (
      <Button theme={theme} type={type} full={full} onClick={onClick}>
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {icon}
        </span>
        <span className={!full ? "pl-5" : ""}>{children}</span>
      </Button>
    );
  }
);

export default ButtonIcon;
