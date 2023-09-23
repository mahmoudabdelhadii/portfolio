import * as React from 'react'
import DayNightToggle from 'react-day-and-night-toggle'
type ToggleProps = {
  checked: boolean;
  onChange: any;
  
};
export const Toggle:React.FunctionComponent<ToggleProps> = ({ onChange, checked }) => {

  return (
    <DayNightToggle
      onChange={onChange}
      checked={checked}
      size={25}
      shadows={false}
    />
  )
}