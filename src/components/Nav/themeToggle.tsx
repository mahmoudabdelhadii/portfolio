import * as React from "react";
import DayNightToggle from "./DayTimeToggle";
type ToggleProps = {
  checked: boolean;
  onChange: any;
  size?: number;
};
export const Toggle: React.FunctionComponent<ToggleProps> = ({
  onChange,
  checked,
  size,
}) => {
  return (
    <DayNightToggle
      onChange={onChange}
      checked={checked}
      size={size ? size : 25}
      animationInactive={false}
    />
  );
};
