import React from "react";
import { TextField } from "@material-ui/core";

const Input = (props) => {
  const { name, label, value, onChange, onBlur, error, ...others } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={!!error}
      helperText={error}
      {...others}
    />
  );
};

export default Input;
