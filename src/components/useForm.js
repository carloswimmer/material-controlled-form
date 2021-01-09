import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root, & .MuiButton-root": {
      margin: theme.spacing(1),
    },
  },
}));

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

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

  const handleError = useCallback(async (e, constraint) => {
    const { name, value } = e.target;

    try {
      const schema = Yup.object().shape(constraint);

      await schema.validate(
        { [name]: value },
        {
          abortEarly: false,
        }
      );

      setError("");
    } catch (err) {
      setError(err.errors[0]);
    }
  }, []);

  return {
    values,
    setValues,
    handleInputChange,
    handleError,
    error,
  };
};

export const Form = ({ children }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      {children}
    </form>
  );
};
