import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio as MuiRadio,
} from "@material-ui/core";

const Radio = (props) => {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<MuiRadio color="primary" />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Radio;
