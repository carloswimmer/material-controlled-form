import React, { useCallback } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  const convertValueToChecked = useCallback((name, value) => {
    const convertedEvent = {
      target: { name, value },
    };

    return convertedEvent;
  }, []);

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            label={label}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertValueToChecked(name, e.target.checked))
            }
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
