import React from "react";
import { TextField } from "@material-ui/core";

const Input = (props) => {
  const { name, label, value, onChange, ...others } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...others}
    />
  );
};

export default Input;
