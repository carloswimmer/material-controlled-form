import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  return {
    values,
    setValues,
    handleInputChange,
  };
};

export const Form = ({ children }) => {
  const classes = useStyles();

  return <form className={classes.root}>{children}</form>;
};
